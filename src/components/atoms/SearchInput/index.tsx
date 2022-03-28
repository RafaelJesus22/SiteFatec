import { PortalInput } from "../PortalInput";
import { FiSearch } from "react-icons/fi";

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
      <PortalInput
        style={style}
        value={value}
        onChangeText={onChange}
        placeholder="Pesquisar"
        icon={() => <FiSearch size={18} style={{ maxWidth: 24 }} color="415462" />}
      />
    </div>
  );
}