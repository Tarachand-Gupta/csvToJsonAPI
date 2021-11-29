import { Express } from 'express';
import { csvToJson, welcome } from '../functions/converter';
import { upload } from '../utils/multer';
import path from 'path';

export default function (app: Express) {
    app.get('/', welcome);

    app.get('/getjson', upload.single('csv'), csvToJson);
};