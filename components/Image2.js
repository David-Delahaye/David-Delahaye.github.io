import React from "react";
import Image from "next/image";

export default function Image2(props) {
  console.log(props);
  if (process.env.NETLIFY) {
    return <img className="netTest" src={props.src} />;
  }

  return (
    <Image
      className="netTest"
      src={props.src}
      width="100"
      height="100"
      alt="test"
    />
  );
}
