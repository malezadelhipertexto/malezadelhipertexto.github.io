

var videos = [

//'https://i.imgur.com/fG0bcJO.mp4',
  'https://www.i.imgur.com/embed/66qZhqD.mp4',
 // 'https://www.youtube.com/embed/VIDEO_ID_2',
  // Agrega más URLs de videos de YouTube según sea necesario
];
 // <video src="video/secuencia2.mp4" muted loop autoplay></video>

var audios = [
  'ruta_del_audio_1.mp3',
  'ruta_del_audio_2.mp3',
  // Agrega más rutas de audios en MP3 según sea necesario
];

var imagenes = [
  'img/jack/viento.jpg',
  //'ruta_de_la_imagen_2.png',
  // Agrega más rutas de imágenes en PNG según sea necesario
];

function mostrarContenido(tipo) {
  var contenido = document.getElementById('contenido');

  if (tipo === 'videos') {
      var randomVideo = videos[Math.floor(Math.random() * videos.length)];
      contenido.innerHTML = '<iframe width="560" height="315" src="' + randomVideo + '" frameborder="0" allowfullscreen></iframe>';
  } else if (tipo === 'audios') {
      var randomAudio = audios[Math.floor(Math.random() * audios.length)];
      contenido.innerHTML = '<audio controls><source src="' + randomAudio + '" type="audio/mp3">Tu navegador no soporta el elemento de audio.</audio>';
  } else if (tipo === 'imagenes') {
      var randomImagen = imagenes[Math.floor(Math.random() * imagenes.length)];
      contenido.innerHTML = '<img width="560" height="315" src="' + randomImagen + '" alt="Imagen">';
  }
}