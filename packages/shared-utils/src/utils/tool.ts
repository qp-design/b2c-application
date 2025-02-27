export const fixPrice = (num: number = 0, icon = '￥') => {
  if (num) {
    return (
      icon +
      num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  }
  return `${icon}0`;
};
