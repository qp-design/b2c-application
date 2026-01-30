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

export const fullPath = (value = '') => {
  if (!value) {
    return value;
  }
  if (value.startsWith('http')) {
    return value;
  }
  if (value.startsWith('paas') || value.startsWith('/paas')) {
    return process.env.REACT_APP_BASE_URL + value;
  }

  return process.env.REACT_APP_BASE_URL + '/paas/shop/' + value;
};

export const formatTime = (time: number, info: string = '') => {
  const seconds = Math.floor(time / 1000) % 60;
  const minutes = Math.floor(time / 1000 / 60) % 60;
  const hours = Math.floor(time / 1000 / 60 / 60) % 24;
  const days = Math.floor(time / 1000 / 60 / 60 / 24);

  return {
    seconds,
    minutes,
    hours,
    days
  };
};

export const countDownImpl = (time: number) => {
  const { seconds, minutes, hours, days } = formatTime(time);

  const result = [];

  if (days > 0) {
    result.push({ label: '天', value: days });
  }

  result.push(
    ...[
      {
        label: '时',
        value: hours
      },
      {
        label: '分',
        value: minutes
      },
      {
        label: '秒',
        value: seconds
      }
    ]
  );

  return result;
};
