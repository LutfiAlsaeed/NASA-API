document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice);
  const url = `https://api.nasa.gov/planetary/apod?api_key=QiQlHB5d5C4Ow4QvfnhH9K2pvLMQ74XHSUiDa7YR&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('img').style.display = "block";
        document.querySelector('img').src=data.hdurl;
        document.querySelector('p').innerText=data.explanation
        document.querySelector('h2').innerText=data.title
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
