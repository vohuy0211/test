const id = window.location.pathname.split("/");
let questionData;
async function handleCallApiDetail() {
  const response = await fetch(
    `http://localhost:8000/api/v1/questions/${id[2]}`
  );
  const data = await response.json();
  questionData = data;
  const divDetailElement = document.querySelector(".question-content");
  const voteNumberElement = document.querySelector(".vote-number");
  const likeElement = document.querySelector(".like");
  const dislikeElement = document.querySelector(".dislike");
  const buttonElement = document.querySelector("#btn");

  const vote = Number(questionData.dislike) + Number(questionData.like);
  divDetailElement.innerHTML = questionData.content;
  voteNumberElement.innerHTML = vote;
  let likeNumber = Math.ceil((questionData.like / vote) * 100);
  likeElement.innerHTML = `${likeNumber} %`;
  dislikeElement.innerHTML = `${100 - likeNumber} %`;

  buttonElement.addEventListener("click", () => {
    return (window.location.href = "http://localhost:8000/");
  });
}

handleCallApiDetail();
