// app/loading.jsx
"use client";

import { BlinkBlur } from "react-loading-indicators";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full  flex-col gap-4">
      <BlinkBlur color={["#32cd32", "#327fcd", "#cd32cd", "#cd8032"]} text="اغتنم وقتك بالاستغفار وذكر الله 🌿"/>
    </div>
  );
}
