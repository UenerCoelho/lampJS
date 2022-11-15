const turnON = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
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
turnON.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken)