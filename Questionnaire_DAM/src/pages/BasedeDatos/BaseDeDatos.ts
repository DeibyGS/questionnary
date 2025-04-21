import { Question } from "../InterfaceQuestion";

export const questionsBaseDeDatos: Question[] = [
  {
    question: "¿Qué es una base de datos?",
    options: [
      "Un conjunto de programas informáticos para gestionar datos",
      "Una colección de imágenes y videos",
      "Un sistema de almacenamiento de archivos de texto",
      "Una agrupación de datos relevantes para una entidad determinada"
    ],
    correctAnswer: "Una agrupación de datos relevantes para una entidad determinada"
  },
  {
    question: "¿Qué es una tabla en una base de datos relacional?",
    options: [
      "Una colección de archivos",
      "Una estructura que almacena datos en filas y columnas",
      "Un gráfico que representa datos",
      "Un tipo de base de datos"
    ],
    correctAnswer: "Una estructura que almacena datos en filas y columnas"
  },
  {
    question: "¿Qué es una clave primaria en una tabla?",
    options: [
      "Un campo que puede tener valores duplicados",
      "Un campo que identifica de manera única cada registro",
      "Un campo que almacena datos numéricos",
      "Un campo que se utiliza para ordenar los registros"
    ],
    correctAnswer: "Un campo que identifica de manera única cada registro"
  },
  {
    question: "¿Qué es una clave foránea en una base de datos relacional?",
    options: [
      "Un campo que almacena datos de tipo texto",
      "Un campo que se utiliza para cifrar datos",
      "Un campo que establece una relación con la clave primaria de otra tabla",
      "Un campo que contiene la fecha de creación del registro"
    ],
    correctAnswer: "Un campo que establece una relación con la clave primaria de otra tabla"
  },
  {
    question: "¿Qué es la integridad referencial en una base de datos?",
    options: [
      "La capacidad de una base de datos para referenciar datos externos",
      "La propiedad que garantiza que las relaciones entre tablas sean válidas",
      "La habilidad de una base de datos para realizar copias de seguridad",
      "La característica que permite la replicación de datos"
    ],
    correctAnswer: "La propiedad que garantiza que las relaciones entre tablas sean válidas"
  },
  {
    question: "¿Qué es la normalización en bases de datos?",
    options: [
      "El proceso de eliminar datos redundantes y mejorar la integridad de los datos",
      "La técnica para aumentar la velocidad de las consultas",
      "El método para crear copias de seguridad de la base de datos",
      "La estrategia para diseñar interfaces de usuario"
    ],
    correctAnswer: "El proceso de eliminar datos redundantes y mejorar la integridad de los datos"
  },
  {
    question: "¿Qué es una consulta SQL?",
    options: [
      "Una instrucción para modificar el diseño de la base de datos",
      "Una solicitud para recuperar o manipular datos en una base de datos",
      "Un programa que gestiona conexiones a la base de datos",
      "Un archivo que contiene datos en formato XML"
    ],
    correctAnswer: "Una solicitud para recuperar o manipular datos en una base de datos"
  },
  {
    question: "¿Qué comando SQL se utiliza para obtener datos de una tabla?",
    options: [
      "GET",
      "FETCH",
      "SELECT",
      "RETRIEVE"
    ],
    correctAnswer: "SELECT"
  },
  {
    question: "¿Qué es un índice en una base de datos?",
    options: [
      "Una lista de todos los usuarios de la base de datos",
      "Una estructura que mejora la velocidad de las operaciones de consulta",
      "Un tipo de clave primaria",
      "Un registro de cambios realizados en la base de datos"
    ],
    correctAnswer: "Una estructura que mejora la velocidad de las operaciones de consulta"
  },
  {
    question: "¿Qué es un SGBD (Sistema de Gestión de Bases de Datos)?",
    options: [
      "Un software que permite crear, administrar y manipular bases de datos",
      "Un lenguaje de programación para bases de datos",
      "Un protocolo de comunicación entre servidores",
      "Un tipo de archivo que almacena datos"
    ],
    correctAnswer: "Un software que permite crear, administrar y manipular bases de datos"
  }
  ,
  {
    question: "¿Qué es un campo en una base de datos?",
    options: [
      "Una fila completa de datos",
      "Una columna que representa un atributo de los datos",
      "Un conjunto de tablas relacionadas",
      "Una base de datos completa"
    ],
    correctAnswer: "Una columna que representa un atributo de los datos"
  },
  {
    question: "¿Qué es un registro en una base de datos?",
    options: [
      "Una columna que representa un atributo de los datos",
      "Una fila que contiene todos los datos de una entidad",
      "Un conjunto de bases de datos",
      "Un índice de búsqueda"
    ],
    correctAnswer: "Una fila que contiene todos los datos de una entidad"
  },
  {
    question: "¿Qué tipo de lenguaje es SQL?",
    options: [
      "Lenguaje de programación orientado a objetos",
      "Lenguaje de marcado",
      "Lenguaje de consulta estructurado",
      "Lenguaje de scripting"
    ],
    correctAnswer: "Lenguaje de consulta estructurado"
  },
  {
    question: "¿Cuál es la función del comando SQL 'INSERT'?",
    options: [
      "Eliminar registros de una tabla",
      "Actualizar registros existentes",
      "Agregar nuevos registros a una tabla",
      "Crear una nueva tabla"
    ],
    correctAnswer: "Agregar nuevos registros a una tabla"
  },
  {
    question: "¿Qué significa la sigla 'DBMS'?",
    options: [
      "Database Management System",
      "Data Backup Management Software",
      "Digital Base Mapping System",
      "Data Binary Management Structure"
    ],
    correctAnswer: "Database Management System"
  },
  {
    question: "¿Cuál es la función principal de una clave primaria?",
    options: [
      "Permitir valores nulos en una columna",
      "Establecer relaciones entre tablas",
      "Identificar de manera única cada registro en una tabla",
      "Ordenar los registros de una tabla"
    ],
    correctAnswer: "Identificar de manera única cada registro en una tabla"
  },
  {
    question: "¿Qué comando SQL se utiliza para eliminar una tabla?",
    options: [
      "REMOVE TABLE",
      "DELETE TABLE",
      "DROP TABLE",
      "ERASE TABLE"
    ],
    correctAnswer: "DROP TABLE"
  },
  {
    question: "¿Qué es una vista en una base de datos?",
    options: [
      "Una tabla física que almacena datos",
      "Una representación virtual de una consulta",
      "Un índice de búsqueda",
      "Un tipo de clave foránea"
    ],
    correctAnswer: "Una representación virtual de una consulta"
  },
  {
    question: "¿Qué es una transacción en una base de datos?",
    options: [
      "Una operación que se ejecuta automáticamente al iniciar la base de datos",
      "Una secuencia de operaciones que se ejecutan como una unidad lógica de trabajo",
      "Un proceso de respaldo de datos",
      "Una consulta que se ejecuta periódicamente"
    ],
    correctAnswer: "Una secuencia de operaciones que se ejecutan como una unidad lógica de trabajo"
  },
  {
    question: "¿Qué es una vista en una base de datos?",
    options: [
      "Una tabla física que almacena datos permanentemente",
      "Una representación virtual de una consulta almacenada",
      "Una copia de seguridad de una tabla",
      "Un índice que mejora el rendimiento de las consultas"
    ],
    correctAnswer: "Una representación virtual de una consulta almacenada"
  },
  {
    question: "¿Qué es un procedimiento almacenado?",
    options: [
      "Un archivo externo que contiene código SQL",
      "Una función que se ejecuta automáticamente al iniciar la base de datos",
      "Un conjunto de instrucciones SQL que se almacenan y se pueden ejecutar como una unidad",
      "Una herramienta para diseñar bases de datos gráficamente"
    ],
    correctAnswer: "Un conjunto de instrucciones SQL que se almacenan y se pueden ejecutar como una unidad"
  },
  {
    question: "¿Qué es un trigger (disparador) en una base de datos?",
    options: [
      "Una herramienta para programar tareas en el sistema operativo",
      "Una consulta que se ejecuta manualmente por el usuario",
      "Un procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en la base de datos",
      "Un tipo de índice especial"
    ],
    correctAnswer: "Un procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en la base de datos"
  },
  {
    question: "¿Qué es una función agregada en SQL?",
    options: [
      "Una función que permite agregar nuevas filas a una tabla",
      "Una función que realiza cálculos sobre un conjunto de valores y devuelve un solo valor",
      "Una función que concatena cadenas de texto",
      "Una función que convierte datos numéricos en texto"
    ],
    correctAnswer: "Una función que realiza cálculos sobre un conjunto de valores y devuelve un solo valor"
  },
  {
    question: "¿Cuál es el propósito de la cláusula GROUP BY en SQL?",
    options: [
      "Ordenar los resultados de una consulta",
      "Filtrar los resultados de una consulta",
      "Agrupar filas que tienen los mismos valores en columnas especificadas",
      "Eliminar filas duplicadas de los resultados"
    ],
    correctAnswer: "Agrupar filas que tienen los mismos valores en columnas especificadas"
  },
  {
    question: "¿Qué es una subconsulta en SQL?",
    options: [
      "Una consulta que se ejecuta en segundo plano",
      "Una consulta que se almacena en una vista",
      "Una consulta anidada dentro de otra consulta",
      "Una consulta que se ejecuta automáticamente al iniciar la base de datos"
    ],
    correctAnswer: "Una consulta anidada dentro de otra consulta"
  },
  {
    question: "¿Qué comando SQL se utiliza para eliminar una tabla existente?",
    options: [
      "DELETE TABLE",
      "REMOVE TABLE",
      "DROP TABLE",
      "ERASE TABLE"
    ],
    correctAnswer: "DROP TABLE"
  },
  {
    question: "¿Qué es una clave candidata en una base de datos?",
    options: [
      "Una clave que se utiliza para cifrar los datos",
      "Una clave que puede ser utilizada como clave primaria",
      "Una clave que se genera automáticamente",
      "Una clave que se utiliza para ordenar los registros"
    ],
    correctAnswer: "Una clave que puede ser utilizada como clave primaria"
  },
  {
    question: "¿Qué es la normalización en bases de datos?",
    options: [
      "El proceso de eliminar datos redundantes y mejorar la integridad de los datos",
      "La técnica para aumentar la velocidad de las consultas",
      "El método para crear copias de seguridad de la base de datos",
      "La estrategia para diseñar interfaces de usuario"
    ],
    correctAnswer: "El proceso de eliminar datos redundantes y mejorar la integridad de los datos"
  }
];
