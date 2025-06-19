"use client"
import { useState } from "react";

export default function ProjectsAndMissions() {
  const [videoSrc] = useState(
    "https://drive.google.com/file/d/1e0KDQc66kzRNeSSFFOSr_Ju9qacgkLoE/preview"
  );

  return (
    <div className="min-h-screen py-12 flex items-center justify-center bg-gray-950" style={{ paddingTop: '4rem' }}>
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Projects & Missions
        </h1>
        <div className="mb-8 flex justify-center">
          <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 flex justify-center">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                src={videoSrc}
                allow="autoplay"
                allowFullScreen
                title="Project Video"
                className="absolute top-0 left-0 w-full h-full border-none"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 text-gray-200">
          <h2 className="text-2xl font-semibold mb-2">DecNet & PeerMotion</h2>
          <p className="text-lg mb-2">
            {"With the DecNet(The Decentralized Network) and PeerMotion (Decentralized Video Sharing Social Media Platform, I want to make communication more accessible to people who can't afford internet."}
          </p>
          <div className="text-sm text-gray-400">
            <span>The core motive of DecNet is to provide free communication to people without any charges, but within may establish platforms within the network where there may exist in app purchases. Its like a new internet but decentralized both free and paid platforms are allowed within</span>
            <ul className="list-disc list-inside my-2 pl-4 space-y-1 marker:text-blue-400">
              <li>
                <span className="font-medium text-white">Education:</span> People don't need to afford internet to learn to read
              </li>
              <li>
                <span className="font-medium text-white">Disaster:</span> When the mainstream internet collapses, DecNet can help people communicate decentralized, even for personal safety the DecNet platform provides free accessibility to people in danger through P2P protocol
              </li>
            </ul>
            <span>I do have other big future plans for DecNet but this is it for the prototype</span>
          </div>
        </div>
      </div>
    </div>
  );
}
