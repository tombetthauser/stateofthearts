const csvPojoParser = (rawString) => {
  const newLineSplitArr = rawString.split('\n');
  // const jsonArr = [];

  const columns = newLineSplitArr.shift().split(",");

  const jsonArr = newLineSplitArr.map(row => {
    const rowArr = row.split(",");
    const rowObj = {}
    rowArr.forEach((ele, i) => {
      rowObj[columns[i]] = ele;
    });
    return rowObj;
    // return columns.reduce((acc, column, i) => {
    //   acc[column] = row.split(",")[i];
    //   return acc;
    // }, {})
  });

  return jsonArr;
  
  // you will have an array containing all rows as string
  
  // ["fname, lname, uid, phone, address","John, Doe, 1, 444-555-6666, 34 dead rd",...]
  
  // You have to break it again by comma using .split(','), then separate the headers and push it into an Javascript Object:
  
  // var jsonObj = [];
  // var headers = arr[0].split(',');
  // for(var i = 1; i < arr.length; i++) {
  //   var data = arr[i].split(',');
  //   var obj = {};
  //   for(var j = 0; j < data.length; j++) {
  //      obj[headers[j].trim()] = data[j].trim();
  //   }
  //   jsonObj.push(obj);
  // }
  // JSON.stringify(jsonObj);
}

