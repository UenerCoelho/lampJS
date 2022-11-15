const turnOnOff = document.getElementById( 'turnOn' );
const lamp = document.getElementById( 'lamp' );

function isBroken () {
  return lamp.src.indexOf ('broken') > -1
}

function lampOn () {
  if (!isBroken ()){
    lamp.src = './assets/img/on.jpg'
  ;}
}

function lampOff () {
  if (!isBroken ()){
    lamp.src = './assets/img/off.jpg'
}
}

function lampBroken () {
  lamp.src = './assets/img/broken.jpg'
}

function lampOnOff () {
  if (turnOnOff.textContent == 'Ligar') {
    lampOn();
    turnOnOff.textContent = 'Desligar';
  } else {
    lampOff();
    turnOnOff.textContent = 'Ligar';

  }
}
turnOnOff.addEventListener ('click', lampOnOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken)