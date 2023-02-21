import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { json } from 'body-parser';
import { parseString } from 'xml2js';
import { MdataParser } from './mdata.parser';
import { RequestManager } from './request.manager';

//InputData['soap:Envelope']['soap:Body'][0]['GetDataFromRMS'][0]
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  TestInput(InputXML) {
    console.log(InputXML);
    return InputXML;
  }

  Input(InputData) {
    //this.SwithToType(InputData);
    //console.log(InputData['soap:Envelope']['soap:Body'][0]['GetDataFromRMS'][0]['mdata'][0]);
    let DataToWork = MdataParser.Parse(
      InputData['soap:Envelope']['soap:Body'][0]['GetDataFromRMS'][0]['mdata'],
      InputData,
    );
    return DataToWork;
  }

  async SwithToType(InputData) {
    const RequestType = InputData['ТипЗапроса'];

    switch (RequestType) {
      case 'Retail_ItemDesc': {
        RequestManager.CreateItem();
        break;
      }
      case 'Retail_OrderToSupplier': {

        break;
      }
      case 'Retail_Сontractor': {

        break;
      }
    }

    return RequestType;
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
  //ComparateResponceXML() {
//     const ResponceStr = 'Responce';
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const xml2js = require('xml2js');

//     let returnToXML = '';

//     const strSoapEnvelope = 'soap:Envelope';
//     const strGetDataFromRMSResponse = 'm:GetDataFromRMSResponse';
//     const strReturn = 'm:return';

//     returnToXML = this.AddInStrParamSpace(
//       returnToXML,
//       'РезультатОбработкиПакета',
//       'Успешно',
//     );
//     returnToXML = this.AddInStrParamSpace(
//       returnToXML,
//       'Описание',
//       'Заказ поставщику успешно создан/обновлен (Заказ поставщику 01144 от 07.02.2022 12:20:55)'
//     );

//     const Responce = {
//       'soap:Envelope': {
//         'soap:Body': {
//           'm:GetDataFromRMSResponse': {
//             'm:return': returnToXML,
//           },
//         },
//       },
//     };

//     const builder = new xml2js.Builder();
//     let xmlOutput: string = builder.buildObject(Responce);

//     console.log(xmlOutput);

//     xmlOutput = this.placeInString(
//       xmlOutput,
//       ' xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ',
//       xmlOutput.indexOf(strSoapEnvelope) + strSoapEnvelope.length,
//     );
//     xmlOutput = this.placeInString(
//       xmlOutput,
//       ' xmlns="http://www.hclass.ru/hl1c " ',
//       xmlOutput.indexOf(strGetDataFromRMSResponse) +
//         strGetDataFromRMSResponse.length,
//     );
//     xmlOutput = this.placeInString(
//       xmlOutput,
//       ' xmlns="http://www.hclass.ru/hl1c ',
//       xmlOutput.indexOf(strReturn) + strReturn.length,
//     );

//     return xmlOutput;
//   }


//   placeInString(str, substr, index) {
//     return str.substr(0, index) + substr + str.substr(index);
//   }
//   // <?xml version="1.0" encoding="utf-8"?>
//   // <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//   //   <soap:Body>
//   //     <GetDataFromRMSResponse xmlns="http://www.hclass.ru/hl1c">
//   //       <return>string</return>
//   //     </GetDataFromRMSResponse>
//   //   </soap:Body>
//   // </soap:Envelope>
// }
//   
}
