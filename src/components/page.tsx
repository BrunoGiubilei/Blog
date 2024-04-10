import { useContext } from 'react';
import { Page } from 'framework7-react';
import { AppContext } from '../pages/home';
import TopMenu from './topMenu';
import NavCentral from './navCentral';

const MainPage = () => {
  const { isDarkMode } = useContext(AppContext);

  return (
      <Page name='home' className={`card ${isDarkMode ? 'dark-mode' : ''}`}>
        
        {/* menu superior */}
        <TopMenu />

        {/* imagem central com botoes de navegacao */}
        <NavCentral />

      </Page>
  );
}
export default MainPage;
