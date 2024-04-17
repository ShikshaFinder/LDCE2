"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion"; // Import Variants type from framer-motion
import { opacity, slideUp } from "./anim";
import React from "react";

const words: string[] = [
  "LDCE",
  "Lalbhai",
  "Dalpatbhai",
  "College",
  "of Engineering",
  "LD college of Engineering",
];

interface Dimension {
  width: number;
  height: number;
}

export default function Index(): JSX.Element {
  // Specify return type as JSX.Element
  const [index, setIndex] = useState<number>(0); // Specify number type for index
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  }); // Specify Dimension type for dimension

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return; // Use strict equality operator
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    ); // Use strict equality operator
    return () => clearTimeout(timeout); // Cleanup function
  }, [index]);

  const initialPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath: string = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={styles.introduction}
    >
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            <span></span>
            {words[index]}
          </motion.p>
          <svg>
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
