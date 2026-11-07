"use client";

import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";

const Confetti = () => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    }}
    height={200}
    width={400}
  />
);

export default Confetti;
