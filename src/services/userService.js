import http from "./httpService"

export function registerUser(data){
    return http.post(http.apiUrl+"/users/register",data)
}

export function addToCart(data){
    return http.post(`${http.apiUrl}/users/addtocart`,data)
}

export function changeQuantity(mobileId,userId,operation){
    let data={mobileId,userId,operation}
    return http.post(http.apiUrl+`/users/changequantity`,data)
}

export function getCartItems(userId){
    return http.post(http.apiUrl+`/users/getcartitems`,{id:userId})
}

export function removeCartItem(userId,mobileId){
    return http.post(http.apiUrl+`/users/removecartitem`,{userId,mobileId})
}