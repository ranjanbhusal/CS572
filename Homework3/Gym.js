var EventEmiiter = require('events');

class Gym extends EventEmiiter {
    constructor() {
        super();
		setInterval(
			() => this.emit('boom', 'Athlete is woking out'), 1000
		);
    };
}


var gymMan = new Gym();
gymMan.on('boom', (data) => console.log(data));


