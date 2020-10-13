
import CryptoJS from 'crypto-js'
import Encoder from '../Encoder'

const meta = {
  name: 'Aes-cipher',
  title: 'Aes cipher',
  category: 'Modern cryptography',
  type: 'encoder'
}



/**
 * Encoder brick for Bifid cipher encryption and decryption
 */
export default class BifidCipherEncoder extends Encoder {
  /**
   * Returns brick meta.
   * @return {object}
   */
  static getMeta () {
    return meta
  }

  /**
   * Constructor
   */
  constructor () {
    super()
    this.addSetting({
      name: 'key',
      type: 'text',
      value: '',
      uniqueChars: true,
      minLength: 0,
      caseSensitivity: false
    })

    // Create internal Polybius square encoder instance
    this._aesencode = CryptoJS.AES;
    this._key = '';
  }

  /**
   * Performs encode on given content.
   * @protected
   * @param {Chain} content
   * @return {number[]|string|Uint8Array|Chain} Encoded content
   */
  async performEncode (content) {
    // Encode content to coordinates using Polybius square
    // As I and J shares the same alphabet position, replace all J chars
    console.log(content.getString());
    const key = this.getSettingValue('key')._string;
    console.log(key);
    const result = CryptoJS.AES.encrypt(
      content.getString(), key).toString(CryptoJS.enc.Utf8);
    console.log(result);
    return result;
  }

  /**
   * Performs decode on given content.
   * @protected
   * @param {Chain} content
   * @return {number[]|string|Uint8Array|Chain} Decoded content
   */
  async performDecode (content) {
    console.log(content.getString());
    const key = this.getSettingValue('key')._string;
    console.log(key);
    const result = CryptoJS.AES.decrypt(
      content.getString(), key).toString(CryptoJS.enc.Utf8);
    console.log(result);
    return result;
  }

  /**
   * Triggered when a setting field has changed.
   * @param {Field} setting Sender setting field
   * @param {mixed} value New field value
   */
  settingValueDidChange (setting, value) {
    switch (setting.getName()) {
      case 'key':
        // Derive Polybius square alphabet from the key setting
        this._key = value.extend("123");
        break
    }
  }
}
