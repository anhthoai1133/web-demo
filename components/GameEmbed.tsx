"use client";

import React, { useState } from "react";
import { Maximize2, Minimize2 } from 'lucide-react';

interface HTMLIFrameElement extends HTMLElement {
  requestFullscreen(): Promise<void>;
}

const GameEmbed: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    const iframe = document.querySelector("iframe") as HTMLIFrameElement | null;
    if (!iframe) return;

    if (!isFullscreen) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="space-y-4">
      <div className="relative aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
        <iframe
          src="https://retrobowl25.info/game/"
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
      </div>
      <button
        onClick={toggleFullscreen}
        className="btn btn-primary"
      >
        {isFullscreen ? (
          <>
            <Minimize2 className="w-4 h-4 mr-2" />
            Exit Fullscreen
          </>
        ) : (
          <>
            <Maximize2 className="w-4 h-4 mr-2" />
            Fullscreen Mode
          </>
        )}
      </button>
    </div>
  );
}

export default GameEmbed; 