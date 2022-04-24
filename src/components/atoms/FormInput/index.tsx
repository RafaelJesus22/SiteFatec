import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

import './styles.css';

interface InputProps extends InputHTMLAttributes<any> {
  name: string;
}

interface TeatAreaProps extends InputHTMLAttributes<any> {
  name: string;
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

export const FormTextArea: React.FC<TeatAreaProps> = ({
  name,
  type = 'text',
  ...props
}) => {
  return (
    <div className="form-input">
      {type !== 'button' && (
        <label>{name}</label>
      )}
      <textarea {...props} className="form-input" />
    </div>
  );
};