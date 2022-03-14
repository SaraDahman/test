fetch(
  'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=1996-10-04&end_date=1996-10-06'
)
  .then((res) => res.json())
  .then((data) => console.log('pof', data))
  .catch((err) => console.log(err));

fetch('https://api.spacexdata.com/v3/launches/')
  .then((res) => res.json())
  .then((data) => console.log('Ls', data))
  .catch((err) => console.log(err));
