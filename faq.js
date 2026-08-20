const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const currentItem = question.closest(".faq-item");

    // Close other questions
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
      }
    });

   
    currentItem.classList.toggle("active");

  });

});