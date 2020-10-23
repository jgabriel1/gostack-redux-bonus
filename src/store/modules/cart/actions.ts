import { Actions, IProduct } from './types';

export function addProductToCartRequest(product: IProduct) {
  return {
    type: Actions.addProductToCartRequest,
    payload: {
      product,
    },
  };
}

export function addProductToCartSuccess(product: IProduct) {
  return {
    type: Actions.addProductToCartSuccess,
    payload: {
      product,
    },
  };
}

export function addProductToCartFailure(productId: number) {
  return {
    type: Actions.addProductToCartFailure,
    payload: {
      productId,
    },
  };
}
