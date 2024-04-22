import * as _jsonwebtoken from "jsonwebtoken"
const jsonwebtoken = <any>_jsonwebtoken

import {
  sign as signType,
  verify as verifyType,
  decode as decodeType,
  SignOptions,
  VerifyOptions,
  Algorithm,
} from "jsonwebtoken"

const sign: typeof signType = jsonwebtoken.default.sign
const verify: typeof verifyType = jsonwebtoken.default.verify
const decode: typeof decodeType = jsonwebtoken.default.decode

export {
  sign,
  verify,
  decode
}
export type {
  Algorithm,
  SignOptions,
  VerifyOptions
}
