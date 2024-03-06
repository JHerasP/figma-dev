const friendlyInsults = [
  "Masilla, se te ha olvidado el modo dev",
  "Activa el modo dev, puto retrasado",
  "Eres tan útil como un cono de tráfico caído, activa el modo dev",
  "¿Necesitas un mapa para encontrar el modo dev?",
  "Se te ha vuelto a olvidar el modo dev, ya ni sorprende tu incompetencia",
  "El modo deeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeev",
  "Cada vez que sale este popup, Jesus se come a un gatito",
  "¿Sabes el terror en el que se convertirá Nuria como toques algo sin querer? Que pongas el dev",
  "DEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEV",
  "Se te ha vuelto a olvidar el modo dev, honestamente ya me sorprendería que fueras capaz de leer esto",
  "¿Tu árbol familiar solo tiene una rama o qué? Que le des al dev",
  "Venga, tú puedes, dale al dev",
  "Envidio a todos los que no se han topado con tu inteligencia, modo dev porfa",
  "Eres la prueba viviente de que la evolución falla. El dev",
  "Si la ignorancia da la felicidad, tienes que ser la persona más feliz del mundo. Dale al deeeeeev",
  "Eres la prueba viviente de que los accidentes ocurren. Dale al dev anda",
  "¿De verdad eres el que ganó la carrera? Impresionante... Dale al dev",
  "Algún día llegarás lejos, y espero que no vuelvas. Dale al botoncito del deeeev",
  "Es imposible sobreestimarte, que le des al dev ya",
  "Algunas personas le tienen miedo al éxito, tú no tienes de qué preocuparte. El dev ya",
  "Si te diera un euro cada vez que piensas, me lo devolverías. Que le des al dev",
  "Tus padres te dijeron que fueras lo que quisieras... elegiste ser una decepción. Que le des al dev",
  "No esperaba nada de ti, y aun así logras decepcionarme. Dale al dev anda",
  "Sobrevivirás en un apocalipsis zombi. Por lo menos, dale al dev",
  "Si fueras un poco más tonto, tendría que regarte cada día. Deeeeeeeev",
  "La gente como tú es la razón por la cual los botes de champú tienen instrucciones. La instrucción de esto es simple, dale al dev.",
  "Estos no son insultos, son descripciones. El dev.... otra vez....",
  "¿Qué harías si tuvieras un cerebro? Se te ha vuelto a olvidar el dev",
  "Me sorprende tengas la inteligencia suficiente para hacer algo más que respirar. Dale al dev",
];

function getRandomInsult() {
  const randomIndex = Math.floor(Math.random() * friendlyInsults.length);

  return friendlyInsults[randomIndex];
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  alert(getRandomInsult());
});
