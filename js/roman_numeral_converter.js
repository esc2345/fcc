function convertToRoman(num) {
  const ROMANS = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  let answer = [];
  let remaining = num;
  for(let i in ROMANS){
    while(remaining >= ROMANS[i][0]){
      answer.push(ROMANS[i][1]);
      remaining -= ROMANS[i][0];
    }
  }
  return answer.join('');
}

console.log(convertToRoman(36));
