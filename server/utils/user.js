[{
	id: 'ghjjhgjkiou898',
	name: 'Dime',
	room: 'The Office Fans'
}]

// addUser (id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
	constructor () {
		this.usersList = [];
	}
	addUser (id, name, room) {
		var user = {id, name, room};
		this.usersList.push(user)
		return user;
	}
	removeUser (id) {
		//return user that was removed
		var clearedArr = this.usersList.filter((user) => user.id !== id)
		return clearedArr.map((user) => user.name);
	}
	getUser (id) {
		return this.usersList.filter((user) => user.id === id)[0];

	}
	getUserList (room) {
		var users = this.usersList.filter((user) => user.room === room);
		var namesArray = users.map((user) => user.name);

		return namesArray;
	}
}

module.exports = {Users};

// class Person {
// 	constructor (name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old`
// 	}
// }

// var me = new Person('Dime', 34);
// var description = me.getUserDescription();

// console.log(description);
