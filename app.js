
// sync
function logWord (testWord) {
  setTimeout(() => {
    console.log(testWord)
  }, Math.floor(Math.floor(Math.random() * 100 + 1)))
}

function logAll1 () {
  logWord('sync_A1')
  logWord('sync_A2')
  logWord('sync_A3')
  logWord('sync_A4')
}

// async part 1: callback
function logword2 (word2, callback) {
  setTimeout(() => {
    console.log(word2)
    callback()
  }, Math.floor(Math.random() * 100 + 1))
}

function logAll2 () {
  logword2('callback1', () => {
    logword2('callback2', () => {
      logword2('callback3', () => {
        logword2('callback4', () => {
          // callback hell
        })
      })
    })
  })
}

// async part 2: promise
function logword3 (word3) {
  return new Promise((resolve, reject) => {
    console.log(word3)
    resolve()
  })
}

function logAll3 () {
  logword3('promise-1')
    .then(() => {
      return logword3('promise-2')
    })
    .then(() => {
      return logword3('promise-3')
    })
    .then(() => {
      return logword3('promise-4')
    })
}

async function logAll4 () {
  await logword3('async-11')
  await logword3('async-22')
  await logword3('async-33')
  await logword3('async-44')
}

console.log(Math.floor(Math.random() * 100 + 1))

logAll1() // sync
logAll2() // callback
logAll3() // promise
logAll4() // async await
