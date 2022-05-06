import ReactDOM from 'react-dom';
import { Logo } from '../../../assets/icons/icons';
import { loading } from '../../../assets/images';

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
    <div className="portal-container">
      <div className="portal-content">
        <img src={Logo} alt="Logo tipo da FATEC Santana de Parnaíba" />
        <div className='portal-message'>
          <h1>{text}</h1>
          <img src={loading} alt="Carregando informações" />
        </div>
      </div>
    </div>, 
    document.getElementsByName('portal')[0]
  );
}

