import CryptoJS from 'crypto-js';
class CryptoFile {
	constructor() {
		// 秘钥
		this.key = CryptoJS.enc.Utf8.parse('CRYPTOJSKEY00000'); // 16位
		this.iv = CryptoJS.enc.Utf8.parse('CRYPTOJSKEY00000');
	}
	// 加密
	encrypt(word) {
		let words = CryptoJS.enc.Utf8.parse(word);
		let encrypted = CryptoJS.AES.encrypt(words, this.key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
		return encrypted.toString();
	}

	// 解密
	decrypt(word) {
		let decrypt = CryptoJS.AES.decrypt(word, this.key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
		let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
		return decryptedStr.toString();
	}
}
const crypto = new CryptoFile();
export default crypto;
