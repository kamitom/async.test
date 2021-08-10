// Recreate missing reference to require
// import { createRequire } from 'module'

// const require = createRequire(import.meta.url)

const fetch = require('fetch')

console.log('index.html 7 | Get Covid Data')

const getCovidData = async () => {
  console.log('index.html 10 | Processing...')
  const request = await fetch('https://covid19.mathdro.id/api')
  const data = await request.json()
  return data
}

const getMoreAPIDataWithUrl = async (newUrl) => {
  const request = await fetch(newUrl)
  const data = await request.json()
  return data
}

const callDataInOrder = async () => {
  const covidData = await getCovidData()
  console.log('index.html 27 | covid Data', covidData)
  document.getElementById('total-cases').innerText =
          covidData.confirmed.value

  const detailData = await getMoreAPIDataWithUrl(
    covidData.confirmed.detail
  )
  console.log('index.html 31 | detail Data', detailData)
  const dd =
          detailData[919].countryRegion + ',' + detailData[919].confirmed
  document.getElementById('city-of-origin').innerText = dd
}

callDataInOrder()
