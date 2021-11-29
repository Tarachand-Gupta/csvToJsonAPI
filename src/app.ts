import express from 'express';
import * as dotenv from "dotenv";
import routes from './routes/routes';

//configs
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();

//app middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
    console.log(`Server started on port ${port}`);

    routes(app);

});