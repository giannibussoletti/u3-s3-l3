export interface IBook {
  id: number
  title: string
  price: string
  imageUrl: string
  description: string
}
interface Cart {
  content: IBook[]
}

export interface ReduxStore {
  cart: Cart
}
