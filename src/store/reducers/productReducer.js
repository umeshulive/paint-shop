let initState = [];

const productReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            console.log('added product', action.product);
            return state;
        case 'ADD_PRODUCT_ERROR':
            console.log(`Error occured while addding product, ${action.err}`);
            return state;
        case 'GET_PRODUCT':
            console.log(action);
            return action.products;            
        default:
            return state;
    }
}

export default productReducer;