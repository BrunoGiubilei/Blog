import { useContext, useState } from 'react';
import { BlockFooter, Link, List, ListButton, ListInput, LoginScreenTitle, Page, f7 } from 'framework7-react';
import { AppContext } from '../pages/home';
import { UsuarioService } from '../js/services';
import CryptoJS from 'crypto-js';

const LoginPage = () => {
  const { isDarkMode } = useContext(AppContext);
  const [email, setUsername] = useState('');
  const [senha, setPassword] = useState('');

  let token;
  const userTokenCookie = document.cookie.split('; ').find(row => row.startsWith('userToken='));
  if (userTokenCookie)
    token = userTokenCookie.split('=')[1];

  if (token) {
    setTimeout(() => {
      f7.views.main.router.navigate('/home/', {reloadAll: true});
    }, 0);
  }

  const signIn = () => {
    const authSenha = CryptoJS.SHA256(senha+'babanassaosaborosas').toString();

    UsuarioService.authUsuario(email, authSenha).then(async (result) => {
      
      if (result.status == 200) {
        document.cookie = `userToken=${result.data.token}; path=/`;
        f7.views.main.router.navigate('/home/', {reloadAll: true});
      }
      
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <Page name='login' className={`login-page ${isDarkMode ? 'dark-mode' : ''}`}>
      <LoginScreenTitle>Framework7</LoginScreenTitle>
      <List form>
        <ListInput
          label="Email"
          type="text"
          placeholder="Informe seu email"
          value={email}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ListInput
          label="Senha"
          type="password"
          placeholder="Informe sua senha"
          value={senha}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <List inset>
        <ListButton onClick={signIn}>Entrar</ListButton>
        <BlockFooter className='text-align-center'>
          Blog feito com 💕 por <Link href="https://github.com/BrunoGiubilei/" external>Bruno Giubilei</Link>
        </BlockFooter>
      </List>
    </Page>
  );
}
export default LoginPage;
