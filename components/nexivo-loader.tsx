"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NexivoLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500); // Show loader for 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm">
      {/* Elegant centered loader container */}
      <div className="relative">
        {/* Subtle background circle */}
        <motion.div
          className="absolute inset-0 w-32 h-32 rounded-full bg-primary/5 blur-xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">
            <motion.span
              className="inline-block"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              n
            </motion.span>
            <motion.span
              className="inline-block ml-1"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.1,
              }}
            >
              e
            </motion.span>
            <motion.span
              className="inline-block ml-1"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.2,
              }}
            >
              x
            </motion.span>
            <motion.span
              className="inline-block ml-1"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.3,
              }}
            >
              i
            </motion.span>
            <motion.span
              className="inline-block ml-1"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.4,
              }}
            >
              v
            </motion.span>
            <motion.span
              className="inline-block ml-1"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 0.5,
              }}
            >
              o
            </motion.span>
          </h1>

          {/* Elegant loading dots */}
          <motion.div
            className="flex justify-center space-x-2 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>

          {/* Minimal progress bar */}
          <motion.div
            className="w-24 h-0.5 bg-muted rounded-full mt-3 mx-auto overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              className="h-full bg-primary rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
