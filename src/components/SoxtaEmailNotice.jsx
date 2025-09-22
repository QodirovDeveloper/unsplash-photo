import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";

export default function SoxtaEmailNotice() {
  const ref = useRef(null);
  const [isCoarse, setIsCoarse] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  // Detect pointer type
  useEffect(() => {
    if (typeof window === "undefined") return; // server-side safety
    const mq = window.matchMedia("(pointer: coarse)");
    setIsCoarse(mq.matches);
    const handler = (e) => setIsCoarse(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Desktop follow
  useEffect(() => {
    if (isCoarse) return;
    const handleMove = (e) => {
      const target = ref.current;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      x.set(e.clientX - rect.width / 5);
      y.set(e.clientY - rect.height - 100);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isCoarse, x, y]);

  // Mobile/Tablet float
  const float = useRef({ t: 0 });
  useAnimationFrame((t) => {
    if (!isCoarse) return;
    float.current.t = t / 1000;
    const amplitude = 30;
    const offsetX = Math.sin(float.current.t) * amplitude;
    const offsetY = Math.cos(float.current.t * 0.7) * amplitude * 1;
    x.set(window.innerWidth / 2 + offsetX - 150);
    y.set(window.innerHeight - 120 + offsetY);
  });

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, position: "fixed", zIndex: 50 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-xl px-2 py-1 flex items-center gap-3">
        <div className="flex-none w-7 h-7 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-violet-500 text-white font-semibold text-sm">
          @
        </div>

        <div className="flex-1 text-sm leading-tight">
          <div className="font-medium text-gray-800">
            Soxta Gmail/Email bilan ham kirsangiz bo‘ladi
          </div>
          <div className="text-gray-600 text-xs">
            Можно войти и с fake Gmail/Email
          </div>
        </div>
      </div>
    </motion.div>
  );
}
