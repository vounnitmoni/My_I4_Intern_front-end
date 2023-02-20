import ApiManager from "./ApiManager"
export const userinfo = async data =>{
    try {
        const result = await ApiManager('/teacher/teacherinfo',{
            method:"GET",
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