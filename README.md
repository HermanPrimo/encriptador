<h1>Encriptador</h1>

<p>Se trata de un encriptador de texto simple escrito en HTML, CSS y JavaScript. Aquí está un desglose de cada parte:</p>

<h2>Estado del proyecto </h2>
  <p>Terminado.</p>
  
<h2>HTML:</h2>
  <p>Define la estructura básica de la página web.
  Incluye secciones para el logo, el área de entrada de texto, los botones de encriptación y desencriptación, y la salida del mensaje encriptado.
  Usa clases para aplicar estilos a diferentes elementos de la página.</p>

<h2>CSS:</h2>
  <p>Define los estilos visuales de la página web, como colores, fuentes, tamaños, márgenes y padding.
  Utiliza medios queries para ajustar el diseño para diferentes tamaños de pantalla.</p>
  
<h2>Funciones:</h2>
  <ul>
    <li><strong>obtenerElemento(selector):</strong> Obtiene un elemento del DOM por su selector CSS.</li>
    <li><strong>textoSalida(output):</strong> Muestra la salida del mensaje encriptado o desencriptado.</li>
    <li><strong>limpiarTexto():</strong> Limpia el texto de entrada y la salida.</li>
    <li><strong>entrada():</strong> Se encarga de eliminar cualquier mensaje de advertencia cuando el usuario comienza a escribir.</li>
    <li><strong>entradaIncorrecta(str):</strong> Valida que el texto de entrada solo contenga letras minúsculas sin acentos.</li>
    <li><strong>advertencia(texto):</strong> Muestra un mensaje de advertencia al usuario.</li>
    <li><strong>buscarRemplazar(char):</strong> Busca la letra en el array de claves y devuelve la letra reemplazada.</li>
    <li><strong>encriptarTexto(mensaje):</strong> Encripta el mensaje reemplazando las letras por las claves del array.</li>
    <li><strong>desencriptarTexto(mensaje):</strong> Descifra el mensaje reemplazando las claves por las letras originales del array.</li>
    <li><strong>procesandoMensaje(action):</strong> Función principal que se encarga de encriptar o desencriptar el mensaje según la acción indicada.</li>
    <li><strong>copiarMensaje():</strong> Copia el mensaje encriptado al portapapeles.</li>
  </ul>

<h2>Variables:</h2>
  <ul>
    <li><strong>keys:</strong> Array de pares de letras que se usan para la encriptación y desencriptación.</li>
    <li><strong>mensajeEntrada:</strong> Variable que almacena el texto introducido por el usuario.</li>
  </ul>
  
<h2>Flujo de ejecución:</h2>
  <ol>
    <li>El usuario ingresa un texto en el área de entrada.</li>
    <li>Se valida que el texto solo contenga letras minúsculas sin acentos.</li>
    <li>Si el texto es válido, se llama a la función procesandoMensaje con la acción indicada (encriptar o desencriptar).</li>
    <li>La función procesandoMensaje llama a la función encriptarTexto o desencriptarTexto según la acción.</li>
    <li>La función de encriptación o desencriptación reemplaza las letras del mensaje original usando el array de claves.</li>
    <li>Se muestra la salida del mensaje encriptado o desencriptado.</li>
    <li>Si el usuario desea copiar el mensaje, se llama a la función copiarMensaje.</li>
  </ol>

<h2>En resumen:</h2>
  <p>Este código permite a los usuarios ingresar un texto, encriptarlo o desencriptarlo usando un sistema de reemplazo simple, y luego ver el resultado o copiarlo al portapapeles. Es importante tener en cuenta que este no es un algoritmo de encriptación seguro y no se debe utilizar para proteger información confidencial.</p>
  <p>Si tienes alguna pregunta específica sobre una parte del código, no dudes en preguntarme.</p>
