import { NowResponse } from '@now/node';
import { fold } from 'fp-ts/lib/Either';
import * as t from 'io-ts';
import { reporter } from 'io-ts-reporters';

type GetDecoded<Decoder> = Decoder extends t.Decoder<any, infer A> ? A : never;

export function handleBadRequest<Decoder extends t.Decoder<any, any>>(
  decoder: Decoder,
  payload: unknown,
  response: NowResponse,
): Promise<GetDecoded<Decoder>> {
  return new Promise(resolve => {
    const result = decoder.decode(payload);
    fold(_err => {
      response.status(400).json({
        errors: {
          error: 'Bad request',
          message: reporter(result).join('\n'),
        },
      });
    }, resolve)(result);
  });
}
