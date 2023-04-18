import { World } from './World/World.js';

async function main() {
button.onclick = function(){
  let div = document.createElement('div');
  div.className = "msg_1";
  div.innerHTML = `Програмирование - Ребенок освоит один из самых перспективных языков программирования, который позволит развиваться не только в IT, но и в науке и маркетинге. Он сможет создать собственную компьютерную игру и погрузится в мир мессенджеров и чат-ботов, изучит их архитектуру, возможности и функции. В процессе обучения дети прокачают не только навыки программирования, но и soft skills: планирование, выстраивание коммуникации, командную работу и лидерство.`;
  document.body.append(div);
}


  // Get a reference to the container element
  const container = document.querySelector('#scene-container');

  // create a new world
  const world = new World(container);

  // complete async tasks
  await world.init();

  // start the animation loop
  world.start();
}

main().catch((err) => {
  console.error(err);
});
