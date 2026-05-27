import React from "react";

export function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradReact" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00CEFF" />
          <stop offset="35%" stopColor="#2E4AEC" />
          <stop offset="75%" stopColor="#9C20FE" />
          <stop offset="100%" stopColor="#E23EFF" />
        </linearGradient>
        <pattern id="logoGridReact" width="4.1667" height="4.1667" patternUnits="userSpaceOnUse">
          <rect width="4.1667" height="4.1667" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.5" />
        </pattern>
        <clipPath id="logoClipReact">
          <circle cx="50" cy="50" r="46" />
        </clipPath>
      </defs>
      <g clipPath="url(#logoClipReact)">
        <circle cx="50" cy="50" r="46" fill="url(#logoGradReact)" />
        <rect x="0" y="0" width="100" height="100" fill="url(#logoGridReact)" />
      </g>
      <rect x="50.3500" y="25.3500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="29.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="29.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="33.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="33.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="33.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="37.8500" y="37.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="37.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="37.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="37.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="33.6833" y="42.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="37.8500" y="42.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="42.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="42.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="42.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="29.5167" y="46.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="33.6833" y="46.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="37.8500" y="46.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="46.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="62.8500" y="46.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="29.5167" y="50.3500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="33.6833" y="50.3500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="58.6833" y="50.3500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="62.8500" y="50.3500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="29.5167" y="54.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="54.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="54.5167" y="54.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="58.6833" y="54.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="62.8500" y="54.5167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="58.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="58.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="58.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="54.5167" y="58.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="58.6833" y="58.6833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="62.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="62.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="62.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="54.5167" y="62.8500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="67.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="67.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="50.3500" y="67.0167" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="71.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="46.1833" y="71.1833" width="3.4667" height="3.4667" rx="0.5" fill="white" />
      <rect x="42.0167" y="75.3500" width="3.4667" height="3.4667" rx="0.5" fill="white" />
    </svg>
  );
}
