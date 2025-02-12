import React, { ReactNode } from 'react';

interface InputProps {
    label?: string;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    type: 'password' | 'email' | 'text';
    name: string;
    placeholder?: string;
    value: string;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: string;
    onLeftIconClick?: () => void;
    onrightIconClick?: () => void;
}

export default function Input({ label, rightIcon, leftIcon,required, type, name, placeholder, value, errors, onChange, onBlur, onLeftIconClick, onrightIconClick }: InputProps) {
    return (
        <div className='flex flex-col gap-3 mb-3'>
            <label htmlFor={name} className="text-gray-300 font-medium text-lg">{label}{required ? <span className='text-secondary-400'> *</span>:''}</label>
            <div className='relative flex items-center'>
                {leftIcon && <span onClick={onLeftIconClick} className="absolute left-4">{leftIcon}</span>}
                <input
                    className={`${leftIcon ? "pl-10" : "pl-3"} 
                        border-2 border-primary-200 rounded-xl 
                        leading-none pr-3 pt-3 pb-3 w-full 
                        placeholder-gray-100 placeholder:text-base`}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {rightIcon && <span onClick={onrightIconClick} className="absolute right-4">{rightIcon}</span>}
            </div>
            {errors &&
                <span className='text-sm text-secondary-600'> {errors} </span>
            }
        </div>
    );
}