import Logo from "../../../assets/icons/logo.svg";
import imgPortal from "../../../assets/icons/imgPortal.svg";
import './styles.css';

export const PortalLogin = () => {
  return (
    <div className='portal'>
      <div className='portal_header'>
        <img src={Logo} alt='logo da Fatec' />
      </div>
      <div className='portal_content'>
        <img src={imgPortal} alt='logo da Fatec' />
        <h1 className='portal_title'>Bem - vindo</h1>
        <p className='portal_description'>Este é o portal de administração do site da fatec.
          Por favor, faça o login para entrar.
        </p>
        <input className='portal_inputEmail' type="email" placeholder="Email" />
        <input className='portal_inputEmail' type="password" placeholder="Senha" />
      </div>
    </div>
  );
};