let btnPost = document.getElementById("btn-post");
let newCommentBox = document.getElementById("new-comment");
let comentArea = document.getElementById("coment-area");

btnPost.addEventListener("click", function () {
    let newcomment = newCommentBox.value;

    let paragraph = document.createElement("p");
    paragraph.innerHTML = newcomment;

    comentArea.appendChild(paragraph);
    newCommentBox.value = "";
})