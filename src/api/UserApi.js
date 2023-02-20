import ApiManager from "./ApiManager";

export const user_login = async data =>{
    try {
        const result = await ApiManager('/auth/signin',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}

export const startClass = async data =>{
    try {
        const result = await ApiManager('/teacher/startclass',{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            data: data
        })
        return result
    } catch (error) {
        return error.response.data
    }
}
