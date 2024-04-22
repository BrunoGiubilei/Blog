 import React, { useContext, useState } from 'react';
import { Link, Icon, Panel, Page, Block, List, ListItem } from 'framework7-react';
import { AppContext } from '../pages/home';

const TopMenu = () => {
  const { isDarkMode, handleClick } = useContext(AppContext);
  const [selected, setSelected] = useState('home');

  // Atualize a classe do body quando o tema mudar
  React.useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const signOut = () => {
    // Limpar o token do cookie
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Atualizar a página
    location.reload();
  };
  
  return (
    <div>
      <Panel left cover containerEl="#panel-page" id="panel-nested">
        <Page>
          <Block strongIos outlineIos>
            <List menuList outlineIos strongIos>
              <ListItem
                link
                title="Home"
                selected={selected === 'home'}
                onClick={() => setSelected('home')}
              >
                <Icon md="material:home" ios="material:home" slot="media" />
              </ListItem>
              <ListItem
                link
                title="Profile"
                selected={selected === 'profile'}
                onClick={() => setSelected('profile')}
              >
                <Icon md="material:person" ios="material:person" slot="media" />
              </ListItem>
              <ListItem
                link
                title="Settings"
                selected={selected === 'settings'}
                onClick={() => setSelected('settings')}
              >
                <Icon md="material:settings" ios="material:settings" slot="media" />
              </ListItem>
              <ListItem
                link
                title="Sair"
                selected={selected === 'logout'}
                onClick={() => {setSelected('logout'); signOut();}}
              >
                <Icon md="material:logout" ios="material:logout" slot="media" />
              </ListItem>
            </List>
          </Block>
        </Page>
      </Panel>
      <div className='grid grid-cols-3 grid-gap width-100 text-align-center margin-top menu-sticky'>
        <div className='text-align-left margin-left align-center'>
          <Link panelOpen="#panel-nested" href='#' className='font-noto font-noto-small ripple-blur ripple-color-white'>Menu</Link>
        </div>
        <div className='user-select-none'>
          <span className='font-noto font-noto-large'>B<span className='font-noto font-noto-medium'>LOG</span></span>
        </div>
        <div className='align-center'>
          <Link onClick={handleClick} href='#' className='font-noto font-noto-small ripple-blur ripple-color-white'>
            <Icon ios="material:dark_mode" md={`${isDarkMode ? 'material:light_mode' : 'material:dark_mode' }`}></Icon> {isDarkMode ? 'Amanhecer' : 'Anoitecer'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
