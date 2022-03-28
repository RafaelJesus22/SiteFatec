import Select, {  } from 'react-select'

type Option = {
  value: string;
  label: string;
}

interface Props {
  name: string;
  options: Option[];
  onChange: (values: Option[]) => void;
  style?: React.CSSProperties;
}

export const FormSelect: React.FC<Props> = ({
  name,
  options,
  style,
  onChange,
}) => {
  const customStyles = {
    control: () => ({
      border: '1px solid #971004',
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