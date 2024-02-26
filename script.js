const keys = [
  ['a', 'ai'],
  ['e', 'enter'],
  ['i', 'imes'],
  ['o', 'ober'],
  ['u', 'ufat'],
]

const obtenerElemento = (selector) => {
  return document.querySelector(selector);
}

const textoSalida = (output) => {
  obtenerElemento('.encriptado-vacio')  .classList.remove('show');
  obtenerElemento('.output-mensaje')    .classList.add('show');
  obtenerElemento('.mensaje-encriptado').textContent = output;
}

const limpiarTexto = () => {
  obtenerElemento('.input-mensaje')     .value       = '';
  obtenerElemento('.mensaje-encriptado').textContent = '';
  obtenerElemento('.encriptado-vacio')  .classList.add('show');
  obtenerElemento('.output-mensaje')    .classList.remove('show');
  advertencia('');
}

const entrada = () => {
  obtenerElemento('.error p').textContent = '';
}

const entradaIncorrecta = (str) => {
  let regex = /[^a-z 0-9]/g;
  return regex.test(str);
}

const advertencia = (texto) => {
  obtenerElemento('.error p').textContent = `${texto}`;
}

//Función auxiliar para reemplazar el carácter con las claves dadas
const buscarRemplazar = (char) => {
  for (let i = 0; i < keys.length; i++) {
    if (char === keys[i][0]) return keys[i][1];
  }
  return char;
}

// Cifrar mensaje iterando caracteres del mensaje
const encriptarTexto = (mensaje) => {
  let salidaEncriptada = '';
  for (let i = 0; i < mensaje.length; i++) {
    salidaEncriptada += buscarRemplazar(mensaje[i]);
  }
  return salidaEncriptada;
}

//Descifrar texto usando el método de reemplazo
const desencriptarTexto = (mensaje) => {
  let salidaDesencriptada = mensaje;
  for (let i = keys.length - 1; i >= 0; i--) {
    salidaDesencriptada = salidaDesencriptada.replaceAll(keys[i][1], keys[i][0]);
  }
  return salidaDesencriptada;
}

//funcion Main
const procesandoMensaje = (action) => {
  const mensajeEntrada  = obtenerElemento('.input-mensaje').value;

  if (!mensajeEntrada) {
    advertencia('Ingresa algún texto antes.');
    return;
  }

  if (entradaIncorrecta(mensajeEntrada)) {
    advertencia('Sólo minúsculas y ninguna tilde. ¡Corrige eso!, Por favor.');
    return;
  }

  action === 'descifrar'
    ? textoSalida(desencriptarTexto(mensajeEntrada))
    : textoSalida(encriptarTexto(mensajeEntrada));

  window.location.replace('#output');
}

//Copiar mensaje usando la API del Portapapeles
const copiarMensaje = async () => {
  const texto = obtenerElemento('.mensaje-encriptado').textContent;
  try {
    await navigator.clipboard.writeText(texto);
    limpiarTexto();
    advertencia('Mensaje copiado al portapapeles');
  } catch (error) {
    advertencia('No se pudo copiar al portapapeles');
  }
}