import { InputHTMLAttributes } from 'react';
import './styles.css';

interface Props extends InputHTMLAttributes<any> {
  icon?: () => React.ReactNode;
  isInputValid?: boolean;
  value?: string;
  onChangeText: (text: string) => void;
  rightIcon?: () => React.ReactNode;
}

export const PortalInput: React.FC<Props> = ({
  icon,
  isInputValid,
  value,
  onChangeText,
  rightIcon,
  ...rest
}) => {
  return (
    <div className="portal-input">
      {icon && <div className="icon">{icon()}</div>}
      <input
        type="text"
        {...rest}
        value={value}
        onChange={e => onChangeText(e.target.value)}
      />
      {rightIcon && <div className="icon">{rightIcon()}</div>}
    </div>
  );
}