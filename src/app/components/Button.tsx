import { ReactNode } from "react";

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: () => void;
  text: ReactNode;
  icon?: ReactNode;
}

export default function Button({ type, className, onClick, text, icon }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
    >
      <div className="flex items-center justify-center w-full gap-3">
        {icon ? icon : ""}
        {text}
      </div>
    </button>
  );
}