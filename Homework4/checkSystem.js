const os = require('os');
const {Observable} = require('rxjs');

//normal way
// console.log('checking your system....');
// function checkSystem () {
//     if(checkFreeMemory() && checkCPUCore()){
//         console.log('System is checked successfully');
//     }    
// }

// function checkFreeMemory(){
//     const freeMem = os.freemem()/1000000000;
//     if(freeMem < 100){
//         console.log('The app needs atleast 4 GB of meeory');
//        return false;
//     }
//     return true;
// }

// function checkCPUCore(){
//     const cpuCore = os.cpus().length;
//     if(cpuCore < 100){
//         console.log('processor is not supported');
//         return false;
//     }
//     return true;
// }

// checkSystem();

//Using Observables

const $checkStatus = Observable.create(function(observer) {
    observer.next('checking your system');
    const freeMem = os.freemem()/1000000000;
    const cpuCore = os.cpus().length;
    if(freeMem < 4){
        observer.next('The app needs atleast 4 GB of meeory');
    }
    if(cpuCore < 2){
        observer.next('processor is not supported');
    }
    observer.complete();
});

function checkSystem() {
    $checkStatus.subscribe(
        (data) => console.log(data),
        (err) => HTMLFormControlsCollection.error(err),
        () => console.log('System is checked successfully')
    );
}

checkSystem();