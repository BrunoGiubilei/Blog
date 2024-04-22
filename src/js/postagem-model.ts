class Postagem {
  titulo: string;
  conteudo: string;
  autor: string;
  userId: number;
  dataCriacao?: Date;  
  id?: number;
  dataExclusao?: Date;

  constructor(titulo: string, conteudo: string, autor: string, userId: number, dataCriacao?: Date, id?: number, dataExclusao?: Date) {
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.autor = autor;
    this.userId = userId;
    this.dataCriacao = dataCriacao;
    this.id = id;
    this.dataExclusao = dataExclusao;
  }
}

export default Postagem;