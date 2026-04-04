import React from 'react';

interface YouTubeVideoSectionProps {
  videoId: string;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({ videoId }) => {
  return (
    <section className="relative py-12 bg-cover bg-center" style={{ backgroundImage: 'url("/images/sosnackbg.svg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for transparency */}
      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Highlight
        </h2>
        <div className="relative w-full max-w-3xl mx-auto aspect-video rounded-lg overflow-hidden shadow-xl border-4 border-gray-200 dark:border-gray-700">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};