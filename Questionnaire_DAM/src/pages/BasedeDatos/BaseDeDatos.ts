import { Question } from '../InterfaceQuestion';

export const questionsBaseDeDatos: Question[] = [
  {
    question: '¿Qué es una base de datos?',
    options: [
      'Un conjunto de programas informáticos para gestionar datos',
      'Una colección de imágenes y videos',
      'Un sistema de almacenamiento de archivos de texto',
      'Una agrupación de datos relevantes para una entidad determinada'
    ],
    correctAnswer: 'Una agrupación de datos relevantes para una entidad determinada'
  },
  {
    question: '¿Qué es una tabla en una base de datos relacional?',
    options: [
      'Una colección de archivos',
      'Una estructura que almacena datos en filas y columnas',
      'Un gráfico que representa datos',
      'Un tipo de base de datos'
    ],
    correctAnswer: 'Una estructura que almacena datos en filas y columnas'
  },
  {
    question: '¿Qué es una clave primaria en una tabla?',
    options: [
      'Un campo que puede tener valores duplicados',
      'Un campo que identifica de manera única cada registro',
      'Un campo que almacena datos numéricos',
      'Un campo que se utiliza para ordenar los registros'
    ],
    correctAnswer: 'Un campo que identifica de manera única cada registro'
  },
  {
    question: '¿Qué es una clave foránea en una base de datos relacional?',
    options: [
      'Un campo que almacena datos de tipo texto',
      'Un campo que se utiliza para cifrar datos',
      'Un campo que establece una relación con la clave primaria de otra tabla',
      'Un campo que contiene la fecha de creación del registro'
    ],
    correctAnswer: 'Un campo que establece una relación con la clave primaria de otra tabla'
  },
  {
    question: '¿Qué es la integridad referencial en una base de datos?',
    options: [
      'La capacidad de una base de datos para referenciar datos externos',
      'La propiedad que garantiza que las relaciones entre tablas sean válidas',
      'La habilidad de una base de datos para realizar copias de seguridad',
      'La característica que permite la replicación de datos'
    ],
    correctAnswer: 'La propiedad que garantiza que las relaciones entre tablas sean válidas'
  },
  {
    question: '¿Qué es la normalización en bases de datos?',
    options: [
      'El proceso de eliminar datos redundantes y mejorar la integridad de los datos',
      'La técnica para aumentar la velocidad de las consultas',
      'El método para crear copias de seguridad de la base de datos',
      'La estrategia para diseñar interfaces de usuario'
    ],
    correctAnswer: 'El proceso de eliminar datos redundantes y mejorar la integridad de los datos'
  },
  {
    question: '¿Qué es una consulta SQL?',
    options: [
      'Una instrucción para modificar el diseño de la base de datos',
      'Una solicitud para recuperar o manipular datos en una base de datos',
      'Un programa que gestiona conexiones a la base de datos',
      'Un archivo que contiene datos en formato XML'
    ],
    correctAnswer: 'Una solicitud para recuperar o manipular datos en una base de datos'
  },
  {
    question: '¿Qué comando SQL se utiliza para obtener datos de una tabla?',
    options: [
      'GET',
      'FETCH',
      'SELECT',
      'RETRIEVE'
    ],
    correctAnswer: 'SELECT'
  },
  {
    question: '¿Qué es un índice en una base de datos?',
    options: [
      'Una lista de todos los usuarios de la base de datos',
      'Una estructura que mejora la velocidad de las operaciones de consulta',
      'Un tipo de clave primaria',
      'Un registro de cambios realizados en la base de datos'
    ],
    correctAnswer: 'Una estructura que mejora la velocidad de las operaciones de consulta'
  },
  {
    question: '¿Qué es un SGBD (Sistema de Gestión de Bases de Datos)?',
    options: [
      'Un software que permite crear, administrar y manipular bases de datos',
      'Un lenguaje de programación para bases de datos',
      'Un protocolo de comunicación entre servidores',
      'Un tipo de archivo que almacena datos'
    ],
    correctAnswer: 'Un software que permite crear, administrar y manipular bases de datos'
  }
  ,
  {
    question: '¿Qué es un campo en una base de datos?',
    options: [
      'Una fila completa de datos',
      'Una columna que representa un atributo de los datos',
      'Un conjunto de tablas relacionadas',
      'Una base de datos completa'
    ],
    correctAnswer: 'Una columna que representa un atributo de los datos'
  },
  {
    question: '¿Qué es un registro en una base de datos?',
    options: [
      'Una columna que representa un atributo de los datos',
      'Una fila que contiene todos los datos de una entidad',
      'Un conjunto de bases de datos',
      'Un índice de búsqueda'
    ],
    correctAnswer: 'Una fila que contiene todos los datos de una entidad'
  },
  {
    question: '¿Qué tipo de lenguaje es SQL?',
    options: [
      'Lenguaje de programación orientado a objetos',
      'Lenguaje de marcado',
      'Lenguaje de consulta estructurado',
      'Lenguaje de scripting'
    ],
    correctAnswer: 'Lenguaje de consulta estructurado'
  },
  {
    question: '¿Cuál es la función del comando SQL \'INSERT\'?',
    options: [
      'Eliminar registros de una tabla',
      'Actualizar registros existentes',
      'Agregar nuevos registros a una tabla',
      'Crear una nueva tabla'
    ],
    correctAnswer: 'Agregar nuevos registros a una tabla'
  },
  {
    question: '¿Qué significa la sigla \'DBMS\'?',
    options: [
      'Database Management System',
      'Data Backup Management Software',
      'Digital Base Mapping System',
      'Data Binary Management Structure'
    ],
    correctAnswer: 'Database Management System'
  },
  {
    question: '¿Cuál es la función principal de una clave primaria?',
    options: [
      'Permitir valores nulos en una columna',
      'Establecer relaciones entre tablas',
      'Identificar de manera única cada registro en una tabla',
      'Ordenar los registros de una tabla'
    ],
    correctAnswer: 'Identificar de manera única cada registro en una tabla'
  },
  {
    question: '¿Qué comando SQL se utiliza para eliminar una tabla?',
    options: [
      'REMOVE TABLE',
      'DELETE TABLE',
      'DROP TABLE',
      'ERASE TABLE'
    ],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: '¿Qué es una vista en una base de datos?',
    options: [
      'Una tabla física que almacena datos',
      'Una representación virtual de una consulta',
      'Un índice de búsqueda',
      'Un tipo de clave foránea'
    ],
    correctAnswer: 'Una representación virtual de una consulta'
  },
  {
    question: '¿Qué es una transacción en una base de datos?',
    options: [
      'Una operación que se ejecuta automáticamente al iniciar la base de datos',
      'Una secuencia de operaciones que se ejecutan como una unidad lógica de trabajo',
      'Un proceso de respaldo de datos',
      'Una consulta que se ejecuta periódicamente'
    ],
    correctAnswer: 'Una secuencia de operaciones que se ejecutan como una unidad lógica de trabajo'
  },
  {
    question: '¿Qué es una vista en una base de datos?',
    options: [
      'Una tabla física que almacena datos permanentemente',
      'Una representación virtual de una consulta almacenada',
      'Una copia de seguridad de una tabla',
      'Un índice que mejora el rendimiento de las consultas'
    ],
    correctAnswer: 'Una representación virtual de una consulta almacenada'
  },
  {
    question: '¿Qué es un procedimiento almacenado?',
    options: [
      'Un archivo externo que contiene código SQL',
      'Una función que se ejecuta automáticamente al iniciar la base de datos',
      'Un conjunto de instrucciones SQL que se almacenan y se pueden ejecutar como una unidad',
      'Una herramienta para diseñar bases de datos gráficamente'
    ],
    correctAnswer: 'Un conjunto de instrucciones SQL que se almacenan y se pueden ejecutar como una unidad'
  },
  {
    question: '¿Qué es un trigger (disparador) en una base de datos?',
    options: [
      'Una herramienta para programar tareas en el sistema operativo',
      'Una consulta que se ejecuta manualmente por el usuario',
      'Un procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en la base de datos',
      'Un tipo de índice especial'
    ],
    correctAnswer: 'Un procedimiento que se ejecuta automáticamente en respuesta a ciertos eventos en la base de datos'
  },
  {
    question: '¿Qué es una función agregada en SQL?',
    options: [
      'Una función que permite agregar nuevas filas a una tabla',
      'Una función que realiza cálculos sobre un conjunto de valores y devuelve un solo valor',
      'Una función que concatena cadenas de texto',
      'Una función que convierte datos numéricos en texto'
    ],
    correctAnswer: 'Una función que realiza cálculos sobre un conjunto de valores y devuelve un solo valor'
  },
  {
    question: '¿Cuál es el propósito de la cláusula GROUP BY en SQL?',
    options: [
      'Ordenar los resultados de una consulta',
      'Filtrar los resultados de una consulta',
      'Agrupar filas que tienen los mismos valores en columnas especificadas',
      'Eliminar filas duplicadas de los resultados'
    ],
    correctAnswer: 'Agrupar filas que tienen los mismos valores en columnas especificadas'
  },
  {
    question: '¿Qué es una subconsulta en SQL?',
    options: [
      'Una consulta que se ejecuta en segundo plano',
      'Una consulta que se almacena en una vista',
      'Una consulta anidada dentro de otra consulta',
      'Una consulta que se ejecuta automáticamente al iniciar la base de datos'
    ],
    correctAnswer: 'Una consulta anidada dentro de otra consulta'
  },
  {
    question: '¿Qué comando SQL se utiliza para eliminar una tabla existente?',
    options: [
      'DELETE TABLE',
      'REMOVE TABLE',
      'DROP TABLE',
      'ERASE TABLE'
    ],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: '¿Qué es una clave candidata en una base de datos?',
    options: [
      'Una clave que se utiliza para cifrar los datos',
      'Una clave que puede ser utilizada como clave primaria',
      'Una clave que se genera automáticamente',
      'Una clave que se utiliza para ordenar los registros'
    ],
    correctAnswer: 'Una clave que puede ser utilizada como clave primaria'
  },
  {
    question: '¿Qué es la normalización en bases de datos?',
    options: [
      'El proceso de eliminar datos redundantes y mejorar la integridad de los datos',
      'La técnica para aumentar la velocidad de las consultas',
      'El método para crear copias de seguridad de la base de datos',
      'La estrategia para diseñar interfaces de usuario'
    ],
    correctAnswer: 'El proceso de eliminar datos redundantes y mejorar la integridad de los datos'
  }
  ,
  {
    question: '¿Qué instrucción SQL crea una tabla llamada \'Empleado\'?',
    options: [
      'NEW TABLE Empleado (id INT, nombre VARCHAR(100));',
      'ADD TABLE Empleado (id INT, nombre VARCHAR(100));',
      'ALTER TABLE Empleado ADD COLUMN (id INT, nombre VARCHAR(100));',
      'CREATE TABLE Empleado (id INT, nombre VARCHAR(100));'
    ],
    correctAnswer: 'CREATE TABLE Empleado (id INT, nombre VARCHAR(100));'
  },
  {
    question: '¿Cuál es la manera correcta de añadir una columna a una tabla existente usando SQL?',
    options: [
      'ALTER TABLE Empleado ADD COLUMN edad INT;',
      'ADD COLUMN edad INT IN Empleado;',
      'CREATE TABLE Empleado ADD edad INT;',
      'UPDATE TABLE Empleado ADD edad INT;'
    ],
    correctAnswer: 'ALTER TABLE Empleado ADD COLUMN edad INT;'
  },
  {
    question: '¿Qué cláusula indica que una columna no puede tener valores repetidos?',
    options: [
      'PRIMARY KEY',
      'UNIQUE',
      'CHECK',
      'DEFAULT'
    ],
    correctAnswer: 'UNIQUE'
  },
  {
    question: '¿Cuál opción permite establecer automáticamente valores numéricos incrementales en una columna?',
    options: [
      'AUTONUMBER',
      'AUTOINCREMENTAL',
      'AUTO_NUM',
      'AUTO_INCREMENT'
    ],
    correctAnswer: 'AUTO_INCREMENT'
  },
  {
    question: '¿Cómo definirías una columna con valores por defecto usando SQL?',
    options: [
      'Telefono VARCHAR(15) AUTO \'Desconocido\'',
      'Telefono VARCHAR(15) DEFAULT \'Desconocido\'',
      'Telefono VARCHAR(15) VALUE \'Desconocido\'',
      'Telefono VARCHAR(15) SET \'Desconocido\''
    ],
    correctAnswer: 'Telefono VARCHAR(15) DEFAULT \'Desconocido\''
  },
  {
    question: '¿Qué instrucción SQL eliminaría la columna \'Telefono\' de la tabla \'Empleado\'?',
    options: [
      'ALTER TABLE Empleado REMOVE Telefono;',
      'ALTER TABLE Empleado DROP COLUMN Telefono;',
      'ALTER TABLE Empleado DELETE COLUMN Telefono;',
      'DROP COLUMN Telefono FROM Empleado;'
    ],
    correctAnswer: 'ALTER TABLE Empleado DROP COLUMN Telefono;'
  },
  {
    question: '¿Qué restricción asegura que una columna nunca contenga valores nulos?',
    options: [
      'UNIQUE',
      'NOT NULL',
      'DEFAULT',
      'CHECK'
    ],
    correctAnswer: 'NOT NULL'
  },
  {
    question: '¿Cuál de estas instrucciones crea correctamente una clave primaria compuesta en SQL?',
    options: [
      'PRIMARY KEY(id_empleado, id_proyecto)',
      'PRIMARY(id_empleado, id_proyecto)',
      'SET PRIMARY KEY(id_empleado, id_proyecto)',
      'PRIMARY KEY COMPOSED(id_empleado, id_proyecto)'
    ],
    correctAnswer: 'PRIMARY KEY(id_empleado, id_proyecto)'
  },
  {
    question: '¿Qué sentencia SQL modificaría el tipo de dato de la columna \'salario\' a DECIMAL(12,2)?',
    options: [
      'ALTER TABLE empleados UPDATE salario DECIMAL(12,2);',
      'CHANGE COLUMN salario DECIMAL(12,2);',
      'ALTER salario COLUMN DECIMAL(12,2);',
      'ALTER TABLE empleados MODIFY COLUMN salario DECIMAL(12,2);'
    ],
    correctAnswer: 'ALTER TABLE empleados MODIFY COLUMN salario DECIMAL(12,2);'
  },
  {
    question: '¿Cuál de las siguientes instrucciones SQL añade una restricción UNIQUE sobre la columna \'Email\'?',
    options: [
      'ALTER TABLE empleados ADD CONSTRAINT UNIQUE (Email);',
      'ALTER empleados TABLE UNIQUE Email;',
      'SET UNIQUE Email ON empleados;',
      'ALTER TABLE empleados ADD COLUMN UNIQUE Email;'
    ],
    correctAnswer: 'ALTER TABLE empleados ADD CONSTRAINT UNIQUE (Email);'
  },
  {
    question: '¿Cuál consulta devuelve todos los empleados ordenados por salario descendente?',
    options: [
      'SELECT * FROM empleados SORT salario DESC;',
      'SELECT salario DESC FROM empleados;',
      'SELECT * FROM empleados ORDER BY salario DESC;',
      'SELECT * FROM empleados ORDER salario DESC;'
    ],
    correctAnswer: 'SELECT * FROM empleados ORDER BY salario DESC;'
  },
  {
    question: '¿Qué función SQL usarías para contar el número total de empleados en una tabla?',
    options: [
      'TOTAL()',
      'SUM()',
      'AVG()',
      'COUNT()'
    ],
    correctAnswer: 'COUNT()'
  },
  {
    question: '¿Cuál consulta calcula el salario promedio de todos los empleados?',
    options: [
      'SELECT COUNT(salario) FROM empleados;',
      'SELECT AVG(salario) FROM empleados;',
      'SELECT TOTAL(salario) FROM empleados;',
      'SELECT SUM(salario) FROM empleados;'
    ],
    correctAnswer: 'SELECT AVG(salario) FROM empleados;'
  },
  {
    question: '¿Qué sentencia SQL devuelve cuántos empleados hay por cada departamento?',
    options: [
      'SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento;',
      'SELECT departamento, SUM(*) FROM empleados;',
      'SELECT departamento, COUNT(*) FROM empleados ORDER BY departamento;',
      'SELECT departamento, COUNT(*) FROM empleados GROUP BY salario;'
    ],
    correctAnswer: 'SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento;'
  },
  {
    question: '¿Qué instrucción SQL devuelve todos los empleados cuyo salario es superior a 3000?',
    options: [
      'SELECT nombre FROM empleados WHERE salario > 3000;',
      'SELECT nombre FROM empleados ORDER BY salario > 3000;',
      'SELECT nombre FROM empleados SALARIO > 3000;',
      'SELECT nombre FROM empleados HAVING salario > 3000;'
    ],
    correctAnswer: 'SELECT nombre FROM empleados WHERE salario > 3000;'
  },
  {
    question: '¿Qué consulta devuelve los empleados que tienen un salario superior al salario promedio general de la empresa?',
    options: [
      'SELECT nombre FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados);',
      'SELECT nombre FROM empleados HAVING salario > AVG(salario);',
      'SELECT nombre FROM empleados WHERE salario > AVG(salario);',
      'SELECT AVG(salario) FROM empleados WHERE salario > promedio;'
    ],
    correctAnswer: 'SELECT nombre FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados);'
  },
  {
    question: '¿Qué cláusula se utiliza para filtrar resultados agrupados por condiciones específicas?',
    options: [
      'ORDER BY',
      'WHERE',
      'GROUP BY',
      'HAVING'
    ],
    correctAnswer: 'HAVING'
  },
  {
    question: '¿Qué consulta obtiene los departamentos cuyo salario promedio supera los 4000 euros?',
    options: [
      'SELECT departamento FROM empleados WHERE AVG(salario) > 4000;',
      'SELECT departamento FROM empleados GROUP BY departamento HAVING AVG(salario) > 4000;',
      'SELECT departamento FROM empleados GROUP BY departamento WHERE AVG(salario) > 4000;',
      'SELECT departamento, AVG(salario) FROM empleados;'
    ],
    correctAnswer: 'SELECT departamento FROM empleados GROUP BY departamento HAVING AVG(salario) > 4000;'
  },
  {
    question: '¿Cuál consulta obtiene los empleados junto con sus departamentos (considerando que todos tienen departamento asignado)?',
    options: [
      'SELECT empleados.nombre, departamentos.nombre FROM empleados OUTER JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;',
      'SELECT empleados.nombre, departamentos.nombre FROM empleados JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;',
      'SELECT empleados.nombre, departamentos.nombre FROM empleados LEFT JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;',
      'SELECT empleados.nombre, departamentos.nombre FROM empleados RIGHT JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;'
    ],
    correctAnswer: 'SELECT empleados.nombre, departamentos.nombre FROM empleados JOIN departamentos ON empleados.id_departamento = departamentos.id_departamento;'
  },
  {
    question: '¿Cuál consulta obtiene los empleados que NO están asignados a ningún proyecto (empleados sin asignación)?',
    options: [
      'SELECT empleados.nombre FROM empleados JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado;',
      'SELECT empleados.nombre FROM empleados LEFT JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado WHERE asignaciones.id_empleado IS NULL;',
      'SELECT empleados.nombre FROM empleados JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado WHERE asignaciones.id_empleado IS NULL;',
      'SELECT empleados.nombre FROM empleados RIGHT JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado;'
    ],
    correctAnswer: 'SELECT empleados.nombre FROM empleados LEFT JOIN asignaciones ON empleados.id_empleado = asignaciones.id_empleado WHERE asignaciones.id_empleado IS NULL;'
  },
  {
    question: '¿Qué es una consulta de selección en SQL?',
    options: [
      'Una instrucción que elimina datos de una tabla',
      'Una instrucción que extrae datos de una o más tablas y los presenta en forma de resultados tabulares',
      'Un comando para crear nuevas tablas en la base de datos',
      'Una operación para modificar la estructura de una tabla'
    ],
    correctAnswer: 'Una instrucción que extrae datos de una o más tablas y los presenta en forma de resultados tabulares'
  },
  {
    question: '¿Cuál es la función principal de la cláusula WHERE en SQL?',
    options: [
      'Ordenar los resultados alfabéticamente',
      'Filtrar filas según condiciones específicas antes de recuperar los datos',
      'Agrupar datos para cálculos agregados',
      'Limitar el número de filas devueltas'
    ],
    correctAnswer: 'Filtrar filas según condiciones específicas antes de recuperar los datos'
  },
  {
    question: '¿Qué operador se utiliza en SQL para agrupar registros?',
    options: [
      'ORDER BY',
      'GROUP BY',
      'HAVING',
      'LIMIT'
    ],
    correctAnswer: 'GROUP BY'
  },
  {
    question: '¿Cuál es la diferencia entre INNER JOIN y LEFT JOIN?',
    options: [
      'INNER JOIN devuelve solo filas coincidentes, mientras que LEFT JOIN incluye todas las filas de la tabla izquierda aunque no tengan coincidencias',
      'LEFT JOIN solo devuelve filas coincidentes, mientras que INNER JOIN incluye filas sin coincidencias',
      'Ambos son iguales pero con sintaxis diferente',
      'LEFT JOIN ordena los resultados, INNER JOIN no'
    ],
    correctAnswer: 'INNER JOIN devuelve solo filas coincidentes, mientras que LEFT JOIN incluye todas las filas de la tabla izquierda aunque no tengan coincidencias'
  },
  {
    question: '¿Para qué se usa la cláusula HAVING en SQL?',
    options: [
      'Para filtrar filas antes de agruparlas',
      'Para filtrar resultados después de aplicar funciones de agregación con GROUP BY',
      'Para ordenar los resultados de manera descendente',
      'Para unir múltiples tablas'
    ],
    correctAnswer: 'Para filtrar resultados después de aplicar funciones de agregación con GROUP BY'
  },
  {
    question: '¿Qué hace el comando DISTINCT en una consulta SQL?',
    options: [
      'Elimina duplicados y devuelve solo valores únicos en los resultados',
      'Ordena los resultados alfabéticamente',
      'Filtra registros nulos',
      'Agrupa automáticamente los datos'
    ],
    correctAnswer: 'Elimina duplicados y devuelve solo valores únicos en los resultados'
  },
  {
    question: '¿Cuál es la sintaxis correcta para ordenar resultados de forma descendente?',
    options: [
      'ORDER BY columna ASC',
      'ORDER BY columna UP',
      'ORDER BY columna DESC',
      'ORDER BY columna DOWN'
    ],
    correctAnswer: 'ORDER BY columna DESC'
  },
  {
    question: '¿Qué función de agregación cuenta el número de filas en SQL?',
    options: [
      'SUM()',
      'AVG()',
      'COUNT()',
      'MAX()'
    ],
    correctAnswer: 'COUNT()'
  },
  {
    question: '¿Qué tipo de JOIN devuelve todas las filas de ambas tablas, con NULL donde no hay coincidencias?',
    options: [
      'INNER JOIN',
      'LEFT JOIN',
      'RIGHT JOIN',
      'FULL JOIN'
    ],
    correctAnswer: 'FULL JOIN'
  },
  {
    question: '¿Qué operador se usa para buscar patrones en cadenas de texto?',
    options: [
      'BETWEEN',
      'LIKE',
      'IN',
      '='
    ],
    correctAnswer: 'LIKE'
  },
  {
    question: '¿Qué es la normalización en bases de datos?',
    options: [
      'Un proceso para eliminar redundancias y mejorar la integridad de los datos mediante reglas basadas en claves primarias y dependencias funcionales',
      'Una técnica para aumentar la velocidad de las consultas SQL',
      'Un método para crear copias de seguridad de la base de datos',
      'Una estrategia para diseñar interfaces de usuario'
    ],
    correctAnswer: 'Un proceso para eliminar redundancias y mejorar la integridad de los datos mediante reglas basadas en claves primarias y dependencias funcionales'
  },
  {
    question: '¿Cuál es el objetivo principal de la Primera Forma Normal (1FN)?',
    options: [
      'Garantizar que los atributos contengan valores atómicos y no grupos repetitivos',
      'Eliminar dependencias transitivas entre atributos no primos',
      'Asegurar que todos los atributos no primos dependan totalmente de la clave primaria',
      'Dividir una tabla en múltiples tablas relacionadas'
    ],
    correctAnswer: 'Garantizar que los atributos contengan valores atómicos y no grupos repetitivos'
  },
  {
    question: '¿Qué problema resuelve la Segunda Forma Normal (2FN)?',
    options: [
      'Eliminar redundancias causadas por dependencias funcionales parciales de atributos no primos respecto a la clave primaria',
      'Evitar anomalías de inserción, borrado y modificación',
      'Garantizar que no existan dependencias transitivas entre atributos no primos',
      'Dividir tablas con atributos multivaluados'
    ],
    correctAnswer: 'Eliminar redundancias causadas por dependencias funcionales parciales de atributos no primos respecto a la clave primaria'
  },
  {
    question: '¿Cuál es una característica de la Tercera Forma Normal (3FN)?',
    options: [
      'Los atributos no primos no deben tener dependencias transitivas con la clave primaria',
      'Los atributos deben ser atómicos y no repetitivos',
      'La clave primaria debe ser un único atributo',
      'Permite grupos repetidos si están normalizados'
    ],
    correctAnswer: 'Los atributos no primos no deben tener dependencias transitivas con la clave primaria'
  },
  {
    question: '¿Qué es una dependencia funcional en el contexto de la normalización?',
    options: [
      'Una restricción donde un conjunto de atributos X determina únicamente otro conjunto Y (X → Y)',
      'Una relación muchos-a-muchos entre dos tablas',
      'Un atributo que puede tomar múltiples valores en una tupla',
      'Una clave foránea que referencia a una clave primaria'
    ],
    correctAnswer: 'Una restricción donde un conjunto de atributos X determina únicamente otro conjunto Y (X → Y)'
  },
  {
    question: '¿Qué anomalías evita la normalización?',
    options: [
      'Redundancia de datos, inconsistencias y pérdida de información',
      'Lentitud en las consultas complejas',
      'Falta de índices en las tablas',
      'Uso excesivo de memoria en el servidor'
    ],
    correctAnswer: 'Redundancia de datos, inconsistencias y pérdida de información'
  },
  {
    question: '¿Cuál es un ejemplo de violación de la 1FN?',
    options: [
      'Un atributo \'Teléfono\' que almacena múltiples números separados por comas',
      'Un atributo \'Edad\' que depende transitivamente de \'Fecha_Nacimiento\'',
      'Una clave primaria compuesta por dos atributos',
      'Un atributo \'Nombre\' que permite valores nulos'
    ],
    correctAnswer: 'Un atributo \'Teléfono\' que almacena múltiples números separados por comas'
  },
  {
    question: '¿Qué indica una dependencia transitiva?',
    options: [
      'Que un atributo no primo depende de otro atributo no primo, el cual a su vez depende de la clave primaria (A → B → C)',
      'Que un atributo depende parcialmente de una clave primaria compuesta',
      'Que un atributo es multivaluado',
      'Que una tabla no tiene clave primaria definida'
    ],
    correctAnswer: 'Que un atributo no primo depende de otro atributo no primo, el cual a su vez depende de la clave primaria (A → B → C)'
  },
  {
    question: '¿Por qué se recomienda llegar al menos a la 3FN?',
    options: [
      'Para evitar anomalías de actualización y garantizar que los datos dependan solo de la clave primaria',
      'Para permitir el uso de atributos multivaluados',
      'Para mejorar el rendimiento de las consultas JOIN',
      'Para eliminar todas las redundancias en la base de datos'
    ],
    correctAnswer: 'Para evitar anomalías de actualización y garantizar que los datos dependan solo de la clave primaria'
  },
  {
    question: '¿Qué es la desnormalización?',
    options: [
      'Reintroducir redundancias controladas para mejorar el rendimiento o facilitar consultas complejas',
      'Eliminar todas las formas normales para simplificar el esquema',
      'Convertir una base de datos relacional en NoSQL',
      'Ignorar las dependencias funcionales en el diseño'
    ],
    correctAnswer: 'Reintroducir redundancias controladas para mejorar el rendimiento o facilitar consultas complejas'
  },
  {
    question: '¿Qué representa una entidad débil en un modelo entidad-relación?',
    options: [
      'Una entidad que no tiene atributos propios',
      'Una entidad que depende de otra para su existencia',
      'Una entidad con muchos atributos',
      'Una entidad que no puede tener relaciones'
    ],
    correctAnswer: 'Una entidad que depende de otra para su existencia'
  },
  {
    question: '¿Qué se busca con la generalización en bases de datos?',
    options: [
      'Eliminar las claves primarias',
      'Separar entidades sin atributos comunes',
      'Unir entidades similares para formar una entidad más general',
      'Duplicar atributos para facilitar el modelado'
    ],
    correctAnswer: 'Unir entidades similares para formar una entidad más general'
  },
  {
    question: '¿Cuál es una característica de la especialización?',
    options: [
      'Se enfoca en unir entidades en una más general',
      'Todos los subtipos deben pertenecer al supertipo',
      'Permite dividir una entidad en subconjuntos más específicos',
      'Impide la herencia de atributos'
    ],
    correctAnswer: 'Permite dividir una entidad en subconjuntos más específicos'
  },
  {
    question: '¿Qué indica la cobertura total en una generalización?',
    options: [
      'Que un subtipo puede no pertenecer al supertipo',
      'Que una entidad debe pertenecer a al menos un subtipo',
      'Que los subtipos no pueden compartir atributos',
      'Que no se permite la herencia de atributos'
    ],
    correctAnswer: 'Que una entidad debe pertenecer a al menos un subtipo'
  },
  {
    question: '¿Qué diferencia existe entre generalización y especialización?',
    options: [
      'La generalización divide entidades y la especialización las une',
      'La especialización requiere herencia obligatoria',
      'La generalización une entidades similares y la especialización las divide en subgrupos',
      'Ambas se usan para eliminar relaciones'
    ],
    correctAnswer: 'La generalización une entidades similares y la especialización las divide en subgrupos'
  },
  {
    question: '¿Qué atributo es heredado en una generalización entre cliente y empleado?',
    options: [
      'Salario',
      'Dirección',
      'Ciudad',
      'Número de cuenta'
    ],
    correctAnswer: 'Ciudad'
  },
  {
    question: '¿Qué significa que la cobertura sea superpuesta en una generalización?',
    options: [
      'Que los subtipos no comparten elementos',
      'Que los elementos del supertipo solo pertenecen a un subtipo',
      'Que un elemento del supertipo puede pertenecer a varios subtipos',
      'Que los subtipos no heredan atributos'
    ],
    correctAnswer: 'Que un elemento del supertipo puede pertenecer a varios subtipos'
  },
  {
    question: '¿Cuál es el propósito de la herencia de atributos en una generalización?',
    options: [
      'Evitar la redundancia y repetir los atributos en cada subtipo',
      'Duplicar la información para mayor claridad',
      'Aumentar la complejidad del modelo',
      'Mejorar el rendimiento de las consultas'
    ],
    correctAnswer: 'Evitar la redundancia y repetir los atributos en cada subtipo'
  },
  {
    question: '¿Qué es una entidad en el modelo Entidad-Relación?',
    options: [
      'Una tabla dentro de una base de datos',
      'Un atributo clave que define relaciones',
      'Una persona, lugar, cosa o concepto de interés para la empresa',
      'Una ocurrencia única de una base de datos'
    ],
    correctAnswer: 'Una persona, lugar, cosa o concepto de interés para la empresa'
  },
  {
    question: '¿Cuál es la finalidad del modelo conceptual en bases de datos?',
    options: [
      'Definir estructuras físicas de almacenamiento',
      'Describir con exactitud cómo se almacenan los datos',
      'Representar entidades, relaciones y atributos de forma abstracta',
      'Codificar directamente en SQL'
    ],
    correctAnswer: 'Representar entidades, relaciones y atributos de forma abstracta'
  },
  {
    question: '¿Qué tipo de atributo puede dividirse en subpartes?',
    options: [
      'Atributo derivado',
      'Atributo compuesto',
      'Atributo clave',
      'Atributo monovalorado'
    ],
    correctAnswer: 'Atributo compuesto'
  },
  {
    question: '¿Qué representa gráficamente una relación en un diagrama E-R?',
    options: [
      'Un rectángulo',
      'Un círculo',
      'Un rombo',
      'Un triángulo'
    ],
    correctAnswer: 'Un rombo'
  },
  {
    question: '¿Cuál es una característica de una entidad débil?',
    options: [
      'Tiene clave primaria propia',
      'No depende de ninguna entidad',
      'Debe participar en una relación 1:N con una entidad fuerte',
      'Sus atributos identifican completamente a la entidad'
    ],
    correctAnswer: 'Debe participar en una relación 1:N con una entidad fuerte'
  },
  {
    question: '¿Qué indica la cardinalidad (1,N) en una relación?',
    options: [
      'Una ocurrencia se relaciona con exactamente una de otra',
      'Una ocurrencia se relaciona con ninguna de otra',
      'Una ocurrencia se relaciona con varias de otra',
      'Una ocurrencia se relaciona con todas las de otra entidad'
    ],
    correctAnswer: 'Una ocurrencia se relaciona con varias de otra'
  },
  {
    question: '¿Qué es un atributo derivado?',
    options: [
      'Un atributo obligatorio',
      'Un atributo que se calcula a partir de otros',
      'Un atributo multivalorado',
      'Un atributo compuesto'
    ],
    correctAnswer: 'Un atributo que se calcula a partir de otros'
  },
  {
    question: '¿Qué función cumple el identificador en una entidad?',
    options: [
      'Determina el tipo de relación',
      'Permite diferenciar gráficamente las entidades',
      'Determina de forma única cada instancia de la entidad',
      'Agrupa las entidades similares'
    ],
    correctAnswer: 'Determina de forma única cada instancia de la entidad'
  },
  {
    question: '¿Qué es una copia de seguridad en bases de datos?',
    options: [
      'Un tipo de base de datos distribuida',
      'Una réplica de datos almacenada en otro medio para su recuperación',
      'Un algoritmo de encriptación para bases de datos',
      'Un script para automatizar consultas SQL'
    ],
    correctAnswer: 'Una réplica de datos almacenada en otro medio para su recuperación'
  },
  {
    question: '¿Cuál de los siguientes no es un motivo por el que las copias de seguridad son importantes?',
    options: [
      'Protección ante fallos técnicos',
      'Prevención ante ciberataques',
      'Acelerar el acceso a los datos',
      'Recuperación ante errores humanos'
    ],
    correctAnswer: 'Acelerar el acceso a los datos'
  },
  {
    question: '¿Qué tipo de copia de seguridad guarda todos los datos seleccionados en el momento de realizarla?',
    options: [
      'Copia incremental',
      'Copia diferencial',
      'Copia completa',
      'Copia virtual'
    ],
    correctAnswer: 'Copia completa'
  },
  {
    question: '¿Cuál es una ventaja de la copia completa?',
    options: [
      'Es la más ligera',
      'Es la más rápida de realizar',
      'No necesita ninguna otra copia para restaurar',
      'Ocupa menos espacio'
    ],
    correctAnswer: 'No necesita ninguna otra copia para restaurar'
  },
  {
    question: '¿Qué tipo de copia guarda solo los datos modificados desde la última copia completa?',
    options: [
      'Copia incremental',
      'Copia paralela',
      'Copia de seguridad diferencial',
      'Copia total'
    ],
    correctAnswer: 'Copia de seguridad diferencial'
  },
  {
    question: '¿Cuál es una desventaja de la copia diferencial?',
    options: [
      'Es la más compleja de restaurar',
      'Ocupa mucho espacio desde el inicio',
      'Necesita todas las copias anteriores para restaurar',
      'Aumenta su tamaño cuanto más tiempo pasa desde la última completa'
    ],
    correctAnswer: 'Aumenta su tamaño cuanto más tiempo pasa desde la última completa'
  },
  {
    question: '¿Qué tipo de copia guarda solo los cambios desde la última copia, ya sea completa o incremental?',
    options: [
      'Copia de espejo',
      'Copia completa',
      'Copia incremental',
      'Copia diferencial'
    ],
    correctAnswer: 'Copia incremental'
  },
  {
    question: '¿Qué desventaja tiene la copia incremental?',
    options: [
      'Es más costosa que otras',
      'Requiere restaurar varias copias para recuperar los datos',
      'No permite copias frecuentes',
      'Ocupa más espacio que las demás'
    ],
    correctAnswer: 'Requiere restaurar varias copias para recuperar los datos'
  },
  {
    question: '¿Qué comando DDL se utiliza para crear una nueva tabla en SQL?',
    options: [
      'INSERT',
      'CREATE TABLE',
      'ALTER TABLE',
      'ADD TABLE'
    ],
    correctAnswer: 'CREATE TABLE'
  },
  {
    question: '¿Qué comando DDL se usa para eliminar una tabla existente?',
    options: [
      'DELETE TABLE',
      'DROP TABLE',
      'REMOVE TABLE',
      'TRUNCATE TABLE'
    ],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: '¿Cuál es la función del comando ALTER TABLE en SQL?',
    options: [
      'Insertar datos en una tabla',
      'Modificar la estructura de una tabla existente',
      'Eliminar una tabla',
      'Crear una nueva base de datos'
    ],
    correctAnswer: 'Modificar la estructura de una tabla existente'
  },
  {
    question: '¿Qué comando se utiliza para crear una nueva base de datos en SQL?',
    options: [
      'CREATE DATABASE',
      'NEW DATABASE',
      'MAKE DATABASE',
      'INIT DATABASE'
    ],
    correctAnswer: 'CREATE DATABASE'
  },
  {
    question: '¿Qué comando DDL se emplea para eliminar una base de datos?',
    options: [
      'DELETE DATABASE',
      'DROP DATABASE',
      'REMOVE DATABASE',
      'TRUNCATE DATABASE'
    ],
    correctAnswer: 'DROP DATABASE'
  },
  {
    question: '¿Cuál es la función del comando TRUNCATE TABLE en SQL?',
    options: [
      'Eliminar la tabla y su estructura',
      'Eliminar todos los registros de una tabla sin eliminar su estructura',
      'Eliminar una base de datos completa',
      'Modificar la estructura de una tabla'
    ],
    correctAnswer: 'Eliminar todos los registros de una tabla sin eliminar su estructura'
  },
  {
    question: '¿Qué comando DDL se utiliza para agregar una nueva columna a una tabla existente?',
    options: [
      'ADD COLUMN',
      'INSERT COLUMN',
      'ALTER TABLE ... ADD',
      'MODIFY TABLE'
    ],
    correctAnswer: 'ALTER TABLE ... ADD'
  },
  {
    question: '¿Qué comando DDL se usa para cambiar el nombre de una tabla?',
    options: [
      'RENAME TABLE',
      'ALTER TABLE ... RENAME TO',
      'MODIFY TABLE',
      'CHANGE TABLE NAME'
    ],
    correctAnswer: 'ALTER TABLE ... RENAME TO'
  },
  {
    question: '¿Qué comando DDL se emplea para definir una clave primaria en una tabla?',
    options: [
      'ADD PRIMARY KEY',
      'DEFINE PRIMARY',
      'ALTER TABLE ... ADD PRIMARY KEY',
      'SET PRIMARY KEY'
    ],
    correctAnswer: 'ALTER TABLE ... ADD PRIMARY KEY'
  },
  {
    question: '¿Qué comando DDL se utiliza para eliminar una columna de una tabla?',
    options: [
      'DELETE COLUMN',
      'DROP COLUMN',
      'ALTER TABLE ... DROP COLUMN',
      'REMOVE COLUMN'
    ],
    correctAnswer: 'ALTER TABLE ... DROP COLUMN'
  },
  {
    question: '¿Qué comando DDL se usa para crear un índice en una tabla?',
    options: [
      'CREATE INDEX',
      'ADD INDEX',
      'MAKE INDEX',
      'NEW INDEX'
    ],
    correctAnswer: 'CREATE INDEX'
  },
  {
    question: '¿Qué comando DDL se emplea para eliminar un índice existente?',
    options: [
      'DROP INDEX',
      'DELETE INDEX',
      'REMOVE INDEX',
      'ALTER INDEX'
    ],
    correctAnswer: 'DROP INDEX'
  },
  {
    question: '¿Qué comando DDL se utiliza para modificar el tipo de datos de una columna?',
    options: [
      'CHANGE COLUMN TYPE',
      'MODIFY COLUMN',
      'ALTER TABLE ... MODIFY',
      'SET COLUMN TYPE'
    ],
    correctAnswer: 'ALTER TABLE ... MODIFY'
  },
  {
    question: '¿Qué comando DDL se usa para establecer una restricción UNIQUE en una columna?',
    options: [
      'ADD UNIQUE',
      'ALTER TABLE ... ADD CONSTRAINT UNIQUE',
      'SET UNIQUE',
      'DEFINE UNIQUE'
    ],
    correctAnswer: 'ALTER TABLE ... ADD CONSTRAINT UNIQUE'
  },
  {
    question: '¿Qué comando DDL se emplea para eliminar una restricción de una tabla?',
    options: [
      'DROP CONSTRAINT',
      'REMOVE CONSTRAINT',
      'ALTER TABLE ... DROP CONSTRAINT',
      'DELETE CONSTRAINT'
    ],
    correctAnswer: 'ALTER TABLE ... DROP CONSTRAINT'
  },
  {
    question: '¿Qué comando DDL se utiliza para crear una vista en SQL?',
    options: [
      'CREATE VIEW',
      'MAKE VIEW',
      'NEW VIEW',
      'ADD VIEW'
    ],
    correctAnswer: 'CREATE VIEW'
  },
  {
    question: '¿Qué comando DDL se usa para eliminar una vista existente?',
    options: [
      'DROP VIEW',
      'DELETE VIEW',
      'REMOVE VIEW',
      'ALTER VIEW'
    ],
    correctAnswer: 'DROP VIEW'
  },
  {
    question: '¿Qué comando DDL se emplea para crear una secuencia en SQL?',
    options: [
      'CREATE SEQUENCE',
      'MAKE SEQUENCE',
      'NEW SEQUENCE',
      'ADD SEQUENCE'
    ],
    correctAnswer: 'CREATE SEQUENCE'
  },
  {
    question: '¿Qué comando DDL se utiliza para eliminar una secuencia existente?',
    options: [
      'DROP SEQUENCE',
      'DELETE SEQUENCE',
      'REMOVE SEQUENCE',
      'ALTER SEQUENCE'
    ],
    correctAnswer: 'DROP SEQUENCE'
  },
  {
    question: '¿Qué comando DDL se usa para modificar una secuencia existente?',
    options: [
      'ALTER SEQUENCE',
      'MODIFY SEQUENCE',
      'CHANGE SEQUENCE',
      'UPDATE SEQUENCE'
    ],
    correctAnswer: 'ALTER SEQUENCE'
  },
  {
    question: '¿Qué comando DDL se emplea para crear un esquema en SQL?',
    options: [
      'CREATE SCHEMA',
      'MAKE SCHEMA',
      'NEW SCHEMA',
      'ADD SCHEMA'
    ],
    correctAnswer: 'CREATE SCHEMA'
  }
  ,
  {
    question: '¿Qué comando DML se utiliza para insertar nuevos registros en una tabla?',
    options: [
      'INSERT INTO',
      'ADD RECORD',
      'CREATE ROW',
      'APPEND'
    ],
    correctAnswer: 'INSERT INTO'
  },
  {
    question: '¿Qué comando se usa para actualizar registros existentes en una tabla?',
    options: [
      'MODIFY',
      'UPDATE',
      'CHANGE',
      'SET RECORD'
    ],
    correctAnswer: 'UPDATE'
  },
  {
    question: '¿Cuál es la instrucción DML para eliminar registros de una tabla?',
    options: [
      'REMOVE',
      'DELETE',
      'DROP',
      'ERASE'
    ],
    correctAnswer: 'DELETE'
  },
  {
    question: '¿Qué cláusula se usa con UPDATE y DELETE para especificar qué registros afectar?',
    options: [
      'WHERE',
      'SET',
      'FROM',
      'LIKE'
    ],
    correctAnswer: 'WHERE'
  },
  {
    question: '¿Qué ocurre si omites la cláusula WHERE en un DELETE?',
    options: [
      'Se elimina un solo registro al azar',
      'Se borra la tabla completa',
      'No se elimina ningún registro',
      'Se eliminan todos los registros de la tabla'
    ],
    correctAnswer: 'Se eliminan todos los registros de la tabla'
  },
  {
    question: '¿Qué comando se usa para recuperar datos de una tabla?',
    options: [
      'GET',
      'RETRIEVE',
      'SELECT',
      'FETCH'
    ],
    correctAnswer: 'SELECT'
  },
  {
    question: '¿Qué palabra clave se usa en un SELECT para eliminar duplicados?',
    options: [
      'DISTINCT',
      'UNIQUE',
      'DIFFERENT',
      'ONLY'
    ],
    correctAnswer: 'DISTINCT'
  },
  {
    question: '¿Qué comando se usa para eliminar todos los registros pero conservar la estructura de la tabla?',
    options: [
      'DROP',
      'DELETE',
      'TRUNCATE',
      'ERASE'
    ],
    correctAnswer: 'TRUNCATE'
  },
  {
    question: '¿Qué operador se utiliza para buscar coincidencias parciales en una consulta SELECT?',
    options: [
      '=',
      'LIKE',
      'IN',
      'IS'
    ],
    correctAnswer: 'LIKE'
  },
  {
    question: '¿Cuál es el orden correcto de una consulta SELECT básica?',
    options: [
      'FROM, SELECT, WHERE',
      'SELECT, WHERE, FROM',
      'SELECT, FROM, WHERE',
      'WHERE, FROM, SELECT'
    ],
    correctAnswer: 'SELECT, FROM, WHERE'
  },
  {
    question: '¿Qué comando permite modificar múltiples campos en un solo UPDATE?',
    options: [
      'SET campo1 = valor1, campo2 = valor2',
      'UPDATE campo1, campo2',
      'MODIFY ALL',
      'SET MULTIPLE'
    ],
    correctAnswer: 'SET campo1 = valor1, campo2 = valor2'
  },
  {
    question: '¿Cuál de las siguientes consultas es válida para insertar datos?',
    options: [
      'INSERT INTO tabla VALUES (1, \'Juan\')',
      'INSERT tabla SET (1, \'Juan\')',
      'ADD VALUES (1, \'Juan\') INTO tabla',
      'NEW RECORD INTO tabla (1, \'Juan\')'
    ],
    correctAnswer: 'INSERT INTO tabla VALUES (1, \'Juan\')'
  },
  {
    question: '¿Qué comando permite obtener el número total de filas en una tabla?',
    options: [
      'SELECT * FROM tabla',
      'SELECT COUNT(*) FROM tabla',
      'GET TOTAL FROM tabla',
      'SHOW ALL FROM tabla'
    ],
    correctAnswer: 'SELECT COUNT(*) FROM tabla'
  },
  {
    question: '¿Qué cláusula se usa para ordenar resultados en una consulta SELECT?',
    options: [
      'SORT BY',
      'ORDER BY',
      'GROUP BY',
      'ALIGN BY'
    ],
    correctAnswer: 'ORDER BY'
  },
  {
    question: '¿Qué operador se usa para combinar condiciones en una cláusula WHERE?',
    options: [
      'AND / OR',
      'IF / ELSE',
      'JOIN / ON',
      'WITH / IN'
    ],
    correctAnswer: 'AND / OR'
  },
  {
    question: '¿Qué operador DML se usa para verificar si un campo tiene valor NULL?',
    options: [
      'IS NULL',
      '== NULL',
      'IS EMPTY',
      '= NULL'
    ],
    correctAnswer: 'IS NULL'
  },
  {
    question: '¿Cómo se inserta un dato en una columna específica?',
    options: [
      'INSERT INTO tabla (columna) VALUE (\'dato\')',
      'INSERT INTO tabla SET columna = \'dato\'',
      'INSERT (columna) INTO tabla VALUES (\'dato\')',
      'INSERT INTO tabla (columna) VALUES (\'dato\')'
    ],
    correctAnswer: 'INSERT INTO tabla (columna) VALUES (\'dato\')'
  },
  {
    question: '¿Qué palabra clave permite agrupar resultados similares en SELECT?',
    options: [
      'GROUP BY',
      'ORDER BY',
      'MERGE BY',
      'SORT BY'
    ],
    correctAnswer: 'GROUP BY'
  },
  {
    question: '¿Qué función permite calcular el promedio de una columna numérica?',
    options: [
      'SUM()',
      'COUNT()',
      'AVG()',
      'TOTAL()'
    ],
    correctAnswer: 'AVG()'
  },
  {
    question: '¿Qué cláusula se usa para filtrar grupos después de agrupar?',
    options: [
      'HAVING',
      'WHERE',
      'GROUP FILTER',
      'AFTER GROUP'
    ],
    correctAnswer: 'HAVING'
  },
  {
    question: '¿Qué sección del archivo my.ini define las opciones del cliente de MySQL?',
    options: [
      '[mysql]',
      '[client]',
      '[mysqld]',
      '[server]'
    ],
    correctAnswer: '[client]'
  },
  {
    question: '¿Qué opción en my.ini define el puerto en el que escucha el servidor?',
    options: [
      'basedir',
      'server-port',
      'bind-address',
      'port'
    ],
    correctAnswer: 'port'
  },
  {
    question: '¿Dónde suele estar el archivo my.ini en Windows si se instaló MySQL con el instalador oficial?',
    options: [
      'C:\\ProgramData\\MySQL',
      'C:\\AppData\\MySQL',
      'C:\\Program Files\\MySQL',
      'C:\\MySQL'
    ],
    correctAnswer: 'C:\\ProgramData\\MySQL'
  },
  {
    question: '¿Qué significa bind-address = 0.0.0.0?',
    options: [
      'El servidor escucha solo conexiones SSL.',
      'El servidor está bloqueado.',
      'El servidor solo escucha en localhost.',
      'El servidor escucha en cualquier IP.'
    ],
    correctAnswer: 'El servidor escucha en cualquier IP.'
  },
  {
    question: '¿Qué opción define el límite máximo de conexiones simultáneas?',
    options: [
      'table_open_cache',
      'max_connections',
      'open_files_limit',
      'thread_cache_size'
    ],
    correctAnswer: 'max_connections'
  },
  {
    question: '¿Qué define lower_case_table_names=1 en Windows?',
    options: [
      'Las consultas deben usar exactamente el mismo nombre.',
      'Solo permite minúsculas en nombres de columnas.',
      'Tablas con nombres obligatoriamente en mayúsculas.',
      'No se diferencian mayúsculas y minúsculas.'
    ],
    correctAnswer: 'Las consultas deben usar exactamente el mismo nombre.'
  },
  {
    question: '¿Qué opción impide insertar fechas inválidas como "0000-00-00"?',
    options: [
      'ONLY_FULL_GROUP_BY',
      'NO_ZERO_IN_DATE',
      'MAX_DATE_CHECK',
      'STRICT_MODE'
    ],
    correctAnswer: 'NO_ZERO_IN_DATE'
  },
  {
    question: '¿Qué comando permite ver todos los usuarios en MySQL?',
    options: [
      'SHOW DATABASES;',
      'SELECT user FROM mysql.user;',
      'SELECT * FROM users;',
      'SHOW USERS;'
    ],
    correctAnswer: 'SELECT user FROM mysql.user;'
  },
  {
    question: '¿Qué comando crea un usuario en MySQL?',
    options: [
      "ADD USER 'nombre';",
      "NEW USER 'nombre';",
      "CREATE USER 'nombre'@'localhost' IDENTIFIED BY 'contraseña';",
      "GRANT USER 'nombre';"
    ],
    correctAnswer: "CREATE USER 'nombre'@'localhost' IDENTIFIED BY 'contraseña';"
  },
  {
    question: '¿Qué comando otorga privilegios a un usuario?',
    options: [
      "ACCESS GRANT TO 'usuario';",
      "GRANT SELECT, INSERT ON basedatos.* TO 'usuario'@'localhost';",
      "PERMIT ALL TO 'usuario';",
      "ALLOW PRIVILEGES 'usuario';"
    ],
    correctAnswer: "GRANT SELECT, INSERT ON basedatos.* TO 'usuario'@'localhost';"
  },
  {
    question: '¿Qué comando elimina un privilegio otorgado a un usuario?',
    options: [
      "REVOKE INSERT ON basedatos.* FROM 'usuario'@'localhost';",
      "DENY SELECT ON basedatos.* TO 'usuario';",
      "DISABLE ACCESS 'usuario';",
      "REMOVE PRIVILEGE 'usuario';"
    ],
    correctAnswer: "REVOKE INSERT ON basedatos.* FROM 'usuario'@'localhost';"
  },
  {
    question: '¿Qué comando muestra los privilegios actuales de un usuario?',
    options: [
      "SHOW GRANTS FOR 'usuario'@'localhost';",
      "DESCRIBE GRANTS 'usuario';",
      'SHOW PRIVILEGES;',
      'SELECT * FROM privileges;'
    ],
    correctAnswer: "SHOW GRANTS FOR 'usuario'@'localhost';"
  },
  {
    question: '¿Qué hace OPTIMIZE TABLE en MySQL?',
    options: [
      'Elimina los datos antiguos.',
      'Analiza el rendimiento de la tabla.',
      'Cierra la tabla de inmediato.',
      'Compacta y reorganiza los datos para ahorrar espacio.'
    ],
    correctAnswer: 'Compacta y reorganiza los datos para ahorrar espacio.'
  },
  {
    question: '¿Qué hace ANALYZE TABLE?',
    options: [
      'Borra registros duplicados.',
      'Copia la tabla a otro esquema.',
      'Actualiza las estadísticas de índices para optimizar el planificador de consultas.',
      'Cierra todas las conexiones abiertas.'
    ],
    correctAnswer: 'Actualiza las estadísticas de índices para optimizar el planificador de consultas.'
  },
  {
    question: '¿Qué archivo almacena los errores de MySQL?',
    options: [
      'log-bin',
      'general_log_file',
      'log-error',
      'slow_query_log_file'
    ],
    correctAnswer: 'log-error'
  },
  {
    question: '¿Cuál de los siguientes tipos de copia de seguridad guarda todos los datos seleccionados sin depender de copias anteriores?',
    options: [
      'Copia completa',
      'Copia de logs',
      'Copia incremental',
      'Copia diferencial'
    ],
    correctAnswer: 'Copia completa'
  },
  {
    question: '¿Cuál es el efecto de usar LIMIT 5 en una consulta SQL?',
    options: [
      'Devuelve del 11º al 15º resultado',
      'Devuelve los primeros 5 resultados',
      'Muestra los resultados hasta el décimo',
      'Devuelve 10 resultados desde el quinto'
    ],
    correctAnswer: 'Devuelve los primeros 5 resultados'
  },
  {
    question: '¿Cuál es la clave principal de una tabla resultado de una relación N:M?',
    options: [
      'La combinación de las claves primarias de ambas entidades',
      'La clave foránea de una de las entidades',
      'La clave primaria de la entidad fuerte',
      'Un campo autoincremental'
    ],
    correctAnswer: 'La combinación de las claves primarias de ambas entidades'
  },
  {
    question: '¿Qué cláusula permite ordenar los resultados de una consulta SQL por varias columnas?',
    options: [
      'SORT BY',
      'GROUP BY',
      'ARRANGE BY',
      'ORDER BY columna1, columna2'
    ],
    correctAnswer: 'ORDER BY columna1, columna2'
  },
  {
    question: '¿Qué devuelve esta consulta? SELECT Cliente.Nombre FROM Cliente WHERE idCliente NOT IN (SELECT idCliente FROM Orden);',
    options: [
      'Clientes sin pedidos',
      'Clientes con pedidos pendientes',
      'Clientes que han hecho más de un pedido',
      'Clientes que cancelaron sus pedidos'
    ],
    correctAnswer: 'Clientes sin pedidos'
  },
  {
    question: '¿Qué devuelve esta consulta? SELECT Plato.Nombre, COUNT(*) FROM DetalleOrden JOIN Plato ON DetalleOrden.idPlato = Plato.idPlato GROUP BY Plato.Nombre;',
    options: [
      'El número de veces que se ha pedido cada plato',
      'El número de ingredientes por plato',
      'Los platos ordenados por precio',
      'La cantidad total vendida por plato'
    ],
    correctAnswer: 'El número de veces que se ha pedido cada plato'
  },
  {
    question: "¿Qué devuelve esta subconsulta? SELECT NOMCE FROM TCENTR WHERE NUMCE IN (SELECT NUMCE FROM TDEPTO WHERE NUMDE IN (SELECT NUMDE FROM TEMPLE WHERE CARGO = 'Jefe'));",
    options: [
      'Centros sin jefes',
      'Centros con salario promedio alto',
      'Centros con más de un departamento',
      'Centros donde trabaja al menos un jefe'
    ],
    correctAnswer: 'Centros donde trabaja al menos un jefe'
  },
  {
    question: '¿Qué efecto tiene ON DELETE SET NULL al definir una clave foránea?',
    options: [
      'Elimina los registros relacionados',
      'Bloquea la operación de eliminación',
      'No permite claves foráneas vacías',
      'Establece los valores foráneos como NULL'
    ],
    correctAnswer: 'Establece los valores foráneos como NULL'
  },
  {
    question: '¿Qué estrategia de implementación permite representar una jerarquía con generalización en una sola tabla en SQL?',
    options: [
      'Tabla puente',
      'Tabla por subentidad',
      'Tabla única con columna discriminadora',
      'Tabla por superentidad'
    ],
    correctAnswer: 'Tabla única con columna discriminadora'
  },
  {
    question: '¿Qué función SQL devuelve la cantidad de registros en una tabla?',
    options: [
      'NUMBER()',
      'TOTAL()',
      'COUNT()',
      'SUM()'
    ],
    correctAnswer: 'COUNT()'
  },
  {
    question: '¿Qué hace esta consulta? SELECT TURNO.Turno, MAX(TURNO.NumOrden) FROM TURNO GROUP BY TURNO.Turno;',
    options: [
      'Muestra el número de órdenes por turno',
      'Muestra la última orden registrada por turno',
      'Cuenta todos los turnos disponibles',
      'Muestra el nombre de los empleados por turno'
    ],
    correctAnswer: 'Muestra la última orden registrada por turno'
  },
  {
    question: '¿Qué hace esta consulta? SELECT NOMEM FROM TEMPLE WHERE SALAR < (SELECT AVG(SALAR) FROM TEMPLE);',
    options: [
      'Empleados con salario exacto al promedio',
      'Empleados sin salario definido',
      'Empleados con salario mayor al promedio',
      'Empleados con salario inferior al promedio'
    ],
    correctAnswer: 'Empleados con salario inferior al promedio'
  },
  {
    question: '¿Qué hace esta consulta? SELECT * FROM Orden ORDER BY Fecha ASC LIMIT 1;',
    options: [
      'Orden con cliente prioritario',
      'Orden con mayor total',
      'Orden más antigua',
      'Orden más reciente'
    ],
    correctAnswer: 'Orden más antigua'
  },
  {
    question: '¿Qué instrucción se utiliza para eliminar permanentemente una tabla y su definición en SQL?',
    options: [
      'CLEAR TABLE',
      'DROP TABLE',
      'DELETE FROM tabla',
      'REMOVE RECORDS'
    ],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: '¿Qué muestra esta consulta? SELECT Empresa.Nombre FROM Empresa JOIN Cliente ON Empresa.idCliente = Cliente.idCliente;',
    options: [
      'Empresas que tienen asociado un cliente',
      'Nombres duplicados de empresas',
      'Empresas sin clientes',
      'Clientes con múltiples empresas'
    ],
    correctAnswer: 'Empresas que tienen asociado un cliente'
  },
  {
    question: '¿Qué obtiene esta consulta? SELECT Cliente.Nombre FROM Cliente LEFT JOIN Orden ON Cliente.idCliente = Orden.idCliente WHERE Orden.idCliente IS NULL;',
    options: [
      'Clientes con órdenes canceladas',
      'Clientes con facturación superior a la media',
      'Clientes que no han realizado ninguna orden',
      'Clientes que han realizado más de una orden'
    ],
    correctAnswer: 'Clientes que no han realizado ninguna orden'
  },
  {
    question: "¿Qué obtiene la consulta? SELECT Nombre FROM Mesero WHERE FechaIncorporacion < '2020-01-01';",
    options: [
      'Meseros incorporados antes de 2020',
      'Meseros con contrato temporal',
      'Meseros sin órdenes asignadas',
      'Meseros que han atendido más de 10 órdenes'
    ],
    correctAnswer: 'Meseros incorporados antes de 2020'
  },
  {
    question: '¿Qué ocurre al transformar una relación débil a tabla?',
    options: [
      'Se ignora porque no puede tener independencia',
      'Hereda la clave primaria de la relación fuerte',
      'Se convierte en un atributo derivado',
      'Su clave se convierte en clave foránea'
    ],
    correctAnswer: 'Hereda la clave primaria de la relación fuerte'
  },
  {
    question: '¿Qué ocurre si se ejecuta un DELETE sin cláusula WHERE en una tabla con miles de registros?',
    options: [
      'Aparece un error de sintaxis',
      'No ocurre nada',
      'Se borra solo el primer registro',
      'Se eliminan todos los registros de la tabla'
    ],
    correctAnswer: 'Se eliminan todos los registros de la tabla'
  },
  {
    question: '¿Qué operador lógico se utiliza en SQL para verificar si un valor no está dentro de un conjunto?',
    options: [
      'NOT BETWEEN',
      'IS NULL',
      'EXCEPT',
      'NOT IN'
    ],
    correctAnswer: 'NOT IN'
  },
  {
    question: '¿Qué operador se usa en SQL para buscar coincidencias parciales en texto?',
    options: [
      'EQUALS',
      'FIND',
      'MATCH',
      'LIKE'
    ],
    correctAnswer: 'LIKE'
  },
  {
    question: '¿Qué palabra clave en SQL se utiliza para asegurar que los valores de una columna sean únicos?',
    options: [
      'NOT NULL',
      'UNIQUE',
      'DISTINCT',
      'PRIMARY'
    ],
    correctAnswer: 'UNIQUE'
  },
  {
    question: '¿Qué representa la siguiente situación en un diagrama ER: una entidad EMPLEADO vinculada a sí misma mediante una relación LLAMA?',
    options: [
      'Entidad débil',
      'Relación jerárquica',
      'Relación reflexiva',
      'Atributo compuesto'
    ],
    correctAnswer: 'Relación reflexiva'
  },
  {
    question: '¿Qué representa un atributo subrayado en un modelo ER?',
    options: [
      'Es un atributo compuesto',
      'Es un atributo redundante',
      'Es un atributo clave (clave primaria)',
      'Es un atributo multivaluado'
    ],
    correctAnswer: 'Es un atributo clave (clave primaria)'
  },
  {
    question: '¿Qué representa un rombo en un diagrama entidad-relación?',
    options: [
      'Un atributo multivaluado',
      'Una relación entre entidades',
      'Una clave primaria',
      'Una tabla de base de datos'
    ],
    correctAnswer: 'Una relación entre entidades'
  },
  {
    question: "¿Qué resultado da esta consulta? SELECT COUNT(*) FROM Orden WHERE Fecha BETWEEN '2024-01-01' AND '2024-01-31';",
    options: [
      'Total de productos vendidos',
      'Número de clientes en enero',
      'Número total de órdenes en enero',
      'Total facturado en enero'
    ],
    correctAnswer: 'Número total de órdenes en enero'
  },
  {
    question: '¿Qué sentencia elimina completamente una tabla y todos sus datos en MySQL?',
    options: [
      'DROP TABLE nombre;',
      'REMOVE TABLE nombre;',
      'CLEAR TABLE nombre;',
      'DELETE TABLE nombre;'
    ],
    correctAnswer: 'DROP TABLE nombre;'
  },
  {
    question: '¿Qué sentencia se utiliza para cambiar el nombre de una tabla en MySQL?',
    options: [
      'ALTER TABLE nombre RENAME TO nuevo_nombre',
      'CHANGE TABLE nombre',
      'MODIFY TABLE nombre',
      'RENAME TABLE nombre AS nuevo_nombre'
    ],
    correctAnswer: 'ALTER TABLE nombre RENAME TO nuevo_nombre'
  },
  {
    question: '¿Qué sentencia SQL se utiliza para agregar una nueva columna a una tabla existente?',
    options: [
      'INSERT COLUMN',
      'UPDATE COLUMN',
      'ALTER TABLE ... ADD COLUMN',
      'MODIFY TABLE'
    ],
    correctAnswer: 'ALTER TABLE ... ADD COLUMN'
  },
  {
    question: '¿Qué significa que una relación tenga una cardinalidad 1:N entre dos entidades?',
    options: [
      'Ambas entidades deben coincidir en valores',
      'Cada entidad puede tener solo un valor',
      'Hay una correspondencia muchos a muchos',
      'Una entidad del lado 1 se relaciona con varias del lado N'
    ],
    correctAnswer: 'Una entidad del lado 1 se relaciona con varias del lado N'
  },
  {
    question: '¿Qué sucede con los atributos de una relación si esta es eliminada del modelo relacional?',
    options: [
      'Se transforman en atributos de una entidad',
      'Se pierden, ya que solo pertenecen a la relación',
      'Se agrupan como metadatos',
      'Se convierten en claves foráneas'
    ],
    correctAnswer: 'Se pierden, ya que solo pertenecen a la relación'
  },
  {
    question: '¿Qué tipo de atributo en un modelo ER puede descomponerse en subatributos más simples?',
    options: [
      'Atributo compuesto',
      'Atributo derivado',
      'Atributo multivaluado',
      'Atributo clave'
    ],
    correctAnswer: 'Atributo compuesto'
  },
  {
    question: '¿Qué tipo de atributo requiere su propia tabla si un solo registro puede tener varios valores para ese atributo?',
    options: [
      'Atributo compuesto',
      'Atributo derivado',
      'Atributo multivaluado',
      'Atributo redundante'
    ],
    correctAnswer: 'Atributo multivaluado'
  },
  {
    question: '¿Qué tipo de copia de seguridad es más rápida de ejecutar pero requiere siempre la última copia completa para poder restaurar?',
    options: [
      'Copia diferencial',
      'Copia lógica',
      'Copia incremental',
      'Copia manual'
    ],
    correctAnswer: 'Copia incremental'
  },
  {
    question: '¿Qué tipo de copia se ejecuta después de una copia completa y registra los cambios desde esa copia completa, sin considerar incrementales anteriores?',
    options: [
      'Copia de respaldo lógico',
      'Copia diferencial',
      'Copia automática',
      'Copia de logs'
    ],
    correctAnswer: 'Copia diferencial'
  },
  {
    question: '¿Qué tipo de JOIN devuelve todas las filas de la tabla izquierda y las coincidentes de la derecha o NULL si no hay coincidencia?',
    options: [
      'INNER JOIN',
      'RIGHT JOIN',
      'FULL OUTER JOIN',
      'LEFT JOIN'
    ],
    correctAnswer: 'LEFT JOIN'
  },
  {
    question: '¿Qué tipo de relación existe cuando una entidad se relaciona con otra y ambas representan el mismo conjunto de elementos?',
    options: [
      'Relación reflexiva',
      'Asociación débil',
      'Generalización',
      'Agregación'
    ],
    correctAnswer: 'Relación reflexiva'
  },
  {
    question: '¿Qué ventaja tiene una copia completa frente a una copia incremental?',
    options: [
      'Consume menos espacio',
      'Es más simple de restaurar',
      'Es más rápida',
      'No necesita programación previa'
    ],
    correctAnswer: 'Es más simple de restaurar'
  },
  {
    question: 'En un diagrama ER, se modela una entidad general llamada "Vehículo" con las subentidades "Coche" y "Moto". ¿Qué tipo de relación representa esta estructura?',
    options: [
      'Relación reflexiva',
      'Agregación',
      'Generalización/especialización',
      'Asociación débil'
    ],
    correctAnswer: 'Generalización/especialización'
  },
  {
    question: 'En un diagrama ER, un atributo que depende de otros atributos se denomina:',
    options: [
      'Atributo multivaluado',
      'Atributo derivado',
      'Atributo independiente',
      'Atributo compuesto'
    ],
    correctAnswer: 'Atributo derivado'
  },
  {
    question: '¿Qué lenguaje se utiliza para realizar consultas en bases de datos relacionales?',
    options: ['HTML', 'SQL', 'XML', 'PHP'],
    correctAnswer: 'SQL'
  },
  {
    question: '¿Qué comando se utiliza para eliminar una tabla en SQL?',
    options: ['DELETE TABLE', 'REMOVE TABLE', 'DROP TABLE', 'CLEAR TABLE'],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: '¿Cuál es la clave primaria en una tabla?',
    options: ['Una clave repetida', 'Una clave que puede ser nula', 'Una clave única que identifica cada fila', 'Una clave de otro campo'],
    correctAnswer: 'Una clave única que identifica cada fila'
  },
  {
    question: '¿Qué tipo de JOIN devuelve solo las filas que tienen coincidencias en ambas tablas?',
    options: ['LEFT JOIN', 'RIGHT JOIN', 'FULL JOIN', 'INNER JOIN'],
    correctAnswer: 'INNER JOIN'
  },
  {
    question: '¿Cuál es el objetivo de normalizar una base de datos?',
    options: ['Aumentar la redundancia', 'Reducir el rendimiento', 'Evitar duplicidades y mejorar la estructura', 'Eliminar claves primarias'],
    correctAnswer: 'Evitar duplicidades y mejorar la estructura'
  },
  {
    question: '¿Qué significa ACID en bases de datos?',
    options: ['Alta Capacidad de Ingreso de Datos', 'Atomicidad, Consistencia, Aislamiento, Durabilidad', 'Acceso Concurrente a Información Dinámica', 'Archivo de Columnas de Información y Datos'],
    correctAnswer: 'Atomicidad, Consistencia, Aislamiento, Durabilidad'
  },
  {
    question: '¿Qué comando se usa para actualizar datos en SQL?',
    options: ['MODIFY', 'CHANGE', 'UPDATE', 'REPLACE'],
    correctAnswer: 'UPDATE'
  },
  {
    question: '¿Qué comando se usa para agregar una nueva fila a una tabla?',
    options: ['INSERT INTO', 'ADD ROW', 'NEW ROW', 'APPEND'],
    correctAnswer: 'INSERT INTO'
  },
  {
    question: '¿Qué es un índice en una base de datos?',
    options: ['Una restricción de datos', 'Un resumen de la base de datos', 'Un mecanismo para acelerar búsquedas', 'Una clave primaria duplicada'],
    correctAnswer: 'Un mecanismo para acelerar búsquedas'
  },
  {
    question: '¿Qué tipo de dato se utiliza para almacenar texto en SQL?',
    options: ['INT', 'CHAR o VARCHAR', 'DATE', 'FLOAT'],
    correctAnswer: 'CHAR o VARCHAR'
  },

  {
    question: '¿Cuál es el propósito de una clave foránea?',
    options: ['Eliminar filas', 'Crear tablas', 'Relacionar dos tablas', 'Insertar registros'],
    correctAnswer: 'Relacionar dos tablas'
  },
  {
    question: '¿Cuál es el resultado de una cláusula SELECT *?',
    options: ['Todas las columnas de una tabla', 'Solo columnas con datos numéricos', 'Columnas únicas', 'Columnas sin valores nulos'],
    correctAnswer: 'Todas las columnas de una tabla'
  },
  {
    question: '¿Qué comando crea una nueva tabla en SQL?',
    options: ['MAKE TABLE', 'CREATE TABLE', 'NEW TABLE', 'TABLE CREATE'],
    correctAnswer: 'CREATE TABLE'
  },
  {
    question: '¿Qué significa una relación 1:N?',
    options: ['Una fila en una tabla está relacionada con muchas filas en otra', 'Muchas filas en una tabla están relacionadas con una fila', 'Una fila con una fila', 'Relaciones cruzadas'],
    correctAnswer: 'Una fila en una tabla está relacionada con muchas filas en otra'
  },
  {
    question: '¿Qué función de SQL devuelve la cantidad de filas?',
    options: ['SUM()', 'COUNT()', 'AVG()', 'TOTAL()'],
    correctAnswer: 'COUNT()'
  },
  {
    question: '¿Qué palabra clave se usa para ordenar los resultados?',
    options: ['ORDER', 'SORT', 'BY', 'ORDER BY'],
    correctAnswer: 'ORDER BY'
  },
  {
    question: '¿Qué significa el tipo de dato DATE en SQL?',
    options: ['Valor numérico', 'Una fecha', 'Texto largo', 'Variable de texto'],
    correctAnswer: 'Una fecha'
  },
  {
    question: '¿Cuál es el operador lógico para combinar condiciones?',
    options: ['IF', 'AND/OR', 'ELSE', 'CASE'],
    correctAnswer: 'AND/OR'
  },
  {
    question: '¿Cuál es el resultado de la cláusula GROUP BY?',
    options: ['Agrupa filas con los mismos valores', 'Elimina valores duplicados', 'Ordena por fecha', 'Muestra solo claves primarias'],
    correctAnswer: 'Agrupa filas con los mismos valores'
  },
  {
    question: '¿Qué comando se usa para eliminar todas las filas de una tabla?',
    options: ['DELETE ALL', 'DROP', 'REMOVE', 'DELETE FROM tabla'],
    correctAnswer: 'DELETE FROM tabla'
  },

  {
    question: '¿Qué es una transacción en una base de datos?',
    options: ['Una tabla temporal', 'Una operación automática', 'Un conjunto de operaciones SQL que se ejecutan como una unidad', 'Una copia de seguridad'],
    correctAnswer: 'Un conjunto de operaciones SQL que se ejecutan como una unidad'
  },
  {
    question: '¿Qué comando se usa para hacer una copia de seguridad en MySQL?',
    options: ['mysqldump', 'mysqlsave', 'backupdb', 'exportdb'],
    correctAnswer: 'mysqldump'
  },
  {
    question: '¿Cuál de las siguientes es una base de datos NoSQL?',
    options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
    correctAnswer: 'MongoDB'
  },
  {
    question: '¿Qué operador se utiliza para buscar un patrón en una consulta SQL?',
    options: ['LIKE', 'IN', 'BETWEEN', 'WHERE'],
    correctAnswer: 'LIKE'
  },
  {
    question: '¿Cuál es el propósito de la cláusula HAVING?',
    options: ['Limitar el número de filas', 'Filtrar columnas', 'Filtrar resultados después del GROUP BY', 'Renombrar tablas'],
    correctAnswer: 'Filtrar resultados después del GROUP BY'
  },
  {
    question: '¿Qué hace la sentencia COMMIT?',
    options: ['Cancela la transacción', 'Guarda los cambios de forma permanente', 'Deshace los cambios', 'Reinicia la tabla'],
    correctAnswer: 'Guarda los cambios de forma permanente'
  },
  {
    question: '¿Qué significa que una base de datos sea relacional?',
    options: ['Usa XML', 'Relaciona entidades y atributos', 'Almacena archivos', 'Se basa en filas y columnas relacionadas entre sí'],
    correctAnswer: 'Se basa en filas y columnas relacionadas entre sí'
  },
  {
    question: '¿Qué tipo de relación representa una tabla de intersección?',
    options: ['1:1', '1:N', 'N:M', 'N:0'],
    correctAnswer: 'N:M'
  },
  {
    question: '¿Qué hace el comando ROLLBACK?',
    options: ['Confirma los cambios', 'Revierte una transacción', 'Elimina una base de datos', 'Actualiza la tabla'],
    correctAnswer: 'Revierte una transacción'
  },
  {
    question: '¿Qué significa NULL en SQL?',
    options: ['0', 'Dato vacío', 'Dato incorrecto', 'Ausencia de valor'],
    correctAnswer: 'Ausencia de valor'
  },
  {
    question: '¿Qué comando sirve para cambiar el nombre de una tabla?',
    options: ['RENAME TABLE', 'MODIFY NAME', 'ALTER RENAME', 'CHANGE TABLE'],
    correctAnswer: 'RENAME TABLE'
  },
  {
    question: '¿Qué es una vista (VIEW) en SQL?',
    options: ['Una tabla vacía', 'Una tabla temporal', 'Una tabla virtual basada en una consulta', 'Una copia de seguridad'],
    correctAnswer: 'Una tabla virtual basada en una consulta'
  },
  {
    question: '¿Cuál es el propósito de una restricción UNIQUE?',
    options: ['Permitir valores nulos', 'Evitar claves foráneas', 'Evitar valores duplicados', 'Eliminar duplicados al final'],
    correctAnswer: 'Evitar valores duplicados'
  },
  {
    question: '¿Qué comando se usa para otorgar permisos?',
    options: ['GIVE', 'GRANT', 'ALLOW', 'PERMIT'],
    correctAnswer: 'GRANT'
  },
  {
    question: '¿Qué comando elimina todos los datos de una tabla pero no la estructura?',
    options: ['DROP', 'DELETE', 'TRUNCATE', 'REMOVE'],
    correctAnswer: 'TRUNCATE'
  },
  {
    question: '¿Qué tipo de dato se utiliza para almacenar valores TRUE o FALSE?',
    options: ['BOOLEAN', 'INT', 'BIT', 'TINYINT'],
    correctAnswer: 'BOOLEAN'
  },
  {
    question: '¿Qué es un trigger (disparador)?',
    options: ['Un índice automático', 'Una vista', 'Una función que se ejecuta ante ciertos eventos', 'Una consulta compleja'],
    correctAnswer: 'Una función que se ejecuta ante ciertos eventos'
  },
  {
    question: '¿Qué es un procedimiento almacenado?',
    options: ['Un archivo externo', 'Una función guardada que se puede ejecutar', 'Una clave secundaria', 'Un índice compuesto'],
    correctAnswer: 'Una función guardada que se puede ejecutar'
  },
  {
    question: '¿Qué comando se usa para ver la estructura de una tabla en MySQL?',
    options: ['DESCRIBE', 'SHOW STRUCTURE', 'TABLE INFO', 'TABLE FORMAT'],
    correctAnswer: 'DESCRIBE'
  }
    
];
