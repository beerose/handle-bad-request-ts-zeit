export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  stock: Scalars['Int'];
};

export type OrderInput = {
  addressID: Scalars['ID'];
  userID: Scalars['ID'];
  cartID: Scalars['ID'];
};

export type OrderResponse = {
  __typename?: 'OrderResponse';
  error?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};
