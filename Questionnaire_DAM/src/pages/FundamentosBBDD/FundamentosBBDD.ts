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
    question: '¿Quién propuso el modelo Entidad-Relación y en qué año?',
    options: [
      'Edgar Codd en 1970.',
      'Peter Chen en 1976.',
      'Charles Bachman en 1969.'
    ],
    correctAnswer: 'Peter Chen en 1976.'
  },
  {
    question: 'En un diagrama de entidad-relación (DER) debe haber:',
    options: [
      'Entidades, atributos identificadores principales, relaciones y cardinalidades.',
      'Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.',
      'Entidades débiles, atributos, atributos identificadores candidatos, relaciones y cardinalidades.'
    ],
    correctAnswer: 'Entidades, atributos, atributos identificadores principales, relaciones y cardinalidades.'
  },
  {
    question: '¿Qué es una entidad en el modelo conceptual de bases de datos?',
    options: [
      'Una característica o propiedad de un objeto.',
      'Cualquier objeto del mundo real sobre el que se desea almacenar información.',
      'Una asociación entre dos atributos.'
    ],
    correctAnswer: 'Cualquier objeto del mundo real sobre el que se desea almacenar información.'
  },
  {
    question: '¿Qué tipo de relación es más común en un modelo Entidad-Relación?',
    options: [
      'Relaciones reflexivas.',
      'Relaciones binarias.',
      'Relaciones ternarias.'
    ],
    correctAnswer: 'Relaciones binarias.'
  },
  {
    question: '¿Qué representa el símbolo de un atributo multivaluado en un DER?',
    options: [
      'Un atributo que puede tomar varios valores para una misma ocurrencia de entidad.',
      'Un atributo que deriva su valor de otro atributo.',
      'Un atributo compuesto por varios subatributos.'
    ],
    correctAnswer: 'Un atributo que puede tomar varios valores para una misma ocurrencia de entidad.'
  },
  {
    question: '¿Qué es un atributo identificador principal (AIP)?',
    options: [
      'Un atributo que puede ser candidato para identificar una entidad pero no es el principal.',
      'Un atributo o conjunto de atributos seleccionado para identificar unívocamente cada ocurrencia de una entidad.',
      'Un atributo que solo puede tomar un valor para cada ocurrencia de entidad.'
    ],
    correctAnswer: 'Un atributo o conjunto de atributos seleccionado para identificar unívocamente cada ocurrencia de una entidad.'
  },
  {
    question: '¿Qué tipo de correspondencia se da cuando una ocurrencia de una entidad puede estar asociada con varias ocurrencias de otra entidad y viceversa?',
    options: [
      '1:1',
      '1:N',
      'N:M'
    ],
    correctAnswer: 'N:M'
  },
  {
    question: '¿Qué caracteriza a una entidad débil en un DER?',
    options: [
      'Su existencia tiene sentido por sí misma.',
      'Su existencia depende de la existencia de otra entidad.',
      'No tiene atributos identificadores.'
    ],
    correctAnswer: 'Su existencia depende de la existencia de otra entidad.'
  },
  {
    question: '¿Qué caracteriza a una entidad débil en un DER?',
    options: [
      'Su existencia tiene sentido por sí misma.',
      'Su existencia depende de la existencia de otra entidad.',
      'No tiene atributos identificadores.',
      'Siempre participa en relaciones ternarias.'
    ],
    correctAnswer: 'Su existencia depende de la existencia de otra entidad.'
  },
  {
    question: '¿Qué elemento del modelo Entidad-Relación representa objetos del mundo real sobre los que se almacena información?',
    options: [
      'Atributos',
      'Entidades',
      'Cardinalidades',
      'Dominios'
    ],
    correctAnswer: 'Entidades'
  },
  {
    question: '¿Cómo se denomina a cada instancia concreta de una entidad?',
    options: [
      'Atributo derivado',
      'Ocurrencia',
      'Relación ternaria',
      'Cardinalidad'
    ],
    correctAnswer: 'Ocurrencia'
  },
  {
    question: '¿Qué tipo de relación asocia una entidad consigo misma?',
    options: [
      'Binaria',
      'Reflexiva',
      'Ternaria',
      'Recursiva'
    ],
    correctAnswer: 'Reflexiva'
  },
  {
    question: 'En una relación 1:1, ¿qué condición se cumple?',
    options: [
      'Una entidad se relaciona con muchas de la otra',
      'Cada entidad se relaciona con exactamente una de la otra',
      'Ambas entidades pueden relacionarse con múltiples ocurrencias',
      'No existe límite en las ocurrencias relacionadas'
    ],
    correctAnswer: 'Cada entidad se relaciona con exactamente una de la otra'
  },
  {
    question: '¿Qué representa un atributo multivaluado?',
    options: [
      'Un atributo que puede tener varios valores para una misma ocurrencia',
      'Un atributo calculado a partir de otros',
      'Un atributo que forma parte de una clave primaria',
      'Un atributo que no puede ser nulo'
    ],
    correctAnswer: 'Un atributo que puede tener varios valores para una misma ocurrencia'
  },
  {
    question: '¿Qué es un atributo derivado?',
    options: [
      'Un atributo que se calcula a partir de otros',
      'Un atributo que identifica unívocamente una entidad',
      'Un atributo compuesto por varios sub-atributos',
      'Un atributo con valores aleatorios'
    ],
    correctAnswer: 'Un atributo que se calcula a partir de otros'
  },
  {
    question: '¿Cuál es el propósito principal de un atributo identificador principal (AIP)?',
    options: [
      'Describir características de la entidad',
      'Identificar unívocamente cada ocurrencia de la entidad',
      'Establecer relaciones con otras entidades',
      'Servir como atributo opcional'
    ],
    correctAnswer: 'Identificar unívocamente cada ocurrencia de la entidad'
  },
  {
    question: '¿Qué simboliza una relación N:M en un DER?',
    options: [
      'Una relación uno a uno',
      'Una relación uno a muchos',
      'Una relación muchos a muchos',
      'Una relación reflexiva'
    ],
    correctAnswer: 'Una relación muchos a muchos'
  },
  {
    question: '¿Qué elemento gráfico se utiliza para representar una entidad débil en un DER?',
    options: [
      'Rectángulo con doble línea',
      'Rectángulo con línea simple',
      'Elipse con línea discontinua',
      'Rombo con doble línea'
    ],
    correctAnswer: 'Rectángulo con doble línea'
  },
  {
    question: '¿Qué tipo de atributo está compuesto por otros sub-atributos?',
    options: [
      'Atributo simple',
      'Atributo multivaluado',
      'Atributo compuesto',
      'Atributo derivado'
    ],
    correctAnswer: 'Atributo compuesto'
  },
  {
    question: '¿Qué representa el grado de una relación?',
    options: [
      'El número de atributos que participan',
      'El número de entidades que participan',
      'El tipo de cardinalidad',
      'La fuerza de la relación'
    ],
    correctAnswer: 'El número de entidades que participan'
  },
  {
    question: '¿Cuál de estos es un ejemplo de atributo derivado?',
    options: [
      'Número de teléfono',
      'Edad (calculada a partir de la fecha de nacimiento)',
      'Nombre completo',
      'Dirección postal'
    ],
    correctAnswer: 'Edad (calculada a partir de la fecha de nacimiento)'
  },
  {
    question: '¿Qué caracteriza a una entidad fuerte?',
    options: [
      'Depende de otra entidad para existir',
      'No tiene atributos identificadores',
      'Existe independientemente de otras entidades',
      'Solo participa en relaciones 1:1'
    ],
    correctAnswer: 'Existe independientemente de otras entidades'
  },
  {
    question: '¿Qué símbolo se utiliza generalmente para representar una relación en un DER?',
    options: [
      'Rectángulo',
      'Elipse',
      'Rombo',
      'Triángulo'
    ],
    correctAnswer: 'Rombo'
  },
  {
    question: '¿Qué es un atributo identificador candidato?',
    options: [
      'Un atributo que nunca puede ser clave primaria',
      'Un atributo o conjunto de atributos que podrían identificar unívocamente una entidad',
      'Un atributo derivado',
      'Un atributo multivaluado'
    ],
    correctAnswer: 'Un atributo o conjunto de atributos que podrían identificar unívocamente una entidad'
  },
  {
    question: '¿Qué representa la cardinalidad en un DER?',
    options: [
      'El número máximo de ocurrencias asociadas en una relación',
      'El nombre de la entidad',
      'El tipo de atributo',
      'El grado de la relación'
    ],
    correctAnswer: 'El número máximo de ocurrencias asociadas en una relación'
  },
  {
    question: '¿Cuál de estas afirmaciones sobre relaciones binarias es correcta?',
    options: [
      'Involucran tres entidades',
      'Son las menos comunes en los modelos DER',
      'Relacionan exactamente dos entidades',
      'Siempre son relaciones reflexivas'
    ],
    correctAnswer: 'Relacionan exactamente dos entidades'
  },
  {
    question: '¿Qué información debe incluirse obligatoriamente en un diagrama Entidad-Relación completo?',
    options: [
      'Solo entidades y atributos',
      'Solo relaciones y cardinalidades',
      'Entidades, relaciones, atributos y cardinalidades',
      'Solo entidades fuertes y débiles'
    ],
    correctAnswer: 'Entidades, relaciones, atributos y cardinalidades'
  },
  {
    question: '¿Qué diferencia hay entre AIP y AIA?',
    options: [
      'El AIP es siempre multivaluado, el AIA no',
      'El AIP es el identificador principal, el AIA es un candidato no seleccionado',
      'El AIP no puede ser clave, el AIA sí',
      'No hay diferencia, son sinónimos'
    ],
    correctAnswer: 'El AIP es el identificador principal, el AIA es un candidato no seleccionado'
  },
  {
    question: '¿Qué comando se utiliza para eliminar una tabla en SQL?',
    options: [
      'DELETE TABLE',
      'ERASE TABLE',
      'DROP TABLE',
      'REMOVE TABLE'
    ],
    correctAnswer: 'DROP TABLE'
  },
  {
    question: '¿Qué palabra clave se usa para evitar valores duplicados en una consulta SELECT?',
    options: [
      'DISTINCT',
      'UNIQUE',
      'DIFFERENT',
      'FILTER'
    ],
    correctAnswer: 'DISTINCT'
  },
  {
    question: '¿Cuál es la cláusula utilizada para ordenar los resultados de una consulta?',
    options: [
      'SORT',
      'ORDER BY',
      'ARRANGE',
      'GROUP BY'
    ],
    correctAnswer: 'ORDER BY'
  },
  {
    question: '¿Qué operador lógico se usa para combinar condiciones en una cláusula WHERE?',
    options: [
      'LINK',
      'WITH',
      'UNION',
      'AND'
    ],
    correctAnswer: 'AND'
  },
  {
    question: '¿Cuál de los siguientes tipos de datos es adecuado para almacenar texto en SQL?',
    options: [
      'DATE',
      'INTEGER',
      'FLOAT',
      'VARCHAR'
    ],
    correctAnswer: 'VARCHAR'
  },
  {
    question: "¿Cuál es el valor que representa 'sin datos' en una base de datos SQL?",
    options: [
      'NULL',
      'ZERO',
      'BLANK',
      'EMPTY'
    ],
    correctAnswer: 'NULL'
  },
  {
    question: '¿Qué comando se usa para agregar una nueva fila a una tabla?',
    options: [
      'APPEND',
      'PUSH INTO',
      'INSERT INTO',
      'ADD'
    ],
    correctAnswer: 'INSERT INTO'
  },
  {
    question: '¿Cuál es la cláusula que se usa para agrupar resultados que tienen el mismo valor en una columna?',
    options: [
      'CLUSTER BY',
      'JOIN',
      'GROUP BY',
      'ORDER BY'
    ],
    correctAnswer: 'GROUP BY'
  },
  {
    question: '¿Qué comando se usa para modificar datos existentes en una tabla?',
    options: [
      'UPDATE',
      'CHANGE',
      'ALTER',
      'MODIFY'
    ],
    correctAnswer: 'UPDATE'
  },
  {
    question: '¿Qué comando de SQL se usa para eliminar todos los registros de una tabla sin borrar la tabla en sí?',
    options: [
      'TRUNCATE TABLE',
      'DROP TABLE',
      'DELETE DATABASE',
      'REMOVE TABLE'
    ],
    correctAnswer: 'TRUNCATE TABLE'
  },
  {
    question: '¿Qué operador se usa en SQL para buscar un patrón en una columna de texto?',
    options: [
      'LIKE',
      'FIND',
      'SEARCH',
      'LOCATE'
    ],
    correctAnswer: 'LIKE'
  },
  {
    question: '¿Qué sentencia SQL se utiliza para cambiar la estructura de una tabla existente?',
    options: [
      'ALTER TABLE',
      'MODIFY TABLE',
      'CHANGE TABLE',
      'UPDATE TABLE'
    ],
    correctAnswer: 'ALTER TABLE'
  },
  {
    question: '¿Cuál de las siguientes sentencias se usa para recuperar datos de una base de datos?',
    options: [
      'GET',
      'EXTRACT',
      'SELECT',
      'FETCH'
    ],
    correctAnswer: 'SELECT'
  },
  {
    question: '¿Qué palabra clave se usa en SQL para asegurar que una columna no pueda contener valores NULL?',
    options: [
      'REQUIRED',
      'NOT NULL',
      'UNIQUE',
      'NO EMPTY'
    ],
    correctAnswer: 'NOT NULL'
  },
  {
    question: '¿Qué cláusula se utiliza en SQL para filtrar registros después de realizar una agrupación?',
    options: [
      'WHERE',
      'HAVING',
      'ORDER BY',
      'GROUP BY'
    ],
    correctAnswer: 'HAVING'
  },
  {
    question: '¿Qué tipo de clave se utiliza para identificar de manera única un registro en una tabla?',
    options: [
      'PRIMARY KEY',
      'FOREIGN KEY',
      'UNIQUE KEY',
      'IDENTIFIER KEY'
    ],
    correctAnswer: 'PRIMARY KEY'
  },
  {
    question: '¿Qué comando se utiliza para eliminar una base de datos completa en SQL?',
    options: [
      'DROP DATABASE',
      'ERASE DATABASE',
      'DELETE DATABASE',
      'REMOVE DATABASE'
    ],
    correctAnswer: 'DROP DATABASE'
  },
  {
    question: '¿Qué función SQL devuelve el número de filas que cumple una condición?',
    options: [
      'SUM()',
      'COUNT()',
      'TOTAL()',
      'NUMBER()'
    ],
    correctAnswer: 'COUNT()'
  },
  {
    question: '¿Cuál es el propósito de un alias en una consulta SQL?',
    options: [
      'Crear índices en tablas',
      'Cambiar temporalmente el nombre de una tabla o columna',
      'Eliminar registros duplicados',
      'Actualizar datos automáticamente'
    ],
    correctAnswer: 'Cambiar temporalmente el nombre de una tabla o columna'
  },
  {
    question: '¿Cuál es el resultado de una función agregada como SUM() en SQL?',
    options: [
      'Devuelve la suma de valores de una columna',
      'Devuelve el número total de filas',
      'Devuelve el valor máximo de una columna',
      'Devuelve el primer valor encontrado'
    ],
    correctAnswer: 'Devuelve la suma de valores de una columna'
  },
  {
    question: '¿Qué palabra clave se usa para extraer datos de varias tablas basándose en una relación entre ellas?',
    options: [
      'MERGE',
      'JOIN',
      'LINK',
      'COMBINE'
    ],
    correctAnswer: 'JOIN'
  },
  {
    question: '¿Cuál de las siguientes funciones SQL devuelve la media de un conjunto de valores?',
    options: [
      'SUM()',
      'AVG()',
      'MEDIAN()',
      'MEAN()'
    ],
    correctAnswer: 'AVG()'
  },
  {
    question: '¿Qué operador de comparación se utiliza para comprobar si un valor está en un conjunto de resultados?',
    options: [
      'CONTAINS',
      'ANY',
      'IN',
      'HAS'
    ],
    correctAnswer: 'IN'
  },
  {
    question: '¿Qué comando se utiliza para cambiar el nombre de una tabla en SQL?',
    options: [
      'ALTER NAME',
      'RENAME TABLE',
      'CHANGE NAME',
      'MODIFY TABLE'
    ],
    correctAnswer: 'RENAME TABLE'
  },
  {
    question: '¿Qué función se puede usar para redondear siempre a la alta un número decimal en SQL?',
    options: [
      'CEIL()',
      'ROUND()',
      'FLOOR()',
      'TRUNCATE()'
    ],
    correctAnswer: 'CEIL()'
  },
  {
    question: '¿Cuál de las siguientes instrucciones se usa para crear una nueva tabla en SQL?',
    options: [
      'MAKE TABLE',
      'CREATE TABLE',
      'NEW TABLE',
      'BUILD TABLE'
    ],
    correctAnswer: 'CREATE TABLE'
  },
  {
    question: '¿Qué comando se usa para eliminar filas específicas de una tabla basándose en una condición?',
    options: [
      'ERASE',
      'REMOVE',
      'DELETE FROM',
      'DROP'
    ],
    correctAnswer: 'DELETE FROM'
  },
  {
    question: '¿Cuál es la palabra clave en SQL para ordenar resultados de manera descendente?',
    options: [
      'DESC',
      'DOWN',
      'LOWER',
      'ORDER DOWN'
    ],
    correctAnswer: 'DESC'
  },
  {
    question: '¿Qué operador se utiliza para verificar si un valor es NULL en SQL?',
    options: [
      'IS NOT NULL',
      '= NULL',
      '== NULL',
      'IS NULL'
    ],
    correctAnswer: 'IS NULL'
  },
  {
    question: '¿Qué tipo de dato es más adecuado para almacenar números enteros en SQL?',
    options: [
      'TEXT',
      'VARCHAR',
      'INTEGER',
      'DATE'
    ],
    correctAnswer: 'INTEGER'
  },
  {
    question: '¿Cuál es la diferencia principal entre INNER JOIN y LEFT JOIN?',
    options: [
      'LEFT JOIN devuelve todas las filas de la tabla de la izquierda, INNER JOIN solo las coincidentes',
      'INNER JOIN devuelve más resultados que LEFT JOIN',
      'LEFT JOIN elimina duplicados automáticamente',
      'INNER JOIN permite datos NULL en la tabla de la izquierda'
    ],
    correctAnswer: 'LEFT JOIN devuelve todas las filas de la tabla de la izquierda, INNER JOIN solo las coincidentes'
  },
  {
    question: '¿Cuál de estas funciones de agregación devuelve el valor más grande de una columna?',
    options: [
      'MAX()',
      'GREATEST()',
      'TOP()',
      'BIGGEST()'
    ],
    correctAnswer: 'MAX()'
  },
  {
    question: '¿Cuál es el propósito de usar un índice en una tabla de base de datos?',
    options: [
      'Reducir el tamaño de la tabla',
      'Incrementar la velocidad de las búsquedas',
      'Crear copias de seguridad automáticas',
      'Ordenar los datos de forma permanente'
    ],
    correctAnswer: 'Incrementar la velocidad de las búsquedas'
  },
  {
    question: '¿Qué cláusula de SQL permite limitar el número de filas que devuelve una consulta?',
    options: [
      'LIMIT',
      'TOP',
      'ROWS',
      'FETCH'
    ],
    correctAnswer: 'LIMIT'
  },
  {
    question: '¿Cuál es la diferencia principal entre un LEFT JOIN y un RIGHT JOIN en SQL?',
    options: [
      'LEFT JOIN devuelve solo las filas de la tabla de la derecha, RIGHT JOIN de la tabla de la izquierda',
      'LEFT JOIN devuelve todas las filas de la tabla de la izquierda, RIGHT JOIN de la tabla de la derecha',
      'LEFT JOIN elimina filas duplicadas, RIGHT JOIN no',
      'LEFT JOIN se usa solo en relaciones 1:N, RIGHT JOIN solo en 1:1'
    ],
    correctAnswer: 'LEFT JOIN devuelve todas las filas de la tabla de la izquierda, RIGHT JOIN de la tabla de la derecha'
  },
  {
    question: '¿Qué tipo de relación existe entre una tabla CLIENTS y una tabla ORDERS en un modelo relacional si un cliente puede tener muchos pedidos pero un pedido puede ser realizado por un solo cliente?',
    options: [
      '1:1',
      '1:N',
      'N:M',
      'N:1'
    ],
    correctAnswer: '1:N'
  },
  {
    question: 'Cuando se usa un INNER JOIN en SQL, ¿qué resultado se obtiene?',
    options: [
      'Todos los registros de ambas tablas, incluso si no coinciden',
      'Solo los registros que coinciden en ambas tablas',
      'Todos los registros de la tabla de la izquierda, sin importar si coinciden',
      'Todos los registros de la tabla de la derecha, sin importar si coinciden'
    ],
    correctAnswer: 'Solo los registros que coinciden en ambas tablas'
  },
  {
    question: '¿Qué tipo de relación representa una tabla DETAILS que contiene las FK product_id y order_id de las tablas PRODUCTS y ORDERS?',
    options: [
      '1:1',
      '1:N',
      'N:M',
      '0:N'
    ],
    correctAnswer: 'N:M'
  },
  {
    question: 'En un esquema E/R, ¿cuál de los siguientes describe mejor una relación 1:1 entre las entidades EMPLOYEES y OFFICES?',
    options: [
      'Un empleado puede estar en varias oficinas, pero cada oficina tiene un solo empleado',
      'Cada empleado tiene una sola oficina asignada y cada oficina tiene un solo empleado',
      'Un empleado puede tener muchas oficinas, pero cada oficina solo tiene un empleado',
      'Los empleados no tienen asignada ninguna oficina'
    ],
    correctAnswer: 'Cada empleado tiene una sola oficina asignada y cada oficina tiene un solo empleado'
  },
  {
    question: '¿Qué hace el LEFT JOIN en una consulta SQL?',
    options: [
      'Devuelve todos los registros de la tabla de la izquierda, y los registros correspondientes de la tabla de la derecha',
      'Devuelve solo los registros que coinciden en ambas tablas',
      'Devuelve todos los registros de la tabla de la derecha, y los correspondientes de la tabla de la izquierda',
      'Devuelve solo los registros de la tabla de la derecha, aunque no coincidan'
    ],
    correctAnswer: 'Devuelve todos los registros de la tabla de la izquierda, y los registros correspondientes de la tabla de la derecha'
  },
  {
    question: 'En un modelo relacional, ¿cómo se representa una relación 1:N entre CATEGORIES y PRODUCTS?',
    options: [
      'Un producto puede pertenecer a varias categorías, pero cada categoría tiene un solo producto',
      'Cada categoría puede tener muchos productos, pero cada producto pertenece a una sola categoría',
      'Cada producto tiene una sola categoría y cada categoría tiene muchos productos',
      'Ninguna de las anteriores'
    ],
    correctAnswer: 'Cada categoría puede tener muchos productos, pero cada producto pertenece a una sola categoría'
  },
  {
    question: 'En un modelo E/R, ¿cómo se representa una relación N:M entre las tablas BOOKS y AUTHORS?',
    options: [
      'Una tabla intermedia BOOKS_AUTHORS que contiene las referencias a las claves primarias de ambas tablas',
      'Un campo author_id en la tabla BOOKS',
      'Un campo book_id en la tabla AUTHORS',
      'Ninguna de las anteriores'
    ],
    correctAnswer: 'Una tabla intermedia BOOKS_AUTHORS que contiene las referencias a las claves primarias de ambas tablas'
  },
  {
    question: '¿Qué sucede si se usa un RIGHT JOIN entre dos tablas en SQL?',
    options: [
      'Se obtienen todas las filas de la tabla de la izquierda, y solo las filas coincidentes de la tabla de la derecha (las no coincidentes mostrarán NULL)',
      'Se obtienen solo las filas coincidentes de ambas tablas',
      'Se obtienen todas las filas de la tabla de la derecha, y solo las filas coincidentes de la izquierda (las no coincidentes mostrarán NULL)',
      'Se obtienen todas las filas de ambas tablas, sin importar si coinciden o no'
    ],
    correctAnswer: 'Se obtienen todas las filas de la tabla de la derecha, y solo las filas coincidentes de la izquierda (las no coincidentes mostrarán NULL)'
  },
  {
    question: '¿Cuál de las siguientes consultas devuelve el número total de pedidos realizados en la tabla ORDERS?',
    options: [
      'SELECT COUNT(*) FROM orders;',
      'SELECT SUM(*) FROM orders;',
      'SELECT TOTAL(*) FROM orders;',
      'SELECT NUMBER(*) FROM orders;'
    ],
    correctAnswer: 'SELECT COUNT(*) FROM orders;'
  },
  {
    question: '¿Qué consulta devuelve todos los productos cuyo precio es mayor que 100 ordenados de mayor a menor?',
    options: [
      'SELECT * FROM products WHERE price > 100 ORDER BY price ASC;',
      'SELECT * FROM products WHERE price > 100 ORDER BY price DESC;',
      'SELECT price FROM products WHERE price > 100;',
      'SELECT products WHERE price > 100 SORT BY price DESC;'
    ],
    correctAnswer: 'SELECT * FROM products WHERE price > 100 ORDER BY price DESC;'
  },
  {
    question: "¿Cómo escribirías una consulta que obtiene todos los clientes cuyo nombre empieza por 'A'?",
    options: [
      "SELECT * FROM clients WHERE name LIKE '%A';",
      "SELECT * FROM clients WHERE name LIKE 'A%';",
      "SELECT * FROM clients WHERE name = 'A%';",
      "SELECT * FROM clients WHERE name = '%A%';"
    ],
    correctAnswer: "SELECT * FROM clients WHERE name LIKE 'A%';"
  },
  {
    question: '¿Qué hace esta consulta? SELECT DISTINCT brand FROM products;',
    options: [
      'Muestra todas las marcas repetidas de productos.',
      'Muestra todas las marcas, sin repetir.',
      'Elimina la columna marca de productos.',
      'Muestra solo productos cuyo nombre es distinto.'
    ],
    correctAnswer: 'Muestra todas las marcas, sin repetir.'
  },
  {
    question: '¿Cuál es el resultado de esta consulta? SELECT AVG(price) FROM products;',
    options: [
      'Suma todos los precios de productos.',
      'Calcula el precio más bajo entre todos los productos.',
      'Calcula la media de los precios de todos los productos.',
      'Devuelve el precio más alto de la tabla productos.'
    ],
    correctAnswer: 'Calcula la media de los precios de todos los productos.'
  },
  {
    question: '¿Qué consulta devolvería los pedidos realizados entre 2023-01-01 y 2023-12-31?',
    options: [
      'SELECT * FROM orders WHERE order_date IN (2023-01-01, 2023-12-31);',
      "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';",
      "SELECT * FROM orders WHERE order_date = '2023-01-01' OR '2023-12-31';",
      "SELECT * FROM orders WHERE order_date > '2023-01-01';"
    ],
    correctAnswer: "SELECT * FROM orders WHERE order_date BETWEEN '2023-01-01' AND '2023-12-31';"
  },
  {
    question: '¿Qué efecto tiene usar GROUP BY en una consulta?',
    options: [
      'Agrupa filas que tienen los mismos valores en las columnas especificadas.',
      'Combina dos tablas en una sola.',
      'Filtra las filas que cumplen una condición.',
      'Ordena las filas de la consulta.'
    ],
    correctAnswer: 'Agrupa filas que tienen los mismos valores en las columnas especificadas.'
  },
  {
    question: '¿Cómo obtendrías la cantidad total de unidades vendidas por producto?',
    options: [
      'SELECT product_id, COUNT(*) FROM orders_details GROUP BY product_id;',
      'SELECT product_id, SUM(amount) FROM orders_details GROUP BY product_id;',
      'SELECT product_id, AVG(amount) FROM orders_details;',
      'SELECT product_id, amount FROM orders_details;'
    ],
    correctAnswer: 'SELECT product_id, SUM(amount) FROM orders_details GROUP BY product_id;'
  },
  {
    question: '¿Qué hace la siguiente consulta SQL? SELECT name FROM clients WHERE address IS NULL;',
    options: [
      'Devuelve clientes que no tienen un email.',
      'Devuelve clientes sin dirección de envío registrada.',
      'Devuelve todos los clientes.',
      'Devuelve clientes cuyo nombre es NULL.'
    ],
    correctAnswer: 'Devuelve clientes sin dirección de envío registrada.'
  },
  {
    question: '¿Cuál es la manera más correcta, entre estas consultas, de mostrar todos los productos que no tienen stock disponible?',
    options: [
      'SELECT * FROM products WHERE stock = 0;',
      'SELECT * FROM products WHERE stock > 0;',
      'SELECT * FROM products WHERE stock IS NULL;',
      'SELECT * FROM products WHERE stock <> 0;'
    ],
    correctAnswer: 'SELECT * FROM products WHERE stock = 0;'
  },
  {
    question: '¿Qué consulta devuelve los nombres de los productos con un precio superior al precio medio de todos los productos?',
    options: [
      'SELECT name FROM products WHERE price > (SELECT price FROM products);',
      'SELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);',
      'SELECT name FROM products WHERE price IN (SELECT AVG(price) FROM products);',
      'SELECT name FROM products WHERE price > AVG(price);'
    ],
    correctAnswer: 'SELECT name FROM products WHERE price > (SELECT AVG(price) FROM products);'
  },
  {
    question: '¿Qué hace una cláusula HAVING en SQL?',
    options: [
      'Filtra filas después de hacer un GROUP BY.',
      'Filtra columnas seleccionadas en la consulta.',
      'Establece condiciones para combinaciones de tablas.',
      'Elimina filas duplicadas en el resultado.'
    ],
    correctAnswer: 'Filtra filas después de hacer un GROUP BY.'
  },
  {
    question: '¿Cuál de estas consultas devuelve los clientes que han realizado más de 5 pedidos?',
    options: [
      'SELECT client_id FROM orders WHERE COUNT(*) > 5;',
      'SELECT client_id FROM orders GROUP BY client_id HAVING COUNT(*) > 5;',
      'SELECT client_id FROM orders GROUP BY client_id WHERE COUNT(*) > 5;',
      'SELECT client_id FROM orders WHERE client_id > 5 GROUP BY client_id;'
    ],
    correctAnswer: 'SELECT client_id FROM orders GROUP BY client_id HAVING COUNT(*) > 5;'
  },
  {
    question: '¿Cuál es el propósito principal de un LEFT JOIN?',
    options: [
      'Devolver solo filas que coinciden en ambas tablas.',
      'Devolver todas las filas de la tabla de la izquierda, aunque no haya coincidencia en la derecha.',
      'Devolver todas las filas de la tabla de la derecha.',
      'Devolver solo las filas que no coinciden.'
    ],
    correctAnswer: 'Devolver todas las filas de la tabla de la izquierda, aunque no haya coincidencia en la derecha.'
  },
  {
    question: '¿Qué hace un RIGHT JOIN entre dos tablas?',
    options: [
      'Devuelve todas las filas de la primera tabla, y solo las coincidencias de la segunda.',
      'Devuelve todas las filas de la segunda tabla, y solo las coincidencias de la primera.',
      'Devuelve únicamente las filas comunes a ambas tablas.',
      'Devuelve todas las combinaciones posibles de filas.'
    ],
    correctAnswer: 'Devuelve todas las filas de la segunda tabla, y solo las coincidencias de la primera.'
  },
  {
    question: '¿Cuál de estas consultas calcula la cantidad total vendida por producto y muestra solo los que superan 100 unidades?',
    options: [
      'SELECT product_id, COUNT(*) FROM orders GROUP BY product_id HAVING COUNT(*) > 100;',
      'SELECT product_id, SUM(*) FROM orders WHERE amount > 100 GROUP BY product_id;',
      'SELECT product_id FROM orders GROUP BY product_id WHERE SUM(amount) > 100;',
      'SELECT product_id, COUNT(*) FROM orders WHERE amount > 100 GROUP BY product_id;'
    ],
    correctAnswer: 'SELECT product_id, COUNT(*) FROM orders GROUP BY product_id HAVING COUNT(*) > 100;'
  },
  {
    question: '¿Cuál de estas consultas muestra el producto más caro utilizando una subconsulta?',
    options: [
      'SELECT * FROM products WHERE price = (SELECT MIN(price) FROM products);',
      'SELECT * FROM products WHERE price = (SELECT MAX(price) FROM products);',
      'SELECT * FROM products ORDER BY price ASC LIMIT 1;',
      'SELECT name FROM products GROUP BY price;'
    ],
    correctAnswer: 'SELECT * FROM products WHERE price = (SELECT MAX(price) FROM products);'
  },
  {
    question: '¿Qué significa hacer un INNER JOIN entre dos tablas?',
    options: [
      'Combinar todas las filas de ambas tablas, independientemente de coincidencias.',
      'Combinar filas que tienen coincidencias en ambas tablas.',
      'Combinar filas sin coincidencias.',
      'Mostrar únicamente filas de la primera tabla.'
    ],
    correctAnswer: 'Combinar filas que tienen coincidencias en ambas tablas.'
  },
  {
    question: '¿Qué hace esta consulta? SELECT name, SUM(quantity) FROM sales GROUP BY name HAVING SUM(quantity) >= 100;',
    options: [
      'Muestra nombres y cantidades de ventas donde el total vendido es igual o mayor a 100.',
      'Muestra todos los nombres de clientes.',
      'Agrupa ventas por nombre de cliente, sin filtros.',
      'Suma el precio total de cada venta.'
    ],
    correctAnswer: 'Muestra nombres y cantidades de ventas donde el total vendido es igual o mayor a 100.'
  },
  {
    question: '¿Qué consulta muestra los departamentos que tienen más de 10 empleados?',
    options: [
      'SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) > 10;',
      'SELECT department_id FROM employees WHERE COUNT(*) > 10 GROUP BY department_id;',
      'SELECT department_id FROM employees WHERE SUM(*) > 10;',
      'SELECT department_id FROM employees HAVING COUNT(*) > 10;'
    ],
    correctAnswer: 'SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(*) > 10;'
  },
  {
    question: '¿Cuál es la sintaxis correcta para agregar una clave externa a una tabla ya existente?',
    options: [
      'ALTER TABLE table_name ADD CONSTRAINT FOREIGN KEY (column) REFERENCES another_table_name(column);',
      'ALTER TABLE table_name MODIFY FOREIGN KEY (column) REFERENCES another_table_name(column);',
      'ALTER TABLE table_name SET FOREIGN KEY column REFERENCES another_table_name(column);',
      'ALTER TABLE table_name FOREIGN (column) REFERENCES another_table_name(column);'
    ],
    correctAnswer: 'ALTER TABLE table_name ADD CONSTRAINT FOREIGN KEY (column) REFERENCES another_table_name(column);'
  },
  {
    question: '¿Qué tipo de datos deberías usar para almacenar un texto corto como un nombre?',
    options: [
      'VARCHAR',
      'BOOLEAN',
      'CHAR',
      'INT'
    ],
    correctAnswer: 'VARCHAR'
  },
  {
    question: '¿Cuál es el tipo de datos adecuado para almacenar valores TRUE o FALSE?',
    options: [
      'BOOLEAN',
      'INTEGER',
      'VARCHAR(1)',
      'DATE'
    ],
    correctAnswer: 'BOOLEAN'
  },
  {
    question: '¿Cuál sería el tipo de datos más apropiado para almacenar una fecha de nacimiento?',
    options: [
      'VARCHAR',
      'DATE',
      'TEXT',
      'BOOLEAN'
    ],
    correctAnswer: 'DATE'
  },
  {
    question: '¿Qué tipo de datos deberías usar para almacenar un número con decimales?',
    options: [
      'FLOAT',
      'BOOLEAN',
      'VARCHAR',
      'DATE'
    ],
    correctAnswer: 'FLOAT'
  },
  {
    question: '¿Para almacenar textos largos como descripciones, qué tipo de dato sería más adecuado?',
    options: [
      'CHAR',
      'TEXT',
      'INT',
      'FLOAT'
    ],
    correctAnswer: 'TEXT'
  },
  {
    question: '¿Cuál es la diferencia principal entre CHAR y VARCHAR?',
    options: [
      'VARCHAR tiene longitud fija, CHAR tiene longitud variable',
      'CHAR tiene longitud fija, VARCHAR tiene longitud variable',
      'VARCHAR almacena números, CHAR textos',
      'No hay ninguna diferencia entre ellos'
    ],
    correctAnswer: 'CHAR tiene longitud fija, VARCHAR tiene longitud variable'
  },
  {
    question: '¿Cuál de los siguientes tipos de datos puede almacenar valores de fecha y hora juntos?',
    options: [
      'DATETIME',
      'NOW()',
      'TIME',
      'CURRENT_TIMESTAMP'
    ],
    correctAnswer: 'DATETIME'
  },
  {
    question: '¿Cuál de los siguientes tipos de datos usarías para almacenar solo una hora (sin fecha)?',
    options: [
      'DATE',
      'TIME',
      'DATETIME',
      'VARCHAR(5)'
    ],
    correctAnswer: 'TIME'
  },
  {
    question: '¿Qué restricción se usa para evitar que una columna acepte valores nulos?',
    options: [
      'NOT NULL',
      'UNIQUE',
      'CHECK',
      'FOREIGN KEY'
    ],
    correctAnswer: 'NOT NULL'
  },
  {
    question: '¿Cuál es la función principal de la restricción UNIQUE en SQL?',
    options: [
      'Permitir valores repetidos en una columna',
      'Impedir valores duplicados en una columna',
      'Obligar a usar siempre valores nulos',
      'Restringir la longitud de un campo de texto'
    ],
    correctAnswer: 'Impedir valores duplicados en una columna'
  },
  {
    question: '¿Qué restricción asegura que el valor de una columna cumpla una condición?',
    options: [
      'PRIMARY KEY',
      'DEFAULT',
      'CHECK',
      'UNIQUE'
    ],
    correctAnswer: 'CHECK'
  },
  {
    question: '¿Qué restricción define un valor automático si no se especifica ninguno en una inserción?',
    options: [
      'DEFAULT',
      'NOT NULL',
      'UNIQUE',
      'FOREIGN KEY'
    ],
    correctAnswer: 'DEFAULT'
  },
  {
    question: '¿Cuál de las siguientes restricciones garantiza que una columna sea única y no nula al mismo tiempo?',
    options: [
      'FOREIGN KEY',
      'NOT NULL UNIQUE',
      'CHECK',
      'DEFAULT'
    ],
    correctAnswer: 'NOT NULL UNIQUE'
  },
  {
    question: '¿Qué hace la restricción PRIMARY KEY en una tabla?',
    options: [
      'Permite varios valores repetidos',
      'Establece una combinación de valores predeterminados',
      'Identifica de manera única cada fila en una tabla',
      'Verifica condiciones entre tablas'
    ],
    correctAnswer: 'Identifica de manera única cada fila en una tabla'
  },
  {
    question: '¿Qué restricción se utiliza para asegurar que una columna apunte a una fila existente en otra tabla?',
    options: [
      'CHECK',
      'FOREIGN KEY',
      'UNIQUE',
      'DEFAULT'
    ],
    correctAnswer: 'FOREIGN KEY'
  },
  {
    question: '¿Cuál es la consecuencia de definir una columna como NOT NULL?',
    options: [
      'Permite valores duplicados',
      'No se pueden insertar valores NULL en esa columna',
      'Obliga a usar claves externas',
      'Asigna automáticamente un valor por defecto'
    ],
    correctAnswer: 'No se pueden insertar valores NULL en esa columna'
  },
  {
    question: '¿Qué ocurre si intentamos insertar un valor que viola una restricción UNIQUE?',
    options: [
      'El sistema ignora la restricción',
      'Se produce un error y no se inserta la fila',
      'Se inserta la fila con el valor duplicado',
      'El valor se convierte automáticamente en NULL'
    ],
    correctAnswer: 'Se produce un error y no se inserta la fila'
  },
  {
    question: '¿Qué es una clave compuesta en una base de datos relacional?',
    options: [
      'Una clave que se genera automáticamente',
      'Una clave formada por la combinación de dos o más atributos',
      'Una clave que permite valores duplicados',
      'Una clave basada en funciones de agregación'
    ],
    correctAnswer: 'Una clave formada por la combinación de dos o más atributos'
  },
  {
    question: '¿Cuándo suele utilizarse una clave compuesta?',
    options: [
      'Cuando un solo atributo no puede identificar de manera única una fila',
      'Cuando se necesita una restricción de unicidad adicional',
      'Para almacenar funciones de agregación',
      'Para limitar el tamaño de una tabla'
    ],
    correctAnswer: 'Cuando un solo atributo no puede identificar de manera única una fila'
  },
  {
    question: '¿Qué afirmación describe mejor una entidad fuerte?',
    options: [
      'Depende de otra entidad para su existencia',
      'No necesita de otra entidad para existir',
      'Solo puede existir si existe una clave externa',
      'Siempre requiere una clave compuesta'
    ],
    correctAnswer: 'No necesita de otra entidad para existir'
  },
  {
    question: '¿Qué característica define a una entidad débil en un modelo E/R?',
    options: [
      'Tiene su propia clave primaria independiente',
      'No puede existir sin estar relacionada a una entidad fuerte',
      'Siempre tiene atributos multivaluados',
      'Nunca puede tener una relación 1:N'
    ],
    correctAnswer: 'No puede existir sin estar relacionada a una entidad fuerte'
  },
  {
    question: '¿Qué requiere una entidad débil para ser correctamente identificada?',
    options: [
      'Una relación con otra entidad débil',
      'Una clave primaria simple',
      'Una relación con una entidad fuerte y una clave parcial',
      'Una clave externa sin restricciones'
    ],
    correctAnswer: 'Una relación con una entidad fuerte y una clave parcial'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre claves compuestas es verdadera?',
    options: [
      'Solo se pueden crear con atributos de tipo numérico',
      'La combinación de atributos debe ser única para cada fila',
      'No es posible crear índices sobre claves compuestas',
      'Solo se usan en tablas catálogo (lookup)'
    ],
    correctAnswer: 'La combinación de atributos debe ser única para cada fila'
  },
  {
    question: 'En un esquema E/R, ¿cómo se representa normalmente una entidad débil?',
    options: [
      'Con un rectángulo de doble línea',
      'Con un rombo punteado',
      'Con un óvalo doble',
      'Con un rectángulo punteado'
    ],
    correctAnswer: 'Con un rectángulo de doble línea'
  },
  {
    question: '¿Qué ocurre si se elimina una entidad fuerte relacionada con una entidad débil?',
    options: [
      'La entidad débil se convierte en fuerte',
      'La entidad débil se elimina también (si hay ON DELETE CASCADE)',
      'La entidad débil permanece inalterada',
      'La base de datos ignora la relación'
    ],
    correctAnswer: 'La entidad débil se elimina también (si hay ON DELETE CASCADE)'
  },
  {
    question: '¿Qué significa tener una clave primaria compuesta?',
    options: [
      'Que no puedo repetir ninguna de las claves externas que la componen. Ni por separado ni juntas',
      'Que una de las dos claves externas puede ser NULL, pero solo una vez cada una, para no repetir la combinación',
      'Que no puede repetirse la misma combinación. Pueden repetirse si la combinación entre ellas es diferente',
      'Que puedo tener claves primarias simples además de la clave primaria compuesta dentro de la misma tabla'
    ],
    correctAnswer: 'Que no puede repetirse la misma combinación. Pueden repetirse si la combinación entre ellas es diferente'
  },
  {
    question: '¿Qué modificadores de borrado y actualización sobre claves externas conoces?',
    options: [
      'PRIMARY KEY, FOREIGN KEY, CONSTRAINT',
      'RESTRICT, SET NULL, CASCADE',
      'FORBIDDEN, SET NULL, CASCADE',
      'NOT NULL, UNIQUE, RESTRICT'
    ],
    correctAnswer: 'RESTRICT, SET NULL, CASCADE'
  },
  {
    question: '¿Para qué nos puede servir elegir tener una clave primaria compuesta?',
    options: [
      'Porque si es compuesta, al tener más claves estará mejor indexada. Siempre más es mejor',
      'Tener claves primarias compuestas no vale para nada',
      'Para que el motor de BBDD nos permita almacenar NULL, ya que de manera normal con las claves simples no nos deja',
      'Para controlar que la misma combinación entre los atributos que componen la clave no se repita para las tablas intermedias por cuestiones de lógica de negocio'
    ],
    correctAnswer: 'Para controlar que la misma combinación entre los atributos que componen la clave no se repita para las tablas intermedias por cuestiones de lógica de negocio'
  },
  {
    question: '¿Qué significa un atributo en un óvalo con líneas discontinuas o línea punteada en un Esquema E/R?',
    options: [
      'Atributo derivado: Significa que su valor no se almacena, se calcula en el momento de la consulta',
      'Atributo multivaluado: Significa que el atributo tiene más de un valor y debería acabar convirtiéndose en otra entidad',
      'Atributo que pertenece a una entidad débil: Es la manera que se suele usar para indicar que la entidad donde se encuentra el atributo es débil',
      'Atributo único y NOT NULL: Significa que el atributo no se puede repetir y tampoco puede ser NULL'
    ],
    correctAnswer: 'Atributo derivado: Significa que su valor no se almacena, se calcula en el momento de la consulta'
  },
  {
    question: '¿Qué representa un rectángulo en un diagrama E/R?',
    options: [
      'Un atributo',
      'Una relación',
      'Una entidad',
      'Una clave primaria'
    ],
    correctAnswer: 'Una entidad'
  },
  {
    question: '¿Cómo se representa gráficamente una relación en un esquema E/R?',
    options: [
      'Mediante un rectángulo',
      'Mediante un óvalo',
      'Mediante un rombo',
      'Mediante un cuadrado'
    ],
    correctAnswer: 'Mediante un rombo'
  },
  {
    question: '¿Qué indica un óvalo con doble línea en un esquema E/R?',
    options: [
      'Atributo clave',
      'Atributo derivado',
      'Atributo multivaluado',
      'Relación compuesta'
    ],
    correctAnswer: 'Atributo multivaluado'
  },
  {
    question: '¿Qué elemento se utiliza para conectar entidades y atributos en un diagrama E/R?',
    options: [
      'No se conectan',
      'Líneas',
      'Rombos',
      'Rectángulos'
    ],
    correctAnswer: 'Líneas'
  },
  {
    question: '¿Qué tipo de relación se representa cuando una entidad se asocia consigo misma?',
    options: [
      'Relación de especialización',
      'Relación reflexiva',
      'Relación multivaluada',
      'Relación derivada'
    ],
    correctAnswer: 'Relación reflexiva'
  },
  {
    question: '¿Qué es la cardinalidad en un esquema E/R?',
    options: [
      'El número máximo de atributos en una entidad',
      'El número de relaciones entre dos entidades',
      'La cantidad mínima y máxima de instancias que pueden estar relacionadas',
      'El número de claves primarias en una relación'
    ],
    correctAnswer: 'La cantidad mínima y máxima de instancias que pueden estar relacionadas'
  },
  {
    question: '¿Cuál es el símbolo habitual para representar una entidad débil en un diagrama E/R?',
    options: [
      'Rectángulo simple',
      'Rombo de doble línea',
      'Rectángulo de doble línea',
      'Óvalo punteado'
    ],
    correctAnswer: 'Rectángulo de doble línea'
  },
  {
    question: '¿Cómo se representa un atributo derivado en un diagrama E/R?',
    options: [
      'Con un óvalo de doble línea',
      'Con un rombo punteado',
      'Con un óvalo de línea discontinua',
      'Con un rectángulo sombreado'
    ],
    correctAnswer: 'Con un óvalo de línea discontinua'
  },
  {
    question: '¿Qué tipo de JOIN devuelve solo las filas que tienen coincidencias en ambas tablas?',
    options: [
      'RIGHT JOIN',
      'FULL JOIN',
      'LEFT JOIN',
      'INNER JOIN'
    ],
    correctAnswer: 'INNER JOIN'
  },
  {
    question: 'Cuando en una consulta SQL se asigna un alias a una tabla, ¿cuál es su propósito principal?',
    options: [
      'Mejorar el rendimiento de la consulta',
      'Hacer que el nombre de la tabla sea más corto y claro en la consulta',
      'Evitar errores de sintaxis',
      'Cambiar el nombre original de la tabla en la base de datos'
    ],
    correctAnswer: 'Hacer que el nombre de la tabla sea más corto y claro en la consulta'
  },
  {
    question: '¿Qué sucede si olvidas la condición de unión (ON) en un JOIN?',
    options: [
      'No se ejecuta la consulta',
      'Se genera un producto cartesiano',
      'Se eliminan las filas duplicadas automáticamente',
      'Solo se muestra la primera fila de cada tabla'
    ],
    correctAnswer: 'Se genera un producto cartesiano'
  },
  {
    question: '¿Cuál es el objetivo principal de una subconsulta en la cláusula FROM?',
    options: [
      'Crear una tabla temporal sobre la que hacer consultas',
      'Eliminar filas duplicadas',
      'Cambiar la estructura de la base de datos',
      'Limitar el número de columnas visibles'
    ],
    correctAnswer: 'Crear una tabla temporal sobre la que hacer consultas'
  },
  {
    question: '¿Qué tipo de JOIN se debe usar para obtener todas las filas de la tabla de la izquierda y solo las coincidencias de la tabla de la derecha?',
    options: [
      'FULL JOIN',
      'CROSS JOIN',
      'LEFT JOIN',
      'INNER JOIN'
    ],
    correctAnswer: 'LEFT JOIN'
  },
  {
    question: '¿Cuál es el resultado de realizar un RIGHT JOIN entre dos tablas A y B?',
    options: [
      'Todas las filas de A y solo las coincidencias de B',
      'Solo las filas coincidentes entre A y B',
      'Todas las filas de B y las coincidencias de A',
      'Solo las filas de A'
    ],
    correctAnswer: 'Todas las filas de B y las coincidencias de A'
  },
  {
    question: '¿Qué función de agregación se utiliza para obtener la suma de los valores de una columna?',
    options: [
      'COUNT',
      'AVG',
      'SUM',
      'MIN'
    ],
    correctAnswer: 'SUM'
  },
  {
    question: '¿Cuál de las siguientes funciones devuelve el número de filas en una consulta?',
    options: [
      'MAX',
      'SUM',
      'AVG',
      'COUNT'
    ],
    correctAnswer: 'COUNT'
  },
  {
    question: '¿Qué función devuelve el valor mínimo de una columna numérica o de fecha?',
    options: [
      'AVG',
      'MAX',
      'MIN',
      'SUM'
    ],
    correctAnswer: 'MIN'
  },
  {
    question: '¿Cuál es la función SQL adecuada para calcular la media de los valores en una columna?',
    options: [
      'SUM',
      'MIN',
      'AVG',
      'COUNT'
    ],
    correctAnswer: 'AVG'
  },
  {
    question: '¿Qué se utiliza para conocer la hora exacta?',
    options: [
      'DATETIME',
      'CURRENT_TIMESTAMP',
      'TIME',
      'CURDATE'
    ],
    correctAnswer: 'CURRENT_TIMESTAMP'
  },
  {
    question: 'Si quieres mostrar solo el día de una fecha completa, ¿qué función debes usar?',
    options: [
      'DAYNAME()',
      'DAY()',
      'MONTH()',
      'WEEKDAY()'
    ],
    correctAnswer: 'DAY()'
  }



];
