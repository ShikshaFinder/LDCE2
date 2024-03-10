import styles from "./style.module.scss";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp, opacity } from "./animation";
import Rounded from "../../common/RoundedButton";
export default function Index() {
  const phrase =
    "L.D. College of Engineering is a premier engineering college located in Ahmedabad, Gujarat, India. It is affiliated with Gujarat Technological University and offers undergraduate and postgraduate programs in various engineering disciplines. LDCE has a long and illustrious history, dating back to its establishment in 1948.)";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          LDCE is a premier engineering college located in Ahmedabad, Gujarat,
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Rounded className={styles.button}>
            <p>
              <a
                href="https://ldce.ac.in/about/institute"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                about LD{" "}
              </a>
            </p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
