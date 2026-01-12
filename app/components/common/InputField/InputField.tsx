import React, { InputHTMLAttributes } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, ...props }) => {
    return (
        <div className="w-full max-w-full box-border">
            <label className="block mb-2 text-sm text-gray-300">{label}</label>
            <input
                {...props}
                className="w-full max-w-full box-border px-3 py-3 rounded-lg bg-[#2B2F36] text-white! placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
        </div>
    );
};

export default InputField;
