import React, { useContext } from 'react';
import { Link, Icon } from 'framework7-react';
import { AppContext } from '../pages/home';

const TopMenu = () => {
  const { isDarkMode, handleClick } = useContext(AppContext);

  // Atualize a classe do body quando o tema mudar
  React.useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  
  return (
    <div className='grid grid-cols-3 grid-gap width-100 text-align-center margin-top-65 header-bottom'>
      <div>
        <Link href='/' className='font-noto font-noto-small ripple-blur ripple-color-white'>Menu</Link>
      </div>
      <div>
        <span className='font-noto font-noto-large'>B<span className='font-noto font-noto-medium'>LOG</span></span>
      </div>
      <div className='grid grid-cols-2 grid-gap width-100'>
        <div>
          <Link onClick={handleClick} href='/' className='font-noto font-noto-small ripple-blur ripple-color-white'>
            <Icon ios="material:dark_mode" md="material:dark_mode"></Icon> {isDarkMode ? 'Amanhecer' : 'Anoitecer'}
          </Link>
        </div>
        <div>
          <Link href='/' className='font-noto font-noto-small ripple-blur ripple-color-white'>Cadastre-se/Entrar</Link>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
