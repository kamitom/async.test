
const getCovidData = async () => {
  console.log('index.html 10 | Processing...')
  const request = await fetch('https://covid19.mathdro.id/api')
  const data = await request.json()
  return data
}

export {
  getCovidData as getCovid19
}
