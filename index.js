const express= require('express')
const {connectMongo}= require('./connect')
const app= express();
const PORT=3001;
const router= require('./routes/url')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/url', router);

connectMongo('mongodb://localhost:27017/short-url')
.then(()=>console.log("MongoDB connected"))

app.listen( PORT,()=>console.log("Server started at PORT: ", PORT))


