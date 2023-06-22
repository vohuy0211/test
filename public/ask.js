const textareaElement = document.querySelector("textarea.question-content");
const spanElement = document.querySelector("span.letter");

textareaElement.oninput = function (e) {
  if (e.target.value.length <= 200) {
    spanElement.innerHTML = 200 - e.target.value.length;
  }

  if (e.target.value.length == 200) {
    textareaElement.setAttribute("maxlength", "200");
  }
};
