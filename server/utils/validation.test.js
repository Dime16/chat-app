const expect = require('expect');
var {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-sting values', () => {
		var test = isRealString('');

		expect(test).toBe(false);
	});

	it('should reject strings with only spaces', () => {
		var test = isRealString('     ');

		expect(test).toBe(false);
	});

	it('should allow strings with non-space characters', () => {
		var test = isRealString('  Dime is awesome!  ');

		expect(test).toBe(true);
	})

})