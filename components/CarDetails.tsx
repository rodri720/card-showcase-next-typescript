"use client";
import React, { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { carProps } from '@/types';

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: carProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] rounded lg:max-w-2xl overflow-y-auto bg-white text-left shadow transition-all flex flex-col">
            <button
              type="button"
              className="absolute top-3 right-3 z-10 p-2 w-10 h-10 rounded-full bg-primary-blue-100"
              onClick={closeModal}
            >
              <Image
                src="/close.svg"
                width={20}
                height={20}
                alt="close"
                className="object-contain"
              />
            </button>
            {/* Resto de tu contenido aquí */}
          </Dialog.Panel>
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default CarDetails;
