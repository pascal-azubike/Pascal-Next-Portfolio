import React from "react";

const PascalSpinner = () => {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
      <div className="relative">
        {/* Main spinner circles */}
        <div className="w-16 h-16 rounded-full border-4 border-blue-400/20 border-t-blue-400 animate-spin" />

        {/* Inner pulsing circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-400/20 rounded-full animate-pulse" />
        </div>

        {/* Loading text below */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-gray-400 text-sm animate-pulse">
            Loading article...
          </p>
        </div>

        {/* Decorative gradient background */}
        <div className="absolute -inset-20 bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-50 blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default PascalSpinner;
