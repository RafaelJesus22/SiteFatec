import ReactDOM from 'react-dom';
import { Logo } from '../../../assets/icons/icons';
import { loading } from '../../../assets/images/images';

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
        <div className='modal-message'>
          <h1>{text}</h1>
          <img src={loading} alt="Carregando informações" />
        </div>
      </div>
    </div>, 
    document.getElementsByName('portal')[0]
  );
}

