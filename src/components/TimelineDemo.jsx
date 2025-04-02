import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "16th April",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Web3 Workshop 🔗
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            Blockchain & Beyond
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-center text-gray-400 text-base md:text-lg">
              ⚡ Blockchain Fundamentals
            </div>
            <div className="flex gap-3 items-center text-gray-400 text-base md:text-lg">
              ⚡ Smart Contract Development
            </div>
            <div className="flex gap-3 items-center text-gray-400 text-base md:text-lg">
              ⚡ DApp Architecture
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "17th April",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            AI/ML Workshop 🤖
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            Future of Technology
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex gap-3 items-center text-gray-400 text-base md:text-lg">
              ⚡ Introduction to Machine Learning
            </div>
            <div className="flex gap-3 items-center text-gray-400 text-base md:text-lg">
              ⚡ Deep Learning Fundamentals
            </div>
            <div className="flex gap-3 items-center text-gray-400 text-base md:text-lg">
              ⚡ Hands-on AI Project Development
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "18th April",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Kaggle Hack 📊
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            Data Science Challenge
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            Dive into real-world datasets and showcase your data science expertise in our 
            special Kaggle competition. Analyze, predict, and win amazing prizes!
          </p>
        </div>
      ),
    },
    {
      title: "19th April",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ideathon 💡
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            Unleash Your Creativity
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            Transform your innovative ideas into reality! Join us for an exciting 
            brainstorming session to refine your concepts before the main event.
          </p>
        </div>
      ),
    },
    {
      title: "20th April",
      content: (
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Hackathon Day 🚀
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-semibold mb-4">
            The Ultimate Coding Challenge
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6">
            24 hours of non-stop innovation! Build, collaborate, and transform your 
            ideas into working solutions. May the code be with you!
          </p>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3"
              alt="hackathon"
              className="rounded-xl object-cover aspect-video w-full shadow-xl hover:scale-105 transition-transform"
            />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3"
              alt="coding"
              className="rounded-xl object-cover aspect-video w-full shadow-xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full max-w-5xl mx-auto px-4 bg-black">
      <Timeline data={data} />
    </div>
  );
}