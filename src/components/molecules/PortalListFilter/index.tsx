import { Button } from '../../atoms/Button';
import { SearchInput } from '../../atoms/SearchInput';
import './styles.css';

interface Props {
  onPressButton: () => void;
  inputValue: string;
  onChangeInput: (value: string) => void;
  inputStyle?: React.CSSProperties;
}

export const PortalListFilter: React.FC<Props> = ({
  onPressButton,
  inputValue,
  onChangeInput,
  inputStyle,
}) => {
  return (
    <div className="portal-list_filter">
      <SearchInput
        value={inputValue}
        onChange={onChangeInput}
        style={{ ...inputStyle, width: '50%' }}
      />
      <Button
        title='Adicionar +'
        onClick={onPressButton}
      />
    </div>
  );
};