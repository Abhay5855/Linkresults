import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { InputFieldProps } from './InputField.types';

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  id,
  label,
  placeholder,
  required = false,
  pattern,
  additionalClasses = '',
  icon: Icon,
  onChange,
  disabled = false,
  name,
  value,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`mb-6 ${additionalClasses}`}>
      {label && (
        <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
        )}
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          id={id}
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${Icon ? 'ps-10' : ''}`}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          onChange={onChange}
          disabled={disabled}
          name={name}
          value={value}
        />
        {type === 'password' && (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;