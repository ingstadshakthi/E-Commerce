export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
}

export const updateCart = (state) => {
    //calculate items price
    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0));

    //calculate shipping price if over 100 dollar free else 10 dollar
    state.shippingPrice = addDecimals(Number(state.itemsPrice) > 100 ? 0 : 10);

    //calculate tax price 15 percent
    state.taxPrice = addDecimals(Number(state.itemsPrice) * 0.15);

    //calculate total price
    state.totalPrice = addDecimals(Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice));

    localStorage.setItem('cart', JSON.stringify(state))
    return state;
}