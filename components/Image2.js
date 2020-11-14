import React from "react";
import Image from "next/image";

export default function Image2(props) {
  console.log(props);
  if (process.env.NETLIFY) {
    return <h1 className="netTest">NETLIFY</h1>;
  }

  return <h1 className="netTest">NOT NETLIFY</h1>;
}
