import React from 'react';

export function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.528 8.004H12.528V16.004H16.528V12.004C16.528 9.794 14.738 8.004 12.528 8.004Z" />
      <path d="M8.528 16.004V4.004C8.528 4.004 12.528 4.004 12.528 8.004" />
    </svg>
  );
}
