const boton = document.getElementById("miBoton");
    const formulario = document.getElementById("miFormulario");
    const select = document.getElementById("miSelect");
    const input = document.getElementById("miInput");
    const divMouseover = document.getElementById("miDiv");
    const divMouseout = document.getElementById("miOtroDiv");
    const inputKeydown = document.getElementById("miInputKeydown");
    const inputKeyup = document.getElementById("miInputKeyup");
    const inputFocus = document.getElementById("miInputFocus");
    const inputBlur = document.getElementById("miInputBlur");
    const imagenLoad = document.getElementById("miImagen");

    // Evento click
    boton.addEventListener("click", function() {
      alert("¡Has hecho clic en el botón!");
    });

    // Evento submit
    formulario.addEventListener("submit", function(event) {
      event.preventDefault(); // Evita que la página se recargue al enviar el formulario
      alert("Formulario enviado");
    });

    // Evento change
    select.addEventListener("change", function() {
      alert(`Has seleccionado: ${select.value}`);
    });

    // Evento input
    input.addEventListener("input", function() {
      console.log(`Texto ingresado: ${input.value}`);
    });

    // Evento mouseover
    divMouseover.addEventListener("mouseover", function() {
      divMouseover.classList.add("bg-blue-200");
    });

    // Evento mouseout
    divMouseout.addEventListener("mouseout", function() {
      divMouseout.classList.add("bg-blue-200");
    });

    // Evento keydown
    inputKeydown.addEventListener("keydown", function(event) {
      console.log(`Tecla presionada: ${event.key}`);
    });

    // Evento keyup
    inputKeyup.addEventListener("keyup", function(event) {
      console.log(`Tecla liberada: ${event.key}`);
    });

    // Evento focus
    inputFocus.addEventListener("focus", function() {
      inputFocus.classList.add("border-blue-500");
    });

    // Evento blur
    inputBlur.addEventListener("blur", function() {
      inputBlur.classList.remove("border-blue-500");
    });

    // Evento load
    imagenLoad.addEventListener("load", function() {
      console.log("La imagen se ha cargado completamente.");
    });