import Select from 'react-select'
import { colors } from '../../../config/styles';

export type Option = {
  value: string;
  label: string;
}

interface FormMultiSelectProps {
  name: string;
  options: Option[];
  value: Option[];
  onChange: (values: Option[]) => void;
  style?: React.CSSProperties;
  isMulti?: boolean;
}

interface FormSelectProps {
  name: string;
  options: Option[];
  value: Option;
  onChange: (values: Option) => void;
  style?: React.CSSProperties;
}

export const FormMultiSelect: React.FC<FormMultiSelectProps> = ({
  name,
  options,
  style,
  value,
  onChange,
}) => {
  const customStyles = {
    control: () => ({
      border: `1px solid ${colors.borderColor}`,
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '0.5rem',
    }),
  }

  return (
    <div style={style}>
      <label>{name}</label>
      <Select
        isMulti
        value={value}
        styles={customStyles}
        options={options}
        placeholder="Selecione"
        onChange={option => {
          const options = option.map(o => {
            return {
              value: o.value,
              label: o.label,
            }
          });

          onChange(options);
        }}
      />
    </div>
  );
};

export const FormSelect: React.FC<FormSelectProps> = ({
  name,
  options,
  style,
  value,
  onChange,
}) => {
  const customStyles = {
    control: () => ({
      border: `1px solid ${colors.borderColor}`,
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '0.5rem',
    }),
  }

  return (
    <div style={style}>
      <label>{name}</label>
      <Select
        value={value}
        styles={customStyles}
        options={options}
        placeholder="Selecione"
        onChange={option => {
          onChange(option as Option);
        }}
      />
    </div>
  );
};

