document.getElementById('demoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('¡Gracias por solicitar la demo! Te contactaremos pronto.');
  this.reset();
});
