import { Block, Input, Link, List, ListItem, NavRight, Navbar, Page, Popup, Toolbar, useStore } from 'framework7-react';
import Postagem from "../js/postagem-model";
import { AppContext } from '../pages/home';
import { useContext, useEffect, useState } from 'react';
import store from '../js/store';

const PostagensPage = () => {
  let postagens = useStore('postagens');
  const { isDarkMode } = useContext(AppContext);
  const [selectedPostagem, setSelectedPostagem] = useState<Postagem | null>(null);
  const [novaPostagem, setNovaPostagem] = useState<string>('');
  const [novoTituloPostagem, setNovoTitulo] = useState<string>('');
  const [popupOpened, setPopupOpened] = useState(false);

  useEffect(() => {
    const fetchPostagens = async () => {
      await store.dispatch('getPostagens', []);
    };

    fetchPostagens();
  }, [popupOpened]);

  const updatePostagens = async () => {
    // Atualize a postagem com o novo conteúdo
    const postagem = (selectedPostagem) ? new Postagem(novoTituloPostagem, novaPostagem, selectedPostagem.autor, selectedPostagem.userId, selectedPostagem.dataCriacao, selectedPostagem.id) : '';
    
    if (postagem)
      await store.dispatch('updatePostagens', postagem);

    setPopupOpened(false);
  };

  const removePostagens = async () => {
    const novaData = new Date();
    const postagem = (selectedPostagem) ? new Postagem(novoTituloPostagem, novaPostagem, selectedPostagem.autor, selectedPostagem.userId, selectedPostagem.dataCriacao, selectedPostagem.id, novaData) : '';
    
    if (postagem)
      await store.dispatch('updatePostagens', postagem);

    setPopupOpened(false);
  };

  const onOpenPopupPostagem = (postagem: Postagem) => {
    setSelectedPostagem(postagem);
    setNovoTitulo(postagem.titulo);
    setNovaPostagem(postagem.conteudo);
    setPopupOpened(true);
  }

  return (
    <div>
      <List dividersIos mediaList outlineIos strongIos className={isDarkMode ? 'margin dark-mode-postagem' : 'margin light-mode-postagem'}>
        {postagens.slice().sort((a:any, b:any) => b.id - a.id).map((postagem: Postagem) => (
          <ListItem 
            popupOpen=".popup-postagem"
            link={"#"}
            key={postagem.id} 
            title={postagem.autor + ": " + postagem.titulo} 
            after={"Detalhes"}
            subtitle={postagem.dataCriacao ? postagem.dataCriacao.toString() : ''} 
            text={postagem.conteudo}
            onClick={() => onOpenPopupPostagem(postagem)} />
        ))}
      </List>

      <Popup 
        className="popup-postagem"
        opened={popupOpened}
      >
        <Page>
          <Navbar title={selectedPostagem?.titulo}>
            <NavRight>
              <Link popupClose>Fechar</Link>
            </NavRight>
          </Navbar>
          <Block>
            <p>{selectedPostagem?.dataCriacao ? selectedPostagem?.dataCriacao.toString() : ''} - {selectedPostagem?.autor}</p>
            <Input 
              type='text'
              placeholder='Título da sua nova postagem'
              className={isDarkMode ? 'insertPostagem dark-mode' : 'insertPostagem'}
              value={novoTituloPostagem}
              onInput={(e) => setNovoTitulo(e.target.value)}
            />

            <Input
              type="textarea"
              placeholder="Escreva aqui sua nova postagem"
              className={isDarkMode ? 'insertPostagem insertTextArea dark-mode' : 'insertPostagem insertTextArea'}
              value={novaPostagem}
              onInput={(e) => setNovaPostagem(e.target.value)}
            />
            
          </Block>
          <Toolbar position="bottom">
            <Link onClick={() => updatePostagens()} >Salvar</Link>
            <Link onClick={() => removePostagens()}>Remover</Link>
          </Toolbar>
        </Page>
      </Popup>
    </div>
  );
};

export default PostagensPage;
