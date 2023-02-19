import { Body, Request, Response, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { parseString } from 'xml2js';
import { serialize } from 'v8';

@Controller('testbase/ws/ExchangerRMS')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/')
  XMLInput(@Request() InputXML, @Response() Output) {
    const xmlreq = InputXML.body;
    console.log(xmlreq);

    const xml = '<root>Hello world<root>';
    parseString(xml, function (err, result) {
      console.log(result);
    });
    Output.set('Content-Type', 'text/xml; charset=utf-8');

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const xml2js = require('xml2js');

    const obj = { name: 'Super', Surname: 'Man', age: 23 };

    const builder = new xml2js.Builder();
    const xmlka = builder.buildObject(obj);
    Output.send(xmlka);
    //return this.appService.Input(InputXML);
  }

  @Post('/testinput')
  XMLOutput(@Body() XMLInput) {
    return this.appService.TestInput(XMLInput);
  }

  //@Get('/path')
  // xmlResponse(@Request() req,@Response() res) {
  //     const xmlreq = req.body;
  //      res.set('Content-Type', 'text/xml');
  //      res.send(xml(some_object));
  //  }

  //var parseString = require('xml2js').parseString;
  //var xml = "<root>Hello xml2js!</root>"
  //parseString(xml, function (err, result) {
  //   console.dir(result);
  //});
}
