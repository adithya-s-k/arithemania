/* eslint-disable react/jsx-no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/order */
/* eslint-disable react/function-component-definition */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/router';
import styles from '../styles';
// import {
//   // planetVariants,
//   slideIn,
//   staggerContainer,
//   textVariant,
// } from '../utils/motion';
import { textVariant } from '../utils/motion';

// const Hero = () => (
//   <section className={`${styles.yPaddings}  h-[100vh]`}>
//     <Spline
//       scene="https://prod.spline.design/GLps9wZiqSGfvIT1/scene.splinecode"
//       className="z-50 hidden sm:block"
//     />
//     <Spline
//       scene="https://prod.spline.design/jl6Krd7ogz9unygH/scene.splinecode"
//       className="z-50 sm:hidden block"
//     />
//   </section>
//   //   <motion.div
//   //     variants={staggerContainer}
//   //     initial="hidden"
//   //     whileInView="show"
//   //     viewport={{ once: false, amount: 0.25 }}
//   //     className={`${styles.innerWidth} mx-auto flex flex-col `}
//   //   >
//   //     <div className="flex justify-center items-center flex-col relative z-10 ">
//   //       <motion.div
//   //         variants={textVariant(0.5)}
//   //         className="flex flex-row justify-center items-center py-7"
//   //       >
//   //         <img src="./assets/logo.png" alt="Logo" />
//   //       </motion.div>
//   //     </div>

//   //     <motion.div
//   //       variants={slideIn('right', 'tween', 0.2, 1)}
//   //       className="relative w-full md:-mt-[20px] -mt-[12px]"
//   //     >
//   //       <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

//   //       <img
//   //         src="./assets/cover.png"
//   //         alt="hero_cover"
//   //         className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
//   //       />

//   //       <a href="#explore">
//   //         <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
//   //           <img
//   //             src="/stamp.png"
//   //             alt="stamp"
//   //             className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
//   //           />
//   //         </div>
//   //       </a>
//   //     </motion.div>
//   //   </motion.div>
// );

// export default Hero;

function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // set to true if screen width is less than 768px
    }

    handleResize(); // set initial value on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      {isMobile ? (
        <>
          <motion.div
            className="80vh"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="./assets/heroM.png" className="z-[100]" alt="" />
          </motion.div>
        </>
      ) : (
        <motion.div
          variants={textVariant(0.5)}
          className={`${styles.yPaddings}  h-[80vh]`}
        >
          <div className="absolute right-[100px] bottom-0 z-50">
            <button
              type="button"
              className="flex items-center h-fit py-4 px-6 bg-[#617d91] rounded-[32px] gap-[12px]"
              onClick={
                () =>
                  router.push(
                    'https://my.spline.design/laptoparithemaniacopy-54185d9f3bb79f7ac9dcb4c28941cf83/'
                  )
                // eslint-disable-next-line react/jsx-curly-newline
              }
            >
              <img
                src="/headset.svg"
                alt="headset"
                className="w-[24px] h-[24px] object-contain"
              />
              <span className="font-normal text-[16px] text-white">
                3D View
              </span>
            </button>
          </div>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src="./assets/hero.png"
            alt=""
          />
        </motion.div>
      )}
      {/* <Spline
        scene="https://prod.spline.design/GLps9wZiqSGfvIT1/scene.splinecode"
        className="z-50 hidden sm:block"
        // className="z-50 "
      /> */}
    </>
  );
}

export default Hero;
