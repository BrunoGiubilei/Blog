
import { createStore } from 'framework7/lite';

class Product {
  id: string;
  title: string;
  description: string;

  constructor(id: string, title: string, description: string) {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}

const store = createStore({
  state: {
    products: [
      new Product('1', 'Apple iPhone 8', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'),
      new Product('2', 'Apple iPhone 8 Plus', 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'),
      new Product('3', 'Apple iPhone X', 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.')
    ]
  },
  getters: {
    products(prop: { state: Product[] }) {
      return prop.state;
    }
  },
  actions: {
    addProduct(prop: { state: Product[] }, product: Product) {
      prop.state = [...prop.state, product];
    },
  },
})
export default store;
