
setTimeout(() => {
  console.log('2 seconds up!')
}, 2000)

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: '0',
      longitude: '0'
    }

    callback(data)
  }, 2000)
}

geocode('ny', (data2) => {
  console.log(data2)
})

const addTest = (n1, n2, callbackFunc) => {
  setTimeout(() => {
    const ansData = n1 + n2
    callbackFunc(ansData)
  }, 2000)
}

addTest(101, 200, (ansData2) => {
  console.log('sum is ', ansData2)
})

// const getData = geocode('taipei')
// console.log(getData)
// const getData2 = geocode('tokyo')
// console.log(getData2)
