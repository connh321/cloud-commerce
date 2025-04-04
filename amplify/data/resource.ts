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
      cartItems: a.hasMany('CartItem', 'pId'),
      featuredProducts: a.hasMany('FeaturedProduct', 'pId'),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.authenticated().to(['read']),
      allow.publicApiKey().to(['read']),
    ]),

  CartItem: a
    .model({
      userEmail: a.string().required(),
      itemQty: a.integer().required(),
      pId: a.string().required(),
      product: a.belongsTo('Product', 'pId'),
    })
    .authorization((allow) => [
      allow.authenticated().to(['create', 'read', 'update', 'delete']),
    ]),

  FeaturedProduct: a
    .model({
      featuredId: a.string().required(),
      pId: a.string(), // temp remove required to add ids
      product: a.belongsTo('Product', 'pId'),
    })
    .authorization((allow) => [
      allow.guest().to(['read']),
      allow.authenticated().to(['read']),
      allow.publicApiKey().to(['read']),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
