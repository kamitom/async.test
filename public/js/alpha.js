// Recreate missing reference to require
// import { createRequire } from 'module'

// const require = createRequire(import.meta.url)

const fetch = require('fetch')

document.getElementById('btnId1').addEventListener('click', () => {
  const locationName = document.getElementById('id_location').value
  console.log(locationName)
  getCovidData().then(covidData => {
    document.getElementById('id_ansTxt').innerText = covidData.confirmed.value
  })
})

const getCovidData = async () => {
  console.log('index.html 10 | Processing...')
  const request = await fetch('https://covid19.mathdro.id/api')
  const data = await request.json()
  console.log(data)
  return data
}
