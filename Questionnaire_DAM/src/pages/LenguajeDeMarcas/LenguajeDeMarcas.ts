import { Question } from "../InterfaceQuestion";

  export const questionsLenguajeDeMarcas: Question[] = [
    {
      question: "¿Qué objeto permite leer archivos locales en JavaScript?",
      options: ["XMLReader", "LocalFile", "DOMParser", "FileReader"],
      correctAnswer: "FileReader"
    },
    {
      question: "¿Cuál es el propósito del método readAsText()?",
      options: [
        "Leer un archivo como texto plano",
        "Leer archivos binarios",
        "Escribir contenido en un archivo",
        "Convertir texto en XML"
      ],
      correctAnswer: "Leer un archivo como texto plano"
    },
    {
      question: "¿Qué evento se dispara cuando FileReader termina de leer un archivo?",
      options: ["onload", "onchange", "onfinish", "onread"],
      correctAnswer: "onload"
    },
    {
      question: "¿Qué método permite convertir texto XML en un documento navegable?",
      options: [
        "FileParser.parseXML()",
        "DOMParser.parseFromString()",
        "textToXML()",
        "XMLReader.parseFile()"
      ],
      correctAnswer: "DOMParser.parseFromString()"
    },
    {
      question: "¿Qué tipo MIME se debe indicar al analizar texto como XML?",
      options: ["text/xml-raw", "text/html", "application/xml", "application/json"],
      correctAnswer: "application/xml"
    },
    {
      question: "¿Qué función tiene e.target.result dentro de reader.onload?",
      options: [
        "Guarda el archivo en localStorage",
        "Retorna el tipo de archivo",
        "Devuelve un nodo XML",
        "Contiene el contenido del archivo leído"
      ],
      correctAnswer: "Contiene el contenido del archivo leído"
    },
    {
      question: "¿Qué método se usa para acceder a todos los nodos <persona> de un XML?",
      options: [
        'findNodes("persona")',
        'getElementsByTagName("persona")',
        'querySelectorAll("persona")',
        'getById("persona")'
      ],
      correctAnswer: 'getElementsByTagName("persona")'
    },
    {
      question: "¿Cómo se obtiene el texto dentro de una etiqueta XML?",
      options: [".text", ".nodeText", ".textContent", ".innerValue"],
      correctAnswer: ".textContent"
    },
    {
      question: "¿Qué ocurre si no se selecciona ningún archivo y se accede a files[0]?",
      options: ["Retorna undefined", "Devuelve null", "Lanza un error automático", "Devuelve un string vacío"],
      correctAnswer: "Retorna undefined"
    },
    {
      question: '¿Para qué sirve input type="file" en HTML?',
      options: [
        "Para ejecutar funciones JavaScript",
        "Para mostrar texto en pantalla",
        "Para enviar datos a un servidor",
        "Para permitir que el usuario seleccione archivos"
      ],
      correctAnswer: "Para permitir que el usuario seleccione archivos"
    },
    {
      question: "¿Qué extensión tienen normalmente los archivos XML?",
      options: [".json", ".doc", ".xml", ".js"],
      correctAnswer: ".xml"
    },
    {
      question: "¿Qué estructura devuelve DOMParser.parseFromString()?",
      options: [
        "Documento DOM (navegable con JS)",
        "Array de nodos",
        "Objeto JSON",
        "Texto plano"
      ],
      correctAnswer: "Documento DOM (navegable con JS)"
    },
    {
      question: "¿Qué instrucción permite añadir un objeto al final de un array?",
      options: ["add()", "push()", "insert()", "append()"],
      correctAnswer: "push()"
    },
    {
      question: "¿Qué instrucción JavaScript permite guardar datos en el almacenamiento local del navegador?",
      options: [
        "localStorage.setItem()",
        "window.store()",
        "saveToBrowser()",
        "session.save()"
      ],
      correctAnswer: "localStorage.setItem()"
    },
    {
      question: "¿Qué ventaja ofrece exportar datos a XML desde JavaScript?",
      options: [
        "Menor compatibilidad con navegadores",
        "Requiere servidor para leerlo",
        "Solo funciona en entornos móviles",
        "Permite portabilidad e interoperabilidad de datos"
      ],
      correctAnswer: "Permite portabilidad e interoperabilidad de datos"
    }
  ];
  