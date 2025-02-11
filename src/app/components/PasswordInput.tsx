import { ReactNode, useState } from "react";
import Input from "./Input";
import { Eye, EyeClosed } from "lucide-react";

interface PasswordInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    errors?: string;
    leftIcon?: ReactNode;
    onLeftIconClick?: () => void;
}

export default function PasswordInput({name, label, placeholder, value, errors, leftIcon, onChange, onBlur, onLeftIconClick}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const passwordIcon = showPassword ? <Eye size={18} className="text-primary-700" />
        : <EyeClosed size={18} className="text-primary-700" />

    return (
        <Input
            rigthIcon={passwordIcon}
            onRigthIconClick={togglePasswordVisibility}
            label={label}
            type={showPassword ? "text" : "password"}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            errors={errors}
        />
    )
}