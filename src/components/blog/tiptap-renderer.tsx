'use client';

import React from 'react';

type TiptapNode = {
  type: string;
  content?: TiptapNode[];
  text?: string;
  attrs?: Record<string, unknown>;
  marks?: { type: string; attrs?: Record<string, unknown> }[];
};

function renderMarks(text: string, marks?: { type: string; attrs?: Record<string, unknown> }[]): React.ReactNode {
  if (!marks || marks.length === 0) return text;

  return marks.reduce<React.ReactNode>((acc, mark) => {
    switch (mark.type) {
      case 'bold':
        return <strong className="font-semibold text-foreground">{acc}</strong>;
      case 'italic':
        return <em>{acc}</em>;
      case 'strike':
        return <s className="text-muted-foreground">{acc}</s>;
      case 'code':
        return (
          <code className="bg-primary/[0.06] text-primary px-1.5 py-0.5 rounded-md text-[0.875em] font-mono font-medium">
            {acc}
          </code>
        );
      case 'link':
        return (
          <a
            href={mark.attrs?.href as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/30 underline-offset-[3px] hover:decoration-primary/60 transition-colors"
          >
            {acc}
          </a>
        );
      default:
        return acc;
    }
  }, text);
}

function renderNode(node: TiptapNode, index: number): React.ReactNode {
  const key = `node-${index}`;

  switch (node.type) {
    case 'doc':
      return <>{node.content?.map((child, i) => renderNode(child, i))}</>;

    case 'paragraph': {
      const isEmpty = !node.content || node.content.length === 0;
      if (isEmpty) return <div key={key} className="h-4" />;
      return (
        <p key={key} className="text-foreground/85 leading-[1.8] mb-6 text-[1.0625rem] md:text-lg">
          {node.content?.map((child, i) => renderNode(child, i))}
        </p>
      );
    }

    case 'heading': {
      const level = (node.attrs?.level as number) ?? 2;
      const children = node.content?.map((child, i) => renderNode(child, i));

      if (level === 1) {
        return (
          <h1 key={key} className="text-[1.75rem] md:text-[2rem] font-bold font-headline mt-12 mb-5 text-foreground tracking-tight leading-tight">
            {children}
          </h1>
        );
      }
      if (level === 2) {
        return (
          <h2 key={key} className="text-[1.375rem] md:text-[1.625rem] font-bold font-headline mt-10 mb-4 text-foreground tracking-tight leading-snug">
            {children}
          </h2>
        );
      }
      return (
        <h3 key={key} className="text-lg md:text-xl font-semibold font-headline mt-8 mb-3 text-foreground leading-snug">
          {children}
        </h3>
      );
    }

    case 'bulletList':
      return (
        <ul key={key} className="space-y-2.5 mb-6 pl-1">
          {node.content?.map((child, i) => renderNode(child, i))}
        </ul>
      );

    case 'orderedList':
      return (
        <ol key={key} className="space-y-2.5 mb-6 pl-1 counter-reset-item">
          {node.content?.map((child, i) => renderNode(child, i))}
        </ol>
      );

    case 'listItem':
      return (
        <li key={key} className="flex gap-3 text-foreground/85 leading-[1.7] text-[1.0625rem] md:text-lg">
          <span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
          <div className="flex-1">
            {node.content?.map((child, i) => {
              if (child.type === 'paragraph') {
                // Render paragraph content inline without wrapper <p>
                return (
                  <React.Fragment key={`li-p-${i}`}>
                    {child.content?.map((c, j) => renderNode(c, j))}
                  </React.Fragment>
                );
              }
              return renderNode(child, i);
            })}
          </div>
        </li>
      );

    case 'blockquote':
      return (
        <blockquote
          key={key}
          className="border-l-[3px] border-primary/30 pl-6 md:pl-8 py-1 my-8 text-foreground/70 italic"
        >
          {node.content?.map((child, i) => renderNode(child, i))}
        </blockquote>
      );

    case 'codeBlock':
      return (
        <pre key={key} className="bg-[hsl(220,15%,8%)] text-[hsl(210,20%,90%)] rounded-2xl p-5 md:p-6 my-8 overflow-x-auto shadow-inner">
          <code className="text-[0.875rem] leading-relaxed font-mono block">
            {node.content?.map((child, i) => renderNode(child, i))}
          </code>
        </pre>
      );

    case 'image':
      return (
        <figure key={key} className="my-10">
          <div className="rounded-2xl overflow-hidden shadow-lg shadow-black/5 border border-border/30">
            <img
              src={node.attrs?.src as string}
              alt={(node.attrs?.alt as string) || ''}
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          {node.attrs?.title && (
            <figcaption className="text-center text-sm text-muted-foreground/70 mt-4 italic">
              {node.attrs.title as string}
            </figcaption>
          )}
        </figure>
      );

    case 'horizontalRule':
      return (
        <div key={key} className="my-10 flex items-center justify-center gap-2">
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="w-1 h-1 rounded-full bg-border" />
        </div>
      );

    case 'hardBreak':
      return <br key={key} />;

    case 'text':
      return <React.Fragment key={key}>{renderMarks(node.text || '', node.marks)}</React.Fragment>;

    default:
      return null;
  }
}

export function TiptapRenderer({ content }: { content: Record<string, unknown> | null }) {
  if (!content) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground/60 italic text-lg">Konten belum tersedia.</p>
      </div>
    );
  }

  return (
    <div className="tiptap-content">
      {renderNode(content as unknown as TiptapNode, 0)}
    </div>
  );
}
