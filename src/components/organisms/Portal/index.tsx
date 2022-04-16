import ReactDOM from 'react-dom';
import { Logo } from '../../../assets/icons/icons';

import './styles.css';

interface Props {
  text?: string;
  visible: boolean;
}

export const Portal: React.FC<Props> = ({
  text = "Carregando...",
  visible,
}) => {
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-content">
        <img src={Logo} alt="Logo tipo da FATEC Santana de Parnaíba" />
        <h1>{text}</h1>
      </div>
    </div>, 
    document.getElementsByName('portal')[0]
  );
}

