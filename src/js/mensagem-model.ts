class Mensagem {

  type: 'sent' | 'received';
  text?: string;
  image?: string;
  name?: string;
  avatar?: string;
  isTitle?: boolean;

  constructor(type: 'sent' | 'received', text?: string, image?: string, name?: string, avatar?: string, isTitle?: boolean) {
    this.type = type;
    this.text = text;
    this.image = image;
    this.name = name;
    this.avatar = avatar;
    this.isTitle = isTitle;
  }
}

export default Mensagem;