export const calculateCartTotal = (cartItems, quantities) => {
    const subTotal = cartItems.reduce((total, food) => {
        return total + food.price * quantities[food.id];
    }, 0);

    const shipping = subTotal > 0 ? 10 : 0;
    const tax = subTotal > 0 ? subTotal * 0.1 : 0;
    const total = subTotal + shipping + tax;

    return { subTotal, shipping, tax, total };
}