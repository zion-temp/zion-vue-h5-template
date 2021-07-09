let baseUrl;
if(process.env.NODE_ENV=="development"){
    baseUrl = "http://52.80.185.166:8091"
}else {
    baseUrl = "http://192.168.1.104:8080/"
}

export default baseUrl;