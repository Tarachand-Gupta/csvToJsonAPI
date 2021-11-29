import { Request, Response } from 'express';
import fs, { PathOrFileDescriptor } from 'fs';
import { csvToJsonConverter } from '../utils/convert';

export function csvToJson(req: Request, res: Response) {
    const csvFilePath = req.file?.path;
    const csv = fs.readFileSync(csvFilePath as PathOrFileDescriptor, 'utf8');
    const json = csvToJsonConverter(csv);
    // console.log(json);
    res.send(json);
}


