module.exports = {
	"port" : process.env.PORT || 3000,
	database : 'mongodb://localhost:27017/mydata',     //local
    // database : {
    //     username: "mongoAdminBIT",
    //     password: "Btt~2016^MdB",
    //     authDb: "admin",
    //     port: 27017,
    //     host: "127.0.0.1",
    //     dbName: "mydata"
    // },
	"secretKey" : "hyrgqwjdfbw4534efqrwer2q38945765",
	dev_mode : true,
    __site_url: 'http://localhost/',
	__root_dir: __dirname,
	"imagepath": "http://localhost:3000/uploads/"
}
