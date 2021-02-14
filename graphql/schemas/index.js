const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Cart {
    _id: ID!
    items: [Item!]
    user: User!
}
type Item {
  _id: ID!
  title: String!
  brand: String!
  description: String!
  price: Float!
  seller: User!
}
type User {
  _id: ID!
  email: String!
  username: String!
  password: String
  sellingItems: [Item!]
}
input ItemInput {
  title: String!
  brand: String!
  description: String!
  price: Float!
}
input UserInput {
  email: String!
  username: String!
  password: String!
}
type RootQuery {
    items: [Item!]!
    cart: [Cart!]!
    login(email: String!, password: String!): User!
    viewCart(userId: ID!): Cart!
}
type RootMutation {
    createItem(itemInput: ItemInput): Item
    createUser(userInput: UserInput): User
    createCart(email: String!,itemId: ID!): Cart!
}
schema {
    query: RootQuery
    mutation: RootMutation
}
`);