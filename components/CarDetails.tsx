
"use client"

import { Fragment } from 'react';
import React from 'react'

import Image from 'next/image';
import  {Dialog, Transition} from '@headlessui/react'

import { CarProps } from '@/types';
import { generateCarImageUrl } from '@/Utils';

interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10"
         onClose={closeModal}>
          <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          >
            <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] rounded lg:max-w-2xl 
            overflow-y-auto bg-white text-left shadow transition-all flex flex-col">
                <button
                type="button"
                className="absolute top-3 right-3 w-[12%] z-10 p-2 w-10 h-10 rounded-full"
                onClick={closeModal}
                
                >
                    <Image
                    src={generateCarImageUrl(car, 'angle')}
                    width={20}
                    height={20}
                    alt="close"
                    className="object-contain" 
                    />

                </button>
                <div className="flex-1 flex flex-col gap-3 p-3">
                <div className='relative w-full h-40 bg-pattern bg-cover bg-center'>
                <Image 
                src={generateCarImageUrl(car, '33')}
                 alt='car model' 
                 fill priority
                 className='object-contain' 
                />
                </div>
                <div className='flex gap-2'>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                <Image 
                src={generateCarImageUrl(car, '29')}
                 alt='car model' 
                 fill priority
                 className='object-contain' 
                />
                </div>
                </div>
                
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                <Image 
                src={generateCarImageUrl(car, '13')}
                 alt='car model' 
                 fill priority
                 className='object-contain' 
                />
                </div>
                </div>
                <div className="relative flex-1 flex flex-col gap-2 p-3">
                <h2 className="text-xl font-semibold">
                    {car.make} {car.model}
                </h2>
                <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, value]) => (
                        <div 
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                        >
                            <h4 className="text-grey-500">
                                {key.split('_').join(' ')}
                            </h4>
                            <p className="text-black-100 font-semibold">
                                {value}
                            </p>
                        </div>
                    ))}
                    </div>

                </div>
            </Dialog.Panel>
         </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">

            </div>

          </div>
            </Dialog>
          </Transition>
    </>
  )
}

export default CarDetails