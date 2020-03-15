const initialState = {
    cart: [],
    itemCount: 0,
    allItems: []
}

const cartMap = new Map();

const reducer = (state = initialState, action) => {
    const newState = {...state};
    
    switch(action.type){
        case "ALL_ITEMS":
        newState.allItems = [...action.list];
        return newState;

        case "ADD_TO_CART": 
        newState.cart = [...newState.cart, action.item] ;
        newState.itemCount = cartMap.size;
        return newState;

        case "REMOVE_FROM_CART":
        return state;

        case "SORT_BY_HIGH_LOW":
        newState.allItems = [...newState.allItems.sort((a,b) => b.price-a.price)];
        return newState;

        case "SORT_BY_LOW_HIGH":
        newState.allItems = [...newState.allItems.sort((a,b) => a.price-b.price)];
        return newState;

        case "SORT_BY_DISCOUNT":
        newState.allItems = [...newState.allItems.sort((a,b) => b.discount-a.discount)];
        return newState;

        default:
        return state;
    }
}

export default reducer;