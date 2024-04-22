class Usuario {
  id: number;
  nome: string;
  email: string;
  isAdmin: boolean;
  senha?: string;
  dataExclusao?: Date;

  constructor(id: number, nome: string, email: string, isAdmin: boolean,senha?: string, dataExclusao?: Date) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.isAdmin = isAdmin;
    this.senha = senha;
    this.dataExclusao = dataExclusao;
  }
}

export default Usuario;