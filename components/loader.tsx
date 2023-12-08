import React, { useState, useEffect } from "react";
import Image from "next/image";

export const Loader = () => {
  const [message, setMessage] = useState("yuv-ai is thinking");

  useEffect(() => {
    const timer = setInterval(() => {
      setMessage((prevMessage) => {
        if (prevMessage.endsWith("...")) {
          return "yuv-ai is thinking";
        } else {
          return prevMessage + ".";
        }
      });
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" src="/loader.png" fill />
      </div>
      <p
        className="text-sm text-muted-foreground"
        style={{ width: "200px", textAlign: "left", marginLeft: "89px" }}
      >
        {message}
      </p>
    </div>
  );
};
