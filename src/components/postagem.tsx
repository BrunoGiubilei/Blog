import { Block, Button, Input, useStore } from 'framework7-react';
import store from '../js/store';
import Postagem from "../js/postagem-model";
import { AppContext } from '../pages/home';
import { useContext, useState } from 'react';
import Usuario from '../js/usuario-model';

const PostagemPage = () => {
  const [novaPostagem, setNovaPostagem] = useState<string>(''); // Estado local para armazenar o valor do textarea
  const [novoTituloPostagem, setNovoTitulo] = useState<string>(''); // Estado local para armazenar o valor do título da postagem
  const { isDarkMode } = useContext(AppContext);
  const usuario:Usuario = useStore('usuario');

  const addPostagens = async () => {
    const novaData = new Date();
    
    // Crie uma nova instância de Postagens com o valor do textarea, somente se diferente de vazio
    const postagem = new Postagem(novoTituloPostagem, novaPostagem, usuario.nome, usuario.id, novaData);
    if (novoTituloPostagem.length > 0 && novaPostagem.length > 0)    
      await store.dispatch('addPostagens', postagem);
    
    // Limpa campo da postagem para inserir uma nova
    setNovaPostagem('');
    setNovoTitulo('');

    store.dispatch('getPostagens', []);
  };

  return (
    <div className='grid grid-cols-3 grid-gap width-100'>
      <div></div>
      <div>
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
          value={novaPostagem} // Vincule o valor do textarea ao estado local
          onInput={(e) => setNovaPostagem(e.target.value)} // Atualize o estado local quando o usuário digitar
        />
        
        <Block>
          <Button fill onClick={addPostagens}>
            Postar
          </Button>
        </Block>
      </div>
      <div></div>
    </div>
  );
};

export default PostagemPage;