import { Question } from '../InterfaceQuestion';

export const questionsProgramacion: Question[] = [
  {
    question: '¿Qué es un algoritmo en programación?',
    options: [
      'Un lenguaje de programación',
      'Una secuencia de pasos para resolver un problema',
      'Una estructura de datos',
      'Un tipo de variable'
    ],
    correctAnswer: 'Una secuencia de pasos para resolver un problema'
  },
  {
    question: '¿Qué es una variable en programación?',
    options: [
      'Una función que se ejecuta automáticamente',
      'Un contenedor para almacenar datos',
      'Un tipo de bucle',
      'Una base de datos'
    ],
    correctAnswer: 'Un contenedor para almacenar datos'
  },
  {
    question: '¿Qué estructura de control se utiliza para repetir un bloque de código mientras se cumpla una condición?',
    options: [
      'if',
      'switch',
      'while',
      'break'
    ],
    correctAnswer: 'while'
  },
  {
    question: '¿Qué es una función en programación?',
    options: [
      'Un tipo de variable',
      'Una estructura de control',
      'Un bloque de código que realiza una tarea específica',
      'Un error en el código'
    ],
    correctAnswer: 'Un bloque de código que realiza una tarea específica'
  },
  {
    question: '¿Qué significa \'depurar\' en programación?',
    options: [
      'Escribir código nuevo',
      'Optimizar el rendimiento del programa',
      'Corregir errores en el código',
      'Eliminar funciones innecesarias'
    ],
    correctAnswer: 'Corregir errores en el código'
  },
  {
    question: '¿Qué es un bucle \'for\' en programación?',
    options: [
      'Una estructura que permite ejecutar un bloque de código un número específico de veces',
      'Una función que se llama a sí misma',
      'Una estructura que evalúa una condición una vez',
      'Un tipo de variable'
    ],
    correctAnswer: 'Una estructura que permite ejecutar un bloque de código un número específico de veces'
  },
  {
    question: '¿Qué es una constante en programación?',
    options: [
      'Una variable cuyo valor puede cambiar',
      'Una función que retorna siempre el mismo valor',
      'Una variable cuyo valor no cambia después de su inicialización',
      'Un tipo de bucle'
    ],
    correctAnswer: 'Una variable cuyo valor no cambia después de su inicialización'
  },
  {
    question: '¿Qué es un compilador?',
    options: [
      'Un programa que convierte código fuente en código ejecutable',
      'Un tipo de variable',
      'Una base de datos',
      'Un sistema operativo'
    ],
    correctAnswer: 'Un programa que convierte código fuente en código ejecutable'
  },
  {
    question: '¿Qué es una estructura de datos?',
    options: [
      'Una forma de organizar y almacenar datos',
      'Un tipo de lenguaje de programación',
      'Una función que se ejecuta automáticamente',
      'Un error en el código'
    ],
    correctAnswer: 'Una forma de organizar y almacenar datos'
  },
  {
    question: '¿Qué es una condición en programación?',
    options: [
      'Una variable que siempre es verdadera',
      'Una expresión que se evalúa como verdadera o falsa',
      'Un tipo de bucle',
      'Una función que retorna un valor'
    ],
    correctAnswer: 'Una expresión que se evalúa como verdadera o falsa'
  },
  {
    question: '¿Qué clase en Java se utiliza para recibir entrada de datos desde la consola?',
    options: ['System.out', 'BufferedReader', 'Scanner', 'JOptionPane'],
    correctAnswer: 'Scanner'
  },
  {
    question: '¿Cuál de las siguientes estructuras de control se utiliza para tomar decisiones en un programa Java?',
    options: ['for', 'while', 'if-else', 'do-while'],
    correctAnswer: 'if-else'
  },
  {
    question: '¿Cuál será la salida del siguiente código?\nint x = 5;\nif (x > 3) {\n  System.out.print("A ");\n}\nSystem.out.print("B");',
    options: ['A', 'B', 'A B', 'No compila'],
    correctAnswer: 'A B'
  },
  {
    question: '¿Cuál es la diferencia entre while y do-while?',
    options: [
      'while evalúa la condición al final del bucle, do-while al inicio',
      'do-while evalúa la condición al final, mientras que while la evalúa antes de entrar en el bucle',
      'Ambos funcionan de la misma manera',
      'Ninguna de las anteriores'
    ],
    correctAnswer: 'do-while evalúa la condición al final, mientras que while la evalúa antes de entrar en el bucle'
  },
  {
    question: 'En la estructura switch, ¿qué sucede si no se incluye la sentencia break en cada case?',
    options: [
      'El programa lanza un error',
      'Se ejecuta únicamente la primera opción válida',
      'Se ejecutan todos los case hasta encontrar un break o finalizar el switch',
      'No se ejecuta ningún case'
    ],
    correctAnswer: 'Se ejecutan todos los case hasta encontrar un break o finalizar el switch'
  },
  {
    question: '¿Cuál de las siguientes estructuras de control permite iteraciones?',
    options: ['if', 'switch', 'while', 'try-catch'],
    correctAnswer: 'while'
  },
  {
    question: '¿Qué imprimirá este código?\nint x = 10;\nint y = 6;\nSystem.out.println(x + y);',
    options: ['6', '10', '16', '18'],
    correctAnswer: '16'
  },
  {
    question: '¿Cuál es la diferencia entre break y continue en un bucle?',
    options: [
      'break detiene la ejecución del bucle y continue solo salta una iteración',
      'continue finaliza el programa y break reinicia el bucle',
      'Ambos finalizan el bucle inmediatamente',
      'No hay diferencia'
    ],
    correctAnswer: 'break detiene la ejecución del bucle y continue solo salta una iteración'
  },
  {
    question: '¿Cómo se declara un array en Java?',
    options: [
      'array[] nombre = new array[10];',
      'int[] nombre = new int[10];',
      'int nombre[10];',
      'new int array[10];'
    ],
    correctAnswer: 'int[] nombre = new int[10];'
  },
  {
    question: '¿Qué valor tiene vector.length si declaramos int[] vector = new int[5];?',
    options: ['4', '5', 'Depende de los valores almacenados', 'No es posible conocerlo'],
    correctAnswer: '5'
  },
  {
    question: '¿Qué método de la clase Arrays se usa para ordenar un array en Java?',
    options: ['sort()', 'order()', 'arrange()', 'compare()'],
    correctAnswer: 'sort()'
  },
  {
    question: '¿Qué método de la clase String permite extraer una subcadena?',
    options: ['extract()', 'substring()', 'cut()', 'trim()'],
    correctAnswer: 'substring()'
  },
  {
    question: '¿Qué devuelve el método compareTo() de la clase String?',
    options: [
      'true si los Strings son iguales',
      'Un número positivo, negativo o 0, dependiendo del orden lexicográfico',
      'Siempre un número positivo',
      'Siempre un número negativo'
    ],
    correctAnswer: 'Un número positivo, negativo o 0, dependiendo del orden lexicográfico'
  },
  {
    question: '¿Qué diferencia hay entre equals() y == en la comparación de Strings?',
    options: [
      '== compara referencias y equals() el contenido',
      'equals() compara referencias y == compara contenido',
      'Ambos hacen lo mismo',
      'Ninguna'
    ],
    correctAnswer: '== compara referencias y equals() el contenido'
  },
  {
    question: '¿Cuál es la estructura correcta para declarar una matriz 3x3 en Java?',
    options: [
      'int[][] matriz = new int(3,3);',
      'int matriz[][] = new int[3][3];',
      'matriz = int[3,3];',
      'new int matriz[3][3];'
    ],
    correctAnswer: 'int matriz[][] = new int[3][3];'
  },
  {
    question: '¿Qué método de la clase Arrays se usa para copiar un array en otro?',
    options: ['copy()', 'arraycopy()', 'clone()', 'copyArray()'],
    correctAnswer: 'arraycopy()'
  },
  {
    question: '¿Qué devuelve el método length de un array?',
    options: [
      'La cantidad de elementos',
      'El tamaño en bytes',
      'Siempre devuelve 0',
      'La cantidad de elementos no inicializados'
    ],
    correctAnswer: 'La cantidad de elementos'
  },
  {
    question: '¿Qué palabra clave indica que un método no devuelve ningún valor?',
    options: ['null', 'empty', 'void', 'return'],
    correctAnswer: 'void'
  },
  {
    question: '¿Cómo se llama al proceso de dividir un problema grande en pequeños subproblemas en programación?',
    options: ['Recursividad', 'Modularidad', 'Iteración', 'Compilación'],
    correctAnswer: 'Modularidad'
  },
  {
    question: '¿Cuál es la sintaxis correcta para definir un método en Java?',
    options: [
      'int metodo(int x, int y) { return x + y; }',
      'metodo(int x, int y) { return x + y; }',
      'int metodo() { return x + y; }',
      'metodo() int { return x + y; }'
    ],
    correctAnswer: 'int metodo(int x, int y) { return x + y; }'
  },
  {
    question: '¿Qué se usa para indicar que un método pertenece a la clase y no a un objeto específico?',
    options: ['public', 'void', 'static', 'private'],
    correctAnswer: 'static'
  },
  {
    question: '¿Cuál es la diferencia entre paso por valor y paso por referencia?',
    options: [
      'En paso por valor se modifica el valor original, en paso por referencia no',
      'En paso por referencia se envía la dirección de memoria del objeto',
      'Ambos funcionan igual',
      'Java no admite paso por referencia'
    ],
    correctAnswer: 'En paso por referencia se envía la dirección de memoria del objeto'
  },
  {
    question: '¿Qué permite el uso de parámetros en métodos?',
    options: [
      'Aumentar el rendimiento del código',
      'Hacer que los métodos sean reutilizables',
      'Crear variables globales',
      'Evitar errores en el código'
    ],
    correctAnswer: 'Hacer que los métodos sean reutilizables'
  },
  {
    question: '¿Qué sucede si en un método que devuelve int no hay una sentencia return?',
    options: [
      'No compila',
      'Devuelve 0 por defecto',
      'Se ejecuta sin errores',
      'Devuelve null'
    ],
    correctAnswer: 'No compila'
  },
  {
    question: '¿Qué es la recursividad en Java?',
    options: [
      'Un método que llama a otro método',
      'Un método que se llama a sí mismo',
      'Una estructura de control',
      'Un tipo de array'
    ],
    correctAnswer: 'Un método que se llama a sí mismo'
  },
  {
    question: '¿Qué problema puede causar el uso incorrecto de recursividad?',
    options: ['Código más lento', 'Stack Overflow', 'Errores de compilación', 'Nada'],
    correctAnswer: 'Stack Overflow'
  },
  {
    question: '¿Qué palabra clave se usa para definir un paquete en Java?',
    options: ['import', 'package', 'static', 'class'],
    correctAnswer: 'package'
  },
  {
    question: '¿Cuál será la salida del siguiente código?\nfor(int i=0; i<3; i++) { System.out.print(i + " "); }',
    options: ['0 1 2', '1 2 3', '0 1 2 3', 'No compila'],
    correctAnswer: '0 1 2'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre métodos sobrecargados es correcta?',
    options: [
      'Deben tener el mismo nombre y mismos parámetros',
      'Pueden tener el mismo nombre con diferentes parámetros',
      'No pueden tener más de dos versiones',
      'Son iguales a los métodos estáticos'
    ],
    correctAnswer: 'Pueden tener el mismo nombre con diferentes parámetros'
  },
  {
    question: '¿Qué tipo de acceso permite que un método sea usado solo dentro de la misma clase?',
    options: ['public', 'private', 'protected', 'static'],
    correctAnswer: 'private'
  },
  {
    question: '¿Qué es una clase en Java?',
    options: ['Un objeto instanciado.', 'Un molde o plantilla para crear objetos.', 'Un tipo de método especial.', 'Una interfaz que define métodos.'],
    correctAnswer: 'Un molde o plantilla para crear objetos.'
  },
  {
    question: '¿Qué es un atributo de una clase?',
    options: ['Una función que realiza operaciones.', 'Un método estático.', 'Una variable que representa el estado de un objeto.', 'Un objeto contenido dentro de otro objeto.'],
    correctAnswer: 'Una variable que representa el estado de un objeto.'
  },
  {
    question: '¿Qué hace la palabra clave this en Java?',
    options: ['Hace referencia a la clase padre.', 'Hace referencia al objeto actual.', 'Permite importar paquetes.', 'Es obligatoria al acceder a variables privadas.'],
    correctAnswer: 'Hace referencia al objeto actual.'
  },
  {
    question: '¿Qué afirmaciones sobre constructores son verdaderas?',
    options: ['Pueden tener el mismo nombre que la clase.', 'Pueden tener valor de retorno distinto de void.', 'Un constructor hijo no puede llamar a un constructor padre. El método está sobre escrito.', 'Se pueden sobrecargar.'],
    correctAnswer: 'Se pueden sobrecargar.'
  },
  {
    question: '¿Qué sucede si no se define un constructor en una clase?',
    options: ['Java genera uno por defecto (heredado de la clase Object).', 'No se puede crear objetos de la clase.', 'Se lanza un error en tiempo de ejecución.', 'Solo se pueden crear objetos usando new.'],
    correctAnswer: 'Java genera uno por defecto (heredado de la clase Object).'
  },
  {
    question: '¿Qué métodos son conocidos como getters y setters?',
    options: ['Métodos que inicializan objetos.', 'Métodos que acceden o modifican atributos.', 'Métodos estáticos.', 'Métodos que ejecutan código externo.'],
    correctAnswer: 'Métodos que acceden o modifican atributos.'
  },
  {
    question: '¿Qué afirmaciones sobre objetos en Java son ciertas?',
    options: ['Los objetos pueden tener métodos y atributos.', 'Los objetos no pueden contener otros objetos.', 'Los objetos no pueden implementar interfaces.', 'No se puede crear un objeto sin argumentos.'],
    correctAnswer: 'Los objetos pueden tener métodos y atributos.'
  },
  {
    question: '¿Qué significa encapsulación?',
    options: ['Ocultar detalles internos de la implementación.', 'Permitir acceso público a todos los métodos.', 'Dividir una clase en varias subclases.', 'Ejecutar múltiples tareas simultáneamente.'],
    correctAnswer: 'Ocultar detalles internos de la implementación.'
  },
  {
    question: '¿Qué palabra clave se usa para crear objetos?',
    options: ['class', 'object', 'new', 'static'],
    correctAnswer: 'new'
  },
  {
    question: '¿Cuál es la salida del siguiente código?\nPersona p = new Persona("Ana", "López", "123456");\nSystem.out.println(p.getNombre());',
    options: ['Ana', 'null', 'Error de compilación', '"Ana López 123456"'],
    correctAnswer: 'Ana'
  },
  {
    question: '¿Qué es la herencia en Java?',
    options: ['Permite a una clase heredar métodos y atributos.', 'Se usa con la palabra clave implements.', 'Solo se puede heredar de interfaces.', 'Permite crear nuevas clases basadas en otras.'],
    correctAnswer: 'Permite a una clase heredar métodos y atributos.'
  },
  {
    question: '¿Qué palabra clave se usa para heredar de una clase?',
    options: ['this', 'implements', 'extends', 'inherit'],
    correctAnswer: 'extends'
  },
  {
    question: '¿Qué se puede heredar de una superclase?',
    options: ['Atributos públicos', 'Atributos privados', 'Métodos públicos', 'Todo, haciendo uso de super.'],
    correctAnswer: 'Métodos públicos'
  },
  {
    question: '¿Qué afirmaciones son verdaderas sobre super?',
    options: ['Se usa para acceder a métodos de la superclase.', 'Se usa para heredar una clase.', 'Debe ser la primera línea en un constructor al invocar superclase.', 'Solo puede usarse en clases abstractas.'],
    correctAnswer: 'Debe ser la primera línea en un constructor al invocar superclase.'
  },
  {
    question: '¿Qué es una clase abstracta?',
    options: ['Puede tener métodos sin implementar.', 'No puede tener métodos concretos.', 'No puede ser instanciada.', 'Siempre debe extenderse.'],
    correctAnswer: 'Puede tener métodos sin implementar.'
  },
  {
    question: '¿Cuál es la salida del código donde A obj = new B(); y B sobrescribe el método mostrar()?',
    options: ['Clase A: 10', 'Clase B: 20', 'Clase A: 20', 'Clase B: 10'],
    correctAnswer: 'Clase B: 20'
  },
  {
    question: '¿Qué afirmaciones son ciertas sobre interfaces?',
    options: ['Los métodos de una interfaz son públicos por defecto.', 'Se puede instanciar una interfaz directamente.', 'Una clase puede implementar varias interfaces.', 'Los atributos en una interfaz son constantes.'],
    correctAnswer: 'Una clase puede implementar varias interfaces.'
  },
  {
    question: '¿Cuál de los siguientes códigos es correcto?',
    options: [
      'public abstract class Vehiculo { abstract void acelerar(); }',
      'interface Motor { void encender(); }',
      'class Coche extends Motor {}',
      'abstract interface Figura extends Vehiculo{}'
    ],
    correctAnswer: 'interface Motor { void encender(); }'
  },
  {
    question: '¿Qué imprime este código donde Figura es abstracta y Circulo sobrescribe el método dibujar()?',
    options: ['Dibuja círculo', 'Error de compilación', 'No imprime nada', 'Dibuja figura'],
    correctAnswer: 'Dibuja círculo'
  },
  {
    question: '¿Qué tipo de herencia NO se permite en Java con clases?',
    options: ['Herencia única', 'Herencia jerárquica', 'Herencia múltiple', 'Herencia multinivel'],
    correctAnswer: 'Herencia múltiple'
  },
  {
    question: '¿Qué resultado da este código de interfaz Animal con método sonido sobrescrito por Perro?',
    options: ['Guau', 'Error de compilación', 'Null', 'Sonido animal'],
    correctAnswer: 'Guau'
  },
  {
    question: '¿Qué es el overriding (sobreescritura)?',
    options: ['Repetir un método en la subclase con la misma firma.', 'Crear múltiples métodos con el mismo nombre y distintos parámetros.', 'Cambiar el tipo de retorno de un método.', 'Es lo mismo que sobrecarga.'],
    correctAnswer: 'Repetir un método en la subclase con la misma firma.'
  },
  {
    question: '¿Qué condiciones debe cumplir un método para ser sobrescrito?',
    options: ['Mismo nombre', 'Mismo tipo de retorno', 'Misma lista de parámetros', 'Puede cambiar modificador de acceso a más restrictivo'],
    correctAnswer: 'Misma lista de parámetros'
  },
  {
    question: '¿Qué es el overloading (sobrecarga)?',
    options: ['Crear múltiples métodos con el mismo nombre pero distintos parámetros.', 'Repetir métodos en subclases.', 'Cambiar solo el tipo de retorno.', 'Solo se puede hacer en interfaces.'],
    correctAnswer: 'Crear múltiples métodos con el mismo nombre pero distintos parámetros.'
  },
  {
    question: '¿Qué salida produce este código?\nint a = 5, b = 10;\nSystem.out.println(a + b + "Resultado");\nSystem.out.println("Resultado" + a + b);',
    options: ['15Resultado\nResultado15', '15Resultado\nResultado510', 'Resultado15\nResultado15', '5Resultado10\nResultado15'],
    correctAnswer: '15Resultado\nResultado510'
  },
  {
    question: '¿Qué es necesario para hacer un cast explícito?',
    options: [
      'Que haya relación de herencia entre clases.',
      'Que los tipos sean compatibles.',
      'Que la clase base tenga métodos abstractos.',
      'Que ambos objetos estén en el mismo paquete.'
    ],
    correctAnswer: 'Que los tipos sean compatibles.'
  },
  {
    question: '¿Qué operador comprueba si un objeto pertenece a una clase?',
    options: ['instanceOf', 'instanceof', 'belongs', 'castTo'],
    correctAnswer: 'instanceof'
  },
  {
    question: '¿Cuál es la diferencia entre this y super?',
    options: [
      'this accede a la clase actual.',
      'super accede a la clase padre.',
      'this se usa en constructores de la superclase.',
      'super permite acceder a métodos privados.'
    ],
    correctAnswer: 'super accede a la clase padre.'
  },
  {
    question: '¿Qué sucede al hacer Empleado e = new Encargado();?',
    options: [
      'Puede ser válido por polimorfismo.',
      'Se puede acceder a métodos de Encargado sin cast.',
      'Solo se puede usar métodos definidos en Empleado.',
      'No es válido en Java.'
    ],
    correctAnswer: 'Puede ser válido por polimorfismo.'
  },
  {
    question: '¿Qué sucede al ejecutar este código con Padre p = new Hijo(); y ambos tienen método saludar() sobrescrito?',
    options: ['Hola desde Padre', 'Hola desde Hijo', 'Error de compilación', 'No imprime nada'],
    correctAnswer: 'Hola desde Hijo'
  },
  {
    question: '¿Cuál de estas clases implementa una estructura LIFO?',
    options: [
      'ArrayList',
      'Queue',
      'Array',
      'Stack'
    ],
    correctAnswer: 'Stack'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones sobre los arrays en Java es verdadera?',
    options: [
      'El tamaño del array es fijo una vez creado',
      'No se puede acceder a un array con un índice numérico',
      'Los arrays pueden cambiar de tamaño dinámicamente',
      'Un array puede contener distintos tipos de datos'
    ],
    correctAnswer: 'El tamaño del array es fijo una vez creado'
  },
  {
    question: '¿Cuál es el método adecuado para añadir un elemento a una ArrayList?',
    options: [
      'insert()',
      'add()',
      'put()',
      'append()'
    ],
    correctAnswer: 'add()'
  },
  {
    question: '¿Cuál es la forma correcta de declarar y crear un array de enteros con 10 elementos?',
    options: [
      'int array = new int[10];',
      'int array(10);',
      'array = int[10];',
      'int[] array = new int[10];'
    ],
    correctAnswer: 'int[] array = new int[10];'
  },
  {
    question: '¿Cuál es la interfaz que implementan todas las colas en Java?',
    options: [
      'Stack',
      'LinkedList',
      'Queue',
      'Deque'
    ],
    correctAnswer: 'Queue'
  },
  {
    question: '¿Qué imprime la clase B al implementar la interfaz A con un método saludar?',
    options: [
      'No imprime nada',
      'Error de compilación',
      'Imprime: Hola',
      'Imprime: null'
    ],
    correctAnswer: 'Imprime: Hola'
  },
  {
    question: '¿Qué imprime el método peek tras insertar 10 y 20 en una pila?',
    options: [
      '20',
      'Error en compilación',
      '30',
      '10'
    ],
    correctAnswer: '20'
  },
  {
    question: '¿Qué imprimirá una instancia de B que llama al método mostrar si solo está en A?',
    options: [
      'No imprime nada',
      'Error de compilación',
      'Clase A',
      'Clase B'
    ],
    correctAnswer: 'Clase A'
  },
  {
    question: '¿Cuál es la sintaxis correcta para que una clase implemente una interfaz?',
    options: [
      'class MiClase inherits MiInterfaz',
      'class MiClase : MiInterfaz',
      'class MiClase extends MiInterfaz',
      'class MiClase implements MiInterfaz'
    ],
    correctAnswer: 'class MiClase implements MiInterfaz'
  },
  {
    question: '¿Cuál es una característica de una clase abstracta?',
    options: [
      'Puede tener métodos abstractos y concretos',
      'Se puede instanciar directamente',
      'Solo puede tener atributos estáticos',
      'No puede tener métodos implementados'
    ],
    correctAnswer: 'Puede tener métodos abstractos y concretos'
  },
  {
    question: '¿Cuál es una diferencia principal entre ArrayList y LinkedList?',
    options: [
      'LinkedList no permite duplicados',
      'ArrayList tiene acceso más rápido por índice',
      'LinkedList no permite nulos',
      'ArrayList no mantiene el orden'
    ],
    correctAnswer: 'ArrayList tiene acceso más rápido por índice'
  },
  {
    question: '¿Cuál es una ventaja principal de LinkedList frente a ArrayList?',
    options: [
      'No permite duplicados',
      'Mejor acceso por índice',
      'Mejor rendimiento en inserciones y eliminaciones en el medio',
      'Ocupa menos memoria en todos los casos'
    ],
    correctAnswer: 'Mejor rendimiento en inserciones y eliminaciones en el medio'
  },
  {
    question: '¿Qué afirmación sobre la herencia en Java es correcta?',
    options: [
      'Una subclase hereda los métodos públicos y protegidos de la superclase',
      'Una clase puede heredar de múltiples clases directamente',
      'La palabra clave extends se usa para implementar interfaces',
      'De una clase no puede heredar más de una subclase'
    ],
    correctAnswer: 'Una subclase hereda los métodos públicos y protegidos de la superclase'
  },
  {
    question: '¿Qué diferencia hay entre `abstract class` e `interface` en Java?',
    options: [
      'Las interfaces permiten constructores',
      'Las clases abstractas no pueden tener métodos implementados',
      'Las clases abstractas pueden tener estado (atributos)',
      'No hay ninguna diferencia'
    ],
    correctAnswer: 'Las clases abstractas pueden tener estado (atributos)'
  },
  {
    question: 'Queue<String> cola = new LinkedList<>(); cola.add("uno"); cola.add("dos"); cola.poll(); System.out.println(cola.peek());',
    options: [
      'null',
      'Error en tiempo de compilación',
      'dos',
      'uno'
    ],
    correctAnswer: 'dos'
  },
  {
    question: 'Queue<Integer> cola = new LinkedList<>(); Stack<Integer> pila = new Stack<>(); cola.add(1); cola.add(2); pila.push(cola.poll()); pila.push(cola.poll()); System.out.println(pila.pop());',
    options: [
      '2',
      'null',
      '3',
      '1'
    ],
    correctAnswer: '2'
  },
  {
    question: 'Stack<String> historial = new Stack<>(); historial.push("Escribir línea 1"); historial.push("Escribir línea 2"); historial.pop(); System.out.println(historial.peek());',
    options: [
      'Escribir línea 2',
      'error',
      'null',
      'Escribir línea 1'
    ],
    correctAnswer: 'Escribir línea 1'
  },
  {
    question: 'LinkedList<Integer> numeros = new LinkedList<>(); numeros.addFirst(10); numeros.addLast(20); System.out.println(numeros.size());',
    options: [
      '2',
      '10',
      'Error de compilación',
      '1'
    ],
    correctAnswer: '2'
  },
  {
    question: 'Stack<Integer> pila = new Stack<>(); Queue<Integer> cola = new LinkedList<>(); pila.push(10); cola.add(20); System.out.println(pila.pop() + cola.peek());',
    options: [
      '20',
      '1020',
      '10',
      '30'
    ],
    correctAnswer: '30'
  },
  {
    question: 'ArrayList<String> lista = new ArrayList<>(); Stack<String> pila = new Stack<>(); lista.add("X"); pila.push("Y"); System.out.println(lista.get(0) + pila.peek());',
    options: [
      'X Y',
      'null',
      'YX',
      'XY'
    ],
    correctAnswer: 'XY'
  },
  {
    question: 'Stack<Integer> pila = new Stack<>(); pila.push(5); pila.push(10); pila.pop(); System.out.println(pila.peek());',
    options: [
      'Error de compilación',
      'null',
      '10',
      '5'
    ],
    correctAnswer: '5'
  },
  {
    question: '¿Qué método de LinkedList añade un elemento al principio de la lista?',
    options: [
      'insertFirst()',
      'addFirst()',
      'add()',
      'push()'
    ],
    correctAnswer: 'addFirst()'
  },
  {
    question: '¿Qué método elimina el último elemento en una Stack?',
    options: [
      'removeLast()',
      'pop()',
      'peek()',
      'getLast()'
    ],
    correctAnswer: 'pop()'
  },
  {
    question: 'abstract class Figura { abstract double area(); } class Cuadrado extends Figura { }',
    options: [
      'toString()',
      'Ninguno, es opcional',
      'area(), de lo contrario hay error',
      'equals()'
    ],
    correctAnswer: 'area(), de lo contrario hay error'
  },
  {
    question: '¿Qué método se utiliza para ver el primer elemento de una Queue sin eliminarlo?',
    options: [
      'peek()',
      'pop()',
      'poll()',
      'front()'
    ],
    correctAnswer: 'peek()'
  },
  {
    question: 'LinkedList<String> lista = new LinkedList<>(); Stack<String> pila = new Stack<>(); lista.add("Java"); pila.push("Collections"); lista.add(pila.pop()); System.out.println(lista);',
    options: [
      '[Java, Collections]',
      '[Java]',
      '[Collections]',
      'Error en tiempo de ejecución'
    ],
    correctAnswer: '[Java, Collections]'
  },
  {
    question: 'ArrayList<String> lista = new ArrayList<>(); lista.add("A"); lista.add("B"); lista.add("C"); System.out.println(lista.get(1));',
    options: [
      'C',
      'B',
      'null',
      'A'
    ],
    correctAnswer: 'B'
  },
  {
    question: 'ArrayList<Integer> numeros = new ArrayList<>(); numeros.add(1); numeros.add(2); numeros.add(3); numeros.remove(1); System.out.println(numeros);',
    options: [
      '[1, 3]',
      '[1, 2]',
      '[3]',
      '[2, 3]'
    ],
    correctAnswer: '[1, 3]'
  },
  {
    question: 'ArrayList<String> lista = new ArrayList<>(); LinkedList<String> linked = new LinkedList<>(); lista.add("uno"); linked.add("dos"); System.out.println(lista.get(0) + "-" + linked.get(0));',
    options: [
      'null-null',
      'dos-uno',
      'Error de compilación',
      'uno-dos'
    ],
    correctAnswer: 'uno-dos'
  },
  {
    question: '¿Qué sucede si accedes a un índice que no existe en un ArrayList?',
    options: [
      'Se devuelve null',
      'Se ignora el acceso',
      'Se lanza una excepción IndexOutOfBoundsException',
      'Se elimina el último elemento'
    ],
    correctAnswer: 'Se lanza una excepción IndexOutOfBoundsException'
  },
  {
    question: '¿Cuál de estas sentencias crea correctamente un objeto de la clase `Alumno`?',
    options: [
      'new Alumno Alumno();',
      'Alumno alumno();',
      'Alumno = new Alumno();',
      'Alumno alumno = new Alumno();'
    ],
    correctAnswer: 'Alumno alumno = new Alumno();'
  },
  {
    question: '¿Qué imprimirá el siguiente fragmento? int[][] matriz = {{1,2,3},{4,5,6}}; System.out.println(matriz[1][2]);',
    options: ['2', '4', '6', '5'],
    correctAnswer: '6'
  },
  {
    question: '¿Qué imprimirá este código? public static void imprime(int n) { n = 2 * n; System.out.println(n); } public static void main(String[] args) { int n = 10; imprime(n); System.out.println(n); }',
    options: [
      '20 y luego 10',
      '10 y luego 20',
      '10 y luego 10',
      '20 y luego 20'
    ],
    correctAnswer: '20 y luego 10'
  },
  {
    question: '¿Qué método de Scanner lee un número entero?',
    options: ['nextInt()', 'nextLine()', 'next()', 'read()'],
    correctAnswer: 'nextInt()'
  },
  {
    question: '¿Qué método de Stack devuelve el elemento del tope SIN eliminarlo?',
    options: ['peek()', 'push()', 'poll()', 'pop()'],
    correctAnswer: 'peek()'
  },
  {
    question: '¿Qué método se ejecuta al arrancar una aplicación Java?',
    options: ['init()', 'run()', 'start()', 'main()'],
    correctAnswer: 'main()'
  },
  {
    question: '¿Qué mostrará este código? int[] valores = new int[4]; System.out.println(valores[1]);',
    options: ['null', '1', '0', 'Error de compilación'],
    correctAnswer: '0'
  },
  {
    question: '¿Qué muestra este código? ArrayList<String> lista = new ArrayList<>(); lista.add(\'A\'); lista.add(\'B\'); System.out.println(lista.get(1));',
    options: [
      'Error en tiempo de ejecución',
      '0',
      'A',
      'B'
    ],
    correctAnswer: 'B'
  },
  {
    question: '¿Qué muestra este código? class Animal { void sonido() { System.out.println(\'Sonido genérico\'); } } class Perro extends Animal { void sonido() { System.out.println(\'Ladrido\'); } } Animal a = new Perro(); a.sonido();',
    options: [
      'Ladrido',
      'Error de compilación',
      'No imprime nada',
      'Sonido genérico'
    ],
    correctAnswer: 'Ladrido'
  },
  {
    question: '¿Qué muestra este fragmento de código? public static int suma(int a, int b) { return a + b; } System.out.println(suma(2,3));',
    options: [
      'Error de compilación',
      '5',
      '2',
      '3'
    ],
    correctAnswer: '5'
  },
  {
    question: '¿Qué ocurre cuando un parámetro se pasa \'por valor\' en Java?',
    options: [
      'Se pasa la referencia al objeto original.',
      'Se modifica el valor original automáticamente.',
      'Se copia el valor y no afecta al original.',
      'El método puede cambiar el tipo de la variable.'
    ],
    correctAnswer: 'Se copia el valor y no afecta al original.'
  },
  {
    question: '¿Qué ocurre si un atributo es declarado como `private`?',
    options: [
      'Solo puede ser accedido directamente desde otras clases.',
      'Solo puede ser accedido desde métodos estáticos.',
      'Solo puede ser accedido desde dentro de su propia clase.',
      'Puede ser accedido libremente desde cualquier lugar.'
    ],
    correctAnswer: 'Solo puede ser accedido desde dentro de su propia clase.'
  },
  {
    question: '¿Qué ocurre si un flujo no se cierra adecuadamente en Java?',
    options: [
      'Se lanza una excepción Checked automáticamente.',
      'Los datos pueden no guardarse correctamente y hay fuga de recursos.',
      'Se elimina el archivo afectado.',
      'El programa se detiene inmediatamente.'
    ],
    correctAnswer: 'Los datos pueden no guardarse correctamente y hay fuga de recursos.'
  },
  {
    question: '¿Qué ocurre si una subclase quiere llamar al constructor de su superclase?',
    options: [
      'Llama a this().',
      'No es posible llamar al constructor de la superclase.',
      'Llama a super().',
      'Solo puede hacerlo dentro de métodos estáticos.'
    ],
    correctAnswer: 'Llama a super().'
  },
  {
    question: '¿Qué palabra clave indica que un método en Java no devuelve ningún valor?',
    options: ['void', 'static', 'return', 'null'],
    correctAnswer: 'void'
  },
  {
    question: '¿Qué palabra reservada se utiliza para referirse al objeto actual dentro de sus propios métodos?',
    options: ['this', 'object', 'self', 'super'],
    correctAnswer: 'this'
  },
  {
    question: '¿Qué realiza la sentencia `return` en un método?',
    options: [
      'Salta entre casos de un switch.',
      'Continua con la siguiente instrucción.',
      'Sale del método y devuelve un valor opcionalmente.',
      'Finaliza un bucle.'
    ],
    correctAnswer: 'Sale del método y devuelve un valor opcionalmente.'
  },
  {
    question: '¿Qué resultado muestra este código? Stack<Integer> pila = new Stack<>(); pila.push(1); pila.push(2); pila.push(3); System.out.println(pila.peek());',
    options: ['1', 'Error', '2', '3'],
    correctAnswer: '3'
  },
  {
    question: '¿Qué sucede si no se define ningún constructor en una clase?',
    options: [
      'Java crea automáticamente un constructor por defecto.',
      'El programa no compila.',
      'Se crean todos los posibles constructores.',
      'Hay que llamar manualmente a un método init().'
    ],
    correctAnswer: 'Java crea automáticamente un constructor por defecto.'
  },
  {
    question: '¿Qué tipo de herencia permite Java directamente entre clases?',
    options: ['Híbrida', 'Única', 'Múltiple', 'Circular'],
    correctAnswer: 'Única'
  },
  {
    question: '¿Qué valor tendrá datos[2] tras ejecutar este código? int[] datos = {8, 10, 2, 3, 5};',
    options: ['8', '10', '2', '5'],
    correctAnswer: '2'
  },
  {
    question: '¿Cuál de las siguientes opciones es CORRECTA sobre Stack en Java?',
    options: [
      'No permite elementos duplicados.',
      'Se basa en el principio LIFO (Last In First Out).',
      'Se accede primero al primer elemento insertado.',
      'Es una implementación de FIFO.'
    ],
    correctAnswer: 'Se basa en el principio LIFO (Last In First Out).'
  },
  {
    question: '¿Cuál de los siguientes métodos añade un elemento al final de un ArrayList?',
    options: ['put()', 'add()', 'insert()', 'append()'],
    correctAnswer: 'add()'
  },
  {
    question: '¿Cuál es la diferencia principal entre while y do-while?',
    options: [
      'do-while no necesita condición.',
      'do-while siempre se ejecuta al menos una vez.',
      'while siempre se ejecuta al menos una vez.',
      'while es más rápido que do-while.'
    ],
    correctAnswer: 'do-while siempre se ejecuta al menos una vez.'
  },
  {
    question: '¿Para qué sirve un compilador en programación?',
    options: [
      'Para depurar errores en el código fuente.',
      'Para transformar el código fuente en código máquina.',
      'Para ejecutar directamente el código fuente.',
      'Para interpretar línea a línea un programa.'
    ],
    correctAnswer: 'Para transformar el código fuente en código máquina.'
  },
  {
    question: '¿Qué afirmación es CORRECTA sobre las clases abstractas en Java?',
    options: [
      'Pueden crear instancias directas.',
      'Solo pueden contener métodos abstractos.',
      'Todos sus métodos deben ser estáticos.',
      'No se pueden instanciar, pero sí extender.'
    ],
    correctAnswer: 'No se pueden instanciar, pero sí extender.'
  },
  {
    question: '¿Qué clase permite leer datos desde la consola de una manera sencilla?',
    options: ['JOptionPane', 'BufferedReader', 'System.out', 'Scanner'],
    correctAnswer: 'Scanner'
  },
  {
    question: '¿Qué clase se usa para leer caracteres de forma eficiente mediante búfer en Java?',
    options: [
      'BufferedReader',
      'OutputStreamWriter',
      'InputStreamReader',
      'PrintStream'
    ],
    correctAnswer: 'BufferedReader'
  },
  {
    question: '¿Qué define mejor un getter en una clase Java?',
    options: [
      'Un constructor con parámetros.',
      'Un método que devuelve el valor de un atributo privado.',
      'Un método que modifica un atributo privado.',
      'Un atributo especial de la clase.'
    ],
    correctAnswer: 'Un método que devuelve el valor de un atributo privado.'
  },
  {
    question: '¿Qué devuelve el método equals() de la clase Arrays?',
    options: [
      'True si dos arrays son iguales en tamaño y contenido.',
      'La suma de los elementos de un array.',
      'El tamaño máximo permitido para un array.',
      'Una copia exacta de un array.'
    ],
    correctAnswer: 'True si dos arrays son iguales en tamaño y contenido.'
  },
  {
    question: '¿Qué es el código fuente?',
    options: [
      'El programa en lenguaje máquina.',
      'El programa escrito por el programador en un lenguaje de alto nivel.',
      'El compilador de Java.',
      'El programa ejecutable.'
    ],
    correctAnswer: 'El programa escrito por el programador en un lenguaje de alto nivel.'
  },
  {
    question: '¿Qué es un array en Java?',
    options: [
      'Una estructura dinámica de datos.',
      'Una colección de datos de tipos diferentes.',
      'Una colección de elementos del mismo tipo, con acceso mediante índices.',
      'Una clase especial para almacenar objetos.'
    ],
    correctAnswer: 'Una colección de elementos del mismo tipo, con acceso mediante índices.'
  },
  {
    question: '¿Qué es un ArrayList en Java?',
    options: [
      'Un array estático que almacena datos primitivos.',
      'Una lista dinámica que puede crecer o decrecer en tamaño.',
      'Una colección de tamaño fijo.',
      'Una estructura que solo admite tipos numéricos.'
    ],
    correctAnswer: 'Una lista dinámica que puede crecer o decrecer en tamaño.'
  },
  {
    question: '¿Qué estructura de control ejecuta un bloque de instrucciones si una condición es verdadera?',
    options: ['while', 'switch', 'do-while', 'if'],
    correctAnswer: 'if'
  },
  {
    question: '¿Qué estructura de datos utiliza una Queue?',
    options: [
      'FIFO (First In First Out)',
      'LIFO (Last In First Out)',
      'Random Access',
      'FILO (First In Last Out)'
    ],
    correctAnswer: 'FIFO (First In First Out)'
  },
  {
    question: '¿Qué hace el método `poll()` en una Queue en Java?',
    options: [
      'Añade un elemento al final de la cola.',
      'Reordena los elementos de la cola.',
      'Devuelve el último elemento sin eliminarlo.',
      'Elimina y devuelve el primer elemento de la cola.'
    ],
    correctAnswer: 'Elimina y devuelve el primer elemento de la cola.'
  },
  {
    question: '¿Qué hace este código? int numero = 1; while (numero <= 3) { System.out.println(numero); numero++; }',
    options: [
      'Imprime 1, 2',
      'Imprime 1, 2, 3',
      'No imprime nada',
      'Imprime 0, 1, 2'
    ],
    correctAnswer: 'Imprime 1, 2, 3'
  },
  {
    question: '¿Qué hace este método recursivo correctamente escrito? void imprimir(int x) { if (x > 0) { imprimir(x - 1); System.out.println(x); } }',
    options: [
      'No imprime nada.',
      'Imprime del número x hacia 1.',
      'Imprime solo el número x.',
      'Imprime del 1 hasta x.'
    ],
    correctAnswer: 'Imprime del 1 hasta x.'
  },
  {
    question: '¿Qué imprimirá el siguiente código? Persona p = new Persona(\'Ana\', \'García\', \'555123\'); System.out.println(p.getNombre());',
    options: ['555123', 'Ana', 'p', 'García'],
    correctAnswer: 'Ana'
  },
  {
    question: '¿Qué imprimirá el siguiente fragmento de código? for (int i = 0; i < 3; i++) { System.out.println(i); }',
    options: ['0, 1, 2', '1, 2', '0, 1, 2, 3', '1, 2, 3'],
    correctAnswer: '0, 1, 2'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones describe mejor el polimorfismo en Java?',
    options: [
      'La sobrecarga de operadores.',
      'La capacidad de una variable, una función o un objeto de tomar varias formas.',
      'La herencia de métodos de una clase padre.',
      'La encapsulación de datos y métodos.'
    ],
    correctAnswer: 'La capacidad de una variable, una función o un objeto de tomar varias formas.'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones es verdadera sobre el uso de la palabra clave super en Java?',
    options: [
      'Se usa para evitar la sobrecarga de métodos.',
      'Permite acceder a los métodos y variables de clase padre desde una subclase.',
      'Se usa para definir métodos abstractos.',
      'Se usa para declarar una variable como estática.'
    ],
    correctAnswer: 'Permite acceder a los métodos y variables de clase padre desde una subclase.'
  },
  {
    question: '¿Cuál es el método para agregar un elemento a un ArrayList en Java?',
    options: [
      'addItem()',
      'addElement()',
      'add()',
      'insert()'
    ],
    correctAnswer: 'add()'
  },
  {
    question: '¿Cuál es el modificador de acceso más restrictivo en Java?',
    options: [
      'default',
      'public',
      'private',
      'protected'
    ],
    correctAnswer: 'private'
  },
  {
    question: '¿Cuál es el modificador de acceso predeterminado si no se especifica ninguno en Java?',
    options: [
      'protected',
      'public',
      'private',
      'default'
    ],
    correctAnswer: 'default'
  },
  {
    question: '¿Cuál es el propósito de la interfaz?\ninterface Dibujable {\n    void dibujar();\n}\nclass Cuadro implements Dibujable {\n    public void dibujar() {\n        System.out.println("Dibujando cuadro");\n    }\n}',
    options: [
      'Crear objetos',
      'Definir un contrato que la clase debe cumplir',
      'Implementar herencia',
      'Guardar datos'
    ],
    correctAnswer: 'Definir un contrato que la clase debe cumplir'
  },
  {
    question: '¿Cuál es la forma correcta de crear un ArrayList en Java?',
    options: [
      'ArrayList<Integer> list = new ArrayList<String>();',
      'ArrayList<int> list = new ArrayList<>();',
      'ArrayList<Integer> list = new ArrayList<Integer>();',
      'ArrayList<int> list = new ArrayList<int>();'
    ],
    correctAnswer: 'ArrayList<Integer> list = new ArrayList<Integer>();'
  },
  {
    question: '¿Cuál es la principal diferencia entre una clase abstracta y una interfaz en Java?',
    options: [
      'Una interfaz puede tener variables de instancia, mientras que una clase abstracta no.',
      'Una interfaz puede tener constructores, mientras que una clase abstracta no.',
      'Una clase abstracta no puede ser heredada, mientras que una interfaz sí.',
      'Una clase abstracta puede tener métodos con implementación, mientras que una interfaz solo puede tener métodos abstractos.'
    ],
    correctAnswer: 'Una clase abstracta puede tener métodos con implementación, mientras que una interfaz solo puede tener métodos abstractos.'
  },
  {
    question: '¿Cuál es la salida del programa?\npublic class Recursiva {\n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}',
    options: [
      '15',
      '120',
      'Error de compilación',
      '5'
    ],
    correctAnswer: '120'
  },
  {
    question: '¿Cuál es la salida del siguiente código recursivo al ser llamado con metodoRecursivo(4)?\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(metodoRecursivo(4));\n    }\n    public static int metodoRecursivo(int n) {\n        int resultado;\n        if (n == 1) {\n            resultado = 1;\n        } else {\n            resultado = n * metodoRecursivo(n - 1);\n        }\n        return resultado;\n    }\n}',
    options: [
      '1',
      '24',
      '12',
      '4'
    ],
    correctAnswer: '24'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones describe mejor el polimorfismo en Java?',
    options: [
      'La sobrecarga de operadores.',
      'La capacidad de una variable, una función o un objeto de tomar varias formas.',
      'La herencia de métodos de una clase padre.',
      'La encapsulación de datos y métodos.'
    ],
    correctAnswer: 'La capacidad de una variable, una función o un objeto de tomar varias formas.'
  },
  {
    question: '¿Cuál de las siguientes afirmaciones es verdadera sobre el uso de la palabra clave super en Java?',
    options: [
      'Se usa para evitar la sobrecarga de métodos.',
      'Permite acceder a los métodos y variables de clase padre desde una subclase.',
      'Se usa para definir métodos abstractos.',
      'Se usa para declarar una variable como estática.'
    ],
    correctAnswer: 'Permite acceder a los métodos y variables de clase padre desde una subclase.'
  },
  {
    question: '¿Cuál es el método para agregar un elemento a un ArrayList en Java?',
    options: [
      'addItem()',
      'addElement()',
      'add()',
      'insert()'
    ],
    correctAnswer: 'add()'
  },
  {
    question: '¿Cuál es el modificador de acceso más restrictivo en Java?',
    options: [
      'default',
      'public',
      'private',
      'protected'
    ],
    correctAnswer: 'private'
  },
  {
    question: '¿Cuál es el modificador de acceso predeterminado si no se especifica ninguno en Java?',
    options: [
      'protected',
      'public',
      'private',
      'default'
    ],
    correctAnswer: 'default'
  },
  {
    question: '¿Cuál es el propósito de la interfaz?\ninterface Dibujable {\n    void dibujar();\n}\nclass Cuadro implements Dibujable {\n    public void dibujar() {\n        System.out.println("Dibujando cuadro");\n    }\n}',
    options: [
      'Crear objetos',
      'Definir un contrato que la clase debe cumplir',
      'Implementar herencia',
      'Guardar datos'
    ],
    correctAnswer: 'Definir un contrato que la clase debe cumplir'
  },
  {
    question: '¿Cuál es la forma correcta de crear un ArrayList en Java?',
    options: [
      'ArrayList<Integer> list = new ArrayList<String>();',
      'ArrayList<int> list = new ArrayList<>();',
      'ArrayList<Integer> list = new ArrayList<Integer>();',
      'ArrayList<int> list = new ArrayList<int>();'
    ],
    correctAnswer: 'ArrayList<Integer> list = new ArrayList<Integer>();'
  },
  {
    question: '¿Cuál es la principal diferencia entre una clase abstracta y una interfaz en Java?',
    options: [
      'Una interfaz puede tener variables de instancia, mientras que una clase abstracta no.',
      'Una interfaz puede tener constructores, mientras que una clase abstracta no.',
      'Una clase abstracta no puede ser heredada, mientras que una interfaz sí.',
      'Una clase abstracta puede tener métodos con implementación, mientras que una interfaz solo puede tener métodos abstractos.'
    ],
    correctAnswer: 'Una clase abstracta puede tener métodos con implementación, mientras que una interfaz solo puede tener métodos abstractos.'
  },
  {
    question: '¿Cuál es la salida del programa?\npublic class Recursiva {\n    public static int factorial(int n) {\n        if (n <= 1) return 1;\n        return n * factorial(n - 1);\n    }\n    public static void main(String[] args) {\n        System.out.println(factorial(5));\n    }\n}',
    options: [
      '15',
      '120',
      'Error de compilación',
      '5'
    ],
    correctAnswer: '120'
  },
  {
    question: '¿Cuál es la salida del siguiente código recursivo al ser llamado con metodoRecursivo(4)?\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(metodoRecursivo(4));\n    }\n    public static int metodoRecursivo(int n) {\n        int resultado;\n        if (n == 1) {\n            resultado = 1;\n        } else {\n            resultado = n * metodoRecursivo(n - 1);\n        }\n        return resultado;\n    }\n}',
    options: [
      '1',
      '24',
      '12',
      '4'
    ],
    correctAnswer: '24'
  },
  {
    question: '¿Cuál es la salida del siguiente código?\npublic class Main {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = 10;\n        x = x + y;\n        y = x - y;\n        x = x - y;\n        System.out.println("x: " + x + ", y: " + y);\n    }\n}',
    options: [
      'x: 15, y: 0',
      'x: 10, y: 5',
      'x: 5, y: 10',
      'x: 0, y: 15'
    ],
    correctAnswer: 'x: 10, y: 5'
  },
  {
    question: '¿Cuál es la salida del siguiente código?\nString pattern = "a*b";\nString text = "aaaaab";\nboolean match = text.matches(pattern);\nSystem.out.println(match);',
    options: [
      'true',
      'false',
      'Error de compilación',
      'aaaaab'
    ],
    correctAnswer: 'true'
  },
  {
    question: '¿Cuál es la salida?\npublic class Ciclo {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            System.out.print(i + " ");\n        }\n    }\n}',
    options: [
      '3 2 1',
      'Error',
      '0 1 2',
      '1 2 3'
    ],
    correctAnswer: '1 2 3'
  },
  {
    question: '¿Qué clase en Java se utiliza para leer datos de un archivo de texto?',
    options: [
      'FileInputStream',
      'FileReader',
      'FileWriter',
      'BufferedWriter'
    ],
    correctAnswer: 'FileReader'
  },
  {
    question: '¿Qué es la recursividad en programación?',
    options: [
      'Un método que se llama a sí mismo.',
      'Un bucle que se repite indefinidamente.',
      'Una técnica para sortear excepciones.',
      'Una variable que cambia su valor automáticamente.'
    ],
    correctAnswer: 'Un método que se llama a sí mismo.'
  },
  {
    question: '¿Qué estructura de datos en Java permite almacenar pares de clave y valor?',
    options: [
      'HashMap',
      'a y b son correctas.',
      'ArrayList',
      'Ninguna es correcta'
    ],
    correctAnswer: 'HashMap'
  },
  {
    question: '¿Qué hace este código?\npublic class Hilo extends Thread {\n    public void run() {\n        System.out.println("Hilo ejecutándose");\n    }\n    public static void main(String[] args) {\n        Hilo h = new Hilo();\n        h.run();\n    }\n}',
    options: [
      'Ejecuta un hilo con start()',
      'Crea una interfaz',
      'Lanza error',
      'Ejecuta run() manualmente'
    ],
    correctAnswer: 'Ejecuta run() manualmente'
  },
  {
    question: '¿Qué imprime el código?\npublic class Contador {\n    private static int cuenta = 0;\n    public Contador() {\n        cuenta++;\n    }\n    public static int getCuenta() {\n        return cuenta;\n    }\n    public static void main(String[] args) {\n        new Contador();\n        new Contador();\n        System.out.println(Contador.getCuenta());\n    }\n}',
    options: [
      'Error',
      '1',
      '2',
      '0'
    ],
    correctAnswer: '2'
  },
  {
    question: '¿Qué imprime el siguiente código?\npublic class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        String t = "world";\n        String u = s + t;\n        System.out.println(u.length());\n    }\n}',
    options: [
      '12',
      '5',
      '10',
      '11'
    ],
    correctAnswer: '10'
  },
  {
    question: '¿Qué imprime este código?\npublic class Incremento {\n    public static void main(String[] args) {\n        int a = 5;\n        System.out.println(++a);\n    }\n}',
    options: [
      '6',
      '4',
      '5',
      'Error'
    ],
    correctAnswer: '6'
  },

  {
    question: '¿Qué imprime este código?\npublic class Suma {\n\n    public static int suma(int[] numeros) {\n        int total = 0;\n        for (int i = 0; i < numeros.length; i++) {\n            total += numeros[i];\n        }\n        return total;\n    }\n\n    public static void main(String[] args) {\n        int[] num = {1, 2, 3};\n        System.out.println(suma(num));\n    }\n}',
    options: [
      '123',
      '6',
      '6.0',
      'Error'
    ],
    correctAnswer: '6'
  },
  {
    question: '¿Qué imprime este programa?\nimport java.util.ArrayList;\n\npublic class Lista {\n    public static void main(String[] args) {\n        ArrayList<String> lista = new ArrayList<>();\n        lista.add("uno");\n        lista.add("dos");\n        System.out.println(lista.get(0));\n    }\n}',
    options: [
      'Error',
      'dos',
      '0',
      'uno'
    ],
    correctAnswer: 'uno'
  },
  {
    question: '¿Qué imprime este programa?\nimport java.util.HashMap;\n\npublic class Mapa {\n    public static void main(String[] args) {\n        HashMap<String, Integer> mapa = new HashMap<>();\n        mapa.put("clave", 100);\n        System.out.println(mapa.get("clave"));\n    }\n}',
    options: [
      'Error',
      '100',
      'null',
      '"clave"'
    ],
    correctAnswer: '100'
  },
  {
    question: '¿Qué imprime?\npublic class StringTest {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "Java";\n        System.out.println(s1 == s2);\n    }\n}',
    options: [
      'null',
      'false',
      'Error',
      'true'
    ],
    correctAnswer: 'true'
  },
  {
    question: '¿Qué mensaje imprime?\npublic class Excepcion {\n    public static void main(String[] args) {\n        try {\n            int a = 5 / 0;\n        } catch (ArithmeticException e) {\n            System.out.println("Error aritmético");\n        }\n    }\n}',
    options: [
      '0',
      'Exception',
      'Error aritmético',
      '5'
    ],
    correctAnswer: 'Error aritmético'
  },
  {
    question: '¿Qué método de la clase String se usa para convertir todas las letras de una cadena a minúsculas?',
    options: [
      'toLowerCase()',
      'convertToLower()',
      'tolower()',
      'toLower()'
    ],
    correctAnswer: 'toLowerCase()'
  },
  {
    question: '¿Qué método se usa para cerrar un archivo después de escribir en él usando la clase FileWriter?',
    options: [
      'finish()',
      'closeFile()',
      'close()',
      'end()'
    ],
    correctAnswer: 'close()'
  },
  {
    question: '¿Qué método se utiliza para obtener la longitud de un array en Java?',
    options: [
      'size()',
      'length()',
      'length',
      'getLength()'
    ],
    correctAnswer: 'length'
  },
  {
    question: '¿Qué método se utiliza para obtener un valor a partir de una clave en un HashMap en Java?',
    options: [
      'getValue()',
      'retrieve()',
      'find()',
      'get()'
    ],
    correctAnswer: 'get()'
  },
  {
    question: '¿Qué palabra clave se utiliza para definir una clase que no puede ser extendida?',
    options: [
      'abstract',
      'final',
      'private',
      'static'
    ],
    correctAnswer: 'final'
  },
  {
    question: '¿Qué palabra clave se utiliza para implementar una interfaz en una clase en Java?',
    options: [
      'extend',
      'extends',
      'implements',
      'implement'
    ],
    correctAnswer: 'implements'
  },
  {
    question: '¿Qué realiza este código?\nimport java.io.*;\n\npublic class Lectura {\n    public static void main(String[] args) throws IOException {\n        BufferedReader br = new BufferedReader(new FileReader("datos.txt"));\n        String linea;\n        while ((linea = br.readLine()) != null) {\n            System.out.println(linea);\n        }\n        br.close();\n    }\n}',
    options: [
      'Lee línea por línea un archivo de texto, e imprime por consola la línea.',
      'Escribe datos en un archivo',
      'Borra un archivo',
      'Imprime una línea vacía'
    ],
    correctAnswer: 'Lee línea por línea un archivo de texto, e imprime por consola la línea.'
  },
  {
    question: '¿Qué representa la clase Figura?\nabstract class Figura {\n    abstract double area();\n}\nclass Circulo extends Figura {\n    double radio;\n    Circulo(double radio) {\n        this.radio = radio;\n    }\n    double area() {\n        return Math.PI * radio * radio;\n    }\n}',
    options: [
      'Una interfaz',
      'Una clase concreta',
      'Una clase abstracta que sirve como base',
      'Una excepción'
    ],
    correctAnswer: 'Una clase abstracta que sirve como base'
  },
  {
    question: '¿Qué representa PI?\npublic class Constantes {\n    public static final double PI = 3.14;\n    public static void main(String[] args) {\n        System.out.println(PI);\n    }\n}',
    options: [
      'Un método',
      'Una constante',
      'Una variable privada',
      'Una clase'
    ],
    correctAnswer: 'Una constante'
  },
  {
    question: '¿Qué resultado imprime?\npublic class Comparar {\n    public static void main(String[] args) {\n        String a = "hola";\n        String b = new String("hola");\n        System.out.println(a.equals(b));\n    }\n}',
    options: [
      'hola',
      'false',
      'Error',
      'true'
    ],
    correctAnswer: 'true'
  },
  {
    question: '¿Qué salida produce este código?\npublic class Persona {\n    private String nombre;\n    public Persona(String nombre) {\n        this.nombre = nombre;\n    }\n    public void saludar() {\n        System.out.println("Hola, soy " + nombre);\n    }\n    public static void main(String[] args) {\n        Persona p = new Persona("Ana");\n        p.saludar();\n    }\n}',
    options: [
      'nombre',
      'Hola, soy Ana',
      'Error de compilación',
      'Hola, soy null'
    ],
    correctAnswer: 'Hola, soy Ana'
  },
  {
    question: '¿Qué se imprime?\nclass A {\n    public A() {\n        System.out.println("Constructor A");\n    }\n}\nclass B extends A {\n    public B() {\n        System.out.println("Constructor B");\n    }\n    public static void main(String[] args) {\n        new B();\n    }\n}',
    options: [
      'Constructor A\nConstructor B',
      'Solo Constructor B',
      'Constructor B\nConstructor A',
      'Error'
    ],
    correctAnswer: 'Constructor A\nConstructor B'
  },
  {
    question: '¿Qué se imprime?\npublic class Animal {\n    public void sonido() {\n        System.out.println("Sonido de animal");\n    }\n}\nclass Gato extends Animal {\n    @Override\n    public void sonido() {\n        System.out.println("Miau");\n    }\n    public static void main(String[] args) {\n        Animal a = new Gato();\n        a.sonido();\n    }\n}',
    options: [
      'Miau',
      'Gato',
      'Sonido de animal',
      'Error'
    ],
    correctAnswer: 'Miau'
  },
  {
    question: '¿Qué se imprime?\npublic class Main {\n    public static void main(String[] args) {\n        String texto = "Hola Mundo";\n        System.out.println(texto.substring(5));\n    }\n}',
    options: [
      'Error',
      'Hola',
      'Mundo',
      'Hola Mundo'
    ],
    correctAnswer: 'Mundo'
  },
  {
    question: '¿Qué valor se imprime?\npublic class Prueba {\n    public static void main(String[] args) {\n        int[] numeros = {1, 2, 3, 4};\n        System.out.println(numeros[2]);\n    }\n}',
    options: [
      '2',
      '1',
      'Error',
      '3'
    ],
    correctAnswer: '3'
  },
  {
    question: '¿Qué ocurre si un método en Java está declarado como static?',
    options: [
      'Solo puede ser llamado desde objetos instanciados',
      'Pertenece a la clase y no al objeto',
      'Puede acceder directamente a variables de instancia',
      'No puede retornar ningún valor'
    ],
    correctAnswer: 'Pertenece a la clase y no al objeto'
  },
  {
    question: '¿Qué palabra clave en Java se utiliza para definir un método que no retorna ningún valor?',
    options: [
      'static',
      'void',
      'null',
      'return'
    ],
    correctAnswer: 'void'
  },
  {
    question: '¿Qué palabra clave permite implementar una interfaz en Java?',
    options: [
      'extends',
      'interface',
      'implements',
      'inherits'
    ],
    correctAnswer: 'implements'
  },
  {
    question: '¿Qué palabra clave se utiliza en Java para heredar de una clase abstracta?',
    options: [
      'inherits',
      'extends',
      'implements',
      'override'
    ],
    correctAnswer: 'extends'
  },
  {
    question: "¿Qué resultado produce el siguiente código? String s = 'Hola'; System.out.println(s.charAt(1));",
    options: [
      'H',
      'l',
      'o',
      'a'
    ],
    correctAnswer: 'o'
  },
  {
    question: "¿Qué resultado tiene este bloque de código? try { int[] v = new int[2];v[2] = 5; } catch (ArrayIndexOutOfBoundsException e) { System.out.println('Error de índice'); }",
    options: [
      'No imprime nada',
      'Da error de compilación',
      'Imprime 5',
      "Imprime 'Error de índice'"
    ],
    correctAnswer: "Imprime 'Error de índice'"
  },
  {
    question: "¿Qué salida genera el siguiente código? for (int i = 3; i > 0; i--) { System.out.print(i + ' '); }",
    options: [
      '0 1 2',
      '3 2 1',
      '3 2 1 0',
      '1 2 3'
    ],
    correctAnswer: '3 2 1'
  },
  {
    question: "¿Qué salida genera este código recursivo? void cuenta(int n) { if (n > 0) { cuenta(n - 1); System.out.print(n + ' '); } } cuenta(3);",
    options: [
      '1 2 3',
      '0 1 2 3',
      '3 2 1',
      '2 1 3'
    ],
    correctAnswer: '1 2 3'
  },
  {
    question: "¿Qué salida produce este código? List<String> lista = new ArrayList<>(); lista.add('Java'); lista.clear(); System.out.println(lista.size());",
    options: [
      '1',
      '0',
      'null',
      'Error'
    ],
    correctAnswer: '0'
  },
  {
    question: "¿Qué se imprime al ejecutar este código? List<String> lista = new ArrayList<>(); lista.add('uno'); lista.add('dos'); lista.set(1, 'tres'); System.out.println(lista.get(1));",
    options: [
      'Error de compilación',
      'dos',
      'tres',
      'uno'
    ],
    correctAnswer: 'tres'
  },
  {
    question: "¿Qué se imprime con este código? String texto = null; try { System.out.println(texto.length()); } catch (NullPointerException e) { System.out.println('Referencia nula'); }",
    options: [
      'null',
      'Referencia nula',
      '0',
      'Da error en tiempo de compilación'
    ],
    correctAnswer: 'Referencia nula'
  },
  {
    question: '¿Qué se necesita para leer texto desde un archivo en Java con BufferedReader?',
    options: [
      'Scanner',
      'FileOutputStream',
      'FileReader',
      'InputStream'
    ],
    correctAnswer: 'FileReader'
  },
  {
    question: '¿Qué se requiere para que un botón en Swing detecte clics?',
    options: [
      'Implementar KeyEvent',
      'Crear una subclase de JPanel',
      'Llamar a repaint()',
      'Añadir un ActionListener'
    ],
    correctAnswer: 'Añadir un ActionListener'
  },
  {
    question: '¿Qué sucede si se intenta acceder a la posición 10 de un array de tamaño 5 en Java?',
    options: [
      'Se retorna null',
      'El programa imprime 0',
      'Lanza una excepción en tiempo de ejecución',
      'Se ignora la instrucción'
    ],
    correctAnswer: 'Lanza una excepción en tiempo de ejecución'
  },
  {
    question: '¿Qué sucede si un switch en Java no tiene sentencias break entre los case?',
    options: [
      'Da error de compilación',
      'Ejecuta solo el default',
      'Ejecuta todos los casos desde el coincidente hasta encontrar un break',
      'Solo se ejecuta el case coincidente'
    ],
    correctAnswer: 'Ejecuta todos los casos desde el coincidente hasta encontrar un break'
  },
  {
    question: '¿Qué sucede si una clase no implementa todos los métodos de una interfaz?',
    options: [
      'Se ejecutan con valores nulos',
      'Da error de compilación',
      'Se generan automáticamente',
      'Se ejecutan como métodos vacíos'
    ],
    correctAnswer: 'Da error de compilación'
  },
  {
    question: '¿Qué sucede si una excepción ocurre y no se captura?',
    options: [
      'El programa se detiene con un error',
      'La excepción se ignora',
      'El programa continúa normalmente',
      'Se imprime null'
    ],
    correctAnswer: 'El programa se detiene con un error'
  },
  {
    question: '¿Qué valor se imprime con el siguiente código? int x = 4; x *= 3; System.out.println(x);',
    options: [
      '7',
      '3',
      '1',
      '12'
    ],
    correctAnswer: '12'
  },
  {
    question: '¿Qué valor tiene el atributo length en un array declarado como int[] datos = {1, 2, 3, 4};?',
    options: [
      '4',
      '3',
      'datos.length no es válido',
      '5'
    ],
    correctAnswer: '4'
  },
  {
    question: '¿Qué ventaja principal tiene usar ArrayList sobre arrays tradicionales en Java?',
    options: [
      'No necesitan tipo de dato',
      'Permiten redimensionar dinámicamente',
      'Usan menos memoria',
      'Son más rápidos'
    ],
    correctAnswer: 'Permiten redimensionar dinámicamente'
  },
  {
    question: '¿Qué ocurre si un método en Java está declarado como static?',
    options: [
      'Solo puede ser llamado desde objetos instanciados',
      'Pertenece a la clase y no al objeto',
      'Puede acceder directamente a variables de instancia',
      'No puede retornar ningún valor'
    ],
    correctAnswer: 'Pertenece a la clase y no al objeto'
  },
  {
    question: '¿Qué palabra clave en Java se utiliza para definir un método que no retorna ningún valor?',
    options: [
      'static',
      'void',
      'null',
      'return'
    ],
    correctAnswer: 'void'
  },
  {
    question: '¿Qué palabra clave permite implementar una interfaz en Java?',
    options: [
      'extends',
      'interface',
      'implements',
      'inherits'
    ],
    correctAnswer: 'implements'
  },
  {
    question: '¿Qué palabra clave se utiliza en Java para heredar de una clase abstracta?',
    options: [
      'inherits',
      'extends',
      'implements',
      'override'
    ],
    correctAnswer: 'extends'
  },
  {
    question: "¿Qué resultado produce el siguiente código? String s = 'Hola'; System.out.println(s.charAt(1));",
    options: [
      'H',
      'l',
      'o',
      'a'
    ],
    correctAnswer: 'o'
  },
  {
    question: "¿Qué resultado tiene este bloque de código? try { int[] v = new int[2];v[2] = 5; } catch (ArrayIndexOutOfBoundsException e) { System.out.println('Error de índice'); }",
    options: [
      'No imprime nada',
      'Da error de compilación',
      'Imprime 5',
      "Imprime 'Error de índice'"
    ],
    correctAnswer: "Imprime 'Error de índice'"
  },
  {
    question: "¿Qué salida genera el siguiente código? for (int i = 3; i > 0; i--) { System.out.print(i + ' '); }",
    options: [
      '0 1 2',
      '3 2 1',
      '3 2 1 0',
      '1 2 3'
    ],
    correctAnswer: '3 2 1'
  },
  {
    question: "¿Qué salida genera este código recursivo? void cuenta(int n) { if (n > 0) { cuenta(n - 1); System.out.print(n + ' '); } } cuenta(3);",
    options: [
      '1 2 3',
      '0 1 2 3',
      '3 2 1',
      '2 1 3'
    ],
    correctAnswer: '1 2 3'
  },
  {
    question: "¿Qué salida produce este código? List<String> lista = new ArrayList<>(); lista.add('Java'); lista.clear(); System.out.println(lista.size());",
    options: [
      '1',
      '0',
      'null',
      'Error'
    ],
    correctAnswer: '0'
  },
  {
    question: "¿Qué se imprime al ejecutar este código? List<String> lista = new ArrayList<>(); lista.add('uno'); lista.add('dos'); lista.set(1, 'tres'); System.out.println(lista.get(1));",
    options: [
      'Error de compilación',
      'dos',
      'tres',
      'uno'
    ],
    correctAnswer: 'tres'
  },
  {
    question: "¿Qué se imprime con este código? String texto = null; try { System.out.println(texto.length()); } catch (NullPointerException e) { System.out.println('Referencia nula'); }",
    options: [
      'null',
      'Referencia nula',
      '0',
      'Da error en tiempo de compilación'
    ],
    correctAnswer: 'Referencia nula'
  },
  {
    question: '¿Qué se necesita para leer texto desde un archivo en Java con BufferedReader?',
    options: [
      'Scanner',
      'FileOutputStream',
      'FileReader',
      'InputStream'
    ],
    correctAnswer: 'FileReader'
  },
  {
    question: '¿Qué se requiere para que un botón en Swing detecte clics?',
    options: [
      'Implementar KeyEvent',
      'Crear una subclase de JPanel',
      'Llamar a repaint()',
      'Añadir un ActionListener'
    ],
    correctAnswer: 'Añadir un ActionListener'
  },
  {
    question: '¿Qué sucede si se intenta acceder a la posición 10 de un array de tamaño 5 en Java?',
    options: [
      'Se retorna null',
      'El programa imprime 0',
      'Lanza una excepción en tiempo de ejecución',
      'Se ignora la instrucción'
    ],
    correctAnswer: 'Lanza una excepción en tiempo de ejecución'
  },
  {
    question: '¿Qué sucede si un switch en Java no tiene sentencias break entre los case?',
    options: [
      'Da error de compilación',
      'Ejecuta solo el default',
      'Ejecuta todos los casos desde el coincidente hasta encontrar un break',
      'Solo se ejecuta el case coincidente'
    ],
    correctAnswer: 'Ejecuta todos los casos desde el coincidente hasta encontrar un break'
  },
  {
    question: '¿Qué sucede si una clase no implementa todos los métodos de una interfaz?',
    options: [
      'Se ejecutan con valores nulos',
      'Da error de compilación',
      'Se generan automáticamente',
      'Se ejecutan como métodos vacíos'
    ],
    correctAnswer: 'Da error de compilación'
  },
  {
    question: '¿Qué sucede si una excepción ocurre y no se captura?',
    options: [
      'El programa se detiene con un error',
      'La excepción se ignora',
      'El programa continúa normalmente',
      'Se imprime null'
    ],
    correctAnswer: 'El programa se detiene con un error'
  },
  {
    question: '¿Qué valor se imprime con el siguiente código? int x = 4; x *= 3; System.out.println(x);',
    options: [
      '7',
      '3',
      '1',
      '12'
    ],
    correctAnswer: '12'
  },
  {
    question: '¿Qué valor tiene el atributo length en un array declarado como int[] datos = {1, 2, 3, 4};?',
    options: [
      '4',
      '3',
      'datos.length no es válido',
      '5'
    ],
    correctAnswer: '4'
  },
  {
    question: '¿Qué ventaja principal tiene usar ArrayList sobre arrays tradicionales en Java?',
    options: [
      'No necesitan tipo de dato',
      'Permiten redimensionar dinámicamente',
      'Usan menos memoria',
      'Son más rápidos'
    ],
    correctAnswer: 'Permiten redimensionar dinámicamente'
  }

  
  
  
    
  
  

  
    
  
  
    
  
  
    
  
  

  
    
  
  
];
