const expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {
	let from = 'Dime';
	let text = 'Shu prais';
	let message = generateMessage(from, text);

	expect(message.from).toBe('Dime');
	expect(message.text).toBe(text);
	expect(typeof message.createdAt).toBe('number');
    
});