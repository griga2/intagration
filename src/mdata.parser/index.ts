import { table } from "console";

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
      let ParamID = 'Param huli';
      let Value = 'Value hulie';
      if (str.includes('Param')) {
        ParamID = str.substring(
          10 + str.indexOf('Param'),
          str.indexOf('Val') - 2,
        );
        Value = str.substring(str.indexOf('Val') + 5, str.lastIndexOf('"'));
        ParamID.trim();
        Value.trim();

        console.log(obj);
        obj = { space: [{ ParamID: ParamID }, { Value: Value }] };
        paramMas.push(obj);
      }
      //  else if (str.includes('Row') && addToRow != true) {
      //   addToRow = true;
      //   LesTimeRow.push({ Row: [] });
      // } else if (str.includes('Row') && addToRow == true) {
      //   addToRow = false;
      //   paramMas.push({ Row: LesTimeRow });
      //   LesTimeRow = [];
      // }
        else if (str.includes('Col')) {
        //colID = str.substring('');
        //value = str.substring('');
        //LesTimeTable.push({[colID]:value});
      } else if (str.includes('Table') && addToTable == false) {
        addToTable = true;

        tableName = str.substring(
          str.indexOf('Table' + 8, str.indexOf('Val') - 2),
        );
        console.log(tableName);
        
      } else if (str.includes('/Table') && addToTable == true) {
        paramMas.push({ [tableName]: LesTimeTable });
      }
    }

    InputData['soap:Envelope']['soap:Body'][0]['GetDataFromRMS'][0]['mdata'] =
      paramMas;
    return InputData;
  }
}
