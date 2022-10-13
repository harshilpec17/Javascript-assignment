const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

// It will add property to each element of FAQDATA object of array

faqData.forEach((item) => {
  // faq_wrapper has a property of container which enclosed a all the other element of FAQ
  let faq_wrapper = document.createElement("div");
  faq_wrapper.classList.add("faqWrapper");

  // plus_button has a property of black + button which is part of faq_quesion element
  let plus_button = document.createElement("button");
  plus_button.classList.add("plusButton");
  plus_button.textContent = "+";

  // once faq will open the answer than this - button will take place
  let hide_button = document.createElement("button");
  hide_button.classList.add("hideButton");
  hide_button.textContent = "-";

  // It has the property of the question which is listed in faqdata
  let faq_question = document.createElement("h3");
  faq_question.classList.add("faqQuestion");
  faq_question.textContent = item.question;
  faq_question.append(plus_button);

  // it has the property of answer which is listed in faqdata
  let faq_answer = document.createElement("p");
  faq_answer.classList.add("faqAnswer");
  faq_answer.textContent = item.answer;
  faq_question.append(hide_button);

  // it will append the question and answer to the container of faq_wrapper
  faq_wrapper.appendChild(faq_question);
  faq_wrapper.appendChild(faq_answer);

  // whole faq container will append in the body of the homepage
  accordianBody.appendChild(faq_wrapper);

  // After loading a page we can only see question and plus button on the homepage
  hide_button.style.display = "none";
  plus_button.style.display = "block";
  faq_answer.style.display = "none";

  // Once we click on the plus button,
  /*
  1st event is show the answer, 
  2nd event it will show the hide blue button
  3rd event is plus button will hide, otherwise we can see the plus and hide button togeather
  */
  plus_button.addEventListener("click", () => {
    faq_answer.style.display = "block";
    hide_button.style.display = "block";
    plus_button.style.display = "none";
  });

  /*
  once we click the minus button,
  1st event would be hide the answer from the faq
  2nd event would be again it will show th plus button
  3rd event would be hide button will disappear and plus button will be there
  */

  hide_button.addEventListener("click", () => {
    faq_answer.style.display = "none";
    plus_button.style.display = "block";
    hide_button.style.display = "none";
  });

  // this is the way that we can create repetative event listner in this system
});
