
// seleccionamos nuestros elementos
const clock = document.querySelector('.clock');
const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');
const secondHand = document.querySelector('.hand.second');
const dateElement = document.getElementById('date');

// Generar números en círculo
for (let i = 1; i <= 12; i++) {
  const number = document.createElement('div');
  number.classList.add('number');
  number.innerText = i;

  const angle = (i - 3) * 30; // Ajusta la posición (12 arriba)
  const radius = 130; // Distancia desde el centro
  const x = radius * Math.cos(angle * Math.PI / 180);
  const y = radius * Math.sin(angle * Math.PI / 180);

  number.style.transform = `translate(${x}px, ${y}px)`;
  clock.appendChild(number);
}

// Actualizar reloj cada segundo
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30;
  const minuteDeg = minutes * 6 + (seconds / 60) * 6;
  const secondDeg = seconds * 6;

  hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

  // Mostrar fecha
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  dateElement.innerText = `${day}/${month}/${year}`;
}

setInterval(updateClock, 1000);
updateClock(); // inicial