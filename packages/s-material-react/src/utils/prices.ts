export const ToPrice = (value: any) => {
  return String(value).indexOf('.') === 1 ? PriceOne(value) : PriceTwo(value);
};
//当有小数点时
const PriceOne = (value: any) => {
  const num1 = Number(value).toFixed(0);
  //拿到小数点后的数字
  const decimals = (Number(value) - Number(num1)).toFixed(2);
  const result: string[] = [];
  num1
    .split('')
    .reverse()
    .forEach((item, index) => {
      result.push(item);
      if ((index + 1) % 3 === 0 && index !== num1.length - 1) {
        result.push(',');
      }
    });
  const result1 = result.reverse().join('') + '.' + String(decimals).slice(2);

  return result1;
};
//没有小数时
const PriceTwo = (value: any) => {
  const num1 = Number(value).toFixed(0);
  const result: string[] = [];
  num1
    .split('')
    .reverse()
    .forEach((item, index) => {
      result.push(item);
      if ((index + 1) % 3 === 0 && index !== num1.length - 1) {
        result.push(',');
      }
    });
  const result1 = result.reverse().join('') + '.00';
  return result1;
};
