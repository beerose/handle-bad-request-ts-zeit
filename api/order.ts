import { NowRequest, NowResponse } from '@now/node';
import * as t from 'io-ts';

import { OrderInput } from './hasuraCustomTypes';
import { handleBadRequest } from './handleBadRequest';

// This could be genrated
const OrderReqV = t.type({
  addressID: t.string,
  cartID: t.string,
  userID: t.string,
});

interface AddUserRequest extends NowRequest {
  body: {
    input: { payload: t.TypeOf<typeof OrderReqV> };
  };
}

const handler = async (request: AddUserRequest, response: NowResponse) => {
  handleBadRequest(OrderReqV, request.body.input.payload, response).then(() => {
    // some actions

    return response.json({
      data: { success: true, message: 'message' },
    });
  });
};

export default handler;
