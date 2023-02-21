export class MdataParser {
  static Parse(mdataString: string, InputData) {
    //console.log(mdataString);
    //mdataString = mdataString.replace('&lt')
    const strMas = mdataString[0].split('>');
    const paramMas: Array<object> = [];
    let obj: object;
    let addToTable = false;
    let LesTimeTable = [];
    let tableName = '';
    for (const str of strMas) {
      //console.log(str);
      if (str.includes('Param')) {
        let paramID = str.substring(
          10 + str.indexOf('Param'),
          str.indexOf('Val') - 2,
        );
        let value = str.substring(str.indexOf('Val') + 5, str.lastIndexOf('"'));
        paramID.trim();
        value.trim();

        console.log(obj);
        obj = { [paramID]: value };
        paramMas.push(obj);
      } else if (str.includes('Row') && true != true) {
      } else if (str.includes('Row') && true == true) {
      } else if (str.includes('Col')) {
        let colID = str.substring(
          str.indexOf('Col') + 8,
          str.indexOf('Val') - 2,
        );
        //console.log(colID);
        let value = str.substring(
          str.indexOf('Val') + 4,
          str.lastIndexOf('/') - 1,
        );
        //console.log(value);
        LesTimeTable.push({ [colID]: value });
      } else if (str.includes('Table') && addToTable == false) {
        addToTable = true;

        tableName = str.substring(
          str.indexOf('"') + 1,
          str.lastIndexOf('"') - 1,
        );
        //console.log(tableName);
      } else if (str.includes('/Table') && addToTable == true) {
        console.log(LesTimeTable.length);
        paramMas.push({ [tableName]: LesTimeTable });
      }
    }

    InputData['soap:Envelope']['soap:Body'][0]['GetDataFromRMS'][0]['mdata'] =
      paramMas;
    return InputData;
  }
}
