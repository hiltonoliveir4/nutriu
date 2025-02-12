import { ReactNode } from "react";
import { IoClose } from 'react-icons/io5';

interface FoodModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  hasCloseButton?: boolean;
  children: ReactNode;
}

export default function Modal({ isOpen,onClose,children,title }: FoodModalProps) {


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg w-96 relative">
     <button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
      >
        <IoClose className="w-6 h-6 text-gray-600" />
      </button>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  </div>
  );
}