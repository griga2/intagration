import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { parseString } from 'xml2js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  Input(InputXML) {
    return this.ComporateItemXML('123123123');
  }

  SwithToTipe(InputXML) {
    const type = 'non type';
    return type;
  }

  ComporateItemXML(id) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const xml2js = require('xml2js');
    const paramID = 'Param ID=';
    const val = ' Val =';
    //const title = ;
    const guid = '<' + id;
    const obj = {
      GetDataFromRMS: { mdata: [paramID + val + 'Успешно' + '>'] },
    };

    const builder = new xml2js.Builder();
    const xmlOutput = builder.buildObject(obj);

    return xmlOutput;
  }
}
