
// 0. Callback functions

function fn(callback) {
  callback(1)
}

fn(function (params) {

})

function callback2() {

}

fn(callback2)

// 1. Sync vs Async

// Syncron - blocking
// Codul scris de noi a fost rulat de sus in jos, linie cu linie. Se numeste syncron

// Async - non blocking
// Se face o cerere , nu stim cand va fi rezolvatata
// un callback function cu logica care vrem sa se execute dupa ce sa rezolvat cererea 

// De ce avem nevoie de async?
// Deci asteptam dupa cerere si nu se ruleza codul de sub

// blocking - non blocking

// Daca am avea o operatie foarte costisitoare atunci are fi freez, deci user nu mai poate intereactiona cu app

// https://en.wikipedia.org/wiki/Thread_(computing)
// Javascript este limbaj single thread
// Java, C++ este limbaj multi thread


// 2. setTimeout & setInterval
// 3. Event Loop - https://www.youtube.com/watch?v=8aGhZQkoFbQ

function runAsync() {
  console.log('run 1 after 1s')
}

function runAsync2() {
  console.log('run 2 after 1s')
}

setTimeout(runAsync, 1000 * 1)
setTimeout(runAsync2, 1000 * 1)

console.log('codul de aici ruleaza inaite de runAsync')


function loopRun() {
  console.log('------- setInterval')
}

const intervalId = setInterval(loopRun, 1000);

setTimeout(function () {
  clearInterval(intervalId)
}, 1000 * 10)

const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
})

// for (var index = 0; index < 99999999999999999999999999; index++) {
//   console.log(index);
// }


// 4. Workshop Digital clock