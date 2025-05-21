function generateSeries(a) {
    let length = (a % 2 === 0) ? a - 1 : a;
    let result = [];
  
    for (let i = 0; i < length; i++) {
      result.push(2 * i + 1);
    }
  
    return result.join(', ');
  }
  
  // Testing
  console.log(generateSeries(1))
  console.log(generateSeries(2));
  console.log(generateSeries(3));
  console.log(generateSeries(4));
  console.log(generateSeries(5));
  console.log(generateSeries(6));
  