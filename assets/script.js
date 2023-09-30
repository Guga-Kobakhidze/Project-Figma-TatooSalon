// For Client Image Changes -->>> //

document.addEventListener("DOMContentLoaded", function () {
  const clientImages = document.querySelector(".client_images");
  const leftHandle = document.querySelector(".left_handle");
  const rightHandle = document.querySelector(".right_handle");

  leftHandle.addEventListener("click", function () {
    const lastImage = clientImages.lastElementChild;
    clientImages.removeChild(lastImage);
    clientImages.insertBefore(lastImage, clientImages.firstElementChild);
    updateMainImage();
  });

  rightHandle.addEventListener("click", function () {
    const firstImage = clientImages.firstElementChild;
    clientImages.removeChild(firstImage);
    clientImages.appendChild(firstImage);
  });
});

//   For Clien Description --> //

const clientDescContent = document.querySelector(".client_desc_content");
const leftHandle = document.querySelector(".left_handle");
const rightHandle = document.querySelector(".right_handle");

leftHandle.addEventListener("click", function () {
  const lastDesc = clientDescContent.lastElementChild;
  clientDescContent.removeChild(lastDesc);
  clientDescContent.insertBefore(lastDesc, clientDescContent.firstElementChild);

  rightHandle.addEventListener("click", function () {
    const firstDesc = clientDescContent.firstElementChild;
    clientDescContent.removeChild(firstDesc);
    clientDescContent.appendChild(firstDesc);
  });
});

//  For FAQs --> //

document.addEventListener("DOMContentLoaded", function () {
  var faqTitles = document.querySelectorAll(".faq_title");

  faqTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      var content = this.nextElementSibling;
      var plusIcon = this.querySelector(".plus");
      var minusIcon = this.querySelector(".minus");

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        plusIcon.style.display = "block";
        minusIcon.style.display = "none";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        plusIcon.style.display = "none";
        minusIcon.style.display = "block";
      }
    });
  });
});
