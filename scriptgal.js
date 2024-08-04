document.addEventListener('DOMContentLoaded', () => {
  const siemaContainer = document.querySelector('.siema');
  if (siemaContainer) {
      const mySiema = new Siema({
          // Opciones de configuración (opcional)
          loop: true,
          duration: 500,
          perPage: 1,
      });

      // Navegar a la siguiente diapositiva cada 2 segundos
      const interval = setInterval(() => mySiema.next(), 2000);

      // Limpiar el intervalo cuando el elemento se elimina o la página cambia (opcional)
      // Puedes personalizar esto según tus necesidades
      window.addEventListener('unload', () => clearInterval(interval));
  } else {
      console.error('No se encontró el contenedor Siema.');
  }
});