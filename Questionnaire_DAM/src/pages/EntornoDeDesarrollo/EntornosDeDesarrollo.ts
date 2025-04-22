import { Question } from "../InterfaceQuestion";

export const questionsEntornosDesarrollo: Question[] = [
  {
    question: "¿Qué es un entorno de desarrollo integrado (IDE)?",
    options: [
      "Un sistema operativo para programadores",
      "Una herramienta que combina editor de código, compilador y depurador",
      "Un lenguaje de programación",
      "Un tipo de base de datos"
    ],
    correctAnswer: "Una herramienta que combina editor de código, compilador y depurador"
  },
  {
    question: "¿Cuál de las siguientes herramientas es un sistema de control de versiones?",
    options: [
      "Eclipse",
      "Git",
      "Visual Studio Code",
      "NetBeans"
    ],
    correctAnswer: "Git"
  },
  {
    question: "¿Qué es un lenguaje de programación de alto nivel?",
    options: [
      "Un lenguaje que se ejecuta directamente en el hardware",
      "Un lenguaje que utiliza instrucciones en código binario",
      "Un lenguaje con sintaxis cercana al lenguaje humano",
      "Un lenguaje específico para bases de datos"
    ],
    correctAnswer: "Un lenguaje con sintaxis cercana al lenguaje humano"
  },
  {
    question: "¿Cuál de las siguientes opciones describe una herramienta CASE?",
    options: [
      "Un compilador de código",
      "Un editor de texto",
      "Una herramienta para automatizar tareas del ciclo de vida del software",
      "Un sistema operativo"
    ],
    correctAnswer: "Una herramienta para automatizar tareas del ciclo de vida del software"
  },
  {
    question: "¿Qué fase del desarrollo de software implica la identificación de requisitos?",
    options: [
      "Diseño",
      "Análisis",
      "Codificación",
      "Mantenimiento"
    ],
    correctAnswer: "Análisis"
  },
  {
    question: "¿Qué es la depuración en el contexto del desarrollo de software?",
    options: [
      "La traducción del código fuente a código máquina",
      "La eliminación de comentarios en el código",
      "El proceso de encontrar y corregir errores en el código",
      "La actualización de la documentación del software"
    ],
    correctAnswer: "El proceso de encontrar y corregir errores en el código"
  },
  {
    question: "¿Cuál es el propósito de un compilador?",
    options: [
      "Ejecutar el código fuente directamente",
      "Traducir el código fuente a código máquina",
      "Editar archivos de texto",
      "Gestionar bases de datos"
    ],
    correctAnswer: "Traducir el código fuente a código máquina"
  },
  {
    question: "¿Qué herramienta se utiliza comúnmente para la gestión de versiones en proyectos de software?",
    options: [
      "Photoshop",
      "Git",
      "Excel",
      "PowerPoint"
    ],
    correctAnswer: "Git"
  },
  {
    question: "¿Qué es un repositorio en el contexto del control de versiones?",
    options: [
      "Una copia de seguridad del sistema operativo",
      "Un almacenamiento centralizado de código fuente y su historial de cambios",
      "Una base de datos de usuarios",
      "Un servidor web"
    ],
    correctAnswer: "Un almacenamiento centralizado de código fuente y su historial de cambios"
  },
  {
    question: "¿Qué significa 'IDE' en el desarrollo de software?",
    options: [
      "Identificador de Desarrollo Estándar",
      "Interfaz de Desarrollo Empresarial",
      "Entorno de Desarrollo Integrado",
      "Editor de Datos Electrónicos"
    ],
    correctAnswer: "Entorno de Desarrollo Integrado"
  },
  {
    "question": "¿Qué permite hacer una clave SSH asociada a una cuenta de GitHub?",
    "options": [
      "Borrar repositorios",
      "Cambiar permisos de otros usuarios",
      "Autenticarse sin contraseña en operaciones Git",
      "Ver estadísticas privadas de otros usuarios"
    ],
    "correctAnswer": "Autenticarse sin contraseña en operaciones Git"
  },
  {
    "question": "¿Dónde se debe agregar una clave SSH personal para trabajar con GitHub?",
    "options": [
      "En el archivo README",
      "En los Settings de la cuenta de GitHub → SSH and GPG Keys",
      "En la terminal de Git Bash",
      "En cada repositorio manualmente"
    ],
    "correctAnswer": "En los Settings de la cuenta de GitHub → SSH and GPG Keys"
  },
  {
    "question": "¿Qué opción es necesaria para subir cambios de una nueva rama a GitHub desde Git GUI?",
    "options": [
      "Ejecutar el comando merge",
      "Hacer Push y marcar 'Set upstream'",
      "Usar un archivo .gitconfig",
      "Hacer Fetch desde GitHub"
    ],
    "correctAnswer": "Hacer Push y marcar 'Set upstream'"
  },
  {
    "question": "¿Cuál es el propósito de un Pull Request?",
    "options": [
      "Eliminar una rama remota",
      "Proponer la fusión de una rama con otra",
      "Hacer backup del repositorio",
      "Crear una nueva clave SSH"
    ],
    "correctAnswer": "Proponer la fusión de una rama con otra"
  },
  {
    "question": "¿Qué puede causar un conflicto en un Pull Request?",
    "options": [
      "Uso de Git GUI en lugar de terminal",
      "Archivos muy grandes",
      "Cambios en carpetas vacías",
      "Cambios en las mismas líneas en dos ramas distintas"
    ],
    "correctAnswer": "Cambios en las mismas líneas en dos ramas distintas"
  },
  {
    "question": "¿Quién puede aceptar un Pull Request en GitHub?",
    "options": [
      "Usuarios con permisos de escritura o superiores",
      "Cualquier usuario registrado",
      "Solo usuarios con claves SSH",
      "Solo el dueño de la cuenta GitHub"
    ],
    "correctAnswer": "Usuarios con permisos de escritura o superiores"
  },
  {
    "question": "¿Qué debe hacer un colaborador antes de hacer Push a una rama compartida?",
    "options": [
      "Hacer reset --hard",
      "Hacer Pull para actualizar su copia local",
      "Crear un nuevo repositorio",
      "Cambiar de repositorio"
    ],
    "correctAnswer": "Hacer Pull para actualizar su copia local"
  },
  {
    "question": "¿Qué acción permite crear una nueva rama en Git GUI?",
    "options": [
      "Remote → Clone",
      "Edit → Rename",
      "Branch → Create",
      "File → New Project"
    ],
    "correctAnswer": "Branch → Create"
  },
  {
    "question": "¿Dónde se encuentra la opción para clonar un repositorio en Git GUI?",
    "options": [
      "File → Export",
      "Merge → Clone",
      "En la pantalla inicial: 'Clone Existing Repository'",
      "Edit → Clone"
    ],
    "correctAnswer": "En la pantalla inicial: 'Clone Existing Repository'"
  },
  {
    "question": "¿Cuál es la URL recomendada para usar si ya tienes una clave SSH configurada?",
    "options": [
      "La que empieza por git@github.com:",
      "La que empieza por http://",
      "La de la documentación de GitHub",
      "La del archivo .gitignore"
    ],
    "correctAnswer": "La que empieza por git@github.com:"
  },
  {
    "question": "¿Qué ocurre cuando haces Merge en Git GUI?",
    "options": [
      "Se genera un conflicto automáticamente",
      "Se combinan los cambios de una rama en otra",
      "Se borra el repositorio original",
      "Se revierte el último commit"
    ],
    "correctAnswer": "Se combinan los cambios de una rama en otra"
  },
  {
    "question": "¿Cuál de estas afirmaciones sobre ramas es correcta?",
    "options": [
      "Una rama solo puede tener un commit",
      "Todas las ramas deben llamarse main",
      "Las ramas permiten trabajar de forma paralela sin afectar la principal",
      "No se pueden subir ramas desde Git GUI"
    ],
    "correctAnswer": "Las ramas permiten trabajar de forma paralela sin afectar la principal"
  },
  {
    "question": "¿Qué es la refactorización?",
    "options": [
      "Mejorar la estructura interna del código sin cambiar su comportamiento externo",
      "Cambiar el diseño del código agregando nuevas funcionalidades",
      "Proceso de corregir errores en el código",
      "Reescritura completa del código de una aplicación"
    ],
    "correctAnswer": "Mejorar la estructura interna del código sin cambiar su comportamiento externo"
  },
  {
    "question": "¿Cuál de los siguientes NO es un tipo de mantenimiento de software?",
    "options": [
      "Mantenimiento correctivo",
      "Mantenimiento adaptativo",
      "Mantenimiento perfectivo",
      "Mantenimiento iterativo"
    ],
    "correctAnswer": "Mantenimiento iterativo"
  },
  {
    "question": "¿Por qué se debe evitar el uso de var en JavaScript en favor de let y const?",
    "options": [
      "Porque var ocupa más memoria que let y const",
      "Porque var no es compatible con las últimas versiones de los navegadores",
      "Porque var tiene un alcance menos predecible y puede generar errores",
      "Porque var hace que el código sea más rápido"
    ],
    "correctAnswer": "Porque var tiene un alcance menos predecible y puede generar errores"
  },
  {
    "question": "¿Cuál es un beneficio clave de la refactorización?",
    "options": [
      "Mejora la calidad del código y facilita el mantenimiento",
      "Reduce la cantidad de pruebas necesarias en una aplicación",
      "Permite escribir código más largo y detallado",
      "Hace que el código sea menos reutilizable"
    ],
    "correctAnswer": "Mejora la calidad del código y facilita el mantenimiento"
  },
  {
    "question": "¿Qué es un 'bad smell' en el código?",
    "options": [
      "Un código que no compila correctamente",
      "Un síntoma de un posible problema en el diseño del código",
      "Un error crítico en tiempo de ejecución",
      "Un tipo de variable mal definida"
    ],
    "correctAnswer": "Un síntoma de un posible problema en el diseño del código"
  },
  {
    "question": "¿Cuál de los siguientes es un ejemplo de código duplicado?",
    "options": [
      "Mismo fragmento de código repetido en diferentes partes del programa",
      "Código con muchas clases y métodos cortos",
      "Código bien documentado",
      "Código optimizado con estructuras de datos eficientes"
    ],
    "correctAnswer": "Mismo fragmento de código repetido en diferentes partes del programa"
  },
  {
    "question": "¿Qué problema presenta un método con demasiados parámetros?",
    "options": [
      "Hace que el código sea más rápido",
      "Reduce la necesidad de comentarios",
      "Mejora la reutilización del código",
      "Dificulta la comprensión y el mantenimiento del código"
    ],
    "correctAnswer": "Dificulta la comprensión y el mantenimiento del código"
  },
  {
    "question": "¿Cuál es el problema del 'Shotgun Surgery'?",
    "options": [
      "Un cambio en una clase provoca errores en el código",
      "Existen demasiados bucles en el código",
      "Se usa una función en una clase incorrecta",
      "Un cambio en una clase requiere modificar muchas otras clases"
    ],
    "correctAnswer": "Un cambio en una clase requiere modificar muchas otras clases"
  },
  {
    "question": "¿Qué problema representa la 'Complejidad Ciclomática' en el código?",
    "options": [
      "Clases con pocos atributos y métodos",
      "Código duplicado en varios archivos",
      "Métodos que tienen muchos parámetros",
      "Demasiados condicionales y bucles en un método"
    ],
    "correctAnswer": "Demasiados condicionales y bucles en un método"
  },
  {
    "question": "¿Cuál es el problema con un método largo ('Long Method')?",
    "options": [
      "No utiliza suficiente memoria del sistema",
      "Es demasiado corto y no hace nada útil",
      "Realiza demasiadas tareas y es difícil de entender",
      "No tiene suficientes parámetros"
    ],
    "correctAnswer": "Realiza demasiadas tareas y es difícil de entender"
  },
  {
    "question": "¿Qué indica la 'Envidia de funcionalidad' ('Feature Envy')?",
    "options": [
      "Un método está mal documentado",
      "Un método no usa suficientes variables globales",
      "Una clase tiene pocos métodos",
      "Un método usa más atributos de otra clase en lugar de su propia clase"
    ],
    "correctAnswer": "Un método usa más atributos de otra clase en lugar de su propia clase"
  },
  {
    "question": "¿Cuál es la mejor forma de solucionar el problema de código duplicado?",
    "options": [
      "Reescribir la funcionalidad en cada clase afectada",
      "Copiar el código en todas las clases donde sea necesario",
      "Eliminar la funcionalidad repetida sin reemplazo",
      "Extraer el código duplicado en una función reutilizable"
    ],
    "correctAnswer": "Extraer el código duplicado en una función reutilizable"
  },
  {
    "question": "¿Qué es una 'Clase Larga' ('Large Class')?",
    "options": [
      "Una clase que no tiene suficientes métodos",
      "Una clase sin dependencias externas",
      "Una clase con demasiados métodos o atributos, lo que indica demasiadas responsabilidades",
      "Una clase que solo tiene variables globales"
    ],
    "correctAnswer": "Una clase con demasiados métodos o atributos, lo que indica demasiadas responsabilidades"
  },
  {
    "question": "¿Cuál de los siguientes es un beneficio de dividir un método largo en varios más pequeños?",
    "options": [
      "Reduce la cantidad de líneas de código en el programa",
      "Aumenta la complejidad del código",
      "Hace que el código se ejecute más lentamente",
      "Mejora la legibilidad y facilita el mantenimiento"
    ],
    "correctAnswer": "Mejora la legibilidad y facilita el mantenimiento"
  },
  {
    "question": "¿Qué problema se produce cuando una clase depende demasiado de la implementación de otra clase?",
    "options": [
      "Shotgun Surgery",
      "Intimidad inapropiada ('Inappropriate Intimacy')",
      "Complejidad artificial",
      "Código duplicado"
    ],
    "correctAnswer": "Intimidad inapropiada ('Inappropriate Intimacy')"
  },
  {
    "question": "¿Cómo se puede evitar la 'Complejidad Artificial' en un programa?",
    "options": [
      "Usando patrones de diseño complejos en cualquier situación",
      "Reescribiendo todo el código en un solo método grande",
      "Usando una cantidad excesiva de clases y métodos",
      "Evitando el uso innecesario de patrones y manteniendo un diseño simple"
    ],
    "correctAnswer": "Evitando el uso innecesario de patrones y manteniendo un diseño simple"
  },
  {
    "question": "¿Cuál es una estrategia efectiva para refactorizar código?",
    "options": [
      "Evitar el uso de herramientas de refactorización automática",
      "Hacer cambios masivos en todo el código de una vez",
      "No documentar los cambios realizados para evitar confusión",
      "Realizar pequeñas refactorizaciones frecuentes en lugar de una refactorización grande y compleja"
    ],
    "correctAnswer": "Realizar pequeñas refactorizaciones frecuentes en lugar de una refactorización grande y compleja"
  },
  {
    "question": "¿Cómo se puede solucionar el problema de demasiados parámetros en un método?",
    "options": [
      "Eliminar algunos parámetros sin analizar su uso",
      "Duplicar el método con diferentes combinaciones de parámetros",
      "Agrupar los parámetros en un objeto",
      "Mantener el método con muchos parámetros, pero agregar más comentarios"
    ],
    "correctAnswer": "Agrupar los parámetros en un objeto"
  },
  {
    "question": "¿Qué técnica se usa para detectar 'malos olores' en el código?",
    "options": [
      "Revisar el código visualmente sin herramientas",
      "Realizar revisiones de código y usar herramientas de análisis estático",
      "Esperar a que el código falle en producción antes de hacer cambios",
      "Usar solo pruebas unitarias sin inspeccionar el código"
    ],
    "correctAnswer": "Realizar revisiones de código y usar herramientas de análisis estático"
  },
  {
    "question": "¿Cuál es la mejor manera de reducir la deuda técnica en un proyecto?",
    "options": [
      "No hacer revisiones de código para evitar retrasos",
      "Usar solo código heredado sin actualizarlo",
      "Evitar la refactorización y seguir agregando nuevas funcionalidades",
      "Aplicar refactorización continua y escribir código limpio desde el inicio"
    ],
    "correctAnswer": "Aplicar refactorización continua y escribir código limpio desde el inicio"
  },
  {
    "question": "¿Qué tipo de comprobaciones se llevan a cabo con el código en ejecución?",
    "options": [
      "Revisión de código",
      "Comprobaciones dinámicas",
      "Validación de requisitos",
      "Comprobaciones estáticas"
    ],
    "correctAnswer": "Comprobaciones dinámicas"
  },
  {
    "question": "¿Qué pregunta responde la verificación en las pruebas de software?",
    "options": [
      "¿El software es fácil de usar?",
      "¿Estamos construyendo el software correctamente?",
      "¿Cuántos errores tiene el sistema?",
      "¿Estamos cumpliendo los requisitos del cliente?"
    ],
    "correctAnswer": "¿Estamos construyendo el software correctamente?"
  },
  {
    "question": "¿Qué relación existe entre un error y un fallo en el software?",
    "options": [
      "Un error siempre causa un fallo inmediato",
      "Un error cometido por el programador puede generar un defecto en el software que ocasione un fallo",
      "Un fallo solo puede ser causado por un usuario",
      "Un fallo solo ocurre si hay defectos en el hardware"
    ],
    "correctAnswer": "Un error cometido por el programador puede generar un defecto en el software que ocasione un fallo"
  },
  {
    "question": "¿Qué pruebas se encargan de comprobar la comunicación entre las partes de un programa?",
    "options": [
      "Pruebas de integración",
      "Pruebas unitarias",
      "Pruebas de regresión",
      "Pruebas de sistema"
    ],
    "correctAnswer": "Pruebas de integración"
  },
  {
    "question": "¿Qué se analiza en las pruebas de caja negra?",
    "options": [
      "La estructura interna del código",
      "Las pruebas de rendimiento",
      "Las entradas y salidas sin conocer la implementación interna",
      "La lógica de programación y los algoritmos internos"
    ],
    "correctAnswer": "Las entradas y salidas sin conocer la implementación interna"
  },
  {
    "question": "¿Cuál es el propósito de las pruebas de caja blanca?",
    "options": [
      "Evaluar la estructura interna del código y cómo está definido.",
      "Validar los requisitos del cliente",
      "Medir la velocidad del software",
      "Comprobar el diseño de la interfaz"
    ],
    "correctAnswer": "Evaluar la estructura interna del código y cómo está definido."
  },
  {
    "question": "¿Qué es una clase de equivalencia en el contexto de las pruebas de software?",
    "options": [
      "Un tipo de prueba que mide el rendimiento del software",
      "Un documento que describe los errores del sistema",
      "Un conjunto de datos de entrada que definen estados válidos y no válidos",
      "Un modelo matemático para predecir fallos"
    ],
    "correctAnswer": "Un conjunto de datos de entrada que definen estados válidos y no válidos"
  },
  {
    "question": "¿Cuál de los siguientes es un ejemplo de una condición de entrada?",
    "options": [
      "\"El software debe ejecutarse en Linux\"",
      "\"El usuario debe leer el manual de usuario antes de la prueba\"",
      "\"El código fuente debe ser compilado\"",
      "\"Valores entre 0 y 10\""
    ],
    "correctAnswer": "\"Valores entre 0 y 10\""
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones sobre las clases de equivalencia es correcta?",
    "options": [
      "No es necesario generar pruebas para clases no válidas",
      "Solo se deben generar casos de prueba para clases válidas",
      "Cada caso de prueba debe incluir al menos una clase de equivalencia válida",
      "Las clases de equivalencia no afectan el diseño de los casos de prueba"
    ],
    "correctAnswer": "Cada caso de prueba debe incluir al menos una clase de equivalencia válida"
  },
  {
    "question": "¿Cuál es el propósito de la complejidad ciclomática en el desarrollo de software?",
    "options": [
      "Evaluar la estética del código fuente",
      "Medir la eficiencia del código en tiempo de ejecución",
      "Determinar la cantidad de pruebas necesarias para cubrir todos los caminos del código",
      "Reducir el consumo de memoria del programa"
    ],
    "correctAnswer": "Determinar la cantidad de pruebas necesarias para cubrir todos los caminos del código"
  },
  {
    "question": "¿Cuál es la fórmula para calcular la complejidad ciclomática?",
    "options": [
      "M = E - N + 2",
      "M = N + E - 2",
      "M = N - E + 2",
      "M = (N + E) / 2"
    ],
    "correctAnswer": "M = E - N + 2"
  },
  {
    "question": "En la fórmula de la complejidad ciclomática, ¿qué representa 'E'?",
    "options": [
      "Número de sentencias ejecutadas",
      "Número de variables en el código",
      "Número de aristas del grafo",
      "Número de ciclos en la ejecución del programa"
    ],
    "correctAnswer": "Número de aristas del grafo"
  },
  {
    "question": "Si en una función se tiene 8 aristas y 7 nodos, ¿cuál es su complejidad ciclomática?",
    "options": [
      "4",
      "3",
      "5",
      "10"
    ],
    "correctAnswer": "3"
  },
  {
    "question": "Según la tabla de interpretación, ¿qué nivel de riesgo tiene una complejidad ciclomática de 30?",
    "options": [
      "No testeable",
      "Alto riesgo",
      "Riesgo moderado",
      "Bajo riesgo"
    ],
    "correctAnswer": "Alto riesgo"
  },
  {
    "question": "¿Qué es una excepción en programación?",
    "options": [
      "Un error crítico del sistema que no puede manejarse",
      "Un mecanismo que permite manejar errores durante la ejecución del programa",
      "Un mensaje de depuración que muestra advertencias",
      "Una técnica para optimizar el rendimiento del código"
    ],
    "correctAnswer": "Un mecanismo que permite manejar errores durante la ejecución del programa"
  },
  {
    "question": "¿Qué tipo de error genera la siguiente línea de código en Java? int resultado = 10 / 0;",
    "options": [
      "IOException",
      "NullPointerException",
      "IndexOutOfBoundsException",
      "ArithmeticException"
    ],
    "correctAnswer": "ArithmeticException"
  },
  {
    "question": "¿Cuál es la diferencia principal entre un error y una excepción?",
    "options": [
      "Una excepción ocurre en la compilación y un error en la ejecución",
      "Un error ocurre en tiempo de ejecución y no puede manejarse, mientras que una excepción sí",
      "Las excepciones son solo advertencias, mientras que los errores detienen el programa",
      "Los errores son más leves que las excepciones"
    ],
    "correctAnswer": "Un error ocurre en tiempo de ejecución y no puede manejarse, mientras que una excepción sí"
  },
  {
    "question": "¿Cuál de las siguientes opciones es un error y no una excepción?",
    "options": [
      "ArithmeticException",
      "IOException",
      "StackOverflowError",
      "NullPointerException"
    ],
    "correctAnswer": "StackOverflowError"
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones sobre el bloque try-catch es correcta?",
    "options": [
      "try se usa para encapsular código que puede generar una excepción y catch para manejarla",
      "catch debe aparecer siempre antes de try",
      "Un try solo puede contener una instrucción",
      "try y catch no pueden usarse en Java"
    ],
    "correctAnswer": "try se usa para encapsular código que puede generar una excepción y catch para manejarla"
  },
  {
    "question": "¿Cuál es la principal ventaja de manejar excepciones en un programa?",
    "options": [
      "Reduce el tamaño del código fuente",
      "Evita la necesidad de pruebas de software",
      "Permite que el programa continúe funcionando a pesar de los errores",
      "Acelera la ejecución del código"
    ],
    "correctAnswer": "Permite que el programa continúe funcionando a pesar de los errores"
  },
  {
    "question": "¿Cuál es el principal beneficio de la automatización de pruebas de software?",
    "options": [
      "Evitar la necesidad de escribir casos de prueba",
      "Reducir la complejidad del código",
      "Sustituir completamente a los testers humanos",
      "Disminuir el esfuerzo manual y aumentar la eficiencia en las pruebas"
    ],
    "correctAnswer": "Disminuir el esfuerzo manual y aumentar la eficiencia en las pruebas"
  },
  {
    "question": "¿Cuál de los siguientes NO es un tipo de prueba automatizada?",
    "options": [
      "Pruebas de interfaz",
      "Pruebas de seguridad",
      "Pruebas de rendimiento",
      "Pruebas de integración"
    ],
    "correctAnswer": "Pruebas de seguridad"
  },
  {
    "question": "¿Qué tipo de pruebas miden la velocidad y capacidad de respuesta del sistema bajo diferentes cargas?",
    "options": [
      "Pruebas de rendimiento",
      "Pruebas unitarias",
      "Pruebas de interfaz",
      "Pruebas de integración"
    ],
    "correctAnswer": "Pruebas de rendimiento"
  },
  {
    "question": "¿Qué criterio se debe considerar al decidir en qué pruebas invertir más recursos?",
    "options": [
      "La cantidad de líneas de código del software",
      "La facilidad de implementación de la automatización",
      "La relación entre riesgo y frecuencia",
      "La cantidad de usuarios activos"
    ],
    "correctAnswer": "La relación entre riesgo y frecuencia"
  },
  {
    "question": "¿Por qué se deben invertir más recursos en pruebas de inicio de sesión y transferencias en una aplicación bancaria?",
    "options": [
      "Porque tienen menor impacto en caso de error",
      "Porque son funciones críticas y un fallo comprometería la seguridad y confianza de los usuarios",
      "Porque son pruebas fáciles de automatizar",
      "Porque requieren menor tiempo de ejecución"
    ],
    "correctAnswer": "Porque son funciones críticas y un fallo comprometería la seguridad y confianza de los usuarios"
  },
  
  {
    "question": "¿Cuál es el principal propósito de una máquina virtual de hardware?",
    "options": [
      "Ofrecer compatibilidad con múltiples lenguajes de programación",
      "Ejecutar un único proceso en un entorno aislado",
      "Sustituir el sistema operativo anfitrión",
      "Simular un sistema operativo completo en un entorno virtual"
    ],
    "correctAnswer": "Simular un sistema operativo completo en un entorno virtual"
  },
  {
    "question": "¿Cuál es la principal función de una máquina virtual de proceso?",
    "options": [
      "Emular la interfaz de un sistema operativo moderno",
      "Ejecutar un sistema operativo completo en un entorno virtual",
      "Proveer un entorno aislado para ejecutar un único proceso o aplicación",
      "Facilitar la gestión de múltiples sistemas operativos en un solo hardware"
    ],
    "correctAnswer": "Proveer un entorno aislado para ejecutar un único proceso o aplicación"
  },
  {
    "question": "¿Cuál de los siguientes es un ejemplo de máquina virtual de proceso?",
    "options": [
      "Java Virtual Machine (JVM)",
      "Hyper-V",
      "VMware ESXi",
      "VirtualBox"
    ],
    "correctAnswer": "Java Virtual Machine (JVM)"
  },
  {
    "question": "¿En qué fase del ciclo de vida del software se crea el modelo detallado de cómo funcionará el sistema?",
    "options": [
      "Implementación",
      "Pruebas",
      "Diseño",
      "Análisis de Requisitos"
    ],
    "correctAnswer": "Diseño"
  },
  {
    "question": "¿En qué fase del ciclo de vida se realiza la codificación del sistema basándose en el diseño previamente definido?",
    "options": [
      "Análisis de Requisitos",
      "Implementación",
      "Mantenimiento",
      "Diseño"
    ],
    "correctAnswer": "Implementación"
  },
  {
    "question": "¿Qué fase del ciclo de vida del software implica realizar reuniones con el cliente para entender sus necesidades?",
    "options": [
      "Implementación",
      "Mantenimiento",
      "Análisis de Requisitos",
      "Pruebas"
    ],
    "correctAnswer": "Análisis de Requisitos"
  },
  {
    "question": "¿Cuál de las siguientes afirmaciones es verdadera sobre el modelo en cascada?",
    "options": [
      "Los requisitos pueden cambiar fácilmente durante cualquier fase del desarrollo",
      "Las fases deben completarse en orden secuencial antes de pasar a la siguiente",
      "Es un modelo iterativo que entrega incrementos del producto en cada etapa",
      "Todas las fases del desarrollo se realizan de manera simultánea"
    ],
    "correctAnswer": "Las fases deben completarse en orden secuencial antes de pasar a la siguiente"
  },
  {
    "question": "En las metodologías ágiles, como Scrum, ¿qué rol es responsable de coordinar al equipo y comunicarse con el Product Owner?",
    "options": [
      "Scrum Master",
      "Product Owner",
      "Team Member",
      "Project Manager"
    ],
    "correctAnswer": "Scrum Master"
  },
  {
    "question": "¿Cuál es el nivel de abstracción más bajo que existe?",
    "options": [
      "Binario",
      "Nivel de máquina",
      "Lenguaje ensamblador",
      "Lenguaje de alto nivel"
    ],
    "correctAnswer": "Binario"
  },
  {
    "question": "¿Qué lenguaje es más adecuado para desarrollar sistemas operativos debido a su bajo nivel de abstracción?",
    "options": [
      "C",
      "Ruby",
      "JavaScript",
      "PHP"
    ],
    "correctAnswer": "C"
  },
  {
    "question": "¿Qué lenguaje es comúnmente utilizado en aplicaciones de ciencia de datos y machine learning?",
    "options": [
      "Python",
      "Go",
      "Java",
      "Rust"
    ],
    "correctAnswer": "Python"
  },
  {
    "question": "¿Qué IDE es más recomendado para trabajar con Java en proyectos empresariales?",
    "options": [
      "CLion",
      "Android Studio",
      "Eclipse",
      "PyCharm"
    ],
    "correctAnswer": "Eclipse"
  },
  {
    "question": "¿Cuál de los siguientes lenguajes tiene un nivel intermedio de abstracción y es ampliamente utilizado en motores de videojuegos como Unreal Engine?",
    "options": [
      "C++",
      "Python",
      "Swift",
      "JavaScript"
    ],
    "correctAnswer": "C++"
  },
  {
    "question": "¿Cuál es el IDE más utilizado para desarrollar aplicaciones en C# en el ecosistema de Microsoft?",
    "options": [
      "Visual Studio",
      "NetBeans",
      "PyCharm",
      "IntelliJ IDEA"
    ],
    "correctAnswer": "Visual Studio"
  },
  {
    "question": "¿Cuál de los siguientes lenguajes pertenece al nivel más bajo de abstracción?",
    "options": ["Python", "Ensamblador", "Java", "SQL"],
    "correctAnswer": "Ensamblador"
  },
  {
    "question": "¿Qué lenguaje es más adecuado para desarrollar sistemas operativos debido a su bajo nivel de abstracción?",
    "options": ["C", "Ruby", "PHP", "JavaScript"],
    "correctAnswer": "C"
  },
  {
    "question": "¿Qué lenguaje es especializado en la manipulación de datos en bases de datos relacionales?",
    "options": ["Swift", "SQL", "MATLAB", "Kotlin"],
    "correctAnswer": "SQL"
  },
  {
    "question": "¿Cuál es el IDE más utilizado para desarrollar aplicaciones en C# en el ecosistema de Microsoft?",
    "options": ["IntelliJ IDEA", "Visual Studio", "PyCharm", "NetBeans"],
    "correctAnswer": "Visual Studio"
  },
  {
    "question": "¿Qué lenguaje es comúnmente utilizado en aplicaciones de ciencia de datos y machine learning?",
    "options": ["Rust", "Python", "Go", "Java"],
    "correctAnswer": "Python"
  },
  {
    "question": "¿Cuál de los siguientes lenguajes pertenece al nivel de muy alto nivel y es ideal para enseñar programación a niños?",
    "options": ["Scratch", "Rust", "Go", "PHP"],
    "correctAnswer": "Scratch"
  },
  {
    "question": "¿Qué IDE es más recomendado para trabajar con Java en proyectos empresariales?",
    "options": ["Eclipse", "PyCharm", "Android Studio", "CLion"],
    "correctAnswer": "Eclipse"
  },
  {
    "question": "¿Qué lenguaje ofrece seguridad en memoria y está diseñado para sistemas críticos como blockchain?",
    "options": ["Java", "Rust", "Ruby", "Kotlin"],
    "correctAnswer": "Rust"
  },
  {
    "question": "¿Qué herramienta se utiliza comúnmente para trabajar con archivos de datos estadísticos en el lenguaje R?",
    "options": ["MATLAB", "RStudio", "IntelliJ IDEA", "Visual Studio Code"],
    "correctAnswer": "RStudio"
  },
  {
    "question": "¿Cuál de los siguientes lenguajes tiene un nivel intermedio de abstracción y es ampliamente utilizado en motores de videojuegos como Unreal Engine?",
    "options": ["Python", "C++", "Swift", "JavaScript"],
    "correctAnswer": "C++"
  },

  {
    "question": "¿Qué representa una clase en un diagrama de clases UML?",
    "options": ["Una instancia de un objeto", "Un conjunto de casos de uso", "Una plantilla para crear objetos", "Una relación entre objetos"],
    "correctAnswer": "Una plantilla para crear objetos"
  },
  {
    "question": "¿Cómo se indica una relación de herencia entre dos clases en un diagrama UML?",
    "options": ["Con una flecha punteada", "Con una línea con un rombo", "Con una línea con una flecha blanca", "Con una línea con una flecha negra"],
    "correctAnswer": "Con una línea con una flecha blanca"
  },
  {
    "question": "¿Cuál es el propósito principal de un diagrama de clases UML?",
    "options": ["Describir el flujo de control del sistema", "Mostrar la estructura estática del sistema", "Representar el comportamiento dinámico del sistema", "Modelar la base de datos del sistema"],
    "correctAnswer": "Mostrar la estructura estática del sistema"
  },
  {
    "question": "¿Qué elemento se utiliza para representar una relación de composición en UML?",
    "options": ["Una línea con un rombo vacío", "Una línea con un rombo relleno", "Una flecha discontinua", "Una línea con una flecha abierta"],
    "correctAnswer": "Una línea con un rombo relleno"
  },
  {
    "question": "¿Qué significa el símbolo '+' delante de un atributo o método en UML?",
    "options": ["Que es privado", "Que es protegido", "Que es público", "Que es estático"],
    "correctAnswer": "Que es público"
  },
  {
    "question": "¿Qué indica una relación de asociación en un diagrama de clases UML?",
    "options": ["Una clase hereda de otra", "Una clase depende de otra", "Una clase contiene a otra", "Una clase está relacionada con otra"],
    "correctAnswer": "Una clase está relacionada con otra"
  },
  {
    "question": "¿Qué representa una multiplicidad como '1..*' en UML?",
    "options": ["Que puede haber ninguna o muchas instancias", "Que puede haber una o muchas instancias", "Que debe haber exactamente una instancia", "Que puede haber solo una instancia"],
    "correctAnswer": "Que puede haber una o muchas instancias"
  },
  {
    "question": "¿Cómo se representa un atributo privado en UML?",
    "options": ["Con el símbolo '+'", "Con el símbolo '-'", "Con el símbolo '#'", "Con el símbolo '~'"],
    "correctAnswer": "Con el símbolo '-'"
  },
  {
    "question": "¿Cuál es la diferencia entre agregación y composición en UML?",
    "options": ["La agregación implica una relación más fuerte que la composición", "La composición implica dependencia fuerte y la agregación no", "Ambas son exactamente iguales", "La agregación usa flechas y la composición no"],
    "correctAnswer": "La composición implica dependencia fuerte y la agregación no"
  },
  {
    "question": "¿Qué tipo de relación se representa con una línea discontinua y una flecha abierta en UML?",
    "options": ["Asociación", "Dependencia", "Composición", "Generalización"],
    "correctAnswer": "Dependencia"
  },
  {
    "question": "¿Cuál de los principales objetivos de un entorno de desarrollo integrado (IDE)?",
    "options": ["Editar vídeos", "Gestionar redes", "Facilitar el desarrollo de software", "Controlar servidores web"],
    "correctAnswer": "Facilitar el desarrollo de software"
  },
  {
    "question": "¿Qué componente de un IDE permite la detección de errores en tiempo de compilación?",
    "options": ["Editor de texto", "Depurador", "Compilador", "Gestor de archivos"],
    "correctAnswer": "Compilador"
  },
  {
    "question": "¿Qué es el control de versiones?",
    "options": ["Un tipo de compilador", "Un IDE avanzado", "Una técnica para registrar los cambios en el código", "Un sistema de backup automatizado"],
    "correctAnswer": "Una técnica para registrar los cambios en el código"
  },
  {
    "question": "¿Qué sistema de control de versiones es más popular hoy en día?",
    "options": ["Mercurial", "CVS", "Git", "Subversion"],
    "correctAnswer": "Git"
  },
  {
    "question": "¿Qué comando de Git se utiliza para enviar cambios a un repositorio remoto?",
    "options": ["git clone", "git push", "git commit", "git status"],
    "correctAnswer": "git push"
  },
  {
    "question": "¿Qué herramienta se utiliza para automatizar la construcción del software?",
    "options": ["IDE", "Sistema Operativo", "Compilador", "Herramienta de construcción"],
    "correctAnswer": "Herramienta de construcción"
  },
  {
    "question": "¿Cuál de los siguientes NO es un tipo de prueba en el desarrollo de software?",
    "options": ["Prueba de unidad", "Prueba funcional", "Prueba de error", "Prueba de integración"],
    "correctAnswer": "Prueba de error"
  },
  {
    "question": "¿Qué fase del ciclo de vida del software se centra en corregir errores y mejorar el sistema?",
    "options": ["Diseño", "Mantenimiento", "Pruebas", "Requisitos"],
    "correctAnswer": "Mantenimiento"
  },
  {
    "question": "¿Qué lenguaje se usa habitualmente en scripts de automatización para entornos de desarrollo?",
    "options": ["C#", "Python", "Java", "C++"],
    "correctAnswer": "Python"
  },
  {
    "question": "¿Cuál es la función principal del depurador en un entorno de desarrollo?",
    "options": ["Mejorar el diseño de interfaces", "Gestionar servidores", "Detectar y corregir errores en tiempo de ejecución", "Controlar versiones"],
    "correctAnswer": "Detectar y corregir errores en tiempo de ejecución"
  },
  {
    "question": "¿Qué es un entorno de desarrollo local?",
    "options": ["Un entorno en la nube", "Un entorno donde se despliega en producción", "Una configuración en el equipo del desarrollador", "Un servidor remoto de pruebas"],
    "correctAnswer": "Una configuración en el equipo del desarrollador"
  },
  {
    "question": "¿Cuál es la extensión típica de los archivos de configuración de proyectos en Java con Maven?",
    "options": ["pom.xml", "build.gradle", "package.json", "config.yaml"],
    "correctAnswer": "pom.xml"
  },
  {
    "question": "¿Qué herramienta está diseñada para la gestión de dependencias en proyectos Java?",
    "options": ["Webpack", "Maven", "NPM", "GCC"],
    "correctAnswer": "Maven"
  },
  {
    "question": "¿Qué se entiende por 'testing automatizado'?",
    "options": ["Pruebas realizadas por usuarios", "Pruebas manuales de software", "Pruebas realizadas mediante scripts sin intervención humana", "Pruebas sin código"],
    "correctAnswer": "Pruebas realizadas mediante scripts sin intervención humana"
  },
  {
    "question": "¿Cuál es el objetivo principal de una integración continua?",
    "options": ["Minimizar los conflictos de código al integrar cambios frecuentemente", "Reducir el uso de CPU", "Incrementar el tamaño del repositorio", "Evitar usar Git"],
    "correctAnswer": "Minimizar los conflictos de código al integrar cambios frecuentemente"
  },
  {
    "question": "¿Qué tipo de herramientas permiten automatizar compilaciones, pruebas y despliegue?",
    "options": ["IDE", "Frameworks", "Sistemas CI/CD", "Editores de texto"],
    "correctAnswer": "Sistemas CI/CD"
  },
  {
    "question": "¿Cuál de los siguientes entornos de desarrollo es más utilizado para aplicaciones en .NET?",
    "options": ["PyCharm", "Visual Studio", "Eclipse", "NetBeans"],
    "correctAnswer": "Visual Studio"
  },
  {
    "question": "¿Qué técnica permite ejecutar una aplicación en una réplica del entorno de producción?",
    "options": ["Compilación", "Virtualización", "Depuración", "Gitflow"],
    "correctAnswer": "Virtualización"
  },
  {
    "question": "¿Qué es una máquina virtual de hardware?",
    "options": ["Un software que simula un sistema operativo completo", "Una aplicación de consola", "Una API para acceso a hardware", "Una biblioteca de desarrollo"],
    "correctAnswer": "Un software que simula un sistema operativo completo"
  },
  {
    "question": "¿Qué lenguaje es más adecuado para automatizar tareas del sistema operativo?",
    "options": ["HTML", "C", "Bash", "CSS"],
    "correctAnswer": "Bash"
  },
  {
    "question": "¿Qué es un framework en el contexto del desarrollo de software?",
    "options": ["Una base de datos", "Un sistema operativo", "Una estructura reutilizable para desarrollar software", "Una herramienta de diseño gráfico"],
    "correctAnswer": "Una estructura reutilizable para desarrollar software"
  },
  {
    "question": "¿Cuál es el objetivo principal de los diagramas UML?",
    "options": ["Editar código", "Crear interfaces gráficas", "Modelar el diseño del software", "Documentar el hardware"],
    "correctAnswer": "Modelar el diseño del software"
  },
  {
    "question": "¿Qué tipo de licencia permite modificar y redistribuir el software libremente?",
    "options": ["Propietaria", "Trial", "GNU GPL", "Demo"],
    "correctAnswer": "GNU GPL"
  },
  {
    "question": "¿Qué componente permite gestionar el ciclo de vida del software en metodologías ágiles?",
    "options": ["IDE", "Kanban", "Compilador", "Lenguaje de programación"],
    "correctAnswer": "Kanban"
  },
  {
    "question": "¿Cuál es la finalidad de los entornos virtuales en programación?",
    "options": ["Aumentar el rendimiento del sistema", "Compartir archivos multimedia", "Aislar dependencias de un proyecto", "Diseñar interfaces gráficas"],
    "correctAnswer": "Aislar dependencias de un proyecto"
  },
  {
    "question": "¿Qué archivo define las dependencias de un proyecto en Node.js?",
    "options": ["pom.xml", "package.json", "config.ini", "build.gradle"],
    "correctAnswer": "package.json"
  },
  {
    "question": "¿Qué ventaja ofrece usar un sistema de integración continua?",
    "options": ["Mayor consumo de CPU", "Complicación del proceso de desarrollo", "Entrega más rápida y con menos errores", "Obligación de usar la nube"],
    "correctAnswer": "Entrega más rápida y con menos errores"
  },
  {
    "question": "¿Qué comando de Git se usa para integrar los cambios de otra rama en la actual?",
    "options": ["git status", "git pull", "git merge", "git log"],
    "correctAnswer": "git merge"
  },
  {
    "question": "¿Qué herramienta permite ejecutar contenedores de software con todas sus dependencias?",
    "options": ["Docker", "Eclipse", "Jenkins", "Git"],
    "correctAnswer": "Docker"
  },
  {
    "question": "¿Qué elemento se considera una buena práctica al nombrar variables en programación?",
    "options": ["Usar nombres genéricos", "Escribir en mayúsculas siempre", "Usar nombres descriptivos", "Evitar el uso del inglés"],
    "correctAnswer": "Usar nombres descriptivos"
  },
  {
    "question": "¿Qué significa que un software sea multiplataforma?",
    "options": ["Que solo funciona en Windows", "Que puede ejecutarse en distintos sistemas operativos", "Que está escrito en varios lenguajes", "Que no necesita instalarse"],
    "correctAnswer": "Que puede ejecutarse en distintos sistemas operativos"
  },
  {
    "question": "¿Qué IDE está especialmente orientado al desarrollo en Java?",
    "options": ["Visual Studio", "Xcode", "Eclipse", "Atom"],
    "correctAnswer": "Eclipse"
  },
  {
    "question": "¿Cuál es una herramienta típica de automatización de pruebas?",
    "options": ["JUnit", "Eclipse", "Photoshop", "Maven"],
    "correctAnswer": "JUnit"
  },
  {
    "question": "¿Cuál es el propósito principal de un repositorio remoto?",
    "options": ["Almacenar imágenes", "Gestionar servidores", "Compartir código entre desarrolladores", "Crear redes sociales"],
    "correctAnswer": "Compartir código entre desarrolladores"
  },
  {
    "question": "¿Qué tecnología permite ejecutar contenedores ligeros y portables?",
    "options": ["Kubernetes", "Docker", "VirtualBox", "Apache"],
    "correctAnswer": "Docker"
  },
  {
    "question": "¿Qué extensión suele tener un script Bash?",
    "options": [".py", ".bash", ".sh", ".bat"],
    "correctAnswer": ".sh"
  },
  {
    "question": "¿Qué técnica permite detectar errores antes de ejecutar un programa?",
    "options": ["Interpretación", "Compilación", "Depuración", "Instalación"],
    "correctAnswer": "Compilación"
  },
  {
    "question": "¿Qué es una prueba unitaria?",
    "options": ["Una prueba de sistema", "Una prueba que se hace sin software", "Una prueba individual de un componente del programa", "Una validación por parte del usuario final"],
    "correctAnswer": "Una prueba individual de un componente del programa"
  }
  
    
  
  

  
    
  



  
  
    
  

  
  
    
  
  
  
   
  
  
    
  
];
