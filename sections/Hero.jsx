'use client';

// import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import styles from '../styles';
// import {
//   // planetVariants,
//   slideIn,
//   staggerContainer,
//   textVariant,
// } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}  h-[100vh]`}>
    <Spline
      scene="https://prod.spline.design/GLps9wZiqSGfvIT1/scene.splinecode"
      className="z-50 hidden sm:block"
    />
    <Spline
      scene="https://prod.spline.design/jl6Krd7ogz9unygH/scene.splinecode"
      className="z-50 sm:hidden block"
    />
  </section>
  //   <motion.div
  //     variants={staggerContainer}
  //     initial="hidden"
  //     whileInView="show"
  //     viewport={{ once: false, amount: 0.25 }}
  //     className={`${styles.innerWidth} mx-auto flex flex-col `}
  //   >
  //     <div className="flex justify-center items-center flex-col relative z-10 ">
  //       <motion.div
  //         variants={textVariant(0.5)}
  //         className="flex flex-row justify-center items-center py-7"
  //       >
  //         <img src="./assets/logo.png" alt="Logo" />
  //       </motion.div>
  //     </div>

  //     <motion.div
  //       variants={slideIn('right', 'tween', 0.2, 1)}
  //       className="relative w-full md:-mt-[20px] -mt-[12px]"
  //     >
  //       <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

  //       <img
  //         src="./assets/cover.png"
  //         alt="hero_cover"
  //         className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
  //       />

  //       <a href="#explore">
  //         <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
  //           <img
  //             src="/stamp.png"
  //             alt="stamp"
  //             className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
  //           />
  //         </div>
  //       </a>
  //     </motion.div>
  //   </motion.div>
);

export default Hero;
