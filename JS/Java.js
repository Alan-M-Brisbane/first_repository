var title = document.querySelector("#Title");
title.innerHTML = "<u>Games</u>";
title.style.color = "#6a6a6a2";
title.style.fontsize = "50px";

var newtitle - document.querySelector('#GameTitle')

var changeTitleBtn = document.querySelector("#changeTitleBtn")

changeTitleBtn.addEventListener("click", function(event) {
console.log("I'm logging a message");
console.log("event: ", event);
title.innerHTML = "Item 1";
});
changeTitleBtn.addEventListener("click", function(event) {
title.innerHTML = "Description";

};
