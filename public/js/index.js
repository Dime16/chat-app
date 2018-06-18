		var socket = io();

		socket.on('connect', function () {
			console.log('Connected on server');


			socket.emit('createMessage', {
				from: "dime",
				text: "What up?"
			});
		});



		socket.on('disconnect', function () {
			console.log('Disconnected from server');
		});

		socket.on('newMessage', function (message) {
			console.log('newMessage ', message);
		});