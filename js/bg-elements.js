const elements = document.querySelectorAll(".set-bg");

console.log(elements);

for (let i = 0; i < elements.length; i++) {
  const src = elements[i].dataset.setbg;

  //   element[i].style.backgroundImage = "url(" + src + ")"; //составная строка
  elements[i].style.backgroundImage = `url(${src})`; //интерполяция
  console.dir(elements[i]);
}
