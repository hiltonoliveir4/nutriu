import React, { ReactNode } from 'react';
import { IoChevronDown } from 'react-icons/io5';

interface SelectProps {
    label?: string;
    rightIcon?: ReactNode;
    leftIcon?: ReactNode;
    name: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    errors?: string;
    onLeftIconClick?: () => void;
    onRightIconClick?: () => void;
    children: ReactNode;
    placeholder?: string;
    required?:boolean;
}

export default function Select({
    label,
    rightIcon,
    leftIcon,
    name,
    value,
    onChange,
    onBlur,
    errors,
    onLeftIconClick,
    onRightIconClick,
    children,
    placeholder,
    required,
}: SelectProps) {
    return (
        <div className='flex flex-col gap-3 mb-3'>
            {label && <label htmlFor={name} className="text-gray-300 font-medium text-lg">{label}{required ? <span className='text-secondary-400'> *</span>:''}</label>}
            <div className='relative flex items-center'>
                {leftIcon && (
                    <span onClick={onLeftIconClick} className="absolute left-4">
                        {leftIcon}
                    </span>
                )}
                <select
                    className={`${leftIcon ? "pl-10" : "pl-3"} 
                        border-2 border-primary-200 rounded-xl 
                        leading-none pr-3 pt-3 pb-3 w-full 
                        placeholder-gray-100 placeholder:text-base
                        appearance-none bg-white`}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                >
                    {placeholder && (
                        <option value="" disabled>
                            {placeholder}
                        </option>
                    )}
                    {children}
                </select>
                <span onClick={onRightIconClick} className="absolute right-4 pointer-events-none">
                    {rightIcon || <IoChevronDown className="w-5 h-5 text-gray-400" />}
                </span>
            </div>
            {errors && <span className='text-sm text-secondary-600'>{errors}</span>}
        </div>
    );
}