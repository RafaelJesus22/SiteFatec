import { InputHTMLAttributes } from 'react'

import './styles.css';

interface Props extends InputHTMLAttributes<any> {
  name: string;
}

export const FormInput: React.FC<Props> = ({
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