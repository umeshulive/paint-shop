import { db } from '../../config/fbConfig';

export const addProduct = (product) => {
  return (dispatch, getState) => {
    //async code
    db.collection('products').add({
      ...product,
      quantityAvailable: 10,
      price: 100
    }).then(() => {
      dispatch({ type: 'ADD_PRODUCT', product })
    }).catch((err) => {
      dispatch({ type: 'ADD_PRODUCT_ERROR', err })
    })
  }
}

export const getProduct = () => {
  return (dispatch, getState) => {
    //async code
    db.collection('products').get().then((snapshot) => {
      const products = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        products.push(data);
      })
      dispatch({ type: 'GET_PRODUCT', products })
    }).catch((err) => {
      dispatch({ type: 'GET_PRODUCT_ERROR', err })
    })
  }
}