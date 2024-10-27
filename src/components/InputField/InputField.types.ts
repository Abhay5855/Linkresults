import { LucideIcon } from 'lucide-react';

export interface InputFieldProps {
  type?: string;
  id: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  additionalClasses?: string;
  icon?: LucideIcon;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
  value: string;
}