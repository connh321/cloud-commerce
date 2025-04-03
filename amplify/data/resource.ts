import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/**
 * Product and CartItem Schema
 *
 * This schema defines the data model for Products and CartItems in cloud-commerce.
 */
const schema = a.schema({
  Product: a
    .model({
      name: a.string(),
      description: a.string(),
      price: a.float(),
      stockQty: a.integer(),
      imageUrl: a.string(),
      cartItems: a.hasMany('CartItem', 'productId'), // Change 'product' to 'productId'
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.authenticated().to(['read']),
    ]),

  CartItem: a
    .model({
      userEmail: a.string().required(),
      itemQty: a.integer().required(),
      productId: a.string().required(), // Add explicit foreign key
      product: a.belongsTo('Product', 'productId'), // Match field name
    })
    .authorization((allow) => [
      allow.authenticated().to(['create', 'read', 'update', 'delete']),
    ]),
});


export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});