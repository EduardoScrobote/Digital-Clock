const gethours = () => {
  const clock = document.getElementsByClassName("clock")[0];
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds < 10 ? `0${seconds}` : seconds;
  clock.innerHTML = `${hour}:${minute}:${second}`;
};

setInterval(() => { // Em um intervalo de 1 segundo executa a função dentro do escopo.
  gethours();
}, 1000 /* 1000ms = 1s */);
