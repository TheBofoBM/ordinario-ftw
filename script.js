let loadMoreBtn1 = document.querySelector('#load-more-1');
let currentItem1 = 4;

loadMoreBtn1.onclick = () => {
    let boxes = [...document.querySelectorAll(
        '.box-container-1 .box-1'
    )];
    for(var i = currentItem1; i < currentItem1 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length) {
        loadMoreBtn1.style.display = 'none';
    }
}

let loadMoreBtn2 = document.querySelector('#load-more-2');
let currentItem2 = 4;

loadMoreBtn2.onclick = () => {
    let boxes = [...document.querySelectorAll(
        ".box-container-2 .box-2"
    )];
    for(var i = currentItem2; i < currentItem2 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length) {
        loadMoreBtn2.style.display = 'none';
    }
}

let loadMoreBtn3 = document.querySelector('#load-more-3');
let currentItem3 = 4;

loadMoreBtn3.onclick = () => {
    let boxes = [...document.querySelectorAll(
        ".box-container-3 .box-3"
    )];
    for(var i = currentItem3; i < currentItem3 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length) {
        loadMoreBtn3.style.display = 'none';
    }
}


window.addEventListener('DOMContentLoaded', () => {
  fetch('peliculas.xml')
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, 'application/xml');
      const peliculas = xml.getElementsByTagName('pelicula');

      for (let i = 0; i < peliculas.length; i++) {
        const id = peliculas[i].getAttribute('id');
        const titulo = peliculas[i].getElementsByTagName('titulo')[0].textContent;
        const descripcion = peliculas[i].getElementsByTagName('descripcion')[0].textContent;

        const tituloElement = document.getElementById(`t${id}`);
        const descripcionElement = document.getElementById(id);

        if (tituloElement) tituloElement.textContent = titulo;
        if (descripcionElement) descripcionElement.textContent = descripcion;
      }
    })
    .catch(error => console.error('Error al cargar el XML:', error));
});


