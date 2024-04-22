import { createStore } from 'framework7/lite';
import Postagem from "./postagem-model";
import { PostagensService, UsuarioService } from './services';
import { AxiosResponse } from 'axios';
import Usuario from './usuario-model';

const store = createStore({
  state: {
    postagens: [],
    usuario: {} as Usuario
  },
  getters: {
    postagens(prop: { state: {postagens: Postagem[]} }) {
      return prop.state.postagens;
    },
    usuario(prop: { state: {usuario: Usuario} }) {
      return prop.state.usuario;
    }
  },
  actions: {
    async setUsuario(prop: { state: {usuario: Usuario} }, usuario: Usuario) {
      prop.state.usuario = usuario;
    },
    async getPostagens(prop: { state: {postagens: Postagem[]} }) {
      const userTokenCookie = document.cookie.split('userToken=')[1];
      const postagens: AxiosResponse = await PostagensService.getPostagens(userTokenCookie);

      prop.state.postagens = postagens.data;
    },
    async addPostagens(prop: { state: {postagens: Postagem[]} }, postagem: Postagem) {
      await PostagensService.createPostagem(postagem);
    },
    async updatePostagens(prop: { state: {postagens: Postagem[]} }, postagem: Postagem) {
      await PostagensService.updatePostagem(postagem); 
    }
  },
});

export default store;