import { Question } from '../InterfaceQuestion';

export const questionsEntornosDesarrollo: Question[] = [
  {
    question: '¿Qué es un entorno de desarrollo integrado (IDE)?',
    options: [
      'Un sistema operativo para programadores',
      'Una herramienta que combina editor de código, compilador y depurador',
      'Un lenguaje de programación',
      'Un tipo de base de datos'
    ],
    correctAnswer: 'Una herramienta que combina editor de código, compilador y depurador'
  },
  {
    question: '¿Cuál de las siguientes herramientas es un sistema de control de versiones?',
    options: [
      'Eclipse',
      'Git',
      'Visual Studio Code',
      'NetBeans'
    ],
    correctAnswer: 'Git'
  },
  {
    question: '¿Qué es un lenguaje de programación de alto nivel?',
    options: [
      'Un lenguaje que se ejecuta directamente en el hardware',
      'Un lenguaje que utiliza instrucciones en código binario',
      'Un lenguaje con sintaxis cercana al lenguaje humano',
      'Un lenguaje específico para bases de datos'
    ],
    correctAnswer: 'Un lenguaje con sintaxis cercana al lenguaje humano'
  },
  {
    question: '¿Cuál de las siguientes opciones describe una herramienta CASE?',
    options: [
      'Un compilador de código',
      'Un editor de texto',
      'Una herramienta para automatizar tareas del ciclo de vida del software',
      'Un sistema operativo'
    ],
    correctAnswer: 'Una herramienta para automatizar tareas del ciclo de vida del software'
  },
  {
    question: '¿Qué fase del desarrollo de software implica la identificación de requisitos?',
    options: [
      'Diseño',
      'Análisis',
      'Codificación',
      'Mantenimiento'
    ],
    correctAnswer: 'Análisis'
  },
  {
    question: '¿Qué es la depuración en el contexto del desarrollo de software?',
    options: [
      'La traducción del código fuente a código máquina',
      'La eliminación de comentarios en el código',
      'El proceso de encontrar y corregir errores en el código',
      'La actualización de la documentación del software'
    ],
    correctAnswer: 'El proceso de encontrar y corregir errores en el código'
  },
  {
    question: '¿Cuál es el propósito de un compilador?',
    options: [
      'Ejecutar el código fuente directamente',
      'Traducir el código fuente a código máquina',
      'Editar archivos de texto',
      'Gestionar bases de datos'
    ],
    correctAnswer: 'Traducir el código fuente a código máquina'
  },
  {
    question: '¿Qué herramienta se utiliza comúnmente para la gestión de versiones en proyectos de software?',
    options: [
      'Photoshop',
      'Git',
      'Excel',
      'PowerPoint'
    ],
    correctAnswer: 'Git'
  },
  {
    question: '¿Qué es un repositorio en el contexto del control de versiones?',
    options: [
      'Una copia de seguridad del sistema operativo',
      'Un almacenamiento centralizado de código fuente y su historial de cambios',
      'Una base de datos de usuarios',
      'Un servidor web'
    ],
    correctAnswer: 'Un almacenamiento centralizado de código fuente y su historial de cambios'
  },
  {
    question: '¿Qué significa \'IDE\' en el desarrollo de software?',
    options: [
      'Identificador de Desarrollo Estándar',
      'Interfaz de Desarrollo Empresarial',
      'Entorno de Desarrollo Integrado',
      'Editor de Datos Electrónicos'
    ],
    correctAnswer: 'Entorno de Desarrollo Integrado'
  },
  {
    question: '¿Qué permite hacer una clave SSH asociada a una cuenta de GitHub?',
    options: [
      'Borrar repositorios',
      'Cambiar permisos de otros usuarios',
      'Autenticarse sin contraseña en operaciones Git',
      'Ver estadísticas privadas de otros usuarios'
    ],
    correctAnswer: 'Autenticarse sin contraseña en operaciones Git'
  },
  {
    question: '¿Dónde se debe agregar una clave SSH personal para trabajar con GitHub?',
    options: [
      'En el archivo README',
      'En los Settings de la cuenta de GitHub → SSH and GPG Keys',
      'En la terminal de Git Bash',
      'En cada repositorio manualmente'
    ],
    correctAnswer: 'En los Settings de la cuenta de GitHub → SSH and GPG Keys'
  },
  {
    question: '¿Qué opción es necesaria para subir cambios de una nueva rama a GitHub desde Git GUI?',
    options: [
      'Ejecutar el comando merge',
      'Hacer Push y marcar \'Set upstream\'',
      'Usar un archivo .gitconfig',
      'Hacer Fetch desde GitHub'
    ],
    correctAnswer: 'Hacer Push y marcar \'Set upstream\''
  },
  {
    question: '¿Cuál es el propósito de un Pull Request?',
    options: [
      'Eliminar una rama remota',
      'Proponer la fusión de una rama con otra',
      'Hacer backup del repositorio',
      'Crear una nueva clave SSH'
    ],
    correctAnswer: 'Proponer la fusión de una rama con otra'
  },
  {
    question: '¿Qué puede causar un conflicto en un Pull Request?',
    options: [
      'Uso de Git GUI en lugar de terminal',
      'Archivos muy grandes',
      'Cambios en carpetas vacías',
      'Cambios en las mismas líneas en dos ramas distintas'
    ],
    correctAnswer: 'Cambios en las mismas líneas en dos ramas distintas'
  },
  {
    question: '¿Quién puede aceptar un Pull Request en GitHub?',
    options: [
      'Usuarios con permisos de escritura o superiores',
      'Cualquier usuario registrado',
      'Solo usuarios con claves SSH',
      'Solo el dueño de la cuenta GitHub'
    ],
    correctAnswer: 'Usuarios con permisos de escritura o superiores'
  },
  {
    question: '¿Qué debe hacer un colaborador antes de hacer Push a una rama compartida?',
    options: [
      'Hacer reset --hard',
      'Hacer Pull para actualizar su copia local',
      'Crear un nuevo repositorio',
      'Cambiar de repositorio'
    ],
    correctAnswer: 'Hacer Pull para actualizar su copia local'
  },
  {
    question: '¿Qué acción permite crear una nueva rama en Git GUI?',
    options: [
      'Remote → Clone',
      'Edit → Rename',
      'Branch → Create',
      'File → New Project'
    ],
    correctAnswer: 'Branch → Create'
  },
  {
    question: '¿Dónde se encuentra la opción para clonar un repositorio en Git GUI?',
    options: [
      'File → Export',
      'Merge → Clone',
      'En la pantalla inicial: \'Clone Existing Repository\'',
      'Edit → Clone'
    ],
    correctAnswer: 'En la pantalla inicial: \'Clone Existing Repository\''
  },
  {
    question: '¿Cuál es la URL recomendada para usar si ya tienes una clave SSH configurada?',
    options: [
      'La que empieza por git@github.com:',
      'La que empieza por http://',
      'La de la documentación de GitHub',
      'La del archivo .gitignore'
    ],
    correctAnswer: 'La que empieza por git@github.com:'
  },
  {
    question: '¿Qué ocurre cuando haces Merge en Git GUI?',
    options: [
      'Se genera un conflicto automáticamente',
      'Se combinan los cambios de una rama en otra',
      'Se borra el repositorio original',
      'Se revierte el último commit'
    ],
    correctAnswer: 'Se combinan los cambios de una rama en otra'
  },
  {
    question: '¿Cuál de estas afirmaciones sobre ramas es correcta?',
    options: [
      'Una rama solo puede tener un commit',
      'Todas las ramas deben llamarse main',
      'Las ramas permiten trabajar de forma paralela sin afectar la principal',
      'No se pueden subir ramas desde Git GUI'
    ],
    correctAnswer: 'Las ramas permiten trabajar de forma paralela sin afectar la principal'
  },
  {
    question: '¿Qué es la refactorización?',
    options: [
      'Mejorar la estructura interna del código sin cambiar su comportamiento externo',
      'Cambiar el diseño del código agregando nuevas funcionalidades',
      'Proceso de corregir errores en el código',
      'Reescritura completa del código de una aplicación'
    ],
    correctAnswer: 'Mejorar la estructura interna del código sin cambiar su comportamiento externo'
  },
  {
    question: '¿Cuál de los siguientes NO es un tipo de mantenimiento de software?',
    options: [
      'Mantenimiento correctivo',
      'Mantenimiento adaptativo',
      'Mantenimiento perfectivo',
      'Mantenimiento iterativo'
    ],
    correctAnswer: 'Mantenimiento iterativo'
  },
  {
    question: '¿Por qué se debe evitar el uso de var en JavaScript en favor de let y const?',
    options: [
      'Porque var ocupa más memoria que let y const',
      'Porque var no es compatible con las últimas versiones de los navegadores',
      'Porque var tiene un alcance menos predecible y puede generar errores',
      'Porque var hace que el código sea más rápido'
    ],
    correctAnswer: 'Porque var tiene un alcance menos predecible y puede generar errores'
  },
  {
    question: '¿Cuál es un beneficio clave de la refactorización?',
    options: [
      'Mejora la calidad del código y facilita el mantenimiento',
      'Reduce la cantidad de pruebas necesarias en una aplicación',
      'Permite escribir código más largo y detallado',
      'Hace que el código sea menos reutilizable'
    ],
    correctAnswer: 'Mejora la calidad del código y facilita el mantenimiento'
  },
  {
    question: '¿Qué es un \'bad smell\' en el código?',
    options: [
      'Un código que no compila correctamente',
      'Un síntoma de un posible problema en el diseño del código',
      'Un error crítico en tiempo de ejecución',
      'Un tipo de variable mal definida'
    ],
    correctAnswer: 'Un síntoma de un posible problema en el diseño del código'
  },
  {
    question: '¿Cuál de los siguientes es un ejemplo de código duplicado?',
    options: [
      'Mismo fragmento de código repetido en diferentes partes del programa',
      'Código con muchas clases y métodos cortos',
      'Código bien documentado',
      'Código optimizado con estructuras de datos eficientes'
    ],
    correctAnswer: 'Mismo fragmento de código repetido en diferentes partes del programa'
  },
  {
    question: '¿Qué problema presenta un método con demasiados parámetros?',
    options: [
      'Hace que el código sea más rápido',
      'Reduce la necesidad de comentarios',
      'Mejora la reutilización del código',
      'Dificulta la comprensión y el mantenimiento del código'
    ],
    correctAnswer: 'Dificulta la comprensión y el mantenimiento del código'
  },
  {
    question: '¿Cuál es el problema del \'Shotgun Surgery\'?',
    options: [
      'Un cambio en una clase provoca errores en el código',
      'Existen demasiados bucles en el código',
      'Se usa una función en una clase incorrecta',
      'Un cambio en una clase requiere modificar muchas otras clases'
    ],
    correctAnswer: 'Un cambio en una clase requiere modificar muchas otras clases'
  },
  {
    question: '¿Qué problema representa la \'Complejidad Ciclomática\' en el código?',
    options: [
      'Clases con pocos atributos y métodos',
      'Código duplicado en varios archivos',
      'Métodos que tienen muchos parámetros',
      'Demasiados condicionales y bucles en un método'
    ],
    correctAnswer: 'Demasiados condicionales y bucles en un método'
  },
  {
    question: '¿Cuál es el problema con un método largo (\'Long Method\')?',
    options: [
      'No utiliza suficiente memoria del sistema',
      'Es demasiado corto y no hace nada útil',
      'Realiza demasiadas tareas y es difícil de entender',
      'No tiene suficientes parámetros'
    ],
    correctAnswer: 'Realiza demasiadas tareas y es difícil de entender'
  },
  {
    question: '¿Qué indica la \'Envidia de funcionalidad\' (\'Feature Envy\')?',
    options: [
      'Un método está mal documentado',
      'Un método no usa suficientes variables globales',
      'Una clase tiene pocos métodos',
      'Un método usa más atributos de otra clase en lugar de su propia clase'
    ],
    correctAnswer: 'Un método usa más atributos de otra clase en lugar de su propia clase'
  },
  {
    question: '¿Cuál es la mejor forma de solucionar el problema de código duplicado?',
    options: [
      'Reescribir la funcionalidad en cada clase afectada',
      'Copiar el código en todas las clases donde sea necesario',
      'Eliminar la funcionalidad repetida sin reemplazo',
      'Extraer el código duplicado en una función reutilizable'
    ],
    correctAnswer: 'Extraer el código duplicado en una función reutilizable'
  },
  {
    question: '¿Qué es una \'Clase Larga\' (\'Large Class\')?',
    options: [
      'Una clase que no tiene suficientes métodos',
      'Una clase sin dependencias externas',
      'Una clase con demasiados métodos o atributos, lo que indica demasiadas responsabilidades',
      'Una clase que solo tiene variables globales'
    ],
    correctAnswer: 'Una clase con demasiados métodos o atributos, lo que indica demasiadas responsabilidades'
  },
  {
    question: '¿Cuál de los siguientes es un beneficio de dividir un método largo en varios más pequeños?',
    options: [
      'Reduce la cantidad de líneas de código en el programa',
      'Aumenta la complejidad del código',
      'Hace que el código se ejecute más lentamente',
      'Mejora la legibilidad y facilita el mantenimiento'
    ],
    correctAnswer: 'Mejora la legibilidad y facilita el mantenimiento'
  },
  {
    question: '¿Qué problema se produce cuando una clase depende demasiado de la implementación de otra clase?',
    options: [
      'Shotgun Surgery',
      'Intimidad inapropiada (\'Inappropriate Intimacy\')',
      'Complejidad artificial',
      'Código duplicado'
    ],
    correctAnswer: 'Intimidad inapropiada (\'Inappropriate Intimacy\')'
  },
  {
    question: '¿Cómo se puede evitar la \'Complejidad Artificial\' en un programa?',
    options: [
      'Usando patrones de diseño complejos en cualquier situación',
      'Reescribiendo todo el código en un solo método grande',
      'Usando una cantidad excesiva de clases y métodos',
      'Evitando el uso innecesario de patrones y manteniendo un diseño simple'
    ],
    correctAnswer: 'Evitando el uso innecesario de patrones y manteniendo un diseño simple'
  },
  {
    question: '¿Cuál es una estrategia efectiva para refactorizar código?',
    options: [
      'Evitar el uso de herramientas de refactorización automática',
      'Hacer cambios masivos en todo el código de una vez',
      'No documentar los cambios realizados para evitar confusión',
      'Realizar pequeñas refactorizaciones frecuentes en lugar de una refactorización grande y compleja'
    ],
    correctAnswer: 'Realizar pequeñas refactorizaciones frecuentes en lugar de una refactorización grande y compleja'
  },
  {
    question: '¿Cómo se puede solucionar el problema de demasiados parámetros en un método?',
    options: [
      'Eliminar algunos parámetros sin analizar su uso',
      'Duplicar el método con diferentes combinaciones de parámetros',
      'Agrupar los parámetros en un objeto',
      'Mantener el método con muchos parámetros, pero agregar más comentarios'
    ],
    correctAnswer: 'Agrupar los parámetros en un objeto'
  },
  {
    question: '¿Qué técnica se usa para detectar \'malos olores\' en el código?',
    options: [
      'Revisar el código visualmente sin herramientas',
      'Realizar revisiones de código y usar herramientas de análisis estático',
      'Esperar a que el código falle en producción antes de hacer cambios',
      'Usar solo pruebas unitarias sin inspeccionar el código'
    ],
    correctAnswer: 'Realizar revisiones de código y usar herramientas de análisis estático'
  },
  {
    question: '¿Cuál es la mejor manera de reducir la deuda técnica en un proyecto?',
    options: [
      'No hacer revisiones de código para evitar retrasos',
      'Usar solo código heredado sin actualizarlo',
      'Evitar la refactorización y seguir agregando nuevas funcionalidades',
      'Aplicar refactorización continua y escribir código limpio desde el inicio'
    ],
    correctAnswer: 'Aplicar refactorización continua y escribir código limpio desde el inicio'
  },
  {
    question: '¿Qué tipo de comprobaciones se llevan a cabo con el código en ejecución?',
    options: [
      'Revisión de código',
      'Comprobaciones dinámicas',
      'Validación de requisitos',
      'Comprobaciones estáticas'
    ],
    correctAnswer: 'Comprobaciones dinámicas'
  },
  {
    question: '¿Qué pregunta responde la verificación en las pruebas de software?',
    options: [
      '¿El software es fácil de usar?',
      '¿Estamos construyendo el software correctamente?',
      '¿Cuántos errores tiene el sistema?',
      '¿Estamos cumpliendo los requisitos del cliente?'
    ],
    correctAnswer: '¿Estamos construyendo el software correctamente?'
  },
  {
    question: '¿Qué relación existe entre un error y un fallo en el software?',
    options: [
      'Un error siempre causa un fallo inmediato',
      'Un error cometido por el programador puede generar un defecto en el software que ocasione un fallo',
      'Un fallo solo puede ser causado por un usuario',
      'Un fallo solo ocurre si hay defectos en el hardware'
    ],
    correctAnswer: 'Un error cometido por el programador puede generar un defecto en el software que ocasione un fallo'
  },
  {
    question: '¿Qué pruebas se encargan de comprobar la comunicación entre las partes de un programa?',
    options: [
      'Pruebas de integración',
      'Pruebas unitarias',
      'Pruebas de regresión',
      'Pruebas de sistema'
    ],
    correctAnswer: 'Pruebas de integración'
  },
  {
    question: '¿Qué se analiza en las pruebas de caja negra?',
    options: [
      'La estructura interna del código',
      'Las pruebas de rendimiento',
      'Las entradas y salidas sin conocer la implementación interna',
      'La lógica de programación y los algoritmos internos'
    ],
    correctAnswer: 'Las entradas y salidas sin conocer la implementación interna'
  },
  {
    question: '¿Cuál es el propósito de las pruebas de caja blanca?',
    options: [
      'Evaluar la estructura interna del código y cómo está definido.',
      'Validar los requisitos del cliente',
      'Medir la velocidad del software',
      'Comprobar el diseño de la interfaz'
    ],
    correctAnswer: 'Evaluar la estructura interna del código y cómo está definido.'
  },
  {
    question: '¿Qué es una clase de equivalencia en el contexto de las pruebas de software?',
    options: [
      'Un tipo de prueba que mide el rendimiento del software',
      'Un documento que describe los errores del sistema',
      'Un conjunto de datos de entrada que definen estados válidos y no válidos',
      'Un modelo matemático para predecir fallos'
    ],
    correctAnswer: 'Un conjunto de datos de entrada que definen estados válidos y no válidos'
  },
  {
    question: '¿Cuál de los siguientes es un ejemplo de una condición de entrada?',
    options: [
      '"El software debe ejecutarse en Linux"',
      '"El usuario debe leer el manual de usuario antes de la prueba"',
      '"El código fuente debe ser compilado"',
      '"Valores entre 0 y 10"'
    ],
    correctAnswer: '"Valores entre 0 y 10"'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre las clases de equivalencia es correcta?',
    options: [
      'No es necesario generar pruebas para clases no válidas',
      'Solo se deben generar casos de prueba para clases válidas',
      'Cada caso de prueba debe incluir al menos una clase de equivalencia válida',
      'Las clases de equivalencia no afectan el diseño de los casos de prueba'
    ],
    correctAnswer: 'Cada caso de prueba debe incluir al menos una clase de equivalencia válida'
  },
  {
    question: '¿Cuál es el propósito de la complejidad ciclomática en el desarrollo de software?',
    options: [
      'Evaluar la estética del código fuente',
      'Medir la eficiencia del código en tiempo de ejecución',
      'Determinar la cantidad de pruebas necesarias para cubrir todos los caminos del código',
      'Reducir el consumo de memoria del programa'
    ],
    correctAnswer: 'Determinar la cantidad de pruebas necesarias para cubrir todos los caminos del código'
  },
  {
    question: '¿Cuál es la fórmula para calcular la complejidad ciclomática?',
    options: [
      'M = E - N + 2',
      'M = N + E - 2',
      'M = N - E + 2',
      'M = (N + E) / 2'
    ],
    correctAnswer: 'M = E - N + 2'
  },
  {
    question: 'En la fórmula de la complejidad ciclomática, ¿qué representa \'E\'?',
    options: [
      'Número de sentencias ejecutadas',
      'Número de variables en el código',
      'Número de aristas del grafo',
      'Número de ciclos en la ejecución del programa'
    ],
    correctAnswer: 'Número de aristas del grafo'
  },
  {
    question: 'Si en una función se tiene 8 aristas y 7 nodos, ¿cuál es su complejidad ciclomática?',
    options: [
      '4',
      '3',
      '5',
      '10'
    ],
    correctAnswer: '3'
  },
  {
    question: 'Según la tabla de interpretación, ¿qué nivel de riesgo tiene una complejidad ciclomática de 30?',
    options: [
      'No testeable',
      'Alto riesgo',
      'Riesgo moderado',
      'Bajo riesgo'
    ],
    correctAnswer: 'Alto riesgo'
  },
  {
    question: '¿Qué es una excepción en programación?',
    options: [
      'Un error crítico del sistema que no puede manejarse',
      'Un mecanismo que permite manejar errores durante la ejecución del programa',
      'Un mensaje de depuración que muestra advertencias',
      'Una técnica para optimizar el rendimiento del código'
    ],
    correctAnswer: 'Un mecanismo que permite manejar errores durante la ejecución del programa'
  },
  {
    question: '¿Qué tipo de error genera la siguiente línea de código en Java? int resultado = 10 / 0;',
    options: [
      'IOException',
      'NullPointerException',
      'IndexOutOfBoundsException',
      'ArithmeticException'
    ],
    correctAnswer: 'ArithmeticException'
  },
  {
    question: '¿Cuál es la diferencia principal entre un error y una excepción?',
    options: [
      'Una excepción ocurre en la compilación y un error en la ejecución',
      'Un error ocurre en tiempo de ejecución y no puede manejarse, mientras que una excepción sí',
      'Las excepciones son solo advertencias, mientras que los errores detienen el programa',
      'Los errores son más leves que las excepciones'
    ],
    correctAnswer: 'Un error ocurre en tiempo de ejecución y no puede manejarse, mientras que una excepción sí'
  },
  {
    question: '¿Cuál de las siguientes opciones es un error y no una excepción?',
    options: [
      'ArithmeticException',
      'IOException',
      'StackOverflowError',
      'NullPointerException'
    ],
    correctAnswer: 'StackOverflowError'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre el bloque try-catch es correcta?',
    options: [
      'try se usa para encapsular código que puede generar una excepción y catch para manejarla',
      'catch debe aparecer siempre antes de try',
      'Un try solo puede contener una instrucción',
      'try y catch no pueden usarse en Java'
    ],
    correctAnswer: 'try se usa para encapsular código que puede generar una excepción y catch para manejarla'
  },
  {
    question: '¿Cuál es la principal ventaja de manejar excepciones en un programa?',
    options: [
      'Reduce el tamaño del código fuente',
      'Evita la necesidad de pruebas de software',
      'Permite que el programa continúe funcionando a pesar de los errores',
      'Acelera la ejecución del código'
    ],
    correctAnswer: 'Permite que el programa continúe funcionando a pesar de los errores'
  },
  {
    question: '¿Cuál es el principal beneficio de la automatización de pruebas de software?',
    options: [
      'Evitar la necesidad de escribir casos de prueba',
      'Reducir la complejidad del código',
      'Sustituir completamente a los testers humanos',
      'Disminuir el esfuerzo manual y aumentar la eficiencia en las pruebas'
    ],
    correctAnswer: 'Disminuir el esfuerzo manual y aumentar la eficiencia en las pruebas'
  },
  {
    question: '¿Cuál de los siguientes NO es un tipo de prueba automatizada?',
    options: [
      'Pruebas de interfaz',
      'Pruebas de seguridad',
      'Pruebas de rendimiento',
      'Pruebas de integración'
    ],
    correctAnswer: 'Pruebas de seguridad'
  },
  {
    question: '¿Qué tipo de pruebas miden la velocidad y capacidad de respuesta del sistema bajo diferentes cargas?',
    options: [
      'Pruebas de rendimiento',
      'Pruebas unitarias',
      'Pruebas de interfaz',
      'Pruebas de integración'
    ],
    correctAnswer: 'Pruebas de rendimiento'
  },
  {
    question: '¿Qué criterio se debe considerar al decidir en qué pruebas invertir más recursos?',
    options: [
      'La cantidad de líneas de código del software',
      'La facilidad de implementación de la automatización',
      'La relación entre riesgo y frecuencia',
      'La cantidad de usuarios activos'
    ],
    correctAnswer: 'La relación entre riesgo y frecuencia'
  },
  {
    question: '¿Por qué se deben invertir más recursos en pruebas de inicio de sesión y transferencias en una aplicación bancaria?',
    options: [
      'Porque tienen menor impacto en caso de error',
      'Porque son funciones críticas y un fallo comprometería la seguridad y confianza de los usuarios',
      'Porque son pruebas fáciles de automatizar',
      'Porque requieren menor tiempo de ejecución'
    ],
    correctAnswer: 'Porque son funciones críticas y un fallo comprometería la seguridad y confianza de los usuarios'
  },
  
  {
    question: '¿Cuál es el principal propósito de una máquina virtual de hardware?',
    options: [
      'Ofrecer compatibilidad con múltiples lenguajes de programación',
      'Ejecutar un único proceso en un entorno aislado',
      'Sustituir el sistema operativo anfitrión',
      'Simular un sistema operativo completo en un entorno virtual'
    ],
    correctAnswer: 'Simular un sistema operativo completo en un entorno virtual'
  },
  {
    question: '¿Cuál es la principal función de una máquina virtual de proceso?',
    options: [
      'Emular la interfaz de un sistema operativo moderno',
      'Ejecutar un sistema operativo completo en un entorno virtual',
      'Proveer un entorno aislado para ejecutar un único proceso o aplicación',
      'Facilitar la gestión de múltiples sistemas operativos en un solo hardware'
    ],
    correctAnswer: 'Proveer un entorno aislado para ejecutar un único proceso o aplicación'
  },
  {
    question: '¿Cuál de los siguientes es un ejemplo de máquina virtual de proceso?',
    options: [
      'Java Virtual Machine (JVM)',
      'Hyper-V',
      'VMware ESXi',
      'VirtualBox'
    ],
    correctAnswer: 'Java Virtual Machine (JVM)'
  },
  {
    question: '¿En qué fase del ciclo de vida del software se crea el modelo detallado de cómo funcionará el sistema?',
    options: [
      'Implementación',
      'Pruebas',
      'Diseño',
      'Análisis de Requisitos'
    ],
    correctAnswer: 'Diseño'
  },
  {
    question: '¿En qué fase del ciclo de vida se realiza la codificación del sistema basándose en el diseño previamente definido?',
    options: [
      'Análisis de Requisitos',
      'Implementación',
      'Mantenimiento',
      'Diseño'
    ],
    correctAnswer: 'Implementación'
  },
  {
    question: '¿Qué fase del ciclo de vida del software implica realizar reuniones con el cliente para entender sus necesidades?',
    options: [
      'Implementación',
      'Mantenimiento',
      'Análisis de Requisitos',
      'Pruebas'
    ],
    correctAnswer: 'Análisis de Requisitos'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones es verdadera sobre el modelo en cascada?',
    options: [
      'Los requisitos pueden cambiar fácilmente durante cualquier fase del desarrollo',
      'Las fases deben completarse en orden secuencial antes de pasar a la siguiente',
      'Es un modelo iterativo que entrega incrementos del producto en cada etapa',
      'Todas las fases del desarrollo se realizan de manera simultánea'
    ],
    correctAnswer: 'Las fases deben completarse en orden secuencial antes de pasar a la siguiente'
  },
  {
    question: 'En las metodologías ágiles, como Scrum, ¿qué rol es responsable de coordinar al equipo y comunicarse con el Product Owner?',
    options: [
      'Scrum Master',
      'Product Owner',
      'Team Member',
      'Project Manager'
    ],
    correctAnswer: 'Scrum Master'
  },
  {
    question: '¿Cuál es el nivel de abstracción más bajo que existe?',
    options: [
      'Binario',
      'Nivel de máquina',
      'Lenguaje ensamblador',
      'Lenguaje de alto nivel'
    ],
    correctAnswer: 'Binario'
  },
  {
    question: '¿Qué lenguaje es más adecuado para desarrollar sistemas operativos debido a su bajo nivel de abstracción?',
    options: [
      'C',
      'Ruby',
      'JavaScript',
      'PHP'
    ],
    correctAnswer: 'C'
  },
  {
    question: '¿Qué lenguaje es comúnmente utilizado en aplicaciones de ciencia de datos y machine learning?',
    options: [
      'Python',
      'Go',
      'Java',
      'Rust'
    ],
    correctAnswer: 'Python'
  },
  {
    question: '¿Qué IDE es más recomendado para trabajar con Java en proyectos empresariales?',
    options: [
      'CLion',
      'Android Studio',
      'Eclipse',
      'PyCharm'
    ],
    correctAnswer: 'Eclipse'
  },
  {
    question: '¿Cuál de los siguientes lenguajes tiene un nivel intermedio de abstracción y es ampliamente utilizado en motores de videojuegos como Unreal Engine?',
    options: [
      'C++',
      'Python',
      'Swift',
      'JavaScript'
    ],
    correctAnswer: 'C++'
  },
  {
    question: '¿Cuál es el IDE más utilizado para desarrollar aplicaciones en C# en el ecosistema de Microsoft?',
    options: [
      'Visual Studio',
      'NetBeans',
      'PyCharm',
      'IntelliJ IDEA'
    ],
    correctAnswer: 'Visual Studio'
  },
  {
    question: '¿Cuál de los siguientes lenguajes pertenece al nivel más bajo de abstracción?',
    options: ['Python', 'Ensamblador', 'Java', 'SQL'],
    correctAnswer: 'Ensamblador'
  },
  {
    question: '¿Qué lenguaje es más adecuado para desarrollar sistemas operativos debido a su bajo nivel de abstracción?',
    options: ['C', 'Ruby', 'PHP', 'JavaScript'],
    correctAnswer: 'C'
  },
  {
    question: '¿Qué lenguaje es especializado en la manipulación de datos en bases de datos relacionales?',
    options: ['Swift', 'SQL', 'MATLAB', 'Kotlin'],
    correctAnswer: 'SQL'
  },
  {
    question: '¿Cuál es el IDE más utilizado para desarrollar aplicaciones en C# en el ecosistema de Microsoft?',
    options: ['IntelliJ IDEA', 'Visual Studio', 'PyCharm', 'NetBeans'],
    correctAnswer: 'Visual Studio'
  },
  {
    question: '¿Qué lenguaje es comúnmente utilizado en aplicaciones de ciencia de datos y machine learning?',
    options: ['Rust', 'Python', 'Go', 'Java'],
    correctAnswer: 'Python'
  },
  {
    question: '¿Cuál de los siguientes lenguajes pertenece al nivel de muy alto nivel y es ideal para enseñar programación a niños?',
    options: ['Scratch', 'Rust', 'Go', 'PHP'],
    correctAnswer: 'Scratch'
  },
  {
    question: '¿Qué IDE es más recomendado para trabajar con Java en proyectos empresariales?',
    options: ['Eclipse', 'PyCharm', 'Android Studio', 'CLion'],
    correctAnswer: 'Eclipse'
  },
  {
    question: '¿Qué lenguaje ofrece seguridad en memoria y está diseñado para sistemas críticos como blockchain?',
    options: ['Java', 'Rust', 'Ruby', 'Kotlin'],
    correctAnswer: 'Rust'
  },
  {
    question: '¿Qué herramienta se utiliza comúnmente para trabajar con archivos de datos estadísticos en el lenguaje R?',
    options: ['MATLAB', 'RStudio', 'IntelliJ IDEA', 'Visual Studio Code'],
    correctAnswer: 'RStudio'
  },
  {
    question: '¿Cuál de los siguientes lenguajes tiene un nivel intermedio de abstracción y es ampliamente utilizado en motores de videojuegos como Unreal Engine?',
    options: ['Python', 'C++', 'Swift', 'JavaScript'],
    correctAnswer: 'C++'
  },

  {
    question: '¿Qué representa una clase en un diagrama de clases UML?',
    options: ['Una instancia de un objeto', 'Un conjunto de casos de uso', 'Una plantilla para crear objetos', 'Una relación entre objetos'],
    correctAnswer: 'Una plantilla para crear objetos'
  },
  {
    question: '¿Cómo se indica una relación de herencia entre dos clases en un diagrama UML?',
    options: ['Con una flecha punteada', 'Con una línea con un rombo', 'Con una línea con una flecha blanca', 'Con una línea con una flecha negra'],
    correctAnswer: 'Con una línea con una flecha blanca'
  },
  {
    question: '¿Cuál es el propósito principal de un diagrama de clases UML?',
    options: ['Describir el flujo de control del sistema', 'Mostrar la estructura estática del sistema', 'Representar el comportamiento dinámico del sistema', 'Modelar la base de datos del sistema'],
    correctAnswer: 'Mostrar la estructura estática del sistema'
  },
  {
    question: '¿Qué elemento se utiliza para representar una relación de composición en UML?',
    options: ['Una línea con un rombo vacío', 'Una línea con un rombo relleno', 'Una flecha discontinua', 'Una línea con una flecha abierta'],
    correctAnswer: 'Una línea con un rombo relleno'
  },
  {
    question: '¿Qué significa el símbolo \'+\' delante de un atributo o método en UML?',
    options: ['Que es privado', 'Que es protegido', 'Que es público', 'Que es estático'],
    correctAnswer: 'Que es público'
  },
  {
    question: '¿Qué indica una relación de asociación en un diagrama de clases UML?',
    options: ['Una clase hereda de otra', 'Una clase depende de otra', 'Una clase contiene a otra', 'Una clase está relacionada con otra'],
    correctAnswer: 'Una clase está relacionada con otra'
  },
  {
    question: '¿Qué representa una multiplicidad como \'1..*\' en UML?',
    options: ['Que puede haber ninguna o muchas instancias', 'Que puede haber una o muchas instancias', 'Que debe haber exactamente una instancia', 'Que puede haber solo una instancia'],
    correctAnswer: 'Que puede haber una o muchas instancias'
  },
  {
    question: '¿Cómo se representa un atributo privado en UML?',
    options: ['Con el símbolo \'+\'', 'Con el símbolo \'-\'', 'Con el símbolo \'#\'', 'Con el símbolo \'~\''],
    correctAnswer: 'Con el símbolo \'-\''
  },
  {
    question: '¿Cuál es la diferencia entre agregación y composición en UML?',
    options: ['La agregación implica una relación más fuerte que la composición', 'La composición implica dependencia fuerte y la agregación no', 'Ambas son exactamente iguales', 'La agregación usa flechas y la composición no'],
    correctAnswer: 'La composición implica dependencia fuerte y la agregación no'
  },
  {
    question: '¿Qué tipo de relación se representa con una línea discontinua y una flecha abierta en UML?',
    options: ['Asociación', 'Dependencia', 'Composición', 'Generalización'],
    correctAnswer: 'Dependencia'
  },
  {
    question: '¿Cuál de los principales objetivos de un entorno de desarrollo integrado (IDE)?',
    options: ['Editar vídeos', 'Gestionar redes', 'Facilitar el desarrollo de software', 'Controlar servidores web'],
    correctAnswer: 'Facilitar el desarrollo de software'
  },
  {
    question: '¿Qué componente de un IDE permite la detección de errores en tiempo de compilación?',
    options: ['Editor de texto', 'Depurador', 'Compilador', 'Gestor de archivos'],
    correctAnswer: 'Compilador'
  },
  {
    question: '¿Qué es el control de versiones?',
    options: ['Un tipo de compilador', 'Un IDE avanzado', 'Una técnica para registrar los cambios en el código', 'Un sistema de backup automatizado'],
    correctAnswer: 'Una técnica para registrar los cambios en el código'
  },
  {
    question: '¿Qué sistema de control de versiones es más popular hoy en día?',
    options: ['Mercurial', 'CVS', 'Git', 'Subversion'],
    correctAnswer: 'Git'
  },
  {
    question: '¿Qué comando de Git se utiliza para enviar cambios a un repositorio remoto?',
    options: ['git clone', 'git push', 'git commit', 'git status'],
    correctAnswer: 'git push'
  },
  {
    question: '¿Qué herramienta se utiliza para automatizar la construcción del software?',
    options: ['IDE', 'Sistema Operativo', 'Compilador', 'Herramienta de construcción'],
    correctAnswer: 'Herramienta de construcción'
  },
  {
    question: '¿Cuál de los siguientes NO es un tipo de prueba en el desarrollo de software?',
    options: ['Prueba de unidad', 'Prueba funcional', 'Prueba de error', 'Prueba de integración'],
    correctAnswer: 'Prueba de error'
  },
  {
    question: '¿Qué fase del ciclo de vida del software se centra en corregir errores y mejorar el sistema?',
    options: ['Diseño', 'Mantenimiento', 'Pruebas', 'Requisitos'],
    correctAnswer: 'Mantenimiento'
  },
  {
    question: '¿Qué lenguaje se usa habitualmente en scripts de automatización para entornos de desarrollo?',
    options: ['C#', 'Python', 'Java', 'C++'],
    correctAnswer: 'Python'
  },
  {
    question: '¿Cuál es la función principal del depurador en un entorno de desarrollo?',
    options: ['Mejorar el diseño de interfaces', 'Gestionar servidores', 'Detectar y corregir errores en tiempo de ejecución', 'Controlar versiones'],
    correctAnswer: 'Detectar y corregir errores en tiempo de ejecución'
  },
  {
    question: '¿Qué es un entorno de desarrollo local?',
    options: ['Un entorno en la nube', 'Un entorno donde se despliega en producción', 'Una configuración en el equipo del desarrollador', 'Un servidor remoto de pruebas'],
    correctAnswer: 'Una configuración en el equipo del desarrollador'
  },
  {
    question: '¿Cuál es la extensión típica de los archivos de configuración de proyectos en Java con Maven?',
    options: ['pom.xml', 'build.gradle', 'package.json', 'config.yaml'],
    correctAnswer: 'pom.xml'
  },
  {
    question: '¿Qué herramienta está diseñada para la gestión de dependencias en proyectos Java?',
    options: ['Webpack', 'Maven', 'NPM', 'GCC'],
    correctAnswer: 'Maven'
  },
  {
    question: '¿Qué se entiende por \'testing automatizado\'?',
    options: ['Pruebas realizadas por usuarios', 'Pruebas manuales de software', 'Pruebas realizadas mediante scripts sin intervención humana', 'Pruebas sin código'],
    correctAnswer: 'Pruebas realizadas mediante scripts sin intervención humana'
  },
  {
    question: '¿Cuál es el objetivo principal de una integración continua?',
    options: ['Minimizar los conflictos de código al integrar cambios frecuentemente', 'Reducir el uso de CPU', 'Incrementar el tamaño del repositorio', 'Evitar usar Git'],
    correctAnswer: 'Minimizar los conflictos de código al integrar cambios frecuentemente'
  },
  {
    question: '¿Qué tipo de herramientas permiten automatizar compilaciones, pruebas y despliegue?',
    options: ['IDE', 'Frameworks', 'Sistemas CI/CD', 'Editores de texto'],
    correctAnswer: 'Sistemas CI/CD'
  },
  {
    question: '¿Cuál de los siguientes entornos de desarrollo es más utilizado para aplicaciones en .NET?',
    options: ['PyCharm', 'Visual Studio', 'Eclipse', 'NetBeans'],
    correctAnswer: 'Visual Studio'
  },
  {
    question: '¿Qué técnica permite ejecutar una aplicación en una réplica del entorno de producción?',
    options: ['Compilación', 'Virtualización', 'Depuración', 'Gitflow'],
    correctAnswer: 'Virtualización'
  },
  {
    question: '¿Qué es una máquina virtual de hardware?',
    options: ['Un software que simula un sistema operativo completo', 'Una aplicación de consola', 'Una API para acceso a hardware', 'Una biblioteca de desarrollo'],
    correctAnswer: 'Un software que simula un sistema operativo completo'
  },
  {
    question: '¿Qué lenguaje es más adecuado para automatizar tareas del sistema operativo?',
    options: ['HTML', 'C', 'Bash', 'CSS'],
    correctAnswer: 'Bash'
  },
  {
    question: '¿Qué es un framework en el contexto del desarrollo de software?',
    options: ['Una base de datos', 'Un sistema operativo', 'Una estructura reutilizable para desarrollar software', 'Una herramienta de diseño gráfico'],
    correctAnswer: 'Una estructura reutilizable para desarrollar software'
  },
  {
    question: '¿Cuál es el objetivo principal de los diagramas UML?',
    options: ['Editar código', 'Crear interfaces gráficas', 'Modelar el diseño del software', 'Documentar el hardware'],
    correctAnswer: 'Modelar el diseño del software'
  },
  {
    question: '¿Qué tipo de licencia permite modificar y redistribuir el software libremente?',
    options: ['Propietaria', 'Trial', 'GNU GPL', 'Demo'],
    correctAnswer: 'GNU GPL'
  },
  {
    question: '¿Qué componente permite gestionar el ciclo de vida del software en metodologías ágiles?',
    options: ['IDE', 'Kanban', 'Compilador', 'Lenguaje de programación'],
    correctAnswer: 'Kanban'
  },
  {
    question: '¿Cuál es la finalidad de los entornos virtuales en programación?',
    options: ['Aumentar el rendimiento del sistema', 'Compartir archivos multimedia', 'Aislar dependencias de un proyecto', 'Diseñar interfaces gráficas'],
    correctAnswer: 'Aislar dependencias de un proyecto'
  },
  {
    question: '¿Qué archivo define las dependencias de un proyecto en Node.js?',
    options: ['pom.xml', 'package.json', 'config.ini', 'build.gradle'],
    correctAnswer: 'package.json'
  },
  {
    question: '¿Qué ventaja ofrece usar un sistema de integración continua?',
    options: ['Mayor consumo de CPU', 'Complicación del proceso de desarrollo', 'Entrega más rápida y con menos errores', 'Obligación de usar la nube'],
    correctAnswer: 'Entrega más rápida y con menos errores'
  },
  {
    question: '¿Qué comando de Git se usa para integrar los cambios de otra rama en la actual?',
    options: ['git status', 'git pull', 'git merge', 'git log'],
    correctAnswer: 'git merge'
  },
  {
    question: '¿Qué herramienta permite ejecutar contenedores de software con todas sus dependencias?',
    options: ['Docker', 'Eclipse', 'Jenkins', 'Git'],
    correctAnswer: 'Docker'
  },
  {
    question: '¿Qué elemento se considera una buena práctica al nombrar variables en programación?',
    options: ['Usar nombres genéricos', 'Escribir en mayúsculas siempre', 'Usar nombres descriptivos', 'Evitar el uso del inglés'],
    correctAnswer: 'Usar nombres descriptivos'
  },
  {
    question: '¿Qué significa que un software sea multiplataforma?',
    options: ['Que solo funciona en Windows', 'Que puede ejecutarse en distintos sistemas operativos', 'Que está escrito en varios lenguajes', 'Que no necesita instalarse'],
    correctAnswer: 'Que puede ejecutarse en distintos sistemas operativos'
  },
  {
    question: '¿Qué IDE está especialmente orientado al desarrollo en Java?',
    options: ['Visual Studio', 'Xcode', 'Eclipse', 'Atom'],
    correctAnswer: 'Eclipse'
  },
  {
    question: '¿Cuál es una herramienta típica de automatización de pruebas?',
    options: ['JUnit', 'Eclipse', 'Photoshop', 'Maven'],
    correctAnswer: 'JUnit'
  },
  {
    question: '¿Cuál es el propósito principal de un repositorio remoto?',
    options: ['Almacenar imágenes', 'Gestionar servidores', 'Compartir código entre desarrolladores', 'Crear redes sociales'],
    correctAnswer: 'Compartir código entre desarrolladores'
  },
  {
    question: '¿Qué tecnología permite ejecutar contenedores ligeros y portables?',
    options: ['Kubernetes', 'Docker', 'VirtualBox', 'Apache'],
    correctAnswer: 'Docker'
  },
  {
    question: '¿Qué extensión suele tener un script Bash?',
    options: ['.py', '.bash', '.sh', '.bat'],
    correctAnswer: '.sh'
  },
  {
    question: '¿Qué técnica permite detectar errores antes de ejecutar un programa?',
    options: ['Interpretación', 'Compilación', 'Depuración', 'Instalación'],
    correctAnswer: 'Compilación'
  },
  {
    question: '¿Qué es una prueba unitaria?',
    options: ['Una prueba de sistema', 'Una prueba que se hace sin software', 'Una prueba individual de un componente del programa', 'Una validación por parte del usuario final'],
    correctAnswer: 'Una prueba individual de un componente del programa'
  },
  {
    question: '¿Qué representa un diagrama de casos de uso?',
    options: [
      'El comportamiento interno de las clases',
      'El diseño físico de la base de datos',
      'Las funcionalidades que ofrece el sistema a los usuarios',
      'El flujo de datos del sistema'
    ],
    correctAnswer: 'Las funcionalidades que ofrece el sistema a los usuarios'
  },
  {
    question: 'En un diagrama de casos de uso, ¿qué representa un actor?',
    options: [
      'Un mensaje enviado entre módulos',
      'Una función interna del sistema',
      'Un usuario o sistema externo que interactúa con el sistema',
      'Una clase principal'
    ],
    correctAnswer: 'Un usuario o sistema externo que interactúa con el sistema'
  },
  {
    question: '¿Qué significa la relación «include» en un diagrama de casos de uso?',
    options: [
      'Una herencia entre casos de uso',
      'Un error de diseño',
      'Un caso de uso opcional',
      'Un caso de uso que siempre se ejecuta dentro de otro'
    ],
    correctAnswer: 'Un caso de uso que siempre se ejecuta dentro de otro'
  },
  {
    question: '¿Qué tipo de relación se usa para modelar un comportamiento opcional en un caso de uso?',
    options: [
      'association',
      'extend',
      'generalization',
      'include'
    ],
    correctAnswer: 'extend'
  },
  {
    question: '¿Qué sección contiene los atributos en una clase UML?',
    options: [
      'La segunda sección',
      'La tercera sección',
      'La última sección solo si es abstracta',
      'La primera sección'
    ],
    correctAnswer: 'La segunda sección'
  },
  {
    question: '¿Qué símbolo indica visibilidad pública en UML?',
    options: [
      '+',
      '*',
      '#',
      '-'
    ],
    correctAnswer: '+'
  },
  {
    question: '¿Cómo se representa una herencia en un diagrama de clases?',
    options: [
      'Línea continua con flecha rellena',
      'Línea continua con rombo',
      'Línea continua con flecha triangular vacía',
      'Línea discontinua con flecha vacía'
    ],
    correctAnswer: 'Línea continua con flecha triangular vacía'
  },
  {
    question: '¿Qué representa la composición en un diagrama de clases?',
    options: [
      'Relación jerárquica',
      'Asociación opcional',
      'Relación de pertenencia total (vida ligada)',
      'Dependencia débil'
    ],
    correctAnswer: 'Relación de pertenencia total (vida ligada)'
  },
  {
    question: '¿Cómo se representa la agregación en UML?',
    options: [
      'Línea discontinua',
      'Rombo negro en la clase contenedora',
      'Flecha negra',
      'Rombo blanco en la clase contenedora'
    ],
    correctAnswer: 'Rombo blanco en la clase contenedora'
  },
  {
    question: '¿Qué elemento puede agrupar varias clases en UML?',
    options: [
      'Interfaz',
      'Atributo compuesto',
      'Actor',
      'Paquete'
    ],
    correctAnswer: 'Paquete'
  },
  {
    question: '¿Qué muestra el flujo principal en un caso de uso?',
    options: [
      'La secuencia normal de pasos esperados',
      'Las validaciones internas',
      'Todas las excepciones posibles',
      'Solamente los errores del sistema'
    ],
    correctAnswer: 'La secuencia normal de pasos esperados'
  },
  {
    question: '¿Qué herramienta se usa para detallar el flujo interno de un caso de uso?',
    options: [
      'Diagrama de actividades',
      'Diagrama entidad-relación',
      'Diagrama de componentes',
      'Diagrama de clases'
    ],
    correctAnswer: 'Diagrama de actividades'
  },
  {
    question: '¿Qué se modela con asociaciones en un diagrama de clases?',
    options: [
      'La herencia de métodos',
      'El flujo de eventos',
      'La secuencia de llamadas',
      'La relación estructural entre dos clases'
    ],
    correctAnswer: 'La relación estructural entre dos clases'
  },
  {
    question: '¿Qué significa una línea discontinua en un diagrama de clases?',
    options: [
      'Una dependencia',
      'Una herencia',
      'Una composición',
      'Una asociación fuerte'
    ],
    correctAnswer: 'Una dependencia'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre los casos de uso es correcta?',
    options: [
      'Solo representan la base de datos del sistema',
      'Muestran el diseño interno del sistema',
      'Permiten definir los requisitos funcionales desde el punto de vista del usuario',
      'Son útiles para programadores pero no para clientes'
    ],
    correctAnswer: 'Permiten definir los requisitos funcionales desde el punto de vista del usuario'
  },
  {
    question: '¿Cómo se representa un caso de uso en UML?',
    options: [
      'Como un círculo',
      'Como un rectángulo',
      'Como una elipse',
      'Como una flecha'
    ],
    correctAnswer: 'Como una elipse'
  },
  {
    question: '¿Cuál de los siguientes elementos suele formar parte de un entorno de desarrollo integrado (IDE)?',
    options: [
      'Consola de administración de red',
      'Editor de código, compilador y depurador',
      'Panel de configuración de hardware',
      'Sistema de arranque'
    ],
    correctAnswer: 'Editor de código, compilador y depurador'
  },
  {
    question: '¿Cuál de los siguientes es un beneficio directo de las pruebas automatizadas?',
    options: [
      'Detectan fallos solo en producción',
      'Evitan escribir documentación',
      'Permiten ejecutar pruebas frecuentes con bajo esfuerzo',
      'Requieren menos cobertura'
    ],
    correctAnswer: 'Permiten ejecutar pruebas frecuentes con bajo esfuerzo'
  },
  {
    question: '¿Cuál de los siguientes lenguajes es típicamente considerado de bajo nivel?',
    options: [
      'Kotlin',
      'Python',
      'C',
      'Java'
    ],
    correctAnswer: 'C'
  },
  {
    question: '¿Cuál es el principal beneficio de una prueba de integración?',
    options: [
      'Ejecutar scripts automatizados',
      'Asegurar que los módulos trabajan bien juntos',
      'Validar interfaces gráficas',
      'Verificar que las clases se construyen correctamente'
    ],
    correctAnswer: 'Asegurar que los módulos trabajan bien juntos'
  },
  {
    question: '¿Cuál es el principal objetivo del mantenimiento perfectivo en el software?',
    options: [
      'Corregir errores reportados por los usuarios',
      'Mejorar el rendimiento o la funcionalidad sin que exista un fallo previo',
      'Eliminar código duplicado',
      'Adaptar el software a nuevas plataformas o entornos'
    ],
    correctAnswer: 'Mejorar el rendimiento o la funcionalidad sin que exista un fallo previo'
  },
  {
    question: '¿Cuál es el propósito principal del mantenimiento adaptativo del software?',
    options: [
      'Modificar el software por cambios en el entorno o requisitos externos',
      'Añadir funcionalidades opcionales',
      'Corregir errores de compilación',
      'Mejorar la interfaz gráfica'
    ],
    correctAnswer: 'Modificar el software por cambios en el entorno o requisitos externos'
  },
  {
    question: "¿Cuál es el rol de un 'actor' en un diagrama de casos de uso?",
    options: [
      'Es un método invocable',
      'Es una clase del sistema',
      'Es un usuario o sistema externo que interactúa',
      'Es un componente lógico'
    ],
    correctAnswer: 'Es un usuario o sistema externo que interactúa'
  },
  {
    question: '¿Cuál es la utilidad de la relación «extends» en UML?',
    options: [
      'Definir atributos de una clase',
      'Obligar la ejecución conjunta de casos de uso',
      'Indicar herencia entre actores',
      'Permitir comportamiento opcional o alternativo'
    ],
    correctAnswer: 'Permitir comportamiento opcional o alternativo'
  },
  {
    question: '¿Cuál es una característica de una máquina virtual de proceso?',
    options: [
      'Gestiona múltiples sistemas operativos',
      'Ejecuta código específico del lenguaje de programación',
      'Emula hardware completo',
      'Requiere hipervisor de tipo 1'
    ],
    correctAnswer: 'Ejecuta código específico del lenguaje de programación'
  },
  {
    question: '¿Cuál es una solución común para métodos con muchos parámetros?',
    options: [
      'Eliminar parámetros sin revisión',
      'Escribir comentarios detallados',
      'Agrupar los parámetros en un objeto',
      'Duplicar el método con variantes'
    ],
    correctAnswer: 'Agrupar los parámetros en un objeto'
  },
  {
    question: '¿Por qué es recomendable mantener documentación técnica actualizada?',
    options: [
      'Porque acelera la compilación del código',
      'Porque evita usar herramientas externas',
      'Porque facilita el mantenimiento incluso si cambian los desarrolladores',
      'Porque mejora la calidad del diseño gráfico'
    ],
    correctAnswer: 'Porque facilita el mantenimiento incluso si cambian los desarrolladores'
  },
  {
    question: '¿Por qué las máquinas virtuales son útiles en entornos de desarrollo?',
    options: [
      'No requieren pruebas',
      'No consumen memoria',
      'El software se ejecuta más rápido',
      'Facilitan la replicación de entornos para distintos proyectos'
    ],
    correctAnswer: 'Facilitan la replicación de entornos para distintos proyectos'
  },
  {
    question: '¿Por qué se prefiere un lenguaje de alto nivel en desarrollo ágil?',
    options: [
      'Mejor rendimiento sin compilación',
      'Mayor legibilidad y facilidad de mantenimiento',
      'Mayor acceso a registros de CPU',
      'Menor seguridad'
    ],
    correctAnswer: 'Mayor legibilidad y facilidad de mantenimiento'
  },
  {
    question: '¿Por qué se recomienda dividir las responsabilidades de una clase en componentes más pequeños?',
    options: [
      'Para evitar el uso de bucles',
      'Para cumplir con el principio de responsabilidad única',
      'Para evitar que la clase tenga atributos',
      'Para reducir el tamaño del archivo'
    ],
    correctAnswer: 'Para cumplir con el principio de responsabilidad única'
  },
  {
    question: '¿Qué característica define a una prueba unitaria?',
    options: [
      'Se realiza después del despliegue',
      'Evalúa toda la aplicación de forma integral',
      'Se enfoca en la experiencia del usuario',
      'Evalúa funciones o métodos de forma aislada y controlada'
    ],
    correctAnswer: 'Evalúa funciones o métodos de forma aislada y controlada'
  },
  {
    question: '¿Qué característica distingue a una prueba de sistema?',
    options: [
      'Solo se enfoca en bases de datos',
      'Verifica que todos los componentes del software funcionen correctamente en conjunto',
      'Evalúa cada método individualmente',
      'Comprueba errores ortográficos en la interfaz'
    ],
    correctAnswer: 'Verifica que todos los componentes del software funcionen correctamente en conjunto'
  },
  {
    question: '¿Qué comando de Git permite subir los cambios locales al repositorio remoto?',
    options: [
      'git export',
      'git push',
      'git upload',
      'git deploy'
    ],
    correctAnswer: 'git push'
  },
  {
    question: '¿Qué comando de Git se utiliza para combinar los cambios de una rama en otra?',
    options: [
      'git connect',
      'git commit',
      'git join',
      'git merge'
    ],
    correctAnswer: 'git merge'
  },
  {
    question: '¿Qué elemento se considera un nodo en el análisis del grafo de control de flujo?',
    options: [
      'Una dependencia entre módulos',
      'Una condición lógica',
      'Una instrucción secuencial o bloque sin bifurcaciones',
      'Un test de regresión'
    ],
    correctAnswer: 'Una instrucción secuencial o bloque sin bifurcaciones'
  },
  {
    question: '¿Qué fase del ciclo de vida del software se encarga de verificar que se cumplan los requisitos establecidos?',
    options: [
      'Pruebas',
      'Mantenimiento',
      'Implementación',
      'Diseño'
    ],
    correctAnswer: 'Pruebas'
  },
  {
    question: '¿Qué función clave cumple la documentación en proyectos con múltiples desarrolladores?',
    options: [
      'Evita que se comenten los cambios',
      'Reduce la velocidad del desarrollo',
      'Permite alinear la comprensión entre equipos distribuidos',
      'Elimina la necesidad de reuniones'
    ],
    correctAnswer: 'Permite alinear la comprensión entre equipos distribuidos'
  },
  {
    question: '¿Qué función tiene el hipervisor en un entorno de virtualización?',
    options: [
      'Traducir código de alto nivel',
      'Gestionar el diseño del sistema',
      'Compilar el kernel',
      'Administrar y aislar máquinas virtuales sobre el hardware físico'
    ],
    correctAnswer: 'Administrar y aislar máquinas virtuales sobre el hardware físico'
  },
  {
    question: '¿Qué herramienta forma parte habitual de un IDE moderno?',
    options: [
      'Depurador integrado',
      'Cable de red',
      'Sistema operativo',
      'Antivirus'
    ],
    correctAnswer: 'Depurador integrado'
  },
  {
    question: '¿Qué herramienta gráfica permite trabajar con ramas y commits en Git sin usar terminal?',
    options: [
      'Git Script',
      'Git GUI',
      'Git Manual',
      'GitHub CLI'
    ],
    correctAnswer: 'Git GUI'
  },
  {
    question: '¿Qué herramienta permite virtualizar sistemas operativos con facilidad en entornos educativos?',
    options: [
      'VMware vSphere',
      'Oracle VirtualBox',
      'IntelliJ IDEA',
      'GitHub Desktop'
    ],
    correctAnswer: 'Oracle VirtualBox'
  },
  {
    question: '¿Qué IDE es frecuentemente usado en desarrollo de aplicaciones móviles Android?',
    options: [
      'Eclipse',
      'Visual Studio Code',
      'NetBeans',
      'Android Studio'
    ],
    correctAnswer: 'Android Studio'
  },
  {
    question: '¿Qué nivel de abstracción se considera intermedio entre binario y lenguajes de alto nivel?',
    options: [
      'Lenguaje natural',
      'SQL',
      'Ensamblador',
      'Binario'
    ],
    correctAnswer: 'Ensamblador'
  },
  {
    question: '¿Qué parte del IDE ayuda a rastrear y resolver errores durante la ejecución del programa?',
    options: [
      'Autocompletado',
      'Editor de texto',
      'Consola de comandos',
      'Depurador'
    ],
    correctAnswer: 'Depurador'
  },
  {
    question: '¿Qué permite determinar la complejidad ciclomática de una función?',
    options: [
      'La cantidad de decisiones y bifurcaciones que contiene el flujo del código',
      'El número de comentarios por línea',
      'La cantidad de clases',
      'El número de variables locales'
    ],
    correctAnswer: 'La cantidad de decisiones y bifurcaciones que contiene el flujo del código'
  },
  {
    question: '¿Qué problema refleja el mal olor de código llamado "Shotgun Surgery"?',
    options: [
      'Uso excesivo de herencia',
      'Cambiar una parte del sistema implica modificar muchas otras',
      'Clases sin métodos',
      'Repetición de estructuras de control'
    ],
    correctAnswer: 'Cambiar una parte del sistema implica modificar muchas otras'
  },
  {
    question: '¿Qué problema se conoce como “Shotgun Surgery”?',
    options: [
      'Cambiar una clase provoca errores de compilación',
      'El código se divide en métodos demasiado pequeños',
      'Se mezclan demasiadas responsabilidades en una clase',
      'Un cambio en una clase requiere cambios en muchas otras'
    ],
    correctAnswer: 'Un cambio en una clase requiere cambios en muchas otras'
  },
  {
    question: '¿Qué representa la complejidad ciclomática en un bloque de código?',
    options: [
      'El número de caminos independientes en el flujo del programa',
      'La cantidad de clases heredadas',
      'La cantidad de comentarios por línea',
      'El número de variables globales'
    ],
    correctAnswer: 'El número de caminos independientes en el flujo del programa'
  },
  {
    question: '¿Qué representa un componente en un diagrama de componentes UML?',
    options: [
      'Un entorno de ejecución',
      'Una unidad funcional ejecutable del sistema',
      'Un actor externo',
      'Un flujo de datos'
    ],
    correctAnswer: 'Una unidad funcional ejecutable del sistema'
  },
  {
    question: '¿Qué representa una entrada fuera del rango permitido en una clase de equivalencia?',
    options: [
      'Un valor duplicado',
      'Un dato opcional',
      'Una partición inválida',
      'Una entrada crítica'
    ],
    correctAnswer: 'Una partición inválida'
  },
  {
    question: '¿Qué tipo de prueba se utiliza para verificar que una nueva funcionalidad no rompe lo ya existente?',
    options: [
      'Prueba de rendimiento',
      'Prueba alfa',
      'Prueba de humo',
      'Prueba de regresión'
    ],
    correctAnswer: 'Prueba de regresión'
  },
  {
    question: '¿Qué tipo de relación UML indica que una clase utiliza otra de forma temporal sin necesidad de poseerla?',
    options: [
      'Dependencia',
      'Asociación',
      'Composición',
      'Agregación'
    ],
    correctAnswer: 'Dependencia'
  },
  {
    question: '¿Qué ventaja ofrece el uso de clases de equivalencia en pruebas?',
    options: [
      'Elimina pruebas funcionales',
      'Automatiza todo el proceso de pruebas',
      'Evita documentar los casos',
      'Reduce la cantidad de casos necesarios sin perder cobertura'
    ],
    correctAnswer: 'Reduce la cantidad de casos necesarios sin perder cobertura'
  },
  {
    question: '¿Qué ventaja ofrece una refactorización frecuente en lugar de una única y compleja?',
    options: [
      'Disminuye la cobertura de pruebas',
      'Reduce la reutilización del código',
      'Mejora el mantenimiento y minimiza el riesgo',
      'Evita errores en producción'
    ],
    correctAnswer: 'Mejora el mantenimiento y minimiza el riesgo'
  },
  {
    question: '¿Qué ventaja tiene un lenguaje de alto nivel frente a uno de bajo nivel?',
    options: [
      'Mayor complejidad en la sintaxis',
      'Mayor control de memoria',
      'Mayor legibilidad y menor complejidad para el programador',
      'Acceso directo a registros del procesador'
    ],
    correctAnswer: 'Mayor legibilidad y menor complejidad para el programador'
  },
  {
    question: '¿A qué clase pertenece la IP 192.0.2.1?',
    options: [
      'E',
      'C',
      'A',
      'B'
    ],
    correctAnswer: 'C'
  },
  {
    question: '¿Cuál de estas direcciones pertenece a una clase A?',
    options: [
      '224.0.0.1',
      '172.20.30.40',
      '10.5.6.7',
      '192.168.1.1'
    ],
    correctAnswer: '10.5.6.7'
  },
  {
    question: '¿Cuál de las siguientes acciones se puede realizar desde la BIOS?',
    options: [
      'Instalar programas',
      'Configurar el orden de arranque de los discos',
      'Abrir archivos de Word',
      'Cambiar la resolución del monitor'
    ],
    correctAnswer: 'Configurar el orden de arranque de los discos'
  },
  {
    question: '¿Cuál de los siguientes componentes es considerado un dispositivo de almacenamiento secundario?',
    options: [
      'Procesador',
      'GPU',
      'RAM',
      'SSD'
    ],
    correctAnswer: 'SSD'
  },
  {
    question: '¿Cuál es el uso principal del comando cp?',
    options: [
      'Mover archivos',
      'Eliminar archivos',
      'Crear enlaces',
      'Copiar archivos'
    ],
    correctAnswer: 'Copiar archivos'
  },
  {
    question: '¿Cuál es la dirección de broadcast para la red 192.168.1.64/26?',
    options: [
      '192.168.1.255',
      '192.168.1.64',
      '192.168.1.63',
      '192.168.1.127'
    ],
    correctAnswer: '192.168.1.127'
  },
  {
    question: '¿Cuál es la dirección de red de 192.168.50.123/26?',
    options: [
      '192.168.50.64',
      '192.168.50.64',
      '192.168.50.128',
      '192.168.50.0'
    ],
    correctAnswer: '192.168.50.64'
  },
  {
    question: '¿Cuál es la función de la máscara de subred?',
    options: [
      'Identificar si la IP es pública o privada',
      'Aumentar la velocidad de la red',
      'Establecer la dirección MAC',
      'Determinar qué parte de la IP es red y cuál es host'
    ],
    correctAnswer: 'Determinar qué parte de la IP es red y cuál es host'
  },
  {
    question: '¿Cuál es la máscara por defecto de una red de clase B?',
    options: [
      '255.255.255.255',
      '255.0.0.0',
      '255.255.0.0',
      '255.255.255.0'
    ],
    correctAnswer: '255.255.0.0'
  },
  {
    question: '¿Cuál es la principal diferencia entre una dirección IP pública y una privada?',
    options: [
      'Las IP públicas no necesitan pasar por un router',
      'Las IP públicas tienen más velocidad de conexión',
      'Las IP privadas se usan solo en redes gubernamentales',
      'Las IP privadas no son accesibles directamente desde Internet'
    ],
    correctAnswer: 'Las IP privadas no son accesibles directamente desde Internet'
  },
  {
    question: '¿Cuál es la principal función de la memoria RAM en un ordenador?',
    options: [
      'Controlar dispositivos de entrada/salida',
      'Almacenar archivos a largo plazo',
      'Almacenar temporalmente instrucciones y datos para que el procesador los ejecute',
      'Procesar señales gráficas'
    ],
    correctAnswer: 'Almacenar temporalmente instrucciones y datos para que el procesador los ejecute'
  },
  {
    question: '¿Cuál es una diferencia clave entre la memoria RAM y la memoria ROM?',
    options: [
      'Ambas almacenan datos permanentemente',
      'La RAM contiene el sistema BIOS, la ROM solo guarda programas temporales',
      'La ROM pierde sus datos al apagar el equipo, la RAM no',
      'La RAM es volátil y la ROM no lo es'
    ],
    correctAnswer: 'La RAM es volátil y la ROM no lo es'
  },
  {
    question: '¿Cuál sería la dirección de broadcast para la red 192.168.10.0/24?',
    options: [
      '192.168.10.0',
      '192.168.10.255',
      '192.168.0.0',
      '192.168.255.255'
    ],
    correctAnswer: '192.168.10.255'
  },
  {
    question: '¿Cuántos bits tiene una dirección IPv4?',
    options: [
      '32',
      '16',
      '64',
      '128'
    ],
    correctAnswer: '32'
  },
  {
    question: '¿Cuántos hosts útiles puede tener la red 192.168.1.0/25?',
    options: [
      '64',
      '126',
      '128',
      '254'
    ],
    correctAnswer: '126'
  },
  {
    question: '¿Por qué es importante que un desarrollador de aplicaciones web (DAW) tenga conocimientos de hardware?',
    options: [
      'Para optimizar el rendimiento de sus aplicaciones y entender mejor el entorno de ejecución',
      'Porque es obligatorio para programar en HTML',
      'Para evitar usar software de terceros',
      'Para poder reparar físicamente ordenadores'
    ],
    correctAnswer: 'Para optimizar el rendimiento de sus aplicaciones y entender mejor el entorno de ejecución'
  },
  {
    question: '¿Por qué es peligroso usar rm -r sin cuidado?',
    options: [
      'Congela el equipo',
      'Puede borrar todo el sistema',
      'Oculta archivos',
      'Cambia contraseñas'
    ],
    correctAnswer: 'Puede borrar todo el sistema'
  },
  {
    question: '¿Qué añade el parámetro -a al comando ls?',
    options: [
      'Cambia permisos',
      'Muestra el propietario',
      'Borra archivos',
      'Muestra archivos ocultos'
    ],
    correctAnswer: 'Muestra archivos ocultos'
  },
  {
    question: '¿Qué clase es la dirección IP 172.16.0.1?',
    options: [
      'C',
      'A',
      'D',
      'B'
    ],
    correctAnswer: 'B'
  },
  {
    question: '¿Qué comando crea un nuevo archivo vacío?',
    options: [
      'touch',
      'nano',
      'cat',
      'mkfile'
    ],
    correctAnswer: 'touch'
  },
  {
    question: '¿Qué comando elimina un directorio y todo su contenido?',
    options: [
      'rm -r',
      'delete',
      'rm',
      'rmdir'
    ],
    correctAnswer: 'rm -r'
  },
  {
    question: '¿Qué comando se usa para copiar un directorio con todo su contenido?',
    options: [
      'mv -r',
      'cp',
      'ln -r',
      'cp -r'
    ],
    correctAnswer: 'cp -r'
  },
  {
    question: '¿Qué comando se utiliza para cambiar de directorio en Linux?',
    options: [
      'ls',
      'mv',
      'pwd',
      'cd'
    ],
    correctAnswer: 'cd'
  },
  {
    question: '¿Qué componente se encarga de realizar los cálculos y ejecutar instrucciones?',
    options: [
      'Disco duro',
      'Placa base',
      'CPU',
      'Fuente de alimentación'
    ],
    correctAnswer: 'CPU'
  },
  {
    question: '¿Qué contiene el archivo /etc/passwd?',
    options: [
      'Información del hardware',
      'Permisos del sistema',
      'Información de usuarios',
      'Logs del sistema'
    ],
    correctAnswer: 'Información de usuarios'
  },
  {
    question: '¿Qué dirección IP representa el primer host en la red 10.0.0.0/8?',
    options: [
      '10.0.0.255',
      '10.0.0.1',
      '10.255.255.255',
      '10.0.0.0'
    ],
    correctAnswer: '10.0.0.1'
  },
  {
    question: '¿Qué es la BIOS en una computadora?',
    options: [
      'Un programa para editar textos',
      'Una aplicación de seguridad',
      'Un firmware que inicia y prueba el hardware del sistema',
      'Un sistema operativo secundario'
    ],
    correctAnswer: 'Un firmware que inicia y prueba el hardware del sistema'
  },
  {
    question: '¿Qué función tiene la placa base en una computadora?',
    options: [
      'Ejecutar gráficos complejos',
      'Aumentar la velocidad de red',
      'Alimentar directamente la CPU',
      'Servir de soporte e interconexión entre todos los componentes'
    ],
    correctAnswer: 'Servir de soporte e interconexión entre todos los componentes'
  },
  {
    question: '¿Qué hace el comando man en Linux?',
    options: [
      'Cambia usuarios',
      'Lista procesos',
      'Elimina archivos',
      'Muestra manuales'
    ],
    correctAnswer: 'Muestra manuales'
  },
  {
    question: '¿Qué hace el comando rm?',
    options: [
      'Elimina archivos',
      'Cambia nombre',
      'Lista archivos',
      'Muestra contenido'
    ],
    correctAnswer: 'Elimina archivos'
  },
  {
    question: '¿Qué hace el modificador -l en ls -l?',
    options: [
      'Muestra detalles',
      'Ordena alfabéticamente',
      'Muestra inodos',
      'Muestra archivos ocultos'
    ],
    correctAnswer: 'Muestra detalles'
  },
  {
    question: "¿Qué indica una 'd' al principio de una línea de ls -l?",
    options: [
      'Archivo oculto',
      'Directorio',
      'Enlace simbólico',
      'Archivo ejecutable'
    ],
    correctAnswer: 'Directorio'
  },
  {
    question: '¿Qué parte de la IP representa el host en 192.168.5.10/24?',
    options: [
      '5.10',
      '192.168',
      '10',
      '5'
    ],
    correctAnswer: '10'
  },
  {
    question: '¿Qué rango de IPs cubre la subred 192.168.0.0/24?',
    options: [
      '192.168.0.0 – 192.168.0.255',
      '192.168.0.10 – 192.168.0.240',
      '192.168.0.1 – 192.168.0.254',
      '192.168.1.0 – 192.168.1.255'
    ],
    correctAnswer: '192.168.0.0 – 192.168.0.255'
  },
  {
    question: '¿Qué representa el símbolo ~ en Linux?',
    options: [
      'El directorio temporal',
      'El directorio /',
      'El directorio del usuario actual',
      'El directorio /etc'
    ],
    correctAnswer: 'El directorio del usuario actual'
  },
  {
    question: '¿Qué sucede si borras el archivo original de un enlace simbólico?',
    options: [
      'El enlace queda roto',
      'Se oculta',
      'Se borra también el enlace',
      'Se mantiene el contenido'
    ],
    correctAnswer: 'El enlace queda roto'
  },
  {
    question: '¿Qué tipo de dispositivo es un teclado en términos de hardware?',
    options: [
      'Dispositivo de procesamiento',
      'Dispositivo mixto',
      'Dispositivo de salida',
      'Dispositivo de entrada'
    ],
    correctAnswer: 'Dispositivo de entrada'
  },
  {
    question: '¿Qué tipo de enlace apunta al mismo inodo que el archivo original?',
    options: [
      'Alias',
      'Symbolic link',
      'Hard link',
      'Soft link'
    ],
    correctAnswer: 'Hard link'
  },
  {
    question: '¿Qué tipo de memoria se usa normalmente para almacenar la BIOS?',
    options: [
      'ROM',
      'DRAM',
      'RAM',
      'HDD'
    ],
    correctAnswer: 'ROM'
  },
  {
    question: 'Dada la IP 192.168.1.1 con máscara 255.255.255.0, ¿cuál es la parte de red?',
    options: [
      '1.1',
      '192',
      '192.168',
      '192.168.1'
    ],
    correctAnswer: '192.168.1'
  },
  {
    question: '¿Cuál de los siguientes es un entorno de desarrollo integrado (IDE)?',
    options: ['Microsoft Word', 'Eclipse', 'Photoshop', 'WinRAR'],
    correctAnswer: 'Eclipse'
  },
  {
    question: '¿Qué lenguaje de programación se asocia comúnmente con el IDE Android Studio?',
    options: ['Java', 'Python', 'C++', 'PHP'],
    correctAnswer: 'Java'
  },
  {
    question: '¿Qué es un sistema de control de versiones?',
    options: [
      'Un software para diseñar bases de datos',
      'Un sistema para administrar versiones del sistema operativo',
      'Un sistema para guardar y controlar los cambios en el código fuente',
      'Un sistema operativo'
    ],
    correctAnswer: 'Un sistema para guardar y controlar los cambios en el código fuente'
  },
  {
    question: '¿Cuál es la función principal de Git?',
    options: [
      'Crear interfaces gráficas',
      'Controlar versiones de código',
      'Editar imágenes',
      'Compilar programas'
    ],
    correctAnswer: 'Controlar versiones de código'
  },
  {
    question: '¿Qué comando de Git permite subir cambios al repositorio remoto?',
    options: ['git clone', 'git pull', 'git push', 'git init'],
    correctAnswer: 'git push'
  },
  {
    question: '¿Cuál es la extensión típica de un archivo Java?',
    options: ['.java', '.jav', '.js', '.class'],
    correctAnswer: '.java'
  },
  {
    question: '¿Qué es un depurador en un entorno de desarrollo?',
    options: [
      'Un limpiador de memoria',
      'Un programa que elimina código innecesario',
      'Una herramienta para encontrar y corregir errores',
      'Una herramienta para instalar software'
    ],
    correctAnswer: 'Una herramienta para encontrar y corregir errores'
  },
  {
    question: '¿Cuál de las siguientes herramientas es un sistema de control de versiones?',
    options: ['MySQL', 'Photoshop', 'Git', 'Visual Studio'],
    correctAnswer: 'Git'
  },
  {
    question: '¿Qué significa IDE?',
    options: [
      'Identificador de Desarrollo Empresarial',
      'Interfaz de Desarrollo Estándar',
      'Entorno de Desarrollo Integrado',
      'Editor de Documentos Empresariales'
    ],
    correctAnswer: 'Entorno de Desarrollo Integrado'
  },
  {
    question: '¿Qué tipo de software es NetBeans?',
    options: ['Editor de imágenes', 'IDE', 'Base de datos', 'Compilador'],
    correctAnswer: 'IDE'
  },
  {
    question: '¿Qué lenguaje de programación se utiliza en entornos .NET?',
    options: ['C#', 'JavaScript', 'Java', 'Python'],
    correctAnswer: 'C#'
  },
  {
    question: '¿Qué es un compilador?',
    options: [
      'Una herramienta para editar imágenes',
      'Un programa que convierte el código fuente en código máquina',
      'Una base de datos',
      'Un procesador de textos'
    ],
    correctAnswer: 'Un programa que convierte el código fuente en código máquina'
  },
  {
    question: '¿Qué comando de Git se usa para descargar cambios del repositorio remoto?',
    options: ['git push', 'git pull', 'git status', 'git add'],
    correctAnswer: 'git pull'
  },
  {
    question: '¿Qué comando de Git inicializa un repositorio?',
    options: ['git init', 'git start', 'git clone', 'git create'],
    correctAnswer: 'git init'
  },
  {
    question: '¿Cuál es la principal ventaja del uso de entornos de desarrollo integrados?',
    options: [
      'Mayor consumo de recursos',
      'Permite ejecutar código sin errores',
      'Facilita la programación al integrar herramientas',
      'Hace el código más lento'
    ],
    correctAnswer: 'Facilita la programación al integrar herramientas'
  },
  {
    question: '¿Qué herramienta permite crear máquinas virtuales?',
    options: ['Eclipse', 'VirtualBox', 'Apache', 'Android Studio'],
    correctAnswer: 'VirtualBox'
  },
  {
    question: '¿Cuál es una ventaja del uso de máquinas virtuales?',
    options: [
      'Mayor uso del hardware',
      'Mejoras gráficas',
      'Aislamiento de entornos',
      'Mejor acceso a internet'
    ],
    correctAnswer: 'Aislamiento de entornos'
  },
  {
    question: '¿Qué es un repositorio en desarrollo de software?',
    options: [
      'Una base de datos relacional',
      'Un contenedor donde se almacenan versiones de un proyecto',
      'Una carpeta de imágenes',
      'Un archivo ejecutable'
    ],
    correctAnswer: 'Un contenedor donde se almacenan versiones de un proyecto'
  },
  {
    question: '¿Qué extensión suelen tener los archivos de hojas de estilo en Sass?',
    options: ['.css', '.sass', '.scss', '.style'],
    correctAnswer: '.scss'
  },
  {
    question: '¿Qué es un sistema operativo?',
    options: [
      'Un compilador de programas',
      'Un entorno de desarrollo',
      'Un programa que gestiona los recursos del hardware',
      'Una hoja de cálculo'
    ],
    correctAnswer: 'Un programa que gestiona los recursos del hardware'
  },
  {
    question: '¿Cuál de estos no es un sistema operativo?',
    options: ['Linux', 'Windows', 'Photoshop', 'macOS'],
    correctAnswer: 'Photoshop'
  },
  {
    question: '¿Qué significa CLI en informática?',
    options: [
      'Compilador Ligero de Instrucciones',
      'Interfaz de Línea de Comandos',
      'Comando Local de Interfaz',
      'Cliente de Linux Integrado'
    ],
    correctAnswer: 'Interfaz de Línea de Comandos'
  },
  {
    question: '¿Qué significa API?',
    options: [
      'Aplicación para Internet',
      'Interfaz de Programación de Aplicaciones',
      'Interfaz Avanzada de Productos',
      'Archivo Personal Integrado'
    ],
    correctAnswer: 'Interfaz de Programación de Aplicaciones'
  },
  {
    question: '¿Qué es una librería en programación?',
    options: [
      'Un libro de teoría',
      'Un conjunto de funciones reutilizables',
      'Una estructura de base de datos',
      'Un tipo de dato'
    ],
    correctAnswer: 'Un conjunto de funciones reutilizables'
  },
  {
    question: '¿Cuál es la diferencia entre código fuente y código compilado?',
    options: [
      'No hay diferencia',
      'El código fuente es el original, el compilado es el que ejecuta la máquina',
      'El código fuente solo lo usa el compilador',
      'El compilado se escribe manualmente'
    ],
    correctAnswer: 'El código fuente es el original, el compilado es el que ejecuta la máquina'
  },
  {
    question: '¿Qué hace un sistema de integración continua?',
    options: [
      'Revisa la ortografía',
      'Combina cambios de código automáticamente',
      'Diseña la interfaz',
      'Actualiza sistemas operativos'
    ],
    correctAnswer: 'Combina cambios de código automáticamente'
  },
  {
    question: '¿Qué programa permite clonar un repositorio remoto de GitHub?',
    options: ['Photoshop', 'Excel', 'Git', 'Apache'],
    correctAnswer: 'Git'
  },
  {
    question: "¿Qué representa el comando 'git status'?",
    options: [
      'Muestra el historial de cambios',
      'Indica el estado actual del repositorio',
      'Elimina archivos',
      'Compila el código'
    ],
    correctAnswer: 'Indica el estado actual del repositorio'
  },
  {
    question: '¿Qué es un commit en Git?',
    options: [
      'Una rama',
      'Una base de datos',
      'Un registro de cambios confirmados',
      'Un archivo ejecutable'
    ],
    correctAnswer: 'Un registro de cambios confirmados'
  },
  {
    question: '¿Cuál es el propósito del archivo .gitignore?',
    options: [
      'Ignorar archivos al compilar',
      'Ignorar archivos al subir al repositorio',
      'Eliminar archivos del proyecto',
      'Ocultar archivos al sistema'
    ],
    correctAnswer: 'Ignorar archivos al subir al repositorio'
  },
  {
    question: '¿Qué es un entorno de desarrollo local?',
    options: [
      'Un entorno en la nube',
      'Un servidor de producción',
      'Un entorno que se ejecuta en tu máquina',
      'Una red externa'
    ],
    correctAnswer: 'Un entorno que se ejecuta en tu máquina'
  },
  {
    question: '¿Qué significa HTML?',
    options: [
      'Hyper Text Markup Language',
      'High Text Mode Language',
      'Hyper Transfer Mail Language',
      'Host Text Map Language'
    ],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    question: '¿Qué programa no es un editor de texto para programar?',
    options: ['VS Code', 'Sublime Text', 'Notepad++', 'Excel'],
    correctAnswer: 'Excel'
  },
  {
    question: '¿Cuál es la utilidad de un terminal?',
    options: [
      'Dibujar gráficos',
      'Interactuar con el sistema operativo mediante comandos',
      'Navegar en la web',
      'Visualizar imágenes'
    ],
    correctAnswer: 'Interactuar con el sistema operativo mediante comandos'
  },
  {
    question: '¿Cómo se representa un caso de uso en UML?',
    options: [
      'Como una flecha',
      'Como una elipse',
      'Como un rectángulo',
      'Como un círculo'
    ],
    correctAnswer: 'Como una elipse'
  },
  {
    question: "¿Cuál de los siguientes es un síntoma de 'Feature Envy'?",
    options: [
      'El método usa datos de otra clase más que de la suya',
      'El método está declarado como estático',
      'El método contiene varias excepciones',
      'El método está mal indentado'
    ],
    correctAnswer: 'El método usa datos de otra clase más que de la suya'
  },
  {
    question: '¿Cuál de los siguientes representa un atributo de una clase con demasiadas responsabilidades?',
    options: [
      'Atributos privados',
      'Muchos métodos o atributos',
      'Comentarios extensos',
      'Nombre corto'
    ],
    correctAnswer: 'Muchos métodos o atributos'
  },
  {
    question: '¿Cuál es la finalidad de la documentación de pruebas en el ciclo de vida del software?',
    options: [
      'Mejorar el rendimiento del código',
      'Prevenir problemas en la interfaz gráfica',
      'Ninguna de las anteriores',
      'Verificar que el software cumpla con los requisitos'
    ],
    correctAnswer: 'Verificar que el software cumpla con los requisitos'
  },
  {
    question: '¿Cuál es la principal ventaja de usar un lenguaje de alto nivel frente a uno de bajo nivel?',
    options: [
      'Mejor rendimiento sin compilación',
      'Mayor control sobre el hardware',
      'Menor seguridad',
      'Mayor legibilidad y facilidad de mantenimiento'
    ],
    correctAnswer: 'Mayor legibilidad y facilidad de mantenimiento'
  },
  {
    question: '¿Cuál es la principal ventaja del modelo en cascada?',
    options: [
      'Requiere poco feedback del cliente',
      'Permite iterar sobre los entregables',
      'Flexibilidad para adaptarse a cambios',
      'Buena para proyectos con requisitos bien definidos desde el inicio'
    ],
    correctAnswer: 'Buena para proyectos con requisitos bien definidos desde el inicio'
  },
  {
    question: '¿Cuál es una desventaja clave de usar un lenguaje de alto nivel frente a uno de bajo nivel?',
    options: [
      'Menor control sobre el hardware',
      'Facilidad de escritura y mantenimiento del código',
      'Más consumo de recursos',
      'Mejor compresión de los datos'
    ],
    correctAnswer: 'Menor control sobre el hardware'
  },
  {
    question: '¿En qué fase del ciclo de vida del software se implementa el diseño del sistema mediante código?',
    options: [
      'Análisis de Requisitos',
      'Mantenimiento',
      'Implementación',
      'Pruebas'
    ],
    correctAnswer: 'Implementación'
  },
  {
    question: '¿En qué fase del ciclo de vida del software se realizan ajustes a los requisitos, arquitectura y diseño?',
    options: [
      'Pruebas',
      'Análisis',
      'Implementación',
      'Mantenimiento'
    ],
    correctAnswer: 'Mantenimiento'
  },
  {
    question: '¿En qué tipo de proyectos es más adecuado el modelo iterativo?',
    options: [
      'Proyectos con alta regulación o certificación',
      'Proyectos con un diseño final predefinido',
      'Proyectos con requisitos cambiantes y evolutivos',
      'Proyectos con requisitos estables'
    ],
    correctAnswer: 'Proyectos con requisitos cambiantes y evolutivos'
  },
  {
    question: '¿Por qué es importante documentar el software?',
    options: [
      'Garantiza la seguridad del código',
      'Facilita el mantenimiento y la colaboración',
      'Acelera el desarrollo de software',
      'Ninguna de las anteriores'
    ],
    correctAnswer: 'Facilita el mantenimiento y la colaboración'
  },
  {
    question: '¿Por qué las máquinas virtuales son útiles en entornos de desarrollo?',
    options: [
      'No requieren pruebas',
      'No consumen memoria',
      'Facilitan la replicación de entornos para distintos proyectos',
      'El software se ejecuta más rápido'
    ],
    correctAnswer: 'Facilitan la replicación de entornos para distintos proyectos'
  },
  {
    question: '¿Por qué se recomienda dividir las responsabilidades de una clase en componentes más pequeños?',
    options: [
      'Automatiza todo el proceso de pruebas',
      'Reduce la cantidad de casos necesarios en pruebas',
      'Evita escribir comentarios detallados',
      'Facilita la reutilización del código'
    ],
    correctAnswer: 'Facilita la reutilización del código'
  },
  {
    question: '¿Qué característica define el modelo ágil?',
    options: [
      'Enfoque en documentación exhaustiva',
      'Requisitos fijos desde el inicio',
      'Fases secuenciales y bien definidas',
      'Equipos multifuncionales y trabajo colaborativo'
    ],
    correctAnswer: 'Equipos multifuncionales y trabajo colaborativo'
  },
  {
    question: '¿Qué caracteriza a la metodología ágil Scrum respecto a la priorización de requisitos?',
    options: [
      'El equipo de desarrollo define las prioridades',
      'Es responsabilidad del Scrum Master',
      'No existe backlog en Scrum',
      'Es responsabilidad del Product Owner'
    ],
    correctAnswer: 'Es responsabilidad del Product Owner'
  },
  {
    question: '¿Qué caracteriza a una prueba funcional o de caja negra?',
    options: [
      'Se enfoca en la estructura interna del sistema',
      'Analiza el rendimiento del sistema',
      'Se prueba el sistema sin conocer su estructura interna',
      'Depende de los valores esperados de las variables'
    ],
    correctAnswer: 'Se prueba el sistema sin conocer su estructura interna'
  },
  {
    question: '¿Qué comando de Git permite subir los cambios locales al repositorio remoto?',
    options: [
      'git export',
      'git deploy',
      'git upload',
      'git push'
    ],
    correctAnswer: 'git push'
  },
  {
    question: '¿Qué comando en Git Bash verifica si la conexión SSH con GitHub es correcta?',
    options: [
      'ssh git@github.com',
      'git test ssh',
      'ssh -T git@github.com',
      'git --check ssh'
    ],
    correctAnswer: 'ssh -T git@github.com'
  },
  {
    question: '¿Qué comando en Git permite configurar el nombre de usuario global?',
    options: [
      'git config user.name',
      'git name set',
      'git init user.name',
      'git config --global user.name'
    ],
    correctAnswer: 'git config --global user.name'
  },
  {
    question: '¿Cuál es el comando correcto para configurar el correo electrónico global en Git?',
    options: [
      'git mail config --global',
      'git config user.email "correo@example.com"',
      'git config --global user.email "correo@example.com"',
      'git config user.name'
    ],
    correctAnswer: 'git config --global user.email "correo@example.com"'
  },
  {
    question: '¿Qué desventaja presenta el modelo en cascada en proyectos con requisitos cambiantes?',
    options: [
      'No requiere documentación',
      'Tiene poca capacidad de adaptación',
      'No necesita pruebas',
      'Es demasiado flexible'
    ],
    correctAnswer: 'Tiene poca capacidad de adaptación'
  },
  {
    question: '¿Qué diferencia a la agregación de la composición?',
    options: [
      'En la composición, la vida del contenido depende del contenedor',
      'En la agregación no hay relación de pertenencia',
      'En la composición los objetos existen de forma independiente',
      'No existe diferencia real'
    ],
    correctAnswer: 'En la composición, la vida del contenido depende del contenedor'
  },
  {
    question: '¿Qué documento se elabora durante el análisis de requisitos?',
    options: [
      'Manual de usuario',
      'Plan de pruebas',
      'Especificación funcional',
      'Informe de validación'
    ],
    correctAnswer: 'Especificación funcional'
  },
  {
    question: '¿Qué elemento garantiza la trazabilidad entre requisitos y casos de prueba?',
    options: [
      'El entorno de desarrollo',
      'El cronograma de entregas',
      'El backlog',
      'La documentación estructurada del proyecto'
    ],
    correctAnswer: 'La documentación estructurada del proyecto'
  },
  {
    question: '¿Qué fase del ciclo de vida del software está encargada de poner el sistema en producción?',
    options: [
      'Mantenimiento',
      'Pruebas',
      'Implementación',
      'Diseño'
    ],
    correctAnswer: 'Implementación'
  },
  {
    question: '¿Qué fase del ciclo de vida del software se encarga de identificar y documentar los requisitos?',
    options: [
      'Implementación',
      'Diseño',
      'Análisis de requisitos',
      'Análisis'
    ],
    correctAnswer: 'Análisis'
  },
  {
    question: '¿Qué fase del ciclo de vida del software se enfoca en asegurar que las funcionalidades clave del sistema funcionen correctamente?',
    options: [
      'Diseño',
      'Mantenimiento',
      'Implementación',
      'Pruebas funcionales'
    ],
    correctAnswer: 'Pruebas funcionales'
  },
  {
    question: '¿Qué función tiene el hipervisor en un entorno de virtualización?',
    options: [
      'Gestionar el diseño del sistema',
      'Compilar el kernel',
      'Traducir código de alto nivel',
      'Administrar y aislar máquinas virtuales sobre el hardware físico'
    ],
    correctAnswer: 'Administrar y aislar máquinas virtuales sobre el hardware físico'
  },
  {
    question: '¿Qué herramienta gráfica permite trabajar con ramas y commits en Git sin usar terminal?',
    options: [
      'GitHub CLI',
      'Git Manual',
      'Git Script',
      'Git GUI'
    ],
    correctAnswer: 'Git GUI'
  },
  {
    question: '¿Qué IDE es más utilizado para desarrollar aplicaciones empresariales en Java?',
    options: [
      'Eclipse',
      'PyCharm',
      'Visual Studio',
      'Android Studio'
    ],
    correctAnswer: 'Eclipse'
  },
  {
    question: '¿Qué indica la presencia de muchos condicionales y bucles anidados en un método?',
    options: [
      'Bajo acoplamiento',
      'Complejidad ciclomática elevada',
      'Alta cohesión',
      'Modularidad'
    ],
    correctAnswer: 'Complejidad ciclomática elevada'
  },
  {
    question: '¿Qué permite determinar la complejidad ciclomática de una función?',
    options: [
      'El número de variables locales',
      'El número de comentarios por línea',
      'El número de clases',
      'La cantidad de decisiones y bifurcaciones que contiene el flujo del código'
    ],
    correctAnswer: 'La cantidad de decisiones y bifurcaciones que contiene el flujo del código'
  },
  {
    question: "¿Qué problema representa la 'Intimidad inapropiada' en el código?",
    options: [
      'Uso incorrecto de bucles',
      'Exceso de clases abstractas',
      'Un método accede demasiado a datos de otra clase',
      'Uso excesivo de variables globales'
    ],
    correctAnswer: 'Un método accede demasiado a datos de otra clase'
  },
  {
    question: '¿Qué representa una entrada fuera del rango permitido en una clase de equivalencia?',
    options: [
      'Un dato opcional',
      'Una entrada crítica',
      'Un valor duplicado',
      'Una partición inválida'
    ],
    correctAnswer: 'Una partición inválida'
  },
  {
    question: '¿Qué técnica permite agrupar entradas de prueba válidas en subconjuntos que representen clases?',
    options: [
      'Clases de equivalencia',
      'Técnicas de refactorización',
      'Pruebas unitarias',
      'Análisis de regresión'
    ],
    correctAnswer: 'Clases de equivalencia'
  },
  {
    question: "¿Qué técnica permite detectar automáticamente 'malos olores' en el código?",
    options: [
      'Compilar frecuentemente',
      'Uso de herramientas de análisis estático',
      'Pruebas funcionales',
      'Documentación extensa'
    ],
    correctAnswer: 'Uso de herramientas de análisis estático'
  },
  {
    question: '¿Qué técnica se usa para agrupar entradas de prueba válidas en clases representativas?',
    options: [
      'Pruebas unitarias',
      'Clases de equivalencia',
      'Análisis de regresión',
      'Refactorización de código'
    ],
    correctAnswer: 'Clases de equivalencia'
  },
  {
    question: '¿Qué tipo de máquina virtual ejecuta un sistema operativo completo de manera aislada?',
    options: [
      'Microkernel',
      'Máquina virtual de hardware',
      'Máquina virtual de proceso',
      'Contenedor'
    ],
    correctAnswer: 'Máquina virtual de hardware'
  },
  {
    question: '¿Qué tipo de relación indica que una clase utiliza temporalmente otra sin poseerla en UML?',
    options: [
      'Agregación',
      'Dependencia',
      'Asociación',
      'Composición'
    ],
    correctAnswer: 'Dependencia'
  },
  {
    question: 'En el ciclo de vida del software, ¿qué fase se encarga de realizar pruebas para asegurar que los módulos interactúan correctamente?',
    options: [
      'Diseño',
      'Implementación',
      'Análisis',
      'Pruebas de integración'
    ],
    correctAnswer: 'Pruebas de integración'
  }
  
  
  

];
