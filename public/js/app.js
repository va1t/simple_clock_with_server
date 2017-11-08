

document.getElementById('clock').innerHTML = getTime();

function getTime() {
  fetch('localhost:3000/time', {
    method: 'GET'
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById('clock').innerHTML = data.body;
  })
  .catch((err) => {
    console.log('Error: ', err);
  });
}