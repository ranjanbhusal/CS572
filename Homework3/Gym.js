var EventEmiiter = require('events');

class Gym extends EventEmiiter {
    constructor() {
        super();
        this.on('boom', function() {
            setInterval(
                () => console.log('Athlete is working out!!!'), 1000
            );
        });
    }
}

var gymMan = new Gym();
gymMan.emit('boom');


