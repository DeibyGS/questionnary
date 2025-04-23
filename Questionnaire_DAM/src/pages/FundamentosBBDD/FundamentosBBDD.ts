import { Question } from '../InterfaceQuestion';

export const questionsFundamentosBBDD: Question[] = [
  {
    question: '¿Qué es una base de datos?',
    options: [
      'Un conjunto de programas informáticos',
      'Un sistema operativo',
      'Un conjunto de datos relacionados y organizados para su uso',
      'Un lenguaje de programación'
    ],
    correctAnswer: 'Un conjunto de datos relacionados y organizados para su uso'
  },
  {
    question: '¿Cuál es la función principal de un Sistema Gestor de Bases de Datos (SGBD)?',
    options: [
      'Diseñar páginas web',
      'Gestionar y administrar bases de datos',
      'Crear hojas de cálculo',
      'Editar imágenes'
    ],
    correctAnswer: 'Gestionar y administrar bases de datos'
  },
  {
    question: '¿Qué es una tabla en el contexto de bases de datos relacionales?',
    options: [
      'Un documento de texto',
      'Una estructura que almacena datos en filas y columnas',
      'Una imagen digital',
      'Un programa de edición de video'
    ],
    correctAnswer: 'Una estructura que almacena datos en filas y columnas'
  },
  {
    question: '¿Qué es una clave primaria en una tabla de base de datos?',
    options: [
      'Un campo que puede tener valores duplicados',
      'Un campo que identifica de manera única cada registro',
      'Un campo que almacena imágenes',
      'Un campo que siempre está vacío'
    ],
    correctAnswer: 'Un campo que identifica de manera única cada registro'
  },
  {
    question: '¿Qué lenguaje se utiliza comúnmente para consultar y manipular bases de datos relacionales?',
    options: [
      'HTML',
      'CSS',
      'SQL',
      'JavaScript'
    ],
    correctAnswer: 'SQL'
  },
  {
    question: '¿Qué es una relación en una base de datos relacional?',
    options: [
      'Una conexión entre dos programas',
      'Una tabla que almacena datos',
      'Una función matemática',
      'Un tipo de archivo de imagen'
    ],
    correctAnswer: 'Una tabla que almacena datos'
  },
  {
    question: '¿Qué es la integridad referencial en bases de datos?',
    options: [
      'La capacidad de una base de datos para referirse a sí misma',
      'La garantía de que las relaciones entre tablas se mantengan consistentes',
      'La habilidad de una base de datos para integrarse con otros sistemas',
      'La propiedad de una base de datos de ser referenciada por múltiples usuarios'
    ],
    correctAnswer: 'La garantía de que las relaciones entre tablas se mantengan consistentes'
  },
  {
    question: '¿Qué es una consulta en el contexto de bases de datos?',
    options: [
      'Una pregunta que se hace a un experto en informática',
      'Una instrucción para recuperar datos específicos de una base de datos',
      'Un tipo de virus informático',
      'Un archivo de configuración del sistema'
    ],
    correctAnswer: 'Una instrucción para recuperar datos específicos de una base de datos'
  },
  {
    question: '¿Qué es la normalización en bases de datos?',
    options: [
      'El proceso de hacer que todos los datos estén en mayúsculas',
      'El proceso de organizar los datos para reducir la redundancia',
      'La conversión de datos en formato binario',
      'La eliminación de todas las claves primarias'
    ],
    correctAnswer: 'El proceso de organizar los datos para reducir la redundancia'
  },
  {
    question: '¿Qué es un índice en una base de datos?',
    options: [
      'Una lista de todos los usuarios de la base de datos',
      'Una estructura que mejora la velocidad de las consultas',
      'Un tipo de clave primaria',
      'Un archivo de respaldo de la base de datos'
    ],
    correctAnswer: 'Una estructura que mejora la velocidad de las consultas'
  },
  {
    question: 'Tenemos una entidad A y una entidad B, y existe una relación entre A y B con cardinalidad 1:N. Si la relación tiene un atributo, ¿dónde hay que incluir el atributo de la relación al realizar el paso a tablas?',
    options: [
      'Puedo elegir en la tabla A o en la tabla B indistintamente.',
      'En la tercera tabla que se genera.',
      'En la tabla B.',
      'En la tabla A.'
    ],
    correctAnswer: 'En la tabla B.'
  },
  {
    question: '¿Para qué sirve un atributo identificador principal?',
    options: [
      'Para identificar cada atributo de forma única.',
      'Para identificar cada relación de forma única.',
      'Para identificar cada entidad de forma única.',
      'Para identificar cada ocurrencia de forma única.'
    ],
    correctAnswer: 'Para identificar cada ocurrencia de forma única.'
  },
  {
    question: 'Queremos almacenar la información del sueldo bruto anual de los empleados. Teniendo en cuenta que el sueldo máximo sería 200000.00 euros, ¿qué tipo de dato asignarías al sueldo?',
    options: [
      'FLOAT(8,2)',
      'FLOAT(6,2)'
    ],
    correctAnswer: 'FLOAT(8,2)'
  },
  {
    question: 'Marca la respuesta correcta:',
    options: [
      'Para una ocurrencia de un atributo cada atributo sólo puede tomar un valor.',
      'Para una ocurrencia de una entidad cada atributo sólo puede tomar un valor.',
      'Ninguna es correcta.',
      'Para una ocurrencia de una entidad cada ocurrencia sólo puede tomar un valor.'
    ],
    correctAnswer: 'Para una ocurrencia de una entidad cada atributo sólo puede tomar un valor.'
  },
  {
    question: 'Queremos almacenar la información del teléfono de un alumno. Teniendo en cuenta que es un teléfono nacional, ¿qué tipo de dato asignarías al teléfono?',
    options: [
      'CHAR(9)',
      'INT',
      'VARCHAR(9)'
    ],
    correctAnswer: 'CHAR(9)'
  },
  {
    question: 'En una base de datos relacional, las relaciones entre las tablas se establecen:',
    options: [
      'Por medio de las claves primarias y atributos de la relación.',
      'Por medio de las claves primarias y claves foráneas.',
      'Por medio de las claves primarias, claves foráneas y atributos.',
      'Ninguna respuesta es correcta.'
    ],
    correctAnswer: 'Por medio de las claves primarias y claves foráneas.'
  },
  {
    question: '¿En una BBDD, con qué formato guardarías la fecha de nacimiento de un alumno?',
    options: [
      'dd-mm-aaaa',
      'aaaa/mm/dd',
      'dd/mm/aaaa',
      'aaaa-mm-dd'
    ],
    correctAnswer: 'aaaa-mm-dd'
  },
  {
    question: 'Teniendo en cuenta que el número máximo de caracteres para una dirección de correo electrónico es de 320 caracteres ¿qué tipo de dato asignarías al correo electrónico de un empleado?',
    options: [
      'TEXT',
      'VARCHAR(320)',
      'CHAR(320)',
      'BLOB'
    ],
    correctAnswer: 'VARCHAR(320)'
  },
  {
    question: 'Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad 1:1. Esto quiere decir:',
    options: [
      'Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B.',
      'Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B y viceversa.',
      'Que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A.'
    ],
    correctAnswer: 'Que una ocurrencia de la entidad A sólo puede estar relacionada con una ocurrencia de la entidad B y viceversa.'
  },
  {
    question: 'Marca la respuesta correcta:',
    options: [
      'Las relaciones pueden tener atributos.',
      'Los atributos pertenecen exclusivamente a las entidades.'
    ],
    correctAnswer: 'Las relaciones pueden tener atributos.'
  },
  {
    question: 'Si tenemos siete AIC (atributo identificador candidato) y elegimos uno de ellos como AIP (atributo identificador principal) ¿cuántos AIA (atributo identificador alternativo) tendríamos?',
    options: [
      'Ocho.',
      'Seis.',
      'Ninguna es correcta.',
      'Siete.'
    ],
    correctAnswer: 'Seis.'
  },
  {
    question: 'Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad 1:N. Esto quiere decir:',
    options: [
      'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que varias ocurrencias de la entidad B sólo pueden estar relacionadas con una ocurrencia de la entidad A.',
      'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.',
      'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A.'
    ],
    correctAnswer: 'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B, mientras que una ocurrencia de la entidad B sólo puede estar relacionada con una ocurrencia de la entidad A.'
  },
  {
    question: 'Marca la respuesta correcta:',
    options: [
      'Pueden establecerse relaciones entre relaciones.',
      'Pueden establecerse relaciones entre atributos.',
      'Las relaciones se establecen entre entidades.',
      'Pueden establecerse relaciones entre atributos si uno es AIP (atributo identificador principal).'
    ],
    correctAnswer: 'Las relaciones se establecen entre entidades.'
  },
  {
    question: 'Marca la afirmación correcta:',
    options: [
      'El grado de una entidad hace referencia al número de entidades que participan en una relación.',
      'El grado de una relación hace referencia al número de entidades que participan en dicha relación.'
    ],
    correctAnswer: 'El grado de una relación hace referencia al número de entidades que participan en dicha relación.'
  },
  {
    question: 'Tenemos una entidad A y una entidad B, y existe una relación entre A y B con cardinalidad N:M. Si la relación tiene un atributo, ¿dónde hay que incluir el atributo de la relación al realizar el paso a tablas?',
    options: [
      'En la tabla B.',
      'En la tabla A.',
      'En la tercera tabla que se genera.',
      'Puedo elegir en la tabla A o en la tabla B indistintamente.'
    ],
    correctAnswer: 'En la tercera tabla que se genera.'
  },
  {
    question: 'Marca la respuesta correcta:',
    options: [
      'La inconsistencia provoca redundancia.',
      'La inconsistencia puede provocar redundancia.',
      'La redundancia provoca inconsistencia.',
      'La redundancia puede provocar inconsistencia.'
    ],
    correctAnswer: 'La redundancia puede provocar inconsistencia.'
  },
  {
    question: 'Tenemos la entidad A y la entidad B y existe una relación entre A y B con cardinalidad N:M. Esto quiere decir:',
    options: [
      'Que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.',
      'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B y que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.',
      'Que muchas ocurrencias de la entidad A pueden estar relacionadas con varias ocurrencias de la entidad B.',
      'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B.'
    ],
    correctAnswer: 'Que una ocurrencia de la entidad A puede estar relacionada con varias ocurrencias de la entidad B y que una ocurrencia de la entidad B puede estar relacionada con varias ocurrencias de la entidad A.'
  },
  {
    question: 'Queremos almacenar la información del código postal. Teniendo en cuenta que los códigos postales tienen 5 dígitos, ¿qué tipo de dato asignarías al código postal?',
    options: [
      'SMALLINT',
      'TINYINT',
      'CHAR(5)',
      'DATE'
    ],
    correctAnswer: 'CHAR(5)'
  },
  {
    question: 'En un diagrama de entidad-relación (DER) debe haber:',
    options: [
      'Entidades, atributos identificadores principales, relaciones y cardinalidades.',
      'Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.',
      'Entidades débiles, atributos, atributos identificadores candidatos, relaciones y cardinalidades.',
      'Ninguna es correcta.',
    ],
    correctAnswer: 'Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.'
  },
  {
    question: 'El dominio es:',
    options: [
      'El conjunto de ocurrencias posibles que puede tener una relación.',
      'El conjunto de valores posibles que puede tener un atributo.',
      'Ninguna es correcta.',
      'El conjunto de ocurrencias posibles que puede tener una entidad.'
    ],
    correctAnswer: 'El conjunto de valores posibles que puede tener un atributo.'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia SELECT?',
    options: [
      'La sentencia SELECT pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).',
      'La sentencia SELECT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).',
      'Ninguna es correcta.',
      'La sentencia SELECT no pertenece al DDL ni al DML.'
    ],
    correctAnswer: 'La sentencia SELECT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia DELETE?',
    options: [
      'La sentencia DELETE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).',
      'Ninguna es correcta.',
      'La sentencia DELETE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).',
      'La sentencia DELETE no pertenece al DDL ni al DML.'
    ],
    correctAnswer: 'La sentencia DELETE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).'
  },
  {
    question: 'Si tenemos 10 filas en la tabla empleados y ejecutamos `ALTER TABLE empleados ADD COLUMN sueldo FLOAT(7,2) UNSIGNED NOT NULL AFTER apellidos;`, ¿qué ocurre?',
    options: [
      'La información del campo sueldo en todas las filas será 0.00',
      'La información del campo sueldo en todas las filas será NULL.',
      'Ninguna es correcta.',
      'La información del campo sueldo en todas las filas estará vacía.'
    ],
    correctAnswer: 'La información del campo sueldo en todas las filas será 0.00'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia CREATE TABLE?',
    options: [
      'La sentencia CREATE TABLE no pertenece al DDL ni al DML.',
      'Ninguna es correcta.',
      'La sentencia CREATE TABLE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).',
      'La sentencia CREATE TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).'
    ],
    correctAnswer: 'La sentencia CREATE TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia CREATE DATABASE?',
    options: [
      'La sentencia CREATE DATABASE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).',
      'Ninguna es correcta.',
      'La sentencia CREATE DATABASE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).',
      'La sentencia CREATE DATABASE no pertenece al DDL ni al DML.'
    ],
    correctAnswer: 'La sentencia CREATE DATABASE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia ALTER TABLE?',
    options: [
      'Ninguna es correcta.',
      'La sentencia ALTER TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).',
      'La sentencia ALTER TABLE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).',
      'La sentencia ALTER TABLE no pertenece al DDL ni al DML.'
    ],
    correctAnswer: 'La sentencia ALTER TABLE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia INSERT?',
    options: [
      'La sentencia INSERT pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).',
      'La sentencia INSERT no pertenece al DDL ni al DML.',
      'Ninguna es correcta.',
      'La sentencia INSERT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).'
    ],
    correctAnswer: 'La sentencia INSERT pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).'
  },
  {
    question: '¿Cómo eliminar correctamente las columnas observaciones y departamento de la tabla empleados?',
    options: [
      'ALTER TABLE empleados DROP observaciones, DROP departamento;',
      'ALTER TABLE empleados DROP observaciones AND departamento;',
      'ALTER TABLE empleados DROP observaciones, departamento;',
      'Ninguna es correcta.'
    ],
    correctAnswer: 'ALTER TABLE empleados DROP observaciones, DROP departamento;'
  },
  {
    question: 'Marca la respuesta correcta: ¿A qué lenguaje pertenece la sentencia UPDATE?',
    options: [
      'La sentencia UPDATE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).',
      'Ninguna es correcta.',
      'La sentencia UPDATE no pertenece al DDL ni al DML.',
      'La sentencia UPDATE pertenece al DDL (Lenguaje de DEFINICIÓN de Datos).'
    ],
    correctAnswer: 'La sentencia UPDATE pertenece al DML (Lenguaje de MANIPULACIÓN de Datos).'
  },
  {
    question: 'Queremos eliminar la columna sueldo de la tabla empleados. ¿Qué query sería la correcta?',
    options: [
      'ALTER TABLE empleados DELETE sueldo;',
      'DROP COLUMN sueldo FROM empleados;',
      'ALTER TABLE empleados DROP sueldo;',
      'Ninguna de las anteriores.'
    ],
    correctAnswer: 'ALTER TABLE empleados DROP sueldo;'
  },

  {
    'question': '¿Quién propuso el modelo Entidad-Relación y en qué año?',
    'options': [
      'Edgar Codd en 1970.',
      'Peter Chen en 1976.',
      'Charles Bachman en 1969.'
    ],
    'correctAnswer': 'Peter Chen en 1976.'
  },
  {
    'question': 'En un diagrama de entidad-relación (DER) debe haber:',
    'options': [
      'Entidades, atributos identificadores principales, relaciones y cardinalidades.',
      'Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.',
      'Entidades débiles, atributos, atributos identificadores candidatos, relaciones y cardinalidades.'
    ],
    'correctAnswer': 'Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.'
  },
  {
    'question': '¿Qué es una entidad en el modelo conceptual de bases de datos?',
    'options': [
      'Una característica o propiedad de un objeto.',
      'Cualquier objeto del mundo real sobre el que se desea almacenar información.',
      'Una asociación entre dos atributos.'
    ],
    'correctAnswer': 'Cualquier objeto del mundo real sobre el que se desea almacenar información.'
  },
  {
    'question': '¿Qué tipo de relación es más común en un modelo Entidad-Relación?',
    'options': [
      'Relaciones reflexivas.',
      'Relaciones binarias.',
      'Relaciones ternarias.'
    ],
    'correctAnswer': 'Relaciones binarias.'
  },
  {
    'question': '¿Qué representa el símbolo de un atributo multivaluado en un DER?',
    'options': [
      'Un atributo que puede tomar varios valores para una misma ocurrencia de entidad.',
      'Un atributo que deriva su valor de otro atributo.',
      'Un atributo compuesto por varios subatributos.'
    ],
    'correctAnswer': 'Un atributo que puede tomar varios valores para una misma ocurrencia de entidad.'
  },
  {
    'question': '¿Qué es un atributo identificador principal (AIP)?',
    'options': [
      'Un atributo que puede ser candidato para identificar una entidad pero no es el principal.',
      'Un atributo o conjunto de atributos seleccionado para identificar unívocamente cada ocurrencia de una entidad.',
      'Un atributo que solo puede tomar un valor para cada ocurrencia de entidad.'
    ],
    'correctAnswer': 'Un atributo o conjunto de atributos seleccionado para identificar unívocamente cada ocurrencia de una entidad.'
  },
  {
    'question': '¿Qué tipo de correspondencia se da cuando una ocurrencia de una entidad puede estar asociada con varias ocurrencias de otra entidad y viceversa?',
    'options': [
      '1:1',
      '1:N',
      'N:M'
    ],
    'correctAnswer': 'N:M'
  },
  {
    'question': '¿Qué caracteriza a una entidad débil en un DER?',
    'options': [
      'Su existencia tiene sentido por sí misma.',
      'Su existencia depende de la existencia de otra entidad.',
      'No tiene atributos identificadores.'
    ],
    'correctAnswer': 'Su existencia depende de la existencia de otra entidad.'
  },
  {
    'question': '¿Qué caracteriza a una entidad débil en un DER?',
    'options': [
      'Su existencia tiene sentido por sí misma.',
      'Su existencia depende de la existencia de otra entidad.',
      'No tiene atributos identificadores.',
      'Siempre participa en relaciones ternarias.'
    ],
    'correctAnswer': 'Su existencia depende de la existencia de otra entidad.'
  },
  {
    'question': '¿Qué elemento del modelo Entidad-Relación representa objetos del mundo real sobre los que se almacena información?',
    'options': [
      'Atributos',
      'Entidades',
      'Cardinalidades',
      'Dominios'
    ],
    'correctAnswer': 'Entidades'
  },
  {
    'question': '¿Cómo se denomina a cada instancia concreta de una entidad?',
    'options': [
      'Atributo derivado',
      'Ocurrencia',
      'Relación ternaria',
      'Cardinalidad'
    ],
    'correctAnswer': 'Ocurrencia'
  },
  {
    'question': '¿Qué tipo de relación asocia una entidad consigo misma?',
    'options': [
      'Binaria',
      'Reflexiva',
      'Ternaria',
      'Recursiva'
    ],
    'correctAnswer': 'Reflexiva'
  },
  {
    'question': 'En una relación 1:1, ¿qué condición se cumple?',
    'options': [
      'Una entidad se relaciona con muchas de la otra',
      'Cada entidad se relaciona con exactamente una de la otra',
      'Ambas entidades pueden relacionarse con múltiples ocurrencias',
      'No existe límite en las ocurrencias relacionadas'
    ],
    'correctAnswer': 'Cada entidad se relaciona con exactamente una de la otra'
  },
  {
    'question': '¿Qué representa un atributo multivaluado?',
    'options': [
      'Un atributo que puede tener varios valores para una misma ocurrencia',
      'Un atributo calculado a partir de otros',
      'Un atributo que forma parte de una clave primaria',
      'Un atributo que no puede ser nulo'
    ],
    'correctAnswer': 'Un atributo que puede tener varios valores para una misma ocurrencia'
  },
  {
    'question': '¿Qué es un atributo derivado?',
    'options': [
      'Un atributo que se calcula a partir de otros',
      'Un atributo que identifica unívocamente una entidad',
      'Un atributo compuesto por varios sub-atributos',
      'Un atributo con valores aleatorios'
    ],
    'correctAnswer': 'Un atributo que se calcula a partir de otros'
  },
  {
    'question': '¿Cuál es el propósito principal de un atributo identificador principal (AIP)?',
    'options': [
      'Describir características de la entidad',
      'Identificar unívocamente cada ocurrencia de la entidad',
      'Establecer relaciones con otras entidades',
      'Servir como atributo opcional'
    ],
    'correctAnswer': 'Identificar unívocamente cada ocurrencia de la entidad'
  },
  {
    'question': '¿Qué simboliza una relación N:M en un DER?',
    'options': [
      'Una relación uno a uno',
      'Una relación uno a muchos',
      'Una relación muchos a muchos',
      'Una relación reflexiva'
    ],
    'correctAnswer': 'Una relación muchos a muchos'
  },
  {
    'question': '¿Qué elemento gráfico se utiliza para representar una entidad débil en un DER?',
    'options': [
      'Rectángulo con doble línea',
      'Rectángulo con línea simple',
      'Elipse con línea discontinua',
      'Rombo con doble línea'
    ],
    'correctAnswer': 'Rectángulo con doble línea'
  },
  {
    'question': '¿Qué tipo de atributo está compuesto por otros sub-atributos?',
    'options': [
      'Atributo simple',
      'Atributo multivaluado',
      'Atributo compuesto',
      'Atributo derivado'
    ],
    'correctAnswer': 'Atributo compuesto'
  },
  {
    'question': '¿Qué representa el grado de una relación?',
    'options': [
      'El número de atributos que participan',
      'El número de entidades que participan',
      'El tipo de cardinalidad',
      'La fuerza de la relación'
    ],
    'correctAnswer': 'El número de entidades que participan'
  },
  {
    'question': '¿Cuál de estos es un ejemplo de atributo derivado?',
    'options': [
      'Número de teléfono',
      'Edad (calculada a partir de la fecha de nacimiento)',
      'Nombre completo',
      'Dirección postal'
    ],
    'correctAnswer': 'Edad (calculada a partir de la fecha de nacimiento)'
  },
  {
    'question': '¿Qué caracteriza a una entidad fuerte?',
    'options': [
      'Depende de otra entidad para existir',
      'No tiene atributos identificadores',
      'Existe independientemente de otras entidades',
      'Solo participa en relaciones 1:1'
    ],
    'correctAnswer': 'Existe independientemente de otras entidades'
  },
  {
    'question': '¿Qué símbolo se utiliza generalmente para representar una relación en un DER?',
    'options': [
      'Rectángulo',
      'Elipse',
      'Rombo',
      'Triángulo'
    ],
    'correctAnswer': 'Rombo'
  },
  {
    'question': '¿Qué es un atributo identificador candidato?',
    'options': [
      'Un atributo que nunca puede ser clave primaria',
      'Un atributo o conjunto de atributos que podrían identificar unívocamente una entidad',
      'Un atributo derivado',
      'Un atributo multivaluado'
    ],
    'correctAnswer': 'Un atributo o conjunto de atributos que podrían identificar unívocamente una entidad'
  },
  {
    'question': '¿Qué representa la cardinalidad en un DER?',
    'options': [
      'El número máximo de ocurrencias asociadas en una relación',
      'El nombre de la entidad',
      'El tipo de atributo',
      'El grado de la relación'
    ],
    'correctAnswer': 'El número máximo de ocurrencias asociadas en una relación'
  },
  {
    'question': '¿Cuál de estas afirmaciones sobre relaciones binarias es correcta?',
    'options': [
      'Involucran tres entidades',
      'Son las menos comunes en los modelos DER',
      'Relacionan exactamente dos entidades',
      'Siempre son relaciones reflexivas'
    ],
    'correctAnswer': 'Relacionan exactamente dos entidades'
  },
  {
    'question': '¿Qué información debe incluirse obligatoriamente en un diagrama Entidad-Relación completo?',
    'options': [
      'Solo entidades y atributos',
      'Solo relaciones y cardinalidades',
      'Entidades, relaciones, atributos y cardinalidades',
      'Solo entidades fuertes y débiles'
    ],
    'correctAnswer': 'Entidades, relaciones, atributos y cardinalidades'
  },
  {
    'question': '¿Qué diferencia hay entre AIP y AIA?',
    'options': [
      'El AIP es siempre multivaluado, el AIA no',
      'El AIP es el identificador principal, el AIA es un candidato no seleccionado',
      'El AIP no puede ser clave, el AIA sí',
      'No hay diferencia, son sinónimos'
    ],
    'correctAnswer': 'El AIP es el identificador principal, el AIA es un candidato no seleccionado'
  }


];
