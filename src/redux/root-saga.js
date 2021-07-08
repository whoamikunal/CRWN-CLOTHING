import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.sagas";
import { fetchCollectionsStart, shopSagas } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
    call(cartSagas),
    call(shopSagas),
  ]);
}
