
// import { readFileSync } from 'fs'

const fs2 = require('fs')

// 同步
// const file2 = fs2.readFileSync('./testfile-10MB')  // if file size is very BIG?! 1GB? 5GB?!

// callmeback function
function readFileFinished (err, data) {
  if (err) throw err
  console.log(`README is here: ${data}`)
}

fs2.readFile('./testfile-10MB', readFileFinished)

// console.log(file2) //buffer
// console.log(file2.toString('utf-8'))

const arr = []

for (let i = 2; i <= 99999; i += 2) {
  arr.push(i)
}
console.log(`arr ${arr[1004]}`)
