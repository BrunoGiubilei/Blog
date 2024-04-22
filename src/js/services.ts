import axios from 'axios';
import Postagem from './postagem-model';

// Recuperar o token do cookie
let token;
const userTokenCookie = document.cookie.split('; ').find(row => row.startsWith('userToken='));
if (userTokenCookie) {
  token = userTokenCookie.split('=')[1];
}

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: { Authorization: `Bearer ${token}` },
});

export const UsuarioService = {
  getUsuarios: () => api.get('/usuarios'),
  getUsuario: (token?: string) => api.get(`/usuarios/${token}`),
  createUsuario: (usuario: any) => api.post('/usuarios', usuario),
  updateUsuario: (id: number, usuario: any) => api.put(`/usuarios/${id}`, usuario),
  authUsuario: (email: string, senha: string) => api.post('/usuarios', { email, senha }),
};

export const PostagensService = {
  getPostagens: (token?: string) => api.get(`/postagens/${token}`),
  getPostagem: (id: number) => api.get(`/postagens/${id}`),
  createPostagem: (postagem: Postagem) => api.post('/postagens', postagem),
  updatePostagem: (postagem: Postagem) => api.put('/postagens', postagem),
};
