'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingTextLarge } from '../components/CustomTexts';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TitleText title={<>Sponsors</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative justify-center items-center  flex w-full h-fit sm:h-[250px]"
      >
        <div className="flex justify-center items-center flex-wrap">
          <img
            src="./assets/5.svg"
            alt="sponsors"
            className="w-[300px] h-[200px] sm:w-[400px] sm:h-[200px] object-contain px-10 "
          />
          <img
            src="./assets/6.svg"
            alt="sponsors"
            className="w-[300px] h-[200px] sm:w-[400px] sm:h-[200px] object-contain px-10 "
          />
        </div>
      </motion.div>
      <TypingTextLarge title="In Collaboration with" textStyles="text-center" />
      <div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative justify-center items-center mt-[68px] flex w-full h-fit sm:h-[250px]"
        >
          <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
            <img
              src="./assets/1.png"
              alt="sponsors"
              className="w-[300px] h-fit sm:w-[400px] sm:h-[400px] object-contain px-10"
            />
            <img
              src="./assets/2.png"
              alt="sponsors"
              className="w-[300px] h-fit sm:w-[400px] sm:h-[400px] object-contain px-10 "
            />
            <img
              src="./assets/3.png"
              alt="sponsors"
              className="w-[300px] h-fit sm:w-[400px] sm:h-[400px] object-contain px-10"
            />
            <img
              src="./assets/4.png"
              alt="sponsors"
              className="w-[300px] h-fit sm:w-[400px] sm:h-[400px] object-contain px-10"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default World;
