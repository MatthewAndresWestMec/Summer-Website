
  function changeColor() {
    document.body.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
  }

  function scrollToElement() {  const element = document.getElementById("scrollToMe");

  element.scrollIntoView();}
