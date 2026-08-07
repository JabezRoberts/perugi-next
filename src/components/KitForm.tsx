"use client";

import { useEffect, useRef } from "react";

interface KitFormProps {
  uid: string;
  src: string;
}

export default function KitForm({ uid, src }: KitFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Prevent duplicate forms during React development re-renders
    container.innerHTML = "";

    const script = document.createElement("script");

    script.async = true;
    script.setAttribute("data-uid", uid);
    script.src = src;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [uid, src]);

  return <div ref={containerRef} />;
}