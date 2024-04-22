import { useContext, useEffect, useState } from 'react';
import { Page } from 'framework7-react';
import { AppContext } from '../pages/home';
import TopMenu from './topMenu';
import NavCentral from './navCentral';
import Postagens from "./postagens";
import Postagem from "./postagem";
import store from '../js/store';
import { UsuarioService } from '../js/services';

const MainPage = () => {
  const { isDarkMode } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true); // Adicione este estado
  
  useEffect(() => {
    const userTokenCookie = document.cookie.split('userToken=')[1];
    UsuarioService.getUsuario(userTokenCookie).then(async res => {
      await store.dispatch('setUsuario', res.data);
      store.dispatch('getPostagens', []);
      setIsLoading(false);
    });
    
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>; // Renderize algum tipo de indicador de carregamento
  }

  return (
    <Page name='home' className={`home-page card menu-sticky-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>        
      {/* menu superior */}
      <TopMenu />

      {/* imagem central */}
      <NavCentral />

      {/* Nova postagem */}
      <Postagem />

      {/* Postagens */}
      <Postagens />
      
    </Page>
  );
}
export default MainPage;
