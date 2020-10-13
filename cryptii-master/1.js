var CryptoJS = require("crypto-js");
var ciphertext = CryptoJS.AES.decrypt("U2FsdGVkX1+qtU8KEGmMJwGgKcPUK3XBTdM+KhNRLHSCQL2nSXaW8++yBUkSylRp", "").toString(CryptoJS.enc.Utf8);
console.log(ciphertext)
var ciphertext = CryptoJS.AES.encrypt("flag{DISJV_Hej_UdShofjyed}", "").toString();
console.log(ciphertext)
var ciphertext = CryptoJS.AES.decrypt("U2FsdGVkX1+Fmf8dluH0jvSeIy1EIPNLR+48oE5ARU2QhOkxVXXPH1ln2op+703a", "").toString(CryptoJS.enc.Utf8);
console.log(ciphertext)