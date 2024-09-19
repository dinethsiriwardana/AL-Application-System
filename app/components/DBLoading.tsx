"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { AnimationConfig } from "lottie-web";
import { LottieFile } from "../interfaces/lotteInterface";

interface Props {
  title: string;
  lotteFile: LottieFile;
}

const DBLoading = ({ title, lotteFile }: Props) => {
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current as Element, // Type assertion
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: lotteFile,
      });
    }

    // Cleanup function to remove the animation when the component unmounts
    return () => {
      if (animationInstance.current) {
        animationInstance.current.destroy();
      }
    };
  }, [lotteFile]);

  return (
    <div className="lotteModel">
      <div ref={animationContainer} className="lotteFile"></div>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default DBLoading;
