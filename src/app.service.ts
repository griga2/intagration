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
    const val = ' Val  =';
    //const title = ;
    const guid = '<' + id;
    const obj = {
      GetDataFromRMS: { mdata: [paramID + val + 'Успешно' + '>'] },
    };

    const builder = new xml2js.Builder();
    const xmlOutput = builder.buildObject(obj);

    return xmlOutput;
  }

  ComparateResponceXML() {
    const ResponceStr = 'Responce';
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const xml2js = require('xml2js');

    let returnToXML = 'lol';

    const strSoapEnvelope = 'soap:Envelope';
    const strGetDataFromRMSResponse = 'GetDataFromRMSResponse';
    const Responce = {
      'soap:Envelope': {
        'soap:Body': {
          GetDataFromRMSResponse: {
            return: returnToXML,
          },
        },
      },
    };

    const builder = new xml2js.Builder();
    let xmlOutput: string = builder.buildObject(Responce);

    console.log(xmlOutput);

    xmlOutput = this.placeInString(
      xmlOutput,
      ' xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ',
      xmlOutput.indexOf(strSoapEnvelope) + strSoapEnvelope.length,
    );
    xmlOutput = this.placeInString(
      xmlOutput,
      ' xmlns="http://www.hclass.ru/hl1c" ',
      xmlOutput.indexOf(strGetDataFromRMSResponse) +
        strGetDataFromRMSResponse.length,
    );

    return xmlOutput;
  }

  placeInString(str, substr, index) {
    return str.substr(0, index) + substr + '\n' + str.substr(index);
  }
  // <?xml version="1.0" encoding="utf-8"?>
  // <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  //   <soap:Body>
  //     <GetDataFromRMSResponse xmlns="http://www.hclass.ru/hl1c">
  //       <return>string</return>
  //     </GetDataFromRMSResponse>
  //   </soap:Body>
  // </soap:Envelope>
}
