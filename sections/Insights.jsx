/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */

'use client';

import { Fragment, useState } from 'react';

import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { fadeIn, staggerContainer } from '../utils/motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';

function Insights() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function closeModal1() {
    setIsOpen1(false);
  }

  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }

  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal4() {
    setIsOpen4(false);
  }

  function openModal4() {
    setIsOpen4(true);
  }

  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Insights" textStyles="text-center" />
        <TitleText title={<>Insights about track</>} textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {/* {insights.map((item, index) => (
          <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
        ))} */}
          <div>
            <motion.div
              variants={fadeIn('up', 'spring', 1 * 0.5, 1)}
              className="flex md:flex-row flex-col gap-4"
            >
              <img
                src="./assets/dataScience.png"
                alt="planet-01"
                className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                  <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                    Data science and intelligent communication
                  </h4>
                  <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                    powered by IEEE SPS and ComSoc Bangalore Chapters
                  </p>
                </div>

                <button
                  onClick={openModal1}
                  className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
                >
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </button>
              </div>
              <Transition appear show={isOpen1} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={closeModal1}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Payment successful
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted.
                              We’ve sent you an email with all of the details of
                              your order.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal1}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={fadeIn('up', 'spring', 2 * 0.5, 1)}
              className="flex md:flex-row flex-col gap-4"
            >
              <img
                src="./assets/robotics.webp"
                alt="planet-01"
                className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                  <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                    Robotics and Automation
                  </h4>
                  <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                    powered by IEEE RAS Bangalore Chapter
                  </p>
                </div>

                <button
                  onClick={openModal2}
                  className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
                >
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </button>
              </div>
              <Transition appear show={isOpen2} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={closeModal2}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Payment successful 2
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted.
                              We've sent you an email with all of the details of
                              your order.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal2}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={fadeIn('up', 'spring', 3 * 0.5, 1)}
              className="flex md:flex-row flex-col gap-4"
            >
              <img
                src="./assets/bigData.png"
                alt="planet-01"
                className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                  <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                    Bigdata analytics
                  </h4>
                  <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                    powered by IEEE CS Bangalore Chapter
                  </p>
                </div>

                <button
                  onClick={openModal3}
                  className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
                >
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </button>
              </div>
              <Transition appear show={isOpen3} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={closeModal3}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Payment successful 3
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted.
                              We've sent you an email with all of the details of
                              your order.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal3}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </motion.div>
          </div>
          <div>
            <motion.div
              variants={fadeIn('up', 'spring', 4 * 0.5, 1)}
              className="flex md:flex-row flex-col gap-4"
            >
              <img
                src="./assets/appliedMath.png"
                alt="planet-01"
                className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                  <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
                    Applied Mathematics
                  </h4>
                  <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                    powered by IEEE student branch, PESU
                  </p>
                </div>

                <button
                  onClick={openModal4}
                  className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
                >
                  <img
                    src="/arrow.svg"
                    alt="arrow"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </button>
              </div>
              <Transition appear show={isOpen4} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  onClose={closeModal4}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                            Payment successful 4
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted.
                              We've sent you an email with all of the details of
                              your order.
                            </p>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal4}
                            >
                              Got it, thanks!
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Insights;
