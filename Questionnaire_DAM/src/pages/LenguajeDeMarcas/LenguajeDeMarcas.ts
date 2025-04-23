import { Question } from '../InterfaceQuestion';

export const questionsLenguajeDeMarcas: Question[] = [
  {
    question: '¿Qué objeto permite leer archivos locales en JavaScript?',
    options: ['XMLReader', 'LocalFile', 'DOMParser', 'FileReader'],
    correctAnswer: 'FileReader'
  },
  {
    question: '¿Cuál es el propósito del método readAsText()?',
    options: [
      'Leer un archivo como texto plano',
      'Leer archivos binarios',
      'Escribir contenido en un archivo',
      'Convertir texto en XML'
    ],
    correctAnswer: 'Leer un archivo como texto plano'
  },
  {
    question: '¿Qué evento se dispara cuando FileReader termina de leer un archivo?',
    options: ['onload', 'onchange', 'onfinish', 'onread'],
    correctAnswer: 'onload'
  },
  {
    question: '¿Qué método permite convertir texto XML en un documento navegable?',
    options: [
      'FileParser.parseXML()',
      'DOMParser.parseFromString()',
      'textToXML()',
      'XMLReader.parseFile()'
    ],
    correctAnswer: 'DOMParser.parseFromString()'
  },
  {
    question: '¿Qué tipo MIME se debe indicar al analizar texto como XML?',
    options: ['text/xml-raw', 'text/html', 'application/xml', 'application/json'],
    correctAnswer: 'application/xml'
  },
  {
    question: '¿Qué función tiene e.target.result dentro de reader.onload?',
    options: [
      'Guarda el archivo en localStorage',
      'Retorna el tipo de archivo',
      'Devuelve un nodo XML',
      'Contiene el contenido del archivo leído'
    ],
    correctAnswer: 'Contiene el contenido del archivo leído'
  },
  {
    question: '¿Qué método se usa para acceder a todos los nodos <persona> de un XML?',
    options: [
      'findNodes("persona")',
      'getElementsByTagName("persona")',
      'querySelectorAll("persona")',
      'getById("persona")'
    ],
    correctAnswer: 'getElementsByTagName("persona")'
  },
  {
    question: '¿Cómo se obtiene el texto dentro de una etiqueta XML?',
    options: ['.text', '.nodeText', '.textContent', '.innerValue'],
    correctAnswer: '.textContent'
  },
  {
    question: '¿Qué ocurre si no se selecciona ningún archivo y se accede a files[0]?',
    options: ['Retorna undefined', 'Devuelve null', 'Lanza un error automático', 'Devuelve un string vacío'],
    correctAnswer: 'Retorna undefined'
  },
  {
    question: '¿Para qué sirve input type="file" en HTML?',
    options: [
      'Para ejecutar funciones JavaScript',
      'Para mostrar texto en pantalla',
      'Para enviar datos a un servidor',
      'Para permitir que el usuario seleccione archivos'
    ],
    correctAnswer: 'Para permitir que el usuario seleccione archivos'
  },
  {
    question: '¿Qué extensión tienen normalmente los archivos XML?',
    options: ['.json', '.doc', '.xml', '.js'],
    correctAnswer: '.xml'
  },
  {
    question: '¿Qué estructura devuelve DOMParser.parseFromString()?',
    options: [
      'Documento DOM (navegable con JS)',
      'Array de nodos',
      'Objeto JSON',
      'Texto plano'
    ],
    correctAnswer: 'Documento DOM (navegable con JS)'
  },
  {
    question: '¿Qué instrucción permite añadir un objeto al final de un array?',
    options: ['add()', 'push()', 'insert()', 'append()'],
    correctAnswer: 'push()'
  },
  {
    question: '¿Qué instrucción JavaScript permite guardar datos en el almacenamiento local del navegador?',
    options: [
      'localStorage.setItem()',
      'window.store()',
      'saveToBrowser()',
      'session.save()'
    ],
    correctAnswer: 'localStorage.setItem()'
  },
  {
    question: '¿Qué ventaja ofrece exportar datos a XML desde JavaScript?',
    options: [
      'Menor compatibilidad con navegadores',
      'Requiere servidor para leerlo',
      'Solo funciona en entornos móviles',
      'Permite portabilidad e interoperabilidad de datos'
    ],
    correctAnswer: 'Permite portabilidad e interoperabilidad de datos'
  },
  {
    'question': '¿Qué objeto permite leer archivos locales en JavaScript?',
    'options': ['XMLReader', 'LocalFile', 'DOMParser', 'FileReader'],
    'correctAnswer': 'FileReader'
  },
  {
    'question': '¿Cuál es el propósito del método readAsText()?',
    'options': ['Leer un archivo como texto plano', 'Leer archivos binarios', 'Escribir contenido en un archivo', 'Convertir texto en XML'],
    'correctAnswer': 'Leer un archivo como texto plano'
  },
  {
    'question': '¿Qué evento se dispara cuando FileReader termina de leer un archivo?',
    'options': ['onload', 'onchange', 'onfinish', 'onread'],
    'correctAnswer': 'onload'
  },
  {
    'question': '¿Qué método permite convertir texto XML en un documento navegable?',
    'options': ['FileParser.parseXML()', 'DOMParser.parseFromString()', 'textToXML()', 'XMLReader.parseFile()'],
    'correctAnswer': 'DOMParser.parseFromString()'
  },
  {
    'question': '¿Qué tipo MIME se debe indicar al analizar texto como XML?',
    'options': ['text/xml-raw', 'text/html', 'application/xml', 'application/json'],
    'correctAnswer': 'application/xml'
  },
  {
    'question': '¿Qué función tiene e.target.result dentro de reader.onload?',
    'options': ['Guarda el archivo en localStorage', 'Retorna el tipo de archivo', 'Devuelve un nodo XML', 'Contiene el contenido del archivo leído'],
    'correctAnswer': 'Contiene el contenido del archivo leído'
  },
  {
    'question': '¿Qué método se usa para acceder a todos los nodos <persona> de un XML?',
    'options': ['findNodes("persona")', 'getElementsByTagName("persona")', 'querySelectorAll("persona")', 'getById("persona")'],
    'correctAnswer': 'getElementsByTagName("persona")'
  },
  {
    'question': '¿Cómo se obtiene el texto dentro de una etiqueta XML?',
    'options': ['.text', '.nodeText', '.textContent', '.innerValue'],
    'correctAnswer': '.textContent'
  },
  {
    'question': '¿Qué ocurre si no se selecciona ningún archivo y se accede a files[0]?',
    'options': ['Retorna undefined', 'Devuelve null', 'Lanza un error automático', 'Devuelve un string vacío'],
    'correctAnswer': 'Retorna undefined'
  },
  {
    'question': '¿Para qué sirve input type="file" en HTML?',
    'options': ['Para ejecutar funciones JavaScript', 'Para mostrar texto en pantalla', 'Para enviar datos a un servidor', 'Para permitir que el usuario seleccione archivos'],
    'correctAnswer': 'Para permitir que el usuario seleccione archivos'
  },
  {
    'question': '¿Qué extensión tienen normalmente los archivos XML?',
    'options': ['.json', '.doc', '.xml', '.js'],
    'correctAnswer': '.xml'
  },
  {
    'question': '¿Qué estructura devuelve DOMParser.parseFromString()?',
    'options': ['Documento DOM (navegable con JS)', 'Array de nodos', 'Objeto JSON', 'Texto plano'],
    'correctAnswer': 'Documento DOM (navegable con JS)'
  },
  {
    'question': '¿Qué instrucción permite añadir un objeto al final de un array?',
    'options': ['add()', 'push()', 'insert()', 'append()'],
    'correctAnswer': 'push()'
  },
  {
    'question': '¿Qué instrucción JavaScript permite guardar datos en el almacenamiento local del navegador?',
    'options': ['localStorage.setItem()', 'window.store()', 'saveToBrowser()', 'session.save()'],
    'correctAnswer': 'localStorage.setItem()'
  },
  {
    'question': '¿Qué ventaja ofrece exportar datos a XML desde JavaScript?',
    'options': ['Menor compatibilidad con navegadores', 'Requiere servidor para leerlo', 'Solo funciona en entornos móviles', 'Permite portabilidad e interoperabilidad de datos'],
    'correctAnswer': 'Permite portabilidad e interoperabilidad de datos'
  },
  {
    'question': '¿Qué función se usa para seleccionar un elemento por su ID?',
    'options': ['getElementById()', 'queryById()', 'getElementByName()', 'selectById()'],
    'correctAnswer': 'getElementById()'
  },
  {
    'question': '¿Qué método selecciona el primer elemento que coincide con un selector CSS?',
    'options': ['selectElement()', 'getElement()', 'queryElementById()', 'querySelector()'],
    'correctAnswer': 'querySelector()'
  },
  {
    'question': '¿Qué propiedad se utiliza para obtener el valor de un input?',
    'options': ['content', 'text', 'value', 'innerHTML'],
    'correctAnswer': 'value'
  },
  {
    'question': '¿Qué hace la propiedad .checked en un radio button?',
    'options': ['Cambia el valor del botón', 'Indica si ese botón está seleccionado', 'Marca todos los botones', 'Lo hace obligatorio'],
    'correctAnswer': 'Indica si ese botón está seleccionado'
  },
  {
    'question': '¿Cuál de estas estructuras permite repetir código mientras se cumpla una condición?',
    'options': ['while', 'switch', 'if', 'return'],
    'correctAnswer': 'while'
  },
  {
    'question': '¿Cuál es la forma correcta de agregar un evento a un botón con querySelector?',
    'options': ['addEvent("btn", click, function)', 'btn.add("click", function)', 'btn.addEventListener("click", function)', 'btn.on("click", function)'],
    'correctAnswer': 'btn.addEventListener("click", function)'
  },
  {
    'question': '¿Qué tipo de dato devuelve parseFloat("10.5")?',
    'options': ['Undefined', 'String', 'Boolean', 'Number'],
    'correctAnswer': 'Number'
  },
  {
    'question': '¿Qué operador compara valor y tipo en JavaScript?',
    'options': ['!=', '=', '==', '==='],
    'correctAnswer': '==='
  },
  {
    'question': '¿Qué operador lógico significa “y”?',
    'options': ['&&', '||', '!', '=='],
    'correctAnswer': '&&'
  },
  {
    'question': '¿Qué estructura se usa para seleccionar entre múltiples casos?',
    'options': ['if-else', 'for', 'try', 'switch'],
    'correctAnswer': 'switch'
  },
  {
    'question': '¿Qué hace .innerText?',
    'options': ['Muestra el valor de un input', 'Cambia el valor de un radio button', 'Muestra o cambia el texto visible de un elemento', 'Inserta HTML'],
    'correctAnswer': 'Muestra o cambia el texto visible de un elemento'
  },
  {
    'question': '¿Qué ocurre si usas let dentro de un bloque {}?',
    'options': ['Solo existe dentro del bloque', 'Se puede usar fuera del bloque', 'No se puede declarar', 'Da error'],
    'correctAnswer': 'Solo existe dentro del bloque'
  },
  {
    'question': '¿Cuál de las siguientes opciones selecciona el radio button marcado?',
    'options': ['\'input:radio\'', '\'input[name="genero"]:checked\'', '\'input[type=radio]\'', '\'radio:checked\''],
    'correctAnswer': '\'input[name="genero"]:checked\''
  },
  {
    'question': '¿Qué propiedad cambia el estilo de un elemento desde JavaScript?',
    'options': ['html', 'design', 'style', 'attr'],
    'correctAnswer': 'style'
  },
  {
    'question': '¿Qué instrucción elimina un elemento de un array?',
    'options': ['array.cut()', 'array.splice(pos, 1)', 'array.remove()', 'array.delete(pos)'],
    'correctAnswer': 'array.splice(pos, 1)'
  },
  {
    'question': '¿Qué etiqueta HTML usamos para crear una tabla?',
    'options': ['<div class="tabla">', '<section>', '<list>', '<table>'],
    'correctAnswer': '<table>'
  },
  {
    'question': '¿Cuál de estas opciones es un método válido para limpiar el contenido de una tabla con JS?',
    'options': ['table.innerHTML = ""', 'reset(table)', 'clear(table)', 'table.value = ""'],
    'correctAnswer': 'table.innerHTML = ""'
  },
  {
    'question': '¿Qué hace document.querySelector("#nombre")?',
    'options': ['No es una instrucción válida', 'Selecciona el primer elemento con id="nombre"', 'Selecciona todos los elementos con clase .nombre', 'Selecciona un input tipo nombre'],
    'correctAnswer': 'Selecciona el primer elemento con id="nombre"'
  },
  {
    'question': '¿Qué se necesita para que align-items funcione?',
    'options': ['Tener display: flex;', 'Tener margin: auto;', 'Tener display: block;', 'Tener position: absolute;'],
    'correctAnswer': 'Tener display: flex;'
  },
  {
    'question': '¿Cuál es el método correcto para recorrer un array?',
    'options': ['foreach (var in array)', 'array.loop()', 'loop(array)', 'for (let i = 0; i < array.length; i++)'],
    'correctAnswer': 'for (let i = 0; i < array.length; i++)'
  },
  {
    'question': '¿Qué valor devuelve document.querySelector(\'input[name="x"]:checked\') si no hay selección?',
    'options': ['null', '""', '"undefined"', 'false'],
    'correctAnswer': 'null'
  },
  {
    'question': '¿Qué propiedad accede al contenido textual incluso si está oculto?',
    'options': ['textContent', 'value', 'innerHTML', 'innerText'],
    'correctAnswer': 'textContent'
  },
  {
    'question': '¿Cuál es una ventaja de usar querySelector() sobre getElementById()?',
    'options': ['Solo sirve para formularios', 'Permite seleccionar elementos por valor', 'Es más rápido', 'Permite usar cualquier selector CSS'],
    'correctAnswer': 'Permite usar cualquier selector CSS'
  },
  {
    'question': '¿Qué hace el método .push() en un array?',
    'options': ['Agrega un nuevo elemento al final del array', 'Inserta un valor al principio del array', 'Ordena los elementos del array alfabéticamente', 'Elimina el último elemento del array'],
    'correctAnswer': 'Agrega un nuevo elemento al final del array'
  },
  {
    'question': '¿Qué instrucción permite salir anticipadamente de una función en JavaScript?',
    'options': ['break', 'stop', 'exit', 'return'],
    'correctAnswer': 'return'
  },
    
  {
    'question': '¿Qué clase de Bootstrap se usa para crear un contenedor con ancho máximo y centrado?',
    'options': ['.row-container', '.container-fluid', '.container', '.container-responsive'],
    'correctAnswer': '.container'
  },
  {
    'question': '¿Qué clase de Bootstrap se usa para hacer que un botón tenga un borde sin fondo?',
    'options': ['.btn-primary-outline', '.btn-outline-primary', '.btn-transparent', '.btn-borderless'],
    'correctAnswer': '.btn-outline-primary'
  },
  {
    'question': '¿Cuál es la clase de Bootstrap que define un margen automático en los lados horizontales de un elemento?',
    'options': ['.m-auto', '.mx-auto', '.p-auto', '.my-auto'],
    'correctAnswer': '.mx-auto'
  },
  {
    'question': '¿Qué clase de Bootstrap se usa para centrar verticalmente el contenido dentro de un div usando flexbox?',
    'options': ['.justify-content-center', '.align-items-center', '.text-center', '.d-flex'],
    'correctAnswer': '.align-items-center'
  },
  {
    'question': '¿Cuál es la clase de Bootstrap que se usa para hacer una imagen responsive?',
    'options': ['.img-responsive', '.img-auto', '.img-fluid', '.img-center'],
    'correctAnswer': '.img-fluid'
  },
  {
    'question': '¿Qué clase de Bootstrap hace que un texto sea más grande y destacado, usado por ejemplo en subtítulos?',
    'options': ['.h1', '.text-lg', '.highlight', '.lead'],
    'correctAnswer': '.lead'
  },
  {
    'question': '¿Qué clase de Bootstrap se usa para hacer una barra de navegación adaptable y con estilos predeterminados?',
    'options': ['.navbar', '.nav', '.navigation-bar', '.menu-bar'],
    'correctAnswer': '.navbar'
  },
  {
    'question': '¿Qué clase de Bootstrap oculta un elemento en pantallas pequeñas (xs)?',
    'options': ['.d-sm-none', '.hide-xs', '.d-xs-hidden', '.d-none'],
    'correctAnswer': '.d-none'
  },
  {
    'question': '¿Qué clase de Bootstrap se usa para agregar sombreado a una tarjeta (card)?',
    'options': ['.shadow-lg', '.shadow-sm', '.shadow', '.card-shadow'],
    'correctAnswer': '.shadow'
  },
  {
    'question': '¿Cuál de estas clases de Bootstrap se usa para dividir una fila en 3 columnas iguales?',
    'options': ['.col-md-6', '.col-md-3', '.col-4', '.col-sm-12'],
    'correctAnswer': '.col-4'
  },
  {
    'question': '¿Qué clase de Bootstrap se usa para hacer que un elemento tenga un fondo azul predeterminado?',
    'options': ['.bg-blue', '.bg-info', '.bg-light', '.bg-primary-blue'],
    'correctAnswer': '.bg-info'
  },
  {
    'question': '¿Cuál de estas clases de Bootstrap se usa para crear un botón de color rojo?',
    'options': ['.btn-red', '.btn-warning', '.btn-danger', '.btn-error'],
    'correctAnswer': '.btn-danger'
  },
  {
    'question': '¿Cómo se hace un div flexible en Bootstrap?',
    'options': ['display: flex;', '.d-flex', '.flexible-div', '.d-flexible'],
    'correctAnswer': '.d-flex'
  },
  {
    'question': '¿Cuál es la clase de Bootstrap que se usa para crear una fila en un sistema de grid?',
    'options': ['.grid-row', '.col-row', '.container-row', '.row'],
    'correctAnswer': '.row'
  },
  {
    'question': '¿Qué pasa si dentro de una fila (.row) agregamos más de 12 columnas en total (por ejemplo, .col-md-6 + .col-md-8)?',
    'options': [
      'Bootstrap ignora las columnas adicionales',
      'Bootstrap ajusta automáticamente las columnas para que quepan',
      'Las columnas extra se colocan en la siguiente fila',
      'Se rompen los estilos y se desborda el contenido'
    ],
    'correctAnswer': 'Las columnas extra se colocan en la siguiente fila'
  },
  {
    'question': '¿Cuál es la etiqueta principal que agrupa todo el contenido de una página web en HTML?',
    'options': ['<head>', '<main>', '<footer>', '<body>'],
    'correctAnswer': '<body>'
  },
  {
    'question': 'En el siguiente código, ¿qué falta para que el nav se muestre correctamente?',
    'options': ['Falta la etiqueta <header>', 'Falta display: flex; en CSS', 'Nada, el código es correcto', 'Falta la etiqueta <menu>'],
    'correctAnswer': 'Nada, el código es correcto'
  },
  {
    'question': '¿Cuál es la diferencia entre <header> y <head> en HTML?',
    'options': ['<header> se usa para SEO, <head> no', '<header> es el encabezado visible de la página, <head> contiene metadatos y enlaces a CSS', '<head> es obligatorio, <header> no', '<header> solo puede usarse dentro de <body>, mientras <head> no'],
    'correctAnswer': '<header> es el encabezado visible de la página, <head> contiene metadatos y enlaces a CSS'
  },
  {
    'question': '¿Qué etiqueta se usa para incluir una imagen en HTML?',
    'options': ['<picture>', '<img>', '<media>', '<image>'],
    'correctAnswer': '<img>'
  },
  {
    'question': '¿Cuál de los siguientes atributos se usa en la etiqueta <img> para definir la imagen en caso de que no cargue?',
    'options': ['src', 'href', 'alt', 'title'],
    'correctAnswer': 'alt'
  },
  {
    'question': '¿Qué hace box-sizing: border-box; en CSS?',
    'options': ['Hace que los elementos se comporten como bloques', 'Incluye el padding y border dentro del tamaño total del elemento', 'Hace que el ancho y alto del elemento sea automático', 'No tiene ningún efecto en los estilos'],
    'correctAnswer': 'Incluye el padding y border dentro del tamaño total del elemento'
  },
  {
    'question': 'En display: flex;, ¿qué propiedad se usa para centrar horizontalmente los elementos?',
    'options': ['justify-content', 'align-items', 'align-self', 'flex-direction'],
    'correctAnswer': 'justify-content'
  },
  {
    'question': '¿Qué valor de justify-content coloca los elementos al inicio del contenedor?',
    'options': ['flex-end', 'space-between', 'center', 'flex-start'],
    'correctAnswer': 'flex-start'
  },
  {
    'question': '¿Cuál de las siguientes opciones haría que los elementos dentro de un contenedor Flexbox se coloquen en una columna en lugar de una fila?',
    'options': ['justify-content: center;', 'align-items: center;', 'display: grid;', 'flex-direction: column;'],
    'correctAnswer': 'flex-direction: column;'
  },
  {
    'question': '¿Qué hace flex-wrap: wrap; en un contenedor Flexbox?',
    'options': ['Permite que los elementos se ajusten a nuevas líneas si no caben en la misma', 'Hace que los elementos se centren', 'No tiene ningún efecto', 'Los hace flexibles dentro del contenedor'],
    'correctAnswer': 'Permite que los elementos se ajusten a nuevas líneas si no caben en la misma'
  },
  {
    'question': '¿Qué propiedad define el número de columnas en CSS Grid?',
    'options': ['grid-template-rows', 'grid-template-columns', 'grid-auto-columns', 'display: grid;'],
    'correctAnswer': 'grid-template-columns'
  },
  {
    'question': '¿Cuál de las siguientes declaraciones CSS crearía una cuadrícula de 3 columnas de igual tamaño?',
    'options': ['grid-template-rows: 3;', 'grid-template: 3fr;', 'grid-template-columns: 1fr 1fr 1fr;', 'grid-template-columns: auto;'],
    'correctAnswer': 'grid-template-columns: 1fr 1fr 1fr;'
  },
  {
    'question': '¿Cuál es la diferencia entre fr y % en CSS Grid?',
    'options': ['% siempre ocupa todo el ancho de la pantalla', 'No hay diferencia, ambos hacen lo mismo', 'fr es relativo al tamaño de la ventana del navegador', 'fr ajusta automáticamente el espacio disponible entre columnas'],
    'correctAnswer': 'fr ajusta automáticamente el espacio disponible entre columnas'
  },
  {
    'question': 'En el siguiente código, ¿qué elemento ocupará más espacio?',
    'options': ['El segundo elemento', 'El tercer elemento', 'El primer elemento', 'Todos ocupan el mismo tamaño'],
    'correctAnswer': 'El segundo elemento'
  },
  {
    'question': '¿Cómo se asigna un área específica en una Grid usando grid-template-areas?',
    'options': ['grid-template: \'header header\' \'main sidebar\';', 'grid-template-areas: \'header header\' \'main sidebar\';', 'grid-template: columns 1fr 2fr;', 'grid-area: \'main\';'],
    'correctAnswer': 'grid-template-areas: \'header header\' \'main sidebar\';'
  },
  {
    'question': '¿Cuál es la diferencia entre <article> y <section> en HTML?',
    'options': ['<section> siempre necesita un título, <article> no', '<article> es solo para blogs, <section> es para cualquier página', '<article> se usa para contenido independiente, mientras <section> agrupa contenido relacionado', 'No hay ninguna diferencia entre ambas'],
    'correctAnswer': '<article> se usa para contenido independiente, mientras <section> agrupa contenido relacionado'
  },
  {
    'question': 'En CSS Grid, ¿qué significa repeat(3, 1fr) en grid-template-columns?',
    'options': ['Hace que las filas sean responsivas', 'Crea 3 filas con igual tamaño', 'Crea 3 columnas de igual tamaño', 'Divide el contenido en 3 partes iguales sin importar el tamaño'],
    'correctAnswer': 'Crea 3 columnas de igual tamaño'
  },
  {
    'question': '¿Cuál es la función de grid-auto-rows en CSS Grid?',
    'options': ['Asegura que todas las filas sean del mismo tamaño', 'Hace que los elementos floten dentro de la cuadrícula', 'Define el tamaño de las filas creadas automáticamente', 'Establece el orden de las columnas en la cuadrícula'],
    'correctAnswer': 'Define el tamaño de las filas creadas automáticamente'
  },
  {
    'question': '¿Qué pasaría si se usa display: grid; sin definir grid-template-columns o grid-template-rows?',
    'options': ['Todos los elementos se apilarán en una sola columna', 'Se generará una cuadrícula automática con filas y columnas iguales', 'Se comportará como display: flex;', 'Los elementos desaparecerán'],
    'correctAnswer': 'Todos los elementos se apilarán en una sola columna'
  },
  {
    'question': '¿Cómo se haría para que un solo elemento ocupe varias columnas en CSS Grid?',
    'options': ['grid-column-start: auto;', 'grid-template-columns: 2fr 1fr;', 'grid-column: span 2;', 'grid-area: \'header main main footer\';'],
    'correctAnswer': 'grid-column: span 2;'
  },
  {
    'question': '¿Cuál de las siguientes afirmaciones es cierta sobre los atributos id y class en HTML?',
    'options': [
      'Una class puede ser utilizada por múltiples elementos',
      'class solo puede aplicarse a etiquetas <div>',
      'id y class funcionan exactamente igual',
      'Un id puede repetirse varias veces en una misma página'
    ],
    'correctAnswer': 'Una class puede ser utilizada por múltiples elementos'
  },
  {
    'question': '¿Qué unidad de medida es relativa al tamaño de la fuente del elemento padre?',
    'options': [
      'em',
      'px',
      'rem',
      'vh'
    ],
    'correctAnswer': 'em'
  },
  {
    'question': '¿Qué hace position: absolute; en CSS?',
    'options': [
      'Ubica un elemento de forma relativa al viewport',
      'Siempre lo centra en la pantalla',
      'Hace que el elemento desaparezca',
      'Ubica un elemento en relación con su contenedor más cercano que tenga position: relative;'
    ],
    'correctAnswer': 'Ubica un elemento en relación con su contenedor más cercano que tenga position: relative;'
  },
  {
    'question': '¿Qué sucede si se establece overflow: hidden; en un contenedor?',
    'options': [
      'No tiene ningún efecto en los elementos internos',
      'Todo el contenido dentro se ajusta automáticamente',
      'El contenido que sobrepase los límites del contenedor no será visible',
      'Se agrega una barra de desplazamiento automáticamente'
    ],
    'correctAnswer': 'El contenido que sobrepase los límites del contenedor no será visible'
  },
  {
    'question': 'En HTML5, ¿qué etiqueta se usa para definir contenido secundario o complementario?',
    'options': [
      '<aside>',
      '<section>',
      '<span>',
      '<div>'
    ],
    'correctAnswer': '<aside>'
  },
  {
    'question': 'En Flexbox, ¿qué propiedad alinea los elementos verticalmente dentro de un display: flex;?',
    'options': [
      'display: block;',
      'align-items',
      'flex-direction',
      'justify-content'
    ],
    'correctAnswer': 'align-items'
  },
  {
    'question': '¿Qué significa la propiedad z-index en CSS?',
    'options': [
      'Define el orden de apilamiento de los elementos en el eje Z',
      'Establece el tamaño de los márgenes superiores',
      'Se usa para agregar bordes invisibles',
      'Define la velocidad de transición de un elemento'
    ],
    'correctAnswer': 'Define el orden de apilamiento de los elementos en el eje Z'
  },
  {
    'question': 'En el siguiente código, ¿qué propiedad de CSS hace que los elementos hijos se coloquen en columnas?',
    'options': [
      'flex-direction: column;',
      'justify-content: center;',
      'align-items: flex-start;',
      'flex-wrap: wrap;'
    ],
    'correctAnswer': 'flex-direction: column;'
  },
  {
    'question': '¿Qué propiedad de Flexbox permite distribuir los elementos con el mismo espacio entre ellos?',
    'options': [
      'align-items: center;',
      'flex-direction: row;',
      'justify-content: space-between;',
      'flex-grow: 1;'
    ],
    'correctAnswer': 'justify-content: space-between;'
  },
  {
    'question': '¿Cuál es el propósito de align-self en Flexbox?',
    'options': [
      'Centrar todos los elementos dentro de un div',
      'Ajustar un solo elemento dentro de un contenedor flex',
      'Modificar la alineación de un elemento en su línea de base',
      'Definir el tamaño del contenedor'
    ],
    'correctAnswer': 'Ajustar un solo elemento dentro de un contenedor flex'
  },
  {
    'question': 'En el siguiente código, ¿qué propiedad de Flexbox hace que los elementos se ajusten automáticamente si no caben en la misma fila?',
    'options': [
      'justify-content: flex-start;',
      'flex-wrap: wrap;',
      'align-items: center;',
      'flex-direction: column;'
    ],
    'correctAnswer': 'flex-wrap: wrap;'
  },
  {
    'question': '¿Cómo se hace para que un solo elemento dentro de un display: flex; ocupe todo el espacio disponible?',
    'options': [
      'flex-grow: 1;',
      'justify-content: center;',
      'align-items: flex-start;',
      'margin: auto;'
    ],
    'correctAnswer': 'flex-grow: 1;'
  },
  {
    'question': '¿Qué propiedad de Grid se usa para asignar nombres a diferentes áreas de la cuadrícula?',
    'options': [
      'grid-auto-flow',
      'grid-template-rows',
      'grid-template-columns',
      'grid-template-areas'
    ],
    'correctAnswer': 'grid-template-areas'
  },
  {
    'question': '¿Cuál de las siguientes opciones NO es una forma correcta de aplicar estilos en CSS?',
    'options': [
      'Usando un archivo CSS externo con <link rel=\'stylesheet\' href=\'styles.css\'>',
      'Usando una etiqueta <style> dentro del <head> del documento HTML',
      'Usando <css> dentro de un <div>',
      'Usando el atributo style en una etiqueta HTML'
    ],
    'correctAnswer': 'Usando <css> dentro de un <div>'
  },
  {
    'question': '¿Qué propiedad CSS se usa para hacer que un elemento desaparezca sin afectar el flujo del documento?',
    'options': [
      'visibility: hidden;',
      'opacity: 0;',
      'z-index: -1;',
      'display: none;'
    ],
    'correctAnswer': 'visibility: hidden;'
  },
  {
    'question': '¿Cuál es la diferencia principal entre minmax(100px, 1fr) y repeat(3, 1fr) en grid-template-columns?',
    'options': [
      'No hay ninguna diferencia entre ambos',
      'minmax define un tamaño mínimo y máximo para una columna, mientras que repeat(3, 1fr) crea 3 columnas iguales',
      'minmax solo funciona con grid-template-rows',
      'repeat(3, 1fr) es para filas, minmax es para columnas'
    ],
    'correctAnswer': 'minmax define un tamaño mínimo y máximo para una columna, mientras que repeat(3, 1fr) crea 3 columnas iguales'
  },
  {
    'question': '¿Qué propiedad falta en este código para que los elementos hijos se centren tanto horizontal como verticalmente en Flexbox?',
    'options': [
      'justify-content: center;',
      'align-items: center; justify-content: center;',
      'margin: auto;',
      'align-items: center;'
    ],
    'correctAnswer': 'align-items: center; justify-content: center;'
  },
  {
    'question': '¿Cuál es la diferencia entre gap en CSS Grid y margin en Flexbox?',
    'options': [
      'margin solo funciona con Grid',
      'gap define la separación dentro de la cuadrícula, margin define la separación fuera del elemento',
      'No hay ninguna diferencia entre ambos',
      'gap solo funciona con Flexbox'
    ],
    'correctAnswer': 'gap define la separación dentro de la cuadrícula, margin define la separación fuera del elemento'
  },
  {
    'question': '¿Cómo se puede hacer que un aside en un layout Grid ocupe dos filas completas?',
    'options': [
      'grid-column: span 2;',
      'row-gap: 2;',
      'grid-area: \'aside aside\';',
      'grid-row: span 2;'
    ],
    'correctAnswer': 'grid-row: span 2;'
  },
  {
    'question': '¿Cuál es la mejor manera de evitar el scroll horizontal inesperado en un sitio web?',
    'options': [
      'Asegurar que max-width no exceda 100vw y usar overflow-x: hidden; en el body',
      'Usar display: flex; en el contenedor principal',
      'Aplicar width: 100%; a todos los elementos',
      'Usar overflow: auto; en el body'
    ],
    'correctAnswer': 'Asegurar que max-width no exceda 100vw y usar overflow-x: hidden; en el body'
  },
  {
    'question': '¿Cómo se abre el inspector en la mayoría de los navegadores modernos?',
    'options': [
      'Presionando F5',
      'Con clic derecho y seleccionando \'Inspeccionar\' o usando F12',
      'Escribiendo \'inspector\' en la barra de búsqueda',
      'Activando un complemento especial'
    ],
    'correctAnswer': 'Con clic derecho y seleccionando \'Inspeccionar\' o usando F12'
  },
  {
    'question': '¿Cómo se accede al inspector de herramientas del navegador?',
    'options': [
      'Presionando F12 o clic derecho en la página > \'Inspeccionar\'',
      'Reiniciando el navegador',
      'Instalando un programa externo',
      'Haciendo clic en \'Archivo > Abrir\''
    ],
    'correctAnswer': 'Presionando F12 o clic derecho en la página > \'Inspeccionar\''
  },
  {
    'question': '¿Cuál es la función del CSS en el desarrollo web?',
    'options': [
      'Agregar interactividad a la página',
      'Optimizar la velocidad de carga',
      'Crear bases de datos',
      'Definir los estilos visuales del contenido'
    ],
    'correctAnswer': 'Definir los estilos visuales del contenido'
  },
  {
    'question': '¿Cuál es un ejemplo de un editor de código popular?',
    'options': [
      'Microsoft Excel',
      'Google Chrome',
      'Visual Studio Code',
      'Adobe Photoshop'
    ],
    'correctAnswer': 'Visual Studio Code'
  },
  {
    'question': '¿Para qué sirve el inspector de elementos de un navegador?',
    'options': [
      'Proteger la página web contra modificaciones',
      'Editar archivos locales en tu ordenador',
      'Descargar contenido de una página web',
      'Examinar y modificar temporalmente el código HTML y CSS de una página'
    ],
    'correctAnswer': 'Examinar y modificar temporalmente el código HTML y CSS de una página'
  },
  {
    'question': '¿Qué es un editor de código?',
    'options': [
      'Un programa para leer correos electrónicos',
      'Un sistema operativo usado por programadores',
      'Una extensión del navegador para programar',
      'Un programa especializado para escribir y editar código'
    ],
    'correctAnswer': 'Un programa especializado para escribir y editar código'
  },
  {
    'question': '¿Qué es un proyecto en desarrollo web?',
    'options': [
      'Una página ya publicada en internet',
      'Un programa instalado en el servidor',
      'Una carpeta que contiene todos los archivos necesarios para una página web',
      'Un archivo único con todo el código'
    ],
    'correctAnswer': 'Una carpeta que contiene todos los archivos necesarios para una página web'
  },
  {
    'question': '¿Qué extensión se usa para guardar archivos CSS?',
    'options': [
      '.js',
      '.exe',
      '.css',
      '.html'
    ],
    'correctAnswer': '.css'
  },
  {
    'question': '¿Qué permite hacer el HTML en una página web?',
    'options': [
      'Hacer la página interactiva',
      'Crear la estructura y el contenido básico',
      'Estilizar el contenido',
      'Configurar la seguridad del servidor'
    ],
    'correctAnswer': 'Crear la estructura y el contenido básico'
  },
  {
    'question': '¿Qué significa JavaScript en el desarrollo web?',
    'options': [
      'Un formato de archivo multimedia',
      'Un programa para gestionar servidores',
      'Una herramienta para diseñar gráficos',
      'Un lenguaje de programación para agregar interactividad'
    ],
    'correctAnswer': 'Un lenguaje de programación para agregar interactividad'
  },
  {
    'question': '¿Cómo se define un atributo correctamente en una etiqueta HTML?',
    'options': [
      '<p:atributo>',
      '<p{atributo=valor}>',
      '<p atributo=\'valor\'>',
      '<p atributo>'
    ],
    'correctAnswer': '<p atributo=\'valor\'>'
  },
  {
    'question': '¿Cómo se inserta una imagen en una página web usando HTML?',
    'options': [
      '<img href=\'imagen.jpg\'>',
      '<image src=\'imagen.jpg\'>',
      '<img src=\'imagen.jpg\' alt=\'Descripción\'>',
      '<src img=\'imagen.jpg\'>'
    ],
    'correctAnswer': '<img src=\'imagen.jpg\' alt=\'Descripción\'>'
  },
  {
    'question': '¿Cuál de las siguientes es una etiqueta válida del header en HTML?',
    'options': [
      '<div>',
      '<body>',
      '<footer>',
      '<title>'
    ],
    'correctAnswer': '<title>'
  },
  {
    'question': '¿Cuál de las siguientes etiquetas es un ejemplo de etiqueta de bloque?',
    'options': [
      '<img>',
      '<span>',
      '<section>',
      '<a>'
    ],
    'correctAnswer': '<section>'
  },
  {
    'question': '¿Cuál de las siguientes etiquetas pertenece al grupo de \'etiquetas de texto\'?',
    'options': [
      '<ul>',
      '<section>',
      '<img>',
      '<h1>'
    ],
    'correctAnswer': '<h1>'
  },
  {
    'question': '¿Qué atributo se usa para especificar el destino de un enlace?',
    'options': [
      'href',
      'src',
      'alt',
      'link'
    ],
    'correctAnswer': 'href'
  },
  {
    'question': '¿Qué es un atributo en HTML?',
    'options': [
      'Un enlace entre dos páginas web',
      'Un tipo de archivo compatible con navegadores',
      'Una etiqueta que contiene código CSS',
      'Una propiedad añadida a una etiqueta para definir su comportamiento o estilo'
    ],
    'correctAnswer': 'Una propiedad añadida a una etiqueta para definir su comportamiento o estilo'
  },
  {
    'question': '¿Qué etiqueta HTML se usa para definir un párrafo de texto?',
    'options': [
      '<text>',
      '<p>',
      '<span>',
      '<para>'
    ],
    'correctAnswer': '<p>'
  },
  {
    'question': '¿Qué etiqueta se utiliza en el header para enlazar una hoja de estilos CSS externa?',
    'options': [
      '<style>',
      '<meta>',
      '<link>',
      '<script>'
    ],
    'correctAnswer': '<link>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para indicar que un documento es un archivo HTML5?',
    'options': [
      '<!DOCTYPE html>',
      '<document html>',
      '<doctype html5>',
      '<html5>'
    ],
    'correctAnswer': '<!DOCTYPE html>'
  },
  {
    'question': '¿Cómo se combinan dos celdas horizontalmente en una tabla HTML?',
    'options': [
      'Usando el atributo combine.',
      'Usando el atributo colspan.',
      'Usando el atributo merge.',
      'Usando el atributo rowspan.'
    ],
    'correctAnswer': 'Usando el atributo colspan.'
  },
  {
    'question': '¿Cómo se crea una tabla anidada en HTML?',
    'options': [
      'Insertando una tabla <table> dentro de una celda <td>.',
      'Insertando una celda <td> dentro de una tabla <table>.',
      'Colocando una tabla <table> dentro de otra tabla <table>.',
      'Colocando una fila <tr> dentro de otra fila <tr>.'
    ],
    'correctAnswer': 'Insertando una tabla <table> dentro de una celda <td>.'
  },
  {
    'question': '¿Cómo se define un dato dentro de una celda en HTML?',
    'options': [
      '<tr>',
      '<table>',
      '<td>',
      '<th>'
    ],
    'correctAnswer': '<td>'
  },
  {
    'question': '¿Cuál es el propósito de la etiqueta <caption> en una tabla HTML?',
    'options': [
      'Agregar un encabezado de columna.',
      'Definir el pie de la tabla.',
      'Especificar una celda combinada.',
      'Añadir una descripción o título a la tabla.'
    ],
    'correctAnswer': 'Añadir una descripción o título a la tabla.'
  },
  {
    'question': '¿Cuál es la función de la etiqueta <th> dentro de una tabla HTML?',
    'options': [
      'Crear un enlace dentro de la tabla.',
      'Definir un encabezado de celda de la tabla.',
      'Definir el cuerpo de la tabla.',
      'Agregar un borde a la tabla.'
    ],
    'correctAnswer': 'Definir un encabezado de celda de la tabla.'
  },
  {
    'question': '¿Qué atributo de una celda permite combinar varias filas en una tabla HTML?',
    'options': [
      'colspan',
      'rowspan',
      'rowmerge',
      'merge-rows'
    ],
    'correctAnswer': 'rowspan'
  },
  {
    'question': '¿Qué atributo se utiliza para añadir bordes a una tabla en HTML?',
    'options': [
      'table-border',
      'style=\'border\'',
      'border-style',
      'border'
    ],
    'correctAnswer': 'border'
  },
  {
    'question': '¿Qué etiqueta HTML se utiliza para definir una fila en una tabla?',
    'options': [
      '<thead>',
      '<table>',
      '<tr>',
      '<td>'
    ],
    'correctAnswer': '<tr>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para agrupar los encabezados de las columnas de una tabla?',
    'options': [
      '<tfoot>',
      '<th>',
      '<thead>',
      '<tr>'
    ],
    'correctAnswer': '<thead>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para crear una tabla en HTML?',
    'options': [
      '<table>',
      '<th>',
      '<td>',
      '<tr>'
    ],
    'correctAnswer': '<table>'
  },
  {
    'question': '¿Cómo se define una lista ordenada que comience con el número 5?',
    'options': [
      '<ol value="5">',
      '<ol begin="5">',
      '<ol initial="5">',
      '<ol start="5">'
    ],
    'correctAnswer': '<ol start="5">'
  },
  {
    'question': '¿Cuál es el resultado de usar la etiqueta <ul> en HTML?',
    'options': [
      'Una lista con definiciones.',
      'Una lista jerárquica.',
      'Una lista numerada.',
      'Una lista con viñetas.'
    ],
    'correctAnswer': 'Una lista con viñetas.'
  },
  {
    'question': '¿Qué atributo se puede usar para cambiar el tipo de numeración en una lista ordenada?',
    'options': [
      'numbering',
      'order',
      'style',
      'type'
    ],
    'correctAnswer': 'type'
  },
  {
    'question': '¿Qué atributo se usa en una lista desordenada para cambiar el estilo de las viñetas?',
    'options': [
      'type',
      'shape',
      'bullet',
      'style'
    ],
    'correctAnswer': 'type'
  },
  {
    'question': '¿Qué etiqueta define la descripción de un término en una lista de definiciones?',
    'options': [
      '<dt>',
      '<li>',
      '<dl>',
      '<dd>'
    ],
    'correctAnswer': '<dd>'
  },
  {
    'question': '¿Qué etiqueta define un elemento de una lista (ya sea ordenada o desordenada)?',
    'options': [
      '<li>',
      '<dt>',
      '<ul>',
      '<ol>'
    ],
    'correctAnswer': '<li>'
  },
  {
    'question': '¿Qué etiqueta define un término en una lista de definiciones?',
    'options': [
      '<dd>',
      '<li>',
      '<dt>',
      '<dl>'
    ],
    'correctAnswer': '<dt>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para crear una lista desordenada en HTML?',
    'options': [
      '<ul>',
      '<li>',
      '<dl>',
      '<ol>'
    ],
    'correctAnswer': '<ul>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para crear una lista ordenada en HTML?',
    'options': [
      '<li>',
      '<ul>',
      '<ol>',
      '<dl>'
    ],
    'correctAnswer': '<ol>'
  },
  {
    'question': '¿Qué tipo de lista utiliza las etiquetas <dl>, <dt> y <dd>?',
    'options': [
      'Lista ordenada.',
      'Lista desordenada.',
      'Lista de definiciones.',
      'Lista numerada.'
    ],
    'correctAnswer': 'Lista de definiciones.'
  },
  {
    'question': '¿Cuál es el propósito principal de la etiqueta <label> en un formulario HTML?',
    'options': [
      'Asociar un texto con un control específico.',
      'Agregar un cuadro de texto.',
      'Estilizar los elementos del formulario.',
      'Asignar un título al formulario.'
    ],
    'correctAnswer': 'Asociar un texto con un control específico.'
  },
  {
    'question': '¿Cuál es la principal diferencia entre un checkbox y un radiobutton en un formulario HTML?',
    'options': [
      'Los checkboxes solo funcionan en formularios enviados por método GET.',
      'Los radiobuttons no necesitan un atributo name.',
      'Los radiobuttons son más grandes que los checkboxes.',
      'Los checkboxes permiten seleccionar múltiples opciones, mientras que los radiobuttons permiten seleccionar solo una.'
    ],
    'correctAnswer': 'Los checkboxes permiten seleccionar múltiples opciones, mientras que los radiobuttons permiten seleccionar solo una.'
  },
  {
    'question': '¿Por qué es importante usar el atributo name en un grupo de botones de radio (<input type="radio">)?',
    'options': [
      'Para agruparlos y permitir que solo uno sea seleccionado a la vez.',
      'Para darle un estilo específico al botón.',
      'Para establecer un identificador único para cada botón.',
      'Para especificar el valor inicial del botón.'
    ],
    'correctAnswer': 'Para agruparlos y permitir que solo uno sea seleccionado a la vez.'
  },
  {
    'question': '¿Qué atributo de la etiqueta <input> se usa para especificar el tipo de entrada?',
    'options': [
      'type',
      'name',
      'action',
      'method'
    ],
    'correctAnswer': 'type'
  },
  {
    'question': '¿Qué etiqueta agrupa elementos relacionados dentro de un formulario?',
    'options': [
      '<group>',
      '<fieldset>',
      '<div>',
      '<form>'
    ],
    'correctAnswer': '<fieldset>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para crear un área de texto multilínea en un formulario?',
    'options': [
      '<form>',
      '<textbox>',
      '<textarea>',
      '<input>'
    ],
    'correctAnswer': '<textarea>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para crear un formulario en HTML?',
    'options': [
      '<input>',
      '<form>',
      '<fieldset>',
      '<table>'
    ],
    'correctAnswer': '<form>'
  },
  {
    'question': '¿Qué etiqueta se utiliza para crear una lista desplegable en un formulario?',
    'options': [
      '<dropdown>',
      '<select>',
      '<textarea>',
      '<option>'
    ],
    'correctAnswer': '<select>'
  },
  {
    'question': '¿Qué tipo de botón envía los datos del formulario a un servidor?',
    'options': [
      'type="reset"',
      'type="input"',
      'type="button"',
      'type="submit"'
    ],
    'correctAnswer': 'type="submit"'
  },
  {
    'question': '¿Qué tipo de botón restablece todos los campos del formulario a sus valores predeterminados?',
    'options': [
      'type="submit"',
      'type="button"',
      'type="reset"',
      'type="clear"'
    ],
    'correctAnswer': 'type="reset"'
  }
      
        
      
      
      
        
      
      
    
        
      
    
      
        
      
      
        
      
      
      
  
];
  