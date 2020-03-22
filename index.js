const express = require('express'); //подключили библиотеку
const router = require('./routes/index');
require('./db.connection');
const cors = require('cors');


const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));//parse body чтобы сервер мог прочитать бади из запроса пользователя
app.use(express.json());
app.use("/api", router);

app.use((err, req, res, next) => {

    console.log(err);
    switch (err.name) {
        case "ValidationError":
            return res.status(400).send(err.message);
        case "CastError" :
            return res.status(400).send(err.message);
        case "MissingSchemaError" :
            return res.status(400).send(err.message);
       // default:
           // return res.status(500).send('Что-то пошло не так')
    }
});

app.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
});