function addNewComment () {
  let commentList = document.getElementById("comment-list");

  let newDiv1 = document.createElement("div");
  newDiv1.setAttribute("class", "flex space-x-4 text-sm text-gray-500");
  commentList.appendChild(newDiv1);

  let newDiv2 = document.createElement("div");
  newDiv2.setAttribute("class", "flex-1 py-10 border-t border-gray-200");
  newDiv1.appendChild(newDiv2);

  let newTitle = document.createElement("h3");
  newTitle.setAttribute("class", "font-medium text-gray-900");
  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let newTitleContent = document.createTextNode(firstName.value + " " + lastName.value);
  newTitle.appendChild(newTitleContent);
  newDiv2.appendChild(newTitle);

  let newDiv3 = document.createElement("div");
  newDiv3.setAttribute("class", "prose prose-sm mt-4 max-w-none text-gray-500");
  newDiv2.appendChild(newDiv3);

  let newParagraphe = document.createElement("p");
  let newComment = document.getElementById("message");
  let newCommentContent = document.createTextNode(newComment.value);
  newParagraphe.appendChild(newCommentContent);
  newDiv3.appendChild(newParagraphe);
};

function resetForm () {
  document.getElementById("first-name").value = "" ;
  document.getElementById ("last-name").value = "" ;
  document.getElementById("message").value = "";
};

let errorMessage = document.getElementById("error-message");

let form = document.querySelector("form");
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let newComment = document.getElementById("message").value;

  if (firstName === "" || lastName === "" || newComment === "") {
      errorMessage.style.display = "block";
  } else {
      addNewComment();
      resetForm();
      errorMessage.style.display = "none";
  };
});