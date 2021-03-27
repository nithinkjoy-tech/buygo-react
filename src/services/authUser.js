import jwtDecode from "jwt-decode";
import http from "./httpService"

export async function loginUser(userData){
    let {data:jwt}= await http.post(http.apiUrl+"/users/login",userData)
    localStorage.setItem("token",jwt)
}

export function logoutUser(){
    localStorage.removeItem("token")
}

export function getCurrentUser(){
    try{
        let token=localStorage.getItem("token")
        return jwtDecode(token)
    }catch(ex){
        return ""
    }
}