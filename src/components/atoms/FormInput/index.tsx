import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import './styles.css';

interface InputProps extends InputHTMLAttributes<any> {
  name: string;
}

interface TextAreaProps extends TextareaHTMLAttributes<any> {
  name: string;
  maxLength?: number;
}

export const FormInput: React.FC<InputProps> = ({
  name,
  type = 'text',
  ...props
}) => {
  return (
    <div className="form-input">
      {type !== 'button' && (
        <label>{name}</label>
      )}
      <input {...props} className="form-input" />
    </div>
  );
};

export const FormTextArea: React.FC<TextAreaProps> = ({
  name,
  maxLength,
  value,
  ...props
}) => {
  return (
    <div className="form-input">
      <label>{name}</label>
      <textarea {...props} className="form-input" />
      {maxLength && (
        <span className="max-lenght-label">
          {value?.toString().length || 0}/{maxLength}
        </span>
      )}
    </div>
  );
};