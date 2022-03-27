import * as app from "./server/app-server/app-server"
import * as api from "./server/api-server/core"
import mongoose from "mongoose"
import express from "express";


let main: express.Express = express();
main.use(app.default);
main.use(api.default);
main.use(express.static(__dirname +'/server/doc'))
main.get('/doc',(req,res)=>res.sendFile(__dirname+'/server/doc/index.html'))
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true }, async (err) => {
        main.listen(process.env.PORT)
    })
