export function csvToJsonConverter(csv: string) {
    const csvArray = csv.split('\n');
    var headers = csvArray.splice(0, 1);

    var result = csvArray.map(function (row) {
        var object = {};
        var rowData = row.split(',');
        headers[0].split(',').forEach(function (value, index) {
            object = constructObj(value, object, rowData[index]);
        });
        return object;
    })

    return result;

}
function constructObj(str: string, parentObj: any, data: any) {
    if (str.split('.').length === 1) {
        parentObj[str] = data;
        return parentObj;
    }

    var curKey = str.split('.')[0];
    if (!parentObj[curKey])
        parentObj[curKey] = {};
    parentObj[curKey] = constructObj(str.split('.').slice(1).join('.'), parentObj[curKey], data);
    return parentObj;
}