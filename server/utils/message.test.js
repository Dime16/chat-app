const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
		it('should generate correct message object', () => {
		let from = 'Dime';
		let text = 'Shu prais';
		let message = generateMessage(from, text);

		expect(message.from).toBe('Dime');
		expect(message.text).toBe(text);
		expect(typeof message.createdAt).toBe('number');
	}); 
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		let from ='Dime';
		let latitude = 41.997346199999996;
		let longitude = 21.4279956;
		let message = generateLocationMessage(from, latitude, longitude)

		expect (message.from).toBe('Dime');
		expect (typeof message.createdAt).toBe('number');
		expect (message.url).toBe(`https://www.google.com/maps/?q=${latitude},${longitude}`);

	});
});