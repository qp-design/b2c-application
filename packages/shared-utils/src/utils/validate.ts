export const checkMobile = (_: any, value: any) => {
  return new Promise((resolve, reject) => {
    if (!/^1[3456789]\d{9}$/.test(value) && value) {
      reject('请输入正确手机号');
    } else {
      resolve('');
    }
  });
};

export const checkMail = (_: any, value: any) => {
  return new Promise((resolve, reject) => {
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value) && value) {
      reject('请输入正确的邮箱地址');
    } else {
      resolve('');
    }
  });
};
