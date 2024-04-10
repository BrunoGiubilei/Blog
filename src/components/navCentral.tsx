import { useContext, useState, useEffect } from 'react';
import { Link } from "framework7-react";
import { AppContext } from '../pages/home';

const NavCentral = () => {
  const { isDarkMode } = useContext(AppContext);
  const [bgNumber, setBgNumber] = useState(Math.floor(Math.random() * 8) + 1);

  // Atualize o número da imagem de fundo quando o tema mudar
  useEffect(() => {
    setBgNumber(Math.floor(Math.random() * 8) + 1);
  }, [isDarkMode]);

  // Defina o caminho da imagem com base no valor atual de isDarkMode e bgNumber
  const imagePath = `../assets/bg/${isDarkMode ? 'dark' : 'light'}/bg${bgNumber}.jpeg`;

  return (
    <div className='grid grid-cols-3 grid-gap width-100 text-align-center'>
      <div className='link-center'>
        <Link href='/' className='font-noto font-noto-small link ripple-blur ripple-color-white'>Anterior</Link>
      </div>
      <div>
        <img src={imagePath} className='width-100 img-rounded' />
      </div>
      <div className='link-center'>
        <Link href='/' className='font-noto font-noto-small link ripple-blur ripple-color-white'>Próximo</Link>
      </div>
    </div>
  );
};

export default NavCentral;
