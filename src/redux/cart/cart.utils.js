export const addItemToCart = (cartItems, cartItemToAdd) => {
    console.log(cartItems);
    console.log(cartItemToAdd);
    const existingCartItem = cartItems.find(cartItem => {
        // console.log(`cartItem:: ${cartItem.id}`)
        console.log(cartItem)
        console.log(cartItem.id)
        return cartItem.id === cartItemToAdd.id
    })

    console.log({existingCartItem})

    if (existingCartItem) {
        let result = cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ?
                {...cartItem, quantity: cartItem.quantity + 1} : 
                cartItem
            )
        console.log('result inside if ::', result)
        return result
    }

    let result = [...cartItems, { ...cartItemToAdd, quantity: 1}]
    console.log('result outside if ::', result)
    return result
}