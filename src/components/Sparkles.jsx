"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles"
import { motion } from "framer-motion";
import { Countdown } from './Countdown';
import StarshipAnimation from "./ui/StarshipAnimation";

export function SparklesPreview() {
    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                HackOwasp 7.0
            </h1>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}

export function SparklesPreviewDark() {
    return (
        <>
            <div className="h-screen relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
                <motion.div
                    style={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        backgroundColor: "transparent",
                        zIndex: 10
                    }}
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={{
                        grow: {
                            scale: 1.1
                        },
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                                // delay,
                                duration: 10
                                // repeat: Infinity,
                                // repeatDelay: 0.2,
                                // repeatType: "reverse"
                            }
                        },
                        initial: {
                            x: [-30, 30],
                            y: [-30, 30],
                            rotate: 10,
                            transition: {
                                delay: 0.3,
                                duration: 8,
                                repeat: Infinity,
                                // repeatDelay: 0.2,
                                repeatType: "reverse"
                            }
                        }
                    }}
                >
                    <img src="/spaceship.png" alt="" className="h-56 w-64" />
                    {/* <StarshipAnimation /> */}
                </motion.div>
                <motion.div
                    style={{
                        position: "absolute",
                        bottom: 50,
                        right: 70,
                        backgroundColor: "transparent",
                        rotateY: 180,
                        rotateZ: 12,
                        zIndex: 10
                    }}
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={{
                        grow: {
                            scale: 1.1
                        },
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                                // delay,
                                duration: 10
                                // repeat: Infinity,
                                // repeatDelay: 0.2,
                                // repeatType: "reverse"
                            }
                        },
                        initial: {
                            x: [-20, 30, 15, 20, 35, 26, 45, 58, 54, 51, 54, 35, 15, 40, 25, 15, 52],
                            y: [-40, 20, 25, 31, 52, 45, 45, 22, 16, 51, 41, 21, 51, 20, 45, 16, 51],
                            // rotate: 180,
                            transition: {
                                delay: 0.3,
                                duration: 20,
                                repeat: Infinity,
                                // repeatDelay: 0.2,
                                repeatType: "reverse"
                            }
                        }
                    }}
                >
                    <img src="/legoMan.png" alt="" className="h-56 w-44" />
                </motion.div>
                {/* <motion.div
                    style={{
                        position: "absolute",
                        bottom: 30,
                        left: 30,
                        backgroundColor: "transparent",
                        rotateZ: 12,
                        zIndex: 10
                    }}
                    animate={["initial"]}
                    whileHover={["grow"]}
                    variants={{
                        grow: {
                            scale: 1.1
                        },
                        rotate: {
                            rotate: [null, -5, 5, 0],
                            transition: {
                                // delay,
                                duration: 10
                                // repeat: Infinity,
                                // repeatDelay: 0.2,
                                // repeatType: "reverse"
                            }
                        },
                        initial: {
                            x: [-20, 30, 15, 20, 35, 26, 45, 58, 54, 51, 54, 35, 15, 40, 25, 15, 52],
                            y: [-40, 20, 25, 31, 52, 45, 45, 22, 16, 51, 41, 21, 51, 20, 45, 16, 51],
                            rotate: 15,
                            transition: {
                                delay: 0.3,
                                duration: 15,
                                repeat: Infinity,
                                // repeatDelay: 0.2,
                                repeatType: "reverse"
                            }
                        }
                    }}
                >
                    <img src="/legoMan.png" alt="" className="h-72 w-64" />
                </motion.div> */}
                <div className="w-full absolute inset-0 h-screen">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.2}
                        maxSize={1}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                        speed={1}
                    />
                </div>
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                    <span>H</span>
                    <span>A</span>
                    <span>C</span>
                    <span>K</span>
                    <span>O</span>
                    <span>W</span>
                    <span>A</span>
                    <span>S</span>
                    <span>P{" "}</span>
                    <span>7</span>
                    <span>.</span>
                    <span>0</span>
                </h1>
                <div className="w-[50rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
                </div>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    Join us for 24 hours of innovation, coding, and breakthrough solutions
                </p>
                <Countdown />
            </div>
        </>
    );
}

export function SparklesPreviewColorful() {
    return (
        <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlescolorful"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#00ff00"
                    speed={0.5}
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-4 relative z-20">
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    HackOwasp 7.0
                </h1>
                <p className="text-neutral-300 cursor-default text-center">
                    counter
                </p>
            </div>
        </div>
    );
}
