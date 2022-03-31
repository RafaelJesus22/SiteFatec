import { FiSearch } from "react-icons/fi";

import './styles.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
  style?: React.CSSProperties;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  style,
}) => {
  return (

    <div className="search-input">
      <FiSearch size={18} style={{ maxWidth: 24 }} color="415462" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={style}
        placeholder="Pesquisar"
      />
    </div>
  );
}