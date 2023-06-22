window.addEventListener("DOMContentLoaded", async () => {
  await handleGetData();
});
const disLikeElement = document.querySelector("#dislike");
const likeElement = document.querySelector("#like");
let id;

async function handleGetData() {
  const response = await fetch("http://localhost:8000/api/v1/questions");
  const data = await response.json();
  const randomArr = Math.floor(Math.random() * data.length);
  const divElement = document.querySelector("div.question-content");
  id = data[randomArr].id;
  divElement.innerHTML = data[randomArr].content;
  disLikeElement.innerHTML = `<span>dislike</span><br> <h1>${data[randomArr].dislike}</h1> `;
  likeElement.innerHTML = `<span>like</span> <br><h1> ${data[randomArr].like}</h1> `;
}

likeElement.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/questions/like/${id}`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    data.length != 0 &&
      (window.location.href = `http://localhost:8000/question-detail/${id}`);
  } catch (err) {
    console.log(err);
  }
});

disLikeElement.addEventListener("click", async () => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/questions/dislike/${id}`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    data.length != 0 &&
      (window.location.href = `http://localhost:8000/question-detail/${id}`);
  } catch (err) {
    console.log(err);
  }
});
