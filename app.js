const sliderImagen = document.querySelector('.slider__imagen');
const iconIzq = document.querySelector('.icon__izquierda');
const iconDer = document.querySelector('.icon__derecha');
let contenedor = 0;
const imgs = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];

const imgIni = document.querySelector('.imagen');

function moverDerecha() {
  contenedor++;

  if (contenedor < imgs.length) {
    crearImagen(contenedor);
  } else {
    contenedor = 0;
    crearImagen(contenedor);
  }
}

let intervalo = setInterval(moverDerecha, 5000);

iconDer.addEventListener('click', function (e) {
  clearInterval(intervalo);
  moverDerecha();
  intervalo = setInterval(moverDerecha, 5000);
});

function moverIzquierda() {
  contenedor--;

  if (contenedor < 0) {
    contenedor = imgs.length - 1;
    crearImagen(contenedor);
  } else {
    crearImagen(contenedor);
  }
}
iconIzq.addEventListener('click', function () {
  clearInterval(intervalo);
  moverIzquierda();
  intervalo = setInterval(moverDerecha, 5000);
});

const crearImagen = function (contenedor) {
  imgIni.src = `img/${imgs[contenedor]}.jpg`;
  imgIni.alt = `img${contenedor}`;
};
