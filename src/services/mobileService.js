import http from "./httpService"
export function getMobileDetails(){
    return http.get(http.apiUrl+"/mobiles")
}

export function getOneMobileDetails(mobileId){
    return http.get(`${http.apiUrl}/mobiles/${mobileId}`)
}

export function addMobileDetails(data){
    return http.post(http.apiUrl+"/mobiles",data)
}

export function updateMobileDetails(data,id){
    return http.put(`${http.apiUrl}/mobiles/${id}`,data)
}

