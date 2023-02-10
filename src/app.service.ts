import { Injectable } from '@nestjs/common';
import Axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async checkConnect() {
    const url = 'https://testbase/ws/ExchangerRMS?wsdl';

    const headers = {
      'user-agent': 'sampleTest',
      'Content-Type': 'text/xml;charset=UTF-8',
      'soapAction': 'fuck',
      'autorization': 'Base',
    };

    const xml = {

    };
    
    axios({
      method: 'post',
      url,
      headers,
      data: xml,
    }).then((responce) =>   {
      const data = parser.parse(response.data, {});
      console.log(data['s:Envelope']['s:Body'].GetByUIDResponse.GetByUIDResult)
    }).catch((error) => {
      console.error(`SOAP FAIL: ${error}`);
    });
    

    return 'fuck you';
  }
}
