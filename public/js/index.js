		var socket = io();

		socket.on('connect', function () {
			console.log('Connected on server');
		});

	  	socket.on('disconnect', function () {
			console.log('Disconnected from server');
		});

		socket.on('newMessage', function (message) {
			console.log('newMessage ', message);
			var li = jQuery('<li></li>');
			li.text(`${message.from}: ${message.text}`);

			jQuery('#messages').append(li);
		});

		socket.on('newLocationMessage', function (message) {
			var li = $('<li></li>');
			var a = $('<a target="_blank">My current location</a>');

			li.text(`${message.from}: `);
			a.attr('href', message.url);
			li.append(a);
			jQuery('#messages').append(li);
		});


		jQuery('#message-form').on('submit', function (event) {
			event.preventDefault();

			socket.emit('createMessage', {
				from: 'User',
				text: jQuery('[name=message]').val()
			}, function () {

			});
		});

		var locationButton = $('#send-location');
		locationButton.on('click', function () {
			if(!navigator.geolocation) {
				return alert('Geolocation not supported on your browser')
			}

			navigator.geolocation.getCurrentPosition(function (position) {
				socket.emit('createLocationMessage', {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude
				});
				console.log(position);
			}, function () {
				alert('Unable to get location');
			});
		});