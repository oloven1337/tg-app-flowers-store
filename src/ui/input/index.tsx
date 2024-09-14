import { FC } from "react";

interface InputProps {
  value: string;
  placeholder?: string;
  icon?: string;
  onChange: (value: string) => void;
}

export const Input: FC<InputProps> = ({ value, placeholder, onChange, icon }) => {
  return (
      <div className="relative flex items-center">
        <input
            className="rounded-2xl pl-10 pr-4 py-2 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder={placeholder}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
        {icon && <img src={icon} className="absolute left-3 text-gray-500 text-lg" alt=""></img>}
      </div>
  );
};