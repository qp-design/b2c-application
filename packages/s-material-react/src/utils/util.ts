export const fixPrice = (num: number = 0) => {
  if (num) {
    return (
      `￥` +
      num.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    );
  }
  return `￥ 0`;
};
export const fixPrice1 = (num: number = 0) => {
  if (num) {
    return num.toLocaleString('en-Us', {
      minimumFractionDigits: 2
    });
  }
  return `0`;
};

export const formatTime = (time: number, info?: string) => {
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / 1000 / 60) % 60;
  const hours = Math.floor(time / 1000 / 60 / 60) % 24;
  const days = Math.floor(time / 1000 / 60 / 60 / 24);

  return `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒${info}`;
};
