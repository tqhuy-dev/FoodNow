function AuthResponse(statusCode , message , token){
    return {
        statusCode:statusCode,
        message: message,
        token: token
    }
}

module.exports = {
    AuthResponse:AuthResponse
}