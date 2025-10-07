let who = ['Michael Jackson', 'Madonna', 'Whitney Houston', 'Freddie Mercury'];
let action = ['olvido' , 'no canto' , ' no quiso terminar' , 'no le gusto'];
let what = ['el concierto' , 'la cancion' , 'la grabacion' , 'la presentacion'];
let when = ['ayer' , ' de la semana pasada' , 'en su casa' , 'en Miami'];

let images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR1kg3nMepWwOBGrdWBV8LbJs2tspZy5U9h8wfFJYkCpQYzco3K9WyFTsK4eWwdKHkRrMGbT-phs7oJIvg2_NIUi08y4CHpHs5XK0QB2w',// freddy Mercury
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOo79LH-y9mVxoqfS6gqKwamxxU6TTbjuSA&s', //Madonna
  'https://www.plusesmas.com/pictures/biografias/25000/25475.jpg', // Michael Jackson
  'https://www.hola.com/horizon/landscape/12decdcaab5f-whitney-houston-getty-t.jpg', // whitney 
];


 
function excusa () {
  let quien = who[Math.floor(Math.random() * who.length)];
  let accion = action[Math.floor(Math.random() * action.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let donde = when[Math.floor(Math.random() * when.length)];

 document.getElementById("excusa1").innerHTML = `${quien} ${accion}  ${que} ${donde}.`;

 let foto = images[Math.floor(Math.random() * images.length)];
 document.getElementById("imagen").src = foto; 

}
window.onload = excusa;

 const boton = document.querySelector('button');
  boton.addEventListener('click', excusa);