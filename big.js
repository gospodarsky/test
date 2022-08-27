async function getImageURL() {
  const response = await fetch('https://dog.ceo/api/breeds/image/random').then((response) => response.json());
  return response.message;
}

async function getLinks() {
  const response = await fetch('https://dog.ceo/api/breeds/list/all').then((response) => response.json());
  const breeds = Object.keys(response.message);
  shuffleArray(breeds);
  return breeds.slice(0, 10);
}

async function getRandomLink(breed) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`).then((response) => response.json());
  return response.message;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

const promise1 = new Promise(async (resolve) => {
  resolve(await getImageURL());
});
const promise2 = new Promise(async (resolve) => {
  resolve(await getLinks());
});

Promise.all([promise1, promise2]).then(([url, breeds]) => {
  const img = document.createElement('img');
  img.src = url;
  img.width = 500;
  document.body.append(img);

  const ul = document.createElement('ul');
  for (let i = 0; i < breeds.length; i++) {
    const breed = breeds[i];
    const li = document.createElement('li');
    const a = document.createElement('a');
    Promise.resolve(getRandomLink(breed)).then(href => {
      a.href = href;
      a.textContent = breed;
    });
    li.append(a);
    ul.append(li);
  }
  document.body.append(ul);
});
