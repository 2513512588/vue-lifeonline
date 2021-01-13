//vue.config.js代码起始示例
module.exports = {
    configureWebpack:{
        module: {
            rules: [
                {
                    test: /\.(woff|ttf|eot|ttc)$/,//fonts目录下四个文件后缀名
                    use: ["url-loader"],
                },
            ]
        }
    } //若该配置文档并没有解决原webpack可配置的问题，可自行配置webpack原生代码
}
