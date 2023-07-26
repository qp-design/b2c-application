

export const checkMobile = (_: any, value: string) => {
  if (/^1[3456789]\d{9}$/.test(value)) {
    return Promise.resolve()
  }

  return Promise.reject({ required: true, message: "请输入正确手机号" })
}

export const mobileRex = /^1[3456789]\d{9}$/;
