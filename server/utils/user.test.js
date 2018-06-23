const expect = require('expect');
const {Users} = require('./user');

describe('Users', () => {
	var users;

	beforeEach (() => {
		users = new Users();
		users.usersList = [{
			id: '1',
			name: 'Dime',
			room: 'React Course'
		}, {
			id: '2',
			name: 'Ivan',
			room: 'Node Course'
		}, {
			id: '3',
			name: 'Skutko',
			room: 'Node Course'
		}]

	})


	it('should add new user', () => {
		var users = new Users();
		var user = {
			id: '123',
			name: 'Dime',
			room: 'The Office fans'
		};
		var resUser = users.addUser(user.id, user.name, user.room);

		expect(users.usersList).toEqual([user]);
	});

	it('should remove a user', () => {
		var cleared = users.removeUser('3');

		expect(cleared.length).toBe(2);
	});

	it('should not remove a user', () => {
		var cleared = users.removeUser('99');

		expect(cleared.length).toBe(3);
	});

	it('should find a user', () => {
		var oneUser = users.getUser("1");

		expect(oneUser.name).toEqual('Dime');
	});

		it('should not find a user', () => {
		var oneUser = users.getUser("54");

		expect(oneUser).toBeFalsy();
	});

	it('should return names for Node Course', () => {
		var usersNameList = users.getUserList('Node Course');

		expect(usersNameList).toEqual(['Ivan', 'Skutko']);
	});

		it('should return names for React Course', () => {
		var usersNameList = users.getUserList('React Course');

		expect(usersNameList).toEqual(['Dime']);
	})
});