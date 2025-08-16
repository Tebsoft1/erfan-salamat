export type SignupType = {
  birthDay: string
  fname: string
  gender: number
  lname: string
  mobile: string
  nationalCode: string
}
export type SendOTPType = {
  phoneNumber: string
  typeId: number
}

export type VerifyOTPType = {
  phoneNumber: string
  otp: string
  typeId: number
}

export type VerifyOTPDataResponseType = {
  token: string
  expiration: string
  userid: string
  fullName: string
}
