import { getCovid19 } from './covid19.js'

const realData = async () => {
  const dd = await getCovid19()

  const covidConfirmed = dd.confirmed.value
  console.log(dd.confirmed.value)
  // document.getElementById('idlbl1').innerText = covidConfirmed
  return covidConfirmed
}

document.getElementById('idbtn1').addEventListener('click', async () => {
  console.log('clicked!!')
  const test = await realData()
  document.getElementById('idlbl1').innerText = test
})
