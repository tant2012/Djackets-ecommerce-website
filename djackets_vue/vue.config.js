module.exports ={
    devServer: {
        proxy: {
          "^/api": {
            target: "http://127.0.0.1:8000",
            changeOrigin: true,
            pathRewrite: {
              // 路径重写，
              "^/api": "/api", // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
            },
          },
        },
        host:'0.0.0.0'
      },
}