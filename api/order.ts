import { NowResponse } from '@now/node';
import * as t from 'io-ts';

import { handleBadRequest, PostRequest } from './handleBadRequest';

// This could be genrated
const OrderInputPayloadV = t.type({
  addressID: t.string,
  cartID: t.string,
  userID: t.string,
});

type AddUserRequest = PostRequest<typeof OrderInputPayloadV>;

const handler = async (request: AddUserRequest, response: NowResponse) => {
  handleBadRequest(
    OrderInputPayloadV,
    request.body.input.payload,
    response,
  ).then(() => {
    // some actions

    return response.json({
      data: { success: true, message: 'message' },
    });
  });
};

export default handler;
