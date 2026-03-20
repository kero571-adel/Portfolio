"use client";

import { useState, useEffect } from "react";

export default function WelcomeAnimation({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if welcome animation was already shown
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");

    if (hasSeenWelcome) {
      setIsVisible(false);
      onComplete();
      return;
    }

    // Show welcome animation for 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("hasSeenWelcome", "true");
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8 animate-scaleIn">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 mb-4">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                KA
              </span>
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold animate-slideInUp">
            <span className="block mb-2">Welcome to</span>
            <span className="gradient-text">Keroles Portfolio</span>
          </h1>

          {/* Loading State */}
          {isLoading ? (
            <div className="mt-8 flex justify-center gap-2">
              <div
                className="w-3 h-3 rounded-full bg-blue-500 animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-purple-500 animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 rounded-full bg-pink-500 animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          ) : (
            <p className="text-xl text-slate-300 animate-fadeInUp">
              Let's create something amazing together
            </p>
          )}
        </div>

        {/* Bottom Text */}
        <div
          className="absolute bottom-8 left-0 right-0 animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-slate-400 text-sm">Scroll down to explore</p>
        </div>
      </div>
    </div>
  );
}
