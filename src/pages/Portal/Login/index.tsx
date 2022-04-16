import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { useState } from "react";
import { MdEmail } from 'react-icons/md';
import { BiLock } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { auth } from "../../../firebase";
import Logo from "../../../assets/icons/logo.svg";
import imgPortal from "../../../assets/icons/imgPortal.svg";
import { PortalContainer } from "../../../components/containers/PortalContainer";
import { PortalInput } from "../../../components/atoms/PortalInput";
import './styles.css';
import { useAuth } from '../../../contexts/authContext';
import { useHistory } from 'react-router-dom';
import { useLoading } from '../../../contexts/loadingContent';

type PasswordInputType = 'password' | 'text';

export const PortalLogin = () => {
  const { onChangeUser } = useAuth();
  const { hideLoading, showLoading } = useLoading();
  const history = useHistory()
  const [email, setEmail] = useState('rafael.bfmv@outlook.com');
  const [password, setPassword] = useState('admin123');
  const [passwordInputType, setPasswordInputType] = 
    useState<PasswordInputType>('password');

  const togglePasswordInputType = () => {
    if (passwordInputType === 'password') {
      return setPasswordInputType('text');
    }
    return setPasswordInputType('password');
  }

  const handleSumit = async (e: any) => {
    if (!!email && email.includes('@') && password.length > 7) {
      showLoading();
      e.preventDefault();
      await singin();
      hideLoading();
    }
  };

  const singin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log('response', response);
      onChangeUser(response.user);
      return history.push('/portal/dashboard');
    } catch (error) {
      window.alert(`Não foi possível realizar o login. Detalhes ${JSON.stringify(error)}`);
    }
  };

  return (
    <PortalContainer>
      <header className='portal_header'>
        <div className="portal_header-content">
          <a href="/">
            <img src={Logo} alt='logo da Fatec' />
          </a>
        </div>
      </header>
      <div className='portal_content'>
        <div className='portal_login-container'>
          <div className="portal_login-image">
            <img src={imgPortal} alt='logo da Fatec' style={{ maxWidth: 500 }} />
          </div>
          <div className="portal_login-form-container">
            <h1 className='portal_title'>Bem - vindo</h1>
            <p className='portal_description'>
              Este é o portal de administração do site da fatec.
            </p>
            <p>Por favor, faça o login para entrar.</p>

            <form className="portal_login-form">
              <PortalInput
                icon={() => <MdEmail size={22} />}
                type="email"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                required
              />
              <PortalInput
                icon={() => <BiLock size={22} />}
                type={passwordInputType}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                rightIcon={() =>
                  passwordInputType === 'password' 
                    ? <AiOutlineEye size={22} onClick={togglePasswordInputType} /> 
                    : <AiOutlineEyeInvisible size={22} onClick={togglePasswordInputType} />
                }
                required
              />
              <button onClick={handleSumit}>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </PortalContainer>
  );
};