function AuthResponse(statusCode , message , token){
    return {
        statusCode:statusCode,
        message: message,
        token: token
    }
}

function DataResponse(statusCode,message , data){
    return {
        statusCode: statusCode,
        message: message,
        data: data
    }

}
module.exports = {
    AuthResponse:AuthResponse,
    DataResponse: DataResponse
}