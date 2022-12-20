const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = app => {
    app.use(
        createProxyMiddleware('/fosils',{
            target:'https://sbc-sebatcabut.herokuapp.com',
            changeOrigin : true
        })
    )
}