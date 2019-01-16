
const {from} = require ('rxjs');
const {filter} = require ('rxjs/operators');

Array.prototype.even = function () {
    setImmediate(() => 
    
        from(this)
        .pipe (
            filter(()=>setImmediate(num => num%2 == 1))
        )
        .subscribe(
            num => console.log(num)
        )    
    )
}

Array.prototype.odd = function () {
    setImmediate(() => 
    
        from(this)
        .pipe (
            filter(()=>setImmediate(num => num%2 == 0))
        )
        .subscribe(
            num => console.log(num)
        )    
    )
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end');