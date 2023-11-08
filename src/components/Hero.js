"use client";

import { CldImage } from "next-cloudinary";
import React from "react";

const Hero = () => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return (
    <div className="hero">
      <CldImage
        width={500}
        height={300}
        sizes="100vw"
        // publicId="EQUINTERIM/kkryefdgohsdcvygvzpb"
        src="images/woman-headphones"
        // src="EQUINTERIM/kkryefdgohsdcvygvzpb"
        alt="cavalière"
      />
    </div>
  );
};
export default Hero;
