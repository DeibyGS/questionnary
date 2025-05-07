import { Question } from '../InterfaceQuestion';

export const questionsSistemasInformaticos: Question[] = [
  {
    question: '¿Qué es un sistema informático?',
    options: [
      'Un conjunto de programas que permiten realizar tareas específicas',
      'Un conjunto de componentes electrónicos que forman una computadora',
      'Un conjunto de elementos interrelacionados que permiten procesar y almacenar información',
      'Un dispositivo que permite la conexión a internet'
    ],
    correctAnswer: 'Un conjunto de elementos interrelacionados que permiten procesar y almacenar información'
  },
  {
    question: '¿Cuál de los siguientes es un componente de hardware?',
    options: [
      'Sistema operativo',
      'Procesador (CPU)',
      'Antivirus',
      'Microsoft Word'
    ],
    correctAnswer: 'Procesador (CPU)'
  },
  {
    question: '¿Qué función tiene la memoria RAM en un sistema informático?',
    options: [
      'Almacenar datos de forma permanente',
      'Procesar las instrucciones del sistema',
      'Almacenar temporalmente datos e instrucciones en uso',
      'Controlar los dispositivos de entrada y salida'
    ],
    correctAnswer: 'Almacenar temporalmente datos e instrucciones en uso'
  },
  {
    question: '¿Qué es el software de sistema?',
    options: [
      'Programas diseñados para realizar tareas específicas para el usuario',
      'Conjunto de instrucciones que permiten el funcionamiento del hardware',
      'Aplicaciones de ofimática como procesadores de texto',
      'Programas que protegen al sistema de virus'
    ],
    correctAnswer: 'Conjunto de instrucciones que permiten el funcionamiento del hardware'
  },
  {
    question: '¿Cuál de los siguientes es un sistema operativo?',
    options: [
      'Linux',
      'Google Chrome',
      'Adobe Photoshop',
      'Intel Core i7'
    ],
    correctAnswer: 'Linux'
  },
  {
    question: '¿Qué componente se encarga de ejecutar las instrucciones de los programas?',
    options: [
      'Memoria RAM',
      'Disco duro',
      'Procesador (CPU)',
      'Tarjeta gráfica'
    ],
    correctAnswer: 'Procesador (CPU)'
  },
  {
    question: '¿Qué es un dispositivo de entrada?',
    options: [
      'Un componente que muestra información al usuario',
      'Un componente que almacena datos',
      'Un componente que permite al usuario introducir datos al sistema',
      'Un componente que procesa datos'
    ],
    correctAnswer: 'Un componente que permite al usuario introducir datos al sistema'
  },
  {
    question: '¿Qué es un dispositivo de salida?',
    options: [
      'Un componente que permite al usuario introducir datos al sistema',
      'Un componente que almacena datos',
      'Un componente que procesa datos',
      'Un componente que muestra información al usuario'
    ],
    correctAnswer: 'Un componente que muestra información al usuario'
  },
  {
    question: '¿Qué es un archivo con extensión .docx?',
    options: [
      'Un archivo de imagen',
      'Un archivo de audio',
      'Un documento de Microsoft Word',
      'Un archivo ejecutable'
    ],
    correctAnswer: 'Un documento de Microsoft Word'
  },
  {
    question: '¿Qué es la BIOS en un sistema informático?',
    options: [
      'Un tipo de memoria de almacenamiento',
      'Un sistema operativo',
      'Un software que inicia el hardware al encender el ordenador',
      'Una aplicación de ofimática'
    ],
    correctAnswer: 'Un software que inicia el hardware al encender el ordenador'
  },
  {
    question: '¿Cómo puedes ver la ayuda rápida de un comando?',
    options: [
      'comando /help',
      'comando --help',
      'man comando',
      'help comando'
    ],
    correctAnswer: 'comando --help'
  },
  {
    question: '¿Cómo se accede al manual del comando ls?',
    options: [
      'help ls',
      'man ls',
      'info man',
      'ls --help'
    ],
    correctAnswer: 'man ls'
  },
  {
    question: '¿Cómo se puede ver el número de inodo de un archivo?',
    options: [
      'stat',
      'info',
      'ls -l',
      'ls -li'
    ],
    correctAnswer: 'ls -li'
  },
  {
    question: '¿Cuál de los siguientes comandos cambia al directorio raíz?',
    options: [
      'cd root',
      'cd ~',
      'cd /',
      'cd ..'
    ],
    correctAnswer: 'cd /'
  },
  {
    question: '¿Cuál de los siguientes crea un enlace simbólico?',
    options: [
      'cp -s',
      'ln -s',
      'mv -s',
      'ln'
    ],
    correctAnswer: 'ln -s'
  },
  {
    question: '¿Cuál es el comando para borrar todos los archivos de un directorio sin eliminar el directorio?',
    options: [
      'delete .',
      'rm -r',
      'rm *',
      'rmdir'
    ],
    correctAnswer: 'rm *'
  },
  {
    question: '¿Cuál es el comando para ver los permisos de los archivos?',
    options: [
      'ls -l',
      'touch',
      'cat',
      'chmod'
    ],
    correctAnswer: 'ls -l'
  },
  {
    question: '¿Cuál es el propósito de rmdir?',
    options: [
      'Crea enlaces',
      'Cambia permisos',
      'Borra directorios vacíos',
      'Borra archivos'
    ],
    correctAnswer: 'Borra directorios vacíos'
  },
  {
    question: '¿Cuál es el propósito del comando pwd?',
    options: [
      'Mostrar el directorio actual',
      'Borrar archivos',
      'Mover archivos',
      'Crear archivos'
    ],
    correctAnswer: 'Mostrar el directorio actual'
  },
  {
    question: '¿Cuál es el uso principal del comando cp?',
    options: [
      'Eliminar archivos',
      'Crear enlaces',
      'Copiar archivos',
      'Mover archivos'
    ],
    correctAnswer: 'Copiar archivos'
  },
  {
    question: '¿Cuál es la diferencia entre > y >> en Linux?',
    options: [
      '> borra el archivo original',
      'Ambos hacen lo mismo',
      '>> borra, > no',
      '> sobrescribe, >> añade'
    ],
    correctAnswer: '> sobrescribe, >> añade'
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
      'Muestra el propietario',
      'Cambia permisos',
      'Muestra archivos ocultos',
      'Borra archivos'
    ],
    correctAnswer: 'Muestra archivos ocultos'
  },
  {
    question: '¿Qué comando crea un nuevo archivo vacío?',
    options: [
      'touch',
      'mkfile',
      'cat',
      'nano'
    ],
    correctAnswer: 'touch'
  },
  {
    question: '¿Qué comando elimina un directorio y todo su contenido?',
    options: [
      'delete',
      'rm',
      'rm -r',
      'rmdir'
    ],
    correctAnswer: 'rm -r'
  },
  {
    question: '¿Qué comando muestra los archivos en orden cronológico?',
    options: [
      'ls -r',
      'ls -lt',
      'ls -a',
      'ls -i'
    ],
    correctAnswer: 'ls -lt'
  },
  {
    question: '¿Qué comando muestra los manuales divididos por secciones?',
    options: [
      'ls -man',
      'man',
      'help',
      'man -k'
    ],
    correctAnswer: 'man -k'
  },
  {
    question: '¿Qué comando permite visualizar el contenido de un archivo?',
    options: [
      'touch',
      'rm',
      'ls',
      'cat'
    ],
    correctAnswer: 'cat'
  },
  {
    question: '¿Qué comando se usa para copiar un directorio con todo su contenido?',
    options: [
      'cp -r',
      'ln -r',
      'cp',
      'mv -r'
    ],
    correctAnswer: 'cp -r'
  },
  {
    question: '¿Qué comando se usa para mover archivos?',
    options: [
      'touch',
      'cp',
      'mv',
      'rm'
    ],
    correctAnswer: 'mv'
  },
  {
    question: '¿Qué comando se utiliza para cambiar de directorio en Linux?',
    options: ['ls', 'cd', 'pwd', 'mv'],
    correctAnswer: 'cd'
  },
  {
    question: '¿Qué comando se utiliza para renombrar archivos?',
    options: ['cp', 'rename', 'mv', 'ln'],
    correctAnswer: 'mv'
  },
  {
    question: '¿Qué contiene el archivo /etc/passwd?',
    options: ['Información del hardware', 'Logs del sistema', 'Permisos del sistema', 'Información de usuarios'],
    correctAnswer: 'Información de usuarios'
  },
  {
    question: '¿Qué es un inodo en Linux?',
    options: ['Una carpeta', 'Una estructura con metadatos del archivo', 'Un tipo de enlace', 'Una contraseña'],
    correctAnswer: 'Una estructura con metadatos del archivo'
  },
  {
    question: '¿Qué es una opción en un comando de Linux?',
    options: ['Un modificador del comportamiento del comando', 'Una ruta', 'Un archivo', 'Un usuario'],
    correctAnswer: 'Un modificador del comportamiento del comando'
  },
  {
    question: '¿Qué hace el comando cat archivo > nuevo_archivo?',
    options: ['Borra el archivo original', 'Copia el contenido en un nuevo archivo', 'Une dos archivos', 'Mueve el archivo'],
    correctAnswer: 'Copia el contenido en un nuevo archivo'
  },
  {
    question: '¿Qué hace el comando cd ..?',
    options: ['Sube un nivel en la jerarquía de directorios', 'Borra el directorio actual', 'Muestra archivos', 'Cambia nombre'],
    correctAnswer: 'Sube un nivel en la jerarquía de directorios'
  },
  {
    question: '¿Qué hace el comando ln sin opciones?',
    options: ['Copia archivos', 'Crea enlaces duros', 'Elimina enlaces', 'Crea enlaces simbólicos'],
    correctAnswer: 'Crea enlaces duros'
  },
  {
    question: '¿Qué hace el comando man en Linux?',
    options: ['Muestra manuales', 'Lista procesos', 'Cambia usuarios', 'Elimina archivos'],
    correctAnswer: 'Muestra manuales'
  },
  {
    question: '¿Qué hace el comando rm?',
    options: ['Elimina archivos', 'Cambia nombre', 'Muestra contenido', 'Lista archivos'],
    correctAnswer: 'Elimina archivos'
  },
  {
    question: '¿Qué hace el modificador -l en ls -l?',
    options: ['Muestra archivos ocultos', 'Ordena alfabéticamente', 'Muestra detalles', 'Muestra inodos'],
    correctAnswer: 'Muestra detalles'
  },
  {
    question: '¿Qué hace el parámetro -i en ls -li?',
    options: ['Oculta carpetas', 'Ordena por fecha', 'Muestra el inodo', 'Muestra solo archivos'],
    correctAnswer: 'Muestra el inodo'
  },
  {
    question: '¿Qué indica una "-" al principio de una línea de ls -l?',
    options: ['Enlace simbólico', 'Archivo', 'Directorio', 'Ninguna de las anteriores'],
    correctAnswer: 'Archivo'
  },
  {
    question: '¿Qué indica una "d" al principio de una línea de ls -l?',
    options: ['Archivo ejecutable', 'Directorio', 'Enlace simbólico', 'Archivo oculto'],
    correctAnswer: 'Directorio'
  },
  {
    question: '¿Qué información adicional muestra ls -la?',
    options: ['Fecha de modificación', 'Archivos ocultos y detalles', 'Tipo de sistema de archivos', 'Solo carpetas'],
    correctAnswer: 'Archivos ocultos y detalles'
  },
  {
    question: '¿Qué muestra el comando ls?',
    options: ['Cambia de directorio', 'Borra archivos', 'Lista archivos y carpetas', 'Muestra el directorio actual'],
    correctAnswer: 'Lista archivos y carpetas'
  },
  {
    question: '¿Qué pasa si se ejecuta cp archivo1 archivo1?',
    options: ['No hace nada', 'Cambia su nombre', 'Lo renombra', 'Elimina el archivo'],
    correctAnswer: 'No hace nada'
  },
  {
    question: '¿Qué representa el símbolo ~ en Linux?',
    options: ['El directorio /etc', 'El directorio temporal', 'El directorio del usuario actual', 'El directorio /'],
    correctAnswer: 'El directorio del usuario actual'
  },
  {
    question: '¿Qué sucede si borras el archivo original de un enlace simbólico?',
    options: ['Se mantiene el contenido', 'El enlace queda roto', 'Se oculta', 'Se borra también el enlace'],
    correctAnswer: 'El enlace queda roto'
  },
  {
    question: '¿Qué tipo de enlace apunta al mismo inodo que el archivo original?',
    options: ['Alias', 'Soft link', 'Symbolic link', 'Hard link'],
    correctAnswer: 'Hard link'
  },
  {
    question: '¿Cómo se accede a la página de Servicios en Windows?',
    options: [
      'Ejecutando services.msc',
      'Abriendo el Administrador de Tareas',
      'Ejecutando taskmgr',
      'Desde el Explorador de Archivos'
    ],
    correctAnswer: 'Ejecutando services.msc'
  },
  {
    question: '¿Cómo se clasifican comúnmente los SSII?',
    options: [
      'Centralizados y distribuidos',
      'Públicos y privados',
      'Manuales y automáticos',
      'Locales y globales'
    ],
    correctAnswer: 'Centralizados y distribuidos'
  },
  {
    question: '¿Cuál de las siguientes máscaras permite más hosts?',
    options: [
      '255.255.0.0',
      '255.255.255.128',
      '255.255.255.192',
      '255.255.255.0'
    ],
    correctAnswer: '255.255.0.0'
  },
  {
    question: '¿Cuál de las siguientes opciones tiene un menor tiempo de arranque del sistema operativo?',
    options: [
      'HDD',
      'Disco óptico',
      'SSD',
      'USB 2.0'
    ],
    correctAnswer: 'SSD'
  },
  {
    question: '¿Cuál de los siguientes NO es un beneficio de la virtualización?',
    options: [
      'Aumento del consumo energético',
      'Ahorro de espacio físico',
      'Mejora en la recuperación ante desastres',
      'Mayor flexibilidad'
    ],
    correctAnswer: 'Aumento del consumo energético'
  },
  {
    question: '¿Cuál es el principal factor que hace a los HDD más económicos que los SSD?',
    options: [
      'Capacidad limitada',
      'Mayor velocidad',
      'Más eficiencia energética',
      'Tecnología de fabricación más simple y madura'
    ],
    correctAnswer: 'Tecnología de fabricación más simple y madura'
  },
  {
    question: '¿Cuál es la dirección de broadcast para la red 192.168.1.0/24?',
    options: [
      '192.168.1.0',
      '192.168.1.1',
      '192.168.1.254',
      '192.168.1.255'
    ],
    correctAnswer: '192.168.1.255'
  },
  {
    question: '¿Cuál es la función principal de la máscara de red?',
    options: [
      'Establecer el rango de puertos abiertos',
      'Asignar direcciones dinámicas',
      'Determinar la dirección MAC de un dispositivo',
      'Identificar la parte de red y de host en una dirección IP'
    ],
    correctAnswer: 'Identificar la parte de red y de host en una dirección IP'
  },
  {
    question: '¿Cuál es la función principal de la Unidad Lógica y Aritmética (ALU)?',
    options: [
      'Realizar operaciones matemáticas y lógicas',
      'Almacenar datos a largo plazo',
      'Controlar el flujo de datos de red',
      'Ejecutar aplicaciones de usuario'
    ],
    correctAnswer: 'Realizar operaciones matemáticas y lógicas'
  },
  {
    question: '¿Cuál es la principal diferencia entre IPv4 e IPv6?',
    options: [
      'La cantidad de puertos disponibles',
      'La velocidad de transmisión',
      'La longitud de la dirección',
      'El tipo de protocolo de transporte'
    ],
    correctAnswer: 'La longitud de la dirección'
  },
  {
    question: '¿Cuál es un beneficio de IPv6 sobre IPv4?',
    options: [
      'Uso de direcciones dinámicas únicamente',
      'Menor seguridad',
      'Mayor latencia',
      'Más direcciones disponibles'
    ],
    correctAnswer: 'Más direcciones disponibles'
  },
  {
    question: '¿Cuál es un ejemplo válido de una dirección IPv4?',
    options: [
      '192.168.1',
      '300.168.1.1',
      '192.168.1.1',
      '2001:0db8:85a3:0000:0000:8a2e:0370:7334'
    ],
    correctAnswer: '192.168.1.1'
  },
  {
    question: '¿Cuál es una ventaja clave de la virtualización?',
    options: [
      'Disminución de la seguridad',
      'Mayor consumo energético',
      'Reducción de costos operativos',
      'Necesidad de más hardware'
    ],
    correctAnswer: 'Reducción de costos operativos'
  },
  {
    question: '¿Cuál es una ventaja de los discos SSHD sobre los HDD?',
    options: [
      'Menor velocidad',
      'Rendimiento superior al combinar SSD y HDD',
      'Más partes móviles',
      'Mayor costo'
    ],
    correctAnswer: 'Rendimiento superior al combinar SSD y HDD'
  },
  {
    question: '¿Cuál es una ventaja de los SSD sobre los HDD?',
    options: [
      'Mayor velocidad de lectura y escritura',
      'Menor costo por GB',
      'Mayor capacidad de almacenamiento',
      'Más partes móviles'
    ],
    correctAnswer: 'Mayor velocidad de lectura y escritura'
  },
  {
    question: '¿Cuántas subredes de tamaño /26 se pueden obtener al dividir una red con máscara /22?',
    options: [
      '2',
      '4',
      '8',
      '16'
    ],
    correctAnswer: '16'
  },
  {
    question: '¿Cuántos bits tiene una dirección IPv4?',
    options: [
      '64',
      '32',
      '256',
      '128'
    ],
    correctAnswer: '32'
  },
  {
    question: '¿Cuántos gigabytes (GB) hay en 8192 megabytes (MB)?',
    options: [
      '16 GB',
      '2 GB',
      '8 GB',
      '4 GB'
    ],
    correctAnswer: '8 GB'
  },
  {
    question: '¿Cuántos kilobytes (KB) hay en 2 megabytes (MB)?',
    options: [
      '4096 KB',
      '1024 KB',
      '512 KB',
      '2048 KB'
    ],
    correctAnswer: '2048 KB'
  },
  {
    question: '¿Cuántos MB hay en 3 GB?',
    options: [
      '1024 MB',
      '2048 MB',
      '4096 MB',
      '3072 MB'
    ],
    correctAnswer: '3072 MB'
  },
  {
    question: '¿Cuántos megabytes (MB) hay en 5 gigabytes (GB)?',
    options: [
      '2048 MB',
      '4096 MB',
      '1024 MB',
      '5120 MB'
    ],
    correctAnswer: '5120 MB'
  },
  {
    question: '¿Cuántos terabytes (TB) hay en 10,240 gigabytes (GB)?',
    options: [
      '15 TB',
      '10 TB',
      '20 TB',
      '5 TB'
    ],
    correctAnswer: '10 TB'
  },
  {
    question: '¿Cuántos terabytes (TB) hay en 2048 gigabytes (GB)?',
    options: [
      '1 TB',
      '2 TB',
      '4 TB',
      '0.5 TB'
    ],
    correctAnswer: '2 TB'
  },
  {
    question: '¿Por qué es importante que un estudiante de DAM y DAW comprenda el funcionamiento de las direcciones IP?',
    options: [
      'Para gestionar bases de datos relacionales.',
      'Para diseñar componentes de hardware y configurar redes físicas.',
      'Para asegurar la correcta comunicación entre aplicaciones, servidores y redes durante el desarrollo y despliegue de software.',
      'Para crear interfaces gráficas de usuario (GUI).'
    ],
    correctAnswer: 'Para asegurar la correcta comunicación entre aplicaciones, servidores y redes durante el desarrollo y despliegue de software.'
  },
  {
    question: '¿Qué acción se puede realizar desde el Administrador de Tareas para cerrar un programa que no responde?',
    options: [
      'Finalizar tarea',
      'Analizar cadena de espera',
      'Crear acceso directo',
      'Ejecutar nuevo proceso'
    ],
    correctAnswer: 'Finalizar tarea'
  },
  {
    question: '¿Qué característica distingue a los discos duros HDD?',
    options: [
      'Almacenamiento basado en memoria flash',
      'Uso de platos giratorios y cabezales de lectura/escritura',
      'Tiempo de acceso ultra rápido',
      'Mayor resistencia a golpes'
    ],
    correctAnswer: 'Uso de platos giratorios y cabezales de lectura/escritura'
  },
  {
    question: '¿Qué característica distingue al firmware del hardware y software?',
    options: [
      'Es un sistema operativo',
      'Es un programa que gestiona el hardware a bajo nivel',
      'Es un periférico',
      'Es tangible como el hardware'
    ],
    correctAnswer: 'Es un programa que gestiona el hardware a bajo nivel'
  },
  {
    question: '¿Qué comando se usa para cambiar de directorio en CMD?',
    options: [
      'chdir',
      'rmdir',
      'cd',
      'mkdir'
    ],
    correctAnswer: 'cd'
  },
  {
    question: '¿Qué comando se usa para listar archivos y carpetas en el directorio actual?',
    options: [
      'dir',
      'copy',
      'del',
      'cd'
    ],
    correctAnswer: 'dir'
  },
  {
    question: '¿Qué comando se utiliza para ver la dirección IP en CMD?',
    options: [
      'ipconfig',
      'ping',
      'netstat',
      'dir'
    ],
    correctAnswer: 'ipconfig'
  },
  {
    question: '¿Qué comando sirve para verificar la conectividad a una dirección en CMD?',
    options: [
      'ping',
      'path',
      'tracert',
      'netsh'
    ],
    correctAnswer: 'ping'
  },
  {
    question: '¿Qué componente conecta la CPU con la memoria RAM?',
    options: [
      'Puente sur',
      'Chipset',
      'Puente norte',
      'BIOS'
    ],
    correctAnswer: 'Puente norte'
  },
  {
    question: '¿Qué componente gestiona las máquinas virtuales en un entorno virtualizado?',
    options: [
      'Firewall',
      'Router',
      'Servidor web',
      'Hipervisor'
    ],
    correctAnswer: 'Hipervisor'
  },
  {
    question: '¿Qué componente NO forma parte de la arquitectura básica de un ordenador?',
    options: [
      'Dispositivos de entrada/salida',
      'CPU',
      'Software de usuario',
      'Memoria'
    ],
    correctAnswer: 'Software de usuario'
  },
  {
    question: '¿Qué define a un cliente ligero?',
    options: [
      'Software de virtualización',
      'Sistema operativo independiente',
      'Alta capacidad de procesamiento',
      'Depende de un servidor para procesamiento de datos'
    ],
    correctAnswer: 'Depende de un servidor para procesamiento de datos'
  },
  {
    question: '¿Qué define mejor un Sistema de Información (SSII)?',
    options: [
      'Hardware del servidor',
      'Sistema que almacena, procesa y distribuye información',
      'Sistema de redes interconectadas',
      'Sistema operativo'
    ],
    correctAnswer: 'Sistema que almacena, procesa y distribuye información'
  },
  {
    question: '¿Qué define una subred?',
    options: [
      'Una dirección IP asignada a un host',
      'Un protocolo de enrutamiento',
      'Un grupo de dispositivos en diferentes redes',
      'Un segmento de red que comparte la misma máscara de red'
    ],
    correctAnswer: 'Un segmento de red que comparte la misma máscara de red'
  },
  {
    question: '¿Qué describe mejor un entorno \'sandbox\' en virtualización?',
    options: [
      'Un servidor en la nube',
      'Un entorno seguro para pruebas sin afectar el sistema principal',
      'Un entorno de producción',
      'Un software de monitoreo de red'
    ],
    correctAnswer: 'Un entorno seguro para pruebas sin afectar el sistema principal'
  },
  {
    question: '¿Qué disco es más adecuado para almacenar grandes volúmenes de datos de bajo acceso?',
    options: [
      'SSD',
      'Memoria RAM',
      'Disco óptico',
      'HDD'
    ],
    correctAnswer: 'HDD'
  },
  {
    question: '¿Qué disco es recomendable para sistemas operativos y aplicaciones que requieren alta velocidad?',
    options: [
      'Disco óptico',
      'SSD',
      'HDD',
      'Memoria RAM'
    ],
    correctAnswer: 'SSD'
  },
  {
    question: '¿Qué es el CMD en Windows?',
    options: [
      'Un gestor de archivos',
      'Una interfaz gráfica de usuario',
      'Un procesador de texto',
      'Un intérprete de comandos'
    ],
    correctAnswer: 'Un intérprete de comandos'
  },
  {
    question: '¿Qué es la virtualización de servidores?',
    options: [
      'Dividir un servidor en múltiples redes',
      'Uso de múltiples servidores físicos',
      'Aislamiento de procesos de red',
      'Consolidación de servidores físicos en servidores virtuales'
    ],
    correctAnswer: 'Consolidación de servidores físicos en servidores virtuales'
  },
  {
    question: '¿Qué es la virtualización en el ámbito informático?',
    options: [
      'La conexión remota a servidores externos',
      'La simulación de recursos de hardware mediante software',
      'La creación de redes locales',
      'La instalación de software en el hardware físico'
    ],
    correctAnswer: 'La simulación de recursos de hardware mediante software'
  },
  {
    question: '¿Qué es la virtualización en la nube?',
    options: [
      'Ejecutar máquinas virtuales en servidores de terceros a través de Internet',
      'Configurar redes privadas',
      'Almacenar datos localmente',
      'Descargar aplicaciones'
    ],
    correctAnswer: 'Ejecutar máquinas virtuales en servidores de terceros a través de Internet'
  },
  {
    question: '¿Qué es un disco de red?',
    options: [
      'Una partición local',
      'Un disco duro local',
      'Un almacenamiento accesible a través de una red',
      'Una memoria RAM'
    ],
    correctAnswer: 'Un almacenamiento accesible a través de una red'
  },
  {
    question: '¿Qué es un proceso en un sistema operativo?',
    options: [
      'Una instancia de un programa en ejecución',
      'Un archivo de configuración',
      'Una tarea en espera',
      'Un servicio de red'
    ],
    correctAnswer: 'Una instancia de un programa en ejecución'
  },
  {
    question: '¿Qué es un sistema operativo?',
    options: [
      'Programa que gestiona hardware y software del sistema',
      'Dispositivo de entrada',
      'Software de usuario',
      'Aplicación de red'
    ],
    correctAnswer: 'Programa que gestiona hardware y software del sistema'
  },
  {
    question: '¿Qué es una dirección de broadcast?',
    options: [
      'La dirección del primer host de la red',
      'La última dirección válida de la red',
      'La dirección del router por defecto',
      'La dirección asignada al DNS'
    ],
    correctAnswer: 'La última dirección válida de la red'
  },
  {
    question: '¿Qué estado indica que un servicio de Windows se está ejecutando?',
    options: [
      'En ejecución',
      'Pausado',
      'Deshabilitado',
      'Detenido'
    ],
    correctAnswer: 'En ejecución'
  },
  {
    question: '¿Qué factor es crítico para la eficiencia en entornos virtualizados?',
    options: [
      'Velocidad del disco duro',
      'Color del gabinete del servidor',
      'Cantidad de memoria RAM disponible',
      'Número de usuarios'
    ],
    correctAnswer: 'Cantidad de memoria RAM disponible'
  },
  {
    question: '¿Qué factor influye directamente en la vida útil de un SSD?',
    options: [
      'Color de la carcasa',
      'Velocidad del ventilador',
      'Número de ciclos de lectura/escritura',
      'Capacidad de almacenamiento total'
    ],
    correctAnswer: 'Número de ciclos de lectura/escritura'
  },
  {
    question: '¿Qué función cumple el núcleo (kernel) en un sistema operativo?',
    options: [
      'Crear interfaces gráficas',
      'Ejecutar software de usuario',
      'Conectar redes externas',
      'Gestionar la memoria, procesos y hardware'
    ],
    correctAnswer: 'Gestionar la memoria, procesos y hardware'
  },
  {
    question: '¿Qué hace la ALU en un ordenador?',
    options: [
      'Procesa gráficos',
      'Realiza operaciones matemáticas y lógicas',
      'Ejecuta instrucciones de control',
      'Controla el flujo de datos en redes'
    ],
    correctAnswer: 'Realiza operaciones matemáticas y lógicas'
  },
  {
    question: '¿Qué herramienta de Windows muestra el uso de CPU y memoria en tiempo real?',
    options: [
      'Explorador de Archivos',
      'Panel de Control',
      'Administrador de Tareas',
      'CMD'
    ],
    correctAnswer: 'Administrador de Tareas'
  },
  {
    question: '¿Qué máscara de red corresponde a /24?',
    options: [
      '255.255.255.0',
      '255.0.0.0',
      '255.255.0.0',
      '255.255.255.255'
    ],
    correctAnswer: '255.255.255.0'
  },
  {
    question: '¿Qué máscara se usa para crear 4 subredes de igual tamaño a partir de una red /24?',
    options: [
      '/26',
      '/25',
      '/27',
      '/28'
    ],
    correctAnswer: '/26'
  },
  {
    question: '¿Qué memoria es más rápida pero tiene menor capacidad?',
    options: [
      'SSD',
      'Disco duro',
      'Memoria caché',
      'RAM'
    ],
    correctAnswer: 'Memoria caché'
  },
  {
    question: '¿Qué opción del Administrador de Tareas se utiliza para ver el impacto de las aplicaciones al inicio?',
    options: [
      'Procesos',
      'Inicio',
      'Servicios',
      'Detalles'
    ],
    correctAnswer: 'Inicio'
  },
  {
    question: '¿Qué operaciones realiza la ALU además de sumas y restas?',
    options: [
      'Procesos de red',
      'Gestión de almacenamiento',
      'Operaciones lógicas como AND, OR y NOT',
      'Gestión de entradas y salidas'
    ],
    correctAnswer: 'Operaciones lógicas como AND, OR y NOT'
  },
  {
    question: '¿Qué pestaña del Administrador de Tareas muestra los procesos en ejecución?',
    options: [
      'Historial de aplicaciones',
      'Usuarios',
      'Rendimiento',
      'Procesos'
    ],
    correctAnswer: 'Procesos'
  },
  {
    question: '¿Qué pestaña del Administrador de Tareas permite ver el uso de red?',
    options: [
      'Usuarios',
      'Servicios',
      'Procesos',
      'Rendimiento'
    ],
    correctAnswer: 'Rendimiento'
  },
  {
    question: '¿Qué plataforma de virtualización es conocida por su código abierto?',
    options: [
      'VMware vSphere',
      'Citrix XenServer',
      'Microsoft Hyper-V',
      'Oracle VirtualBox'
    ],
    correctAnswer: 'Oracle VirtualBox'
  },
  {
    question: '¿Qué protocolo facilita la conexión remota a máquinas virtuales?',
    options: [
      'RDP (Remote Desktop Protocol)',
      'SSH',
      'FTP',
      'HTTP'
    ],
    correctAnswer: 'RDP (Remote Desktop Protocol)'
  },
  {
    question: '¿Qué reemplazó a los tubos de vacío en la evolución de los ordenadores?',
    options: [
      'Discos duros',
      'Transistores',
      'Placas base',
      'ROM'
    ],
    correctAnswer: 'Transistores'
  },
  {
    question: '¿Qué representa el uso de memoria en el Administrador de Tareas?',
    options: [
      'La capacidad máxima de la RAM',
      'El uso del disco duro',
      'El total de memoria física utilizada',
      'La cantidad de memoria virtual disponible'
    ],
    correctAnswer: 'El total de memoria física utilizada'
  },
  {
    question: '¿Qué se entiende por \'máquina virtual\' (VM)?',
    options: [
      'Un protocolo de red',
      'Un servidor físico',
      'Un entorno de software que emula un sistema informático',
      'Un contenedor de aplicaciones'
    ],
    correctAnswer: 'Un entorno de software que emula un sistema informático'
  },
  {
    question: '¿Qué son los servicios en Windows?',
    options: [
      'Procesos que se ejecutan en segundo plano',
      'Controladores de hardware',
      'Programas para el usuario',
      'Aplicaciones móviles'
    ],
    correctAnswer: 'Procesos que se ejecutan en segundo plano'
  },
  {
    question: '¿Qué tecnología permite a un SSD ser más eficiente energéticamente que un HDD?',
    options: [
      'Tecnología magnética',
      'Memoria flash NAND',
      'Platos giratorios',
      'Cabezal de lectura'
    ],
    correctAnswer: 'Memoria flash NAND'
  },
  {
    question: '¿Qué tecnología permite ejecutar aplicaciones en entornos virtuales sin crear una máquina virtual completa?',
    options: [
      'Hipervisor de tipo 1',
      'Contenedores',
      'Emuladores',
      'Virtualización de red'
    ],
    correctAnswer: 'Contenedores'
  },
  {
    question: '¿Qué tipo de disco es más resistente a golpes y caídas?',
    options: [
      'SSD',
      'HDD',
      'Ninguno',
      'Disco óptico'
    ],
    correctAnswer: 'SSD'
  },
  {
    question: '¿Qué tipo de hipervisor se ejecuta directamente sobre el hardware?',
    options: [
      'Hipervisor de tipo 1',
      'Sistema operativo huésped',
      'Hipervisor de tipo 2',
      'Máquina virtual'
    ],
    correctAnswer: 'Hipervisor de tipo 1'
  },
  {
    question: '¿Qué tipo de inicio permite que un servicio se ejecute al arrancar el sistema?',
    options: [
      'Manual',
      'Automático',
      'Diferido',
      'Deshabilitado'
    ],
    correctAnswer: 'Automático'
  },
  {
    question: '¿Qué tipo de memoria es utilizada para almacenar el firmware del sistema?',
    options: [
      'Caché',
      'RAM',
      'ROM',
      'SSD'
    ],
    correctAnswer: 'ROM'
  },
  {
    question: '¿Qué tipo de memoria es volátil?',
    options: [
      'RAM',
      'ROM',
      'SSD',
      'Disco duro'
    ],
    correctAnswer: 'RAM'
  },
  {
    question: '¿Qué tipo de memoria se usa para el almacenamiento a largo plazo?',
    options: [
      'RAM',
      'Memoria caché',
      'ROM',
      'HDD'
    ],
    correctAnswer: 'HDD'
  },
  {
    question: '¿Qué tipo de virtualización permite ejecutar un sistema operativo distinto sobre otro?',
    options: [
      'Virtualización de red',
      'Virtualización de almacenamiento',
      'Virtualización de escritorio',
      'Virtualización de aplicaciones'
    ],
    correctAnswer: 'Virtualización de escritorio'
  },
  {
    question: '¿Qué unidad se utiliza para medir el uso de la CPU en el Administrador de Tareas?',
    options: [
      'GHz',
      '% (porcentaje)',
      'MB',
      'GB'
    ],
    correctAnswer: '% (porcentaje)'
  },
  {
    question: '¿Qué ventaja ofrece la virtualización para pruebas de software?',
    options: [
      'Ejecución en hardware especializado',
      'Creación rápida de entornos aislados',
      'Mayor dependencia del hardware',
      'Instalaciones permanentes'
    ],
    correctAnswer: 'Creación rápida de entornos aislados'
  },
  {
    question: 'Convierte 0.5 terabytes (TB) a gigabytes (GB).',
    options: [
      '2048 GB',
      '512 GB',
      '1024 GB',
      '256 GB'
    ],
    correctAnswer: '512 GB'
  },
  {
    question: 'Convierte 1.5 terabytes (TB) a gigabytes (GB).',
    options: [
      '1024 GB',
      '512 GB',
      '1536 GB',
      '2048 GB'
    ],
    correctAnswer: '1536 GB'
  },
  {
    question: 'Convierte 20480 kilobytes (KB) a megabytes (MB).',
    options: [
      '20 MB',
      '25 MB',
      '15 MB',
      '10 MB'
    ],
    correctAnswer: '20 MB'
  },
  {
    question: 'Convierte 256 megabytes (MB) a gigabytes (GB).',
    options: [
      '1 GB',
      '0.5 GB',
      '0.25 GB',
      '2 GB'
    ],
    correctAnswer: '0.25 GB'
  },
  {
    question: 'Convierte 4096 kilobytes (KB) a megabytes (MB).',
    options: [
      '4 MB',
      '6 MB',
      '2 MB',
      '8 MB'
    ],
    correctAnswer: '4 MB'
  },
  {
    question: 'Convierte el número binario 1001 a decimal.',
    options: [
      '7',
      '9',
      '8',
      '10'
    ],
    correctAnswer: '9'
  },
  {
    question: 'Convierte el número binario 1010 a decimal.',
    options: [
      '12',
      '15',
      '10',
      '8'
    ],
    correctAnswer: '10'
  },
  {
    question: 'Convierte el número binario 1101 a decimal.',
    options: [
      '11',
      '14',
      '13',
      '12'
    ],
    correctAnswer: '13'
  },
  {
    question: 'Convierte el número decimal 15 a binario.',
    options: [
      '1100',
      '1111',
      '1010',
      '1001'
    ],
    correctAnswer: '1111'
  },
  {
    question: 'Convierte el número decimal 255 a binario.',
    options: [
      '11111111',
      '11111110',
      '11001100',
      '10101010'
    ],
    correctAnswer: '11111111'
  },
  {
    question: 'Convierte el número decimal 64 a binario.',
    options: [
      '1100000',
      '100000',
      '111111',
      '1000000'
    ],
    correctAnswer: '1000000'
  },
  {
    question: '¿Qué pasa si se ejecuta cp archivo1 archivo1?',
    options: ['No hace nada', 'Cambia su nombre', 'Lo renombra', 'Elimina el archivo'],
    correctAnswer: 'No hace nada'
  },
  {
    question: '¿Cuál de las siguientes es una distribución de Linux orientada a la seguridad informática?',
    options: ['Ubuntu', 'Debian', 'Kali Linux', 'Fedora'],
    correctAnswer: 'Kali Linux'
  },
  {
    question: '¿Qué es un entorno de desarrollo integrado (IDE)?',
    options: ['Un lenguaje de programación', 'Un tipo de sistema operativo', 'Un conjunto de herramientas para programar', 'Una base de datos'],
    correctAnswer: 'Un conjunto de herramientas para programar'
  },
  {
    question: '¿Cuál de los siguientes comandos muestra la ruta del directorio actual?',
    options: ['pwd', 'ls', 'cd', 'echo'],
    correctAnswer: 'pwd'
  },
  {
    question: '¿Qué extensión suelen tener los scripts de shell en Linux?',
    options: ['.sh', '.exe', '.bat', '.py'],
    correctAnswer: '.sh'
  },
  {
    question: '¿Qué comando se usa para dar permisos de ejecución a un archivo en Linux?',
    options: ['chmod +x', 'perm +r', 'exec +e', 'chmod -e'],
    correctAnswer: 'chmod +x'
  },
  {
    question: '¿Qué es Git?',
    options: ['Un lenguaje de programación', 'Un sistema de bases de datos', 'Un sistema de control de versiones', 'Un entorno de desarrollo'],
    correctAnswer: 'Un sistema de control de versiones'
  },
  {
    question: '¿Cuál es la función del comando mkdir?',
    options: ['Crear un archivo', 'Cambiar el nombre de un archivo', 'Crear un directorio', 'Eliminar un archivo'],
    correctAnswer: 'Crear un directorio'
  },
  {
    question: '¿Qué comando se utiliza para cambiar de directorio?',
    options: ['cd', 'mv', 'ls', 'pwd'],
    correctAnswer: 'cd'
  },
  {
    question: '¿Qué representa el carácter punto (.) en la terminal de Linux?',
    options: ['El directorio raíz', 'El directorio padre', 'El directorio actual', 'Una ruta absoluta'],
    correctAnswer: 'El directorio actual'
  },
  {
    question: '¿Cuál es la extensión común de los archivos comprimidos con gzip?',
    options: ['.gz', '.zip', '.rar', '.tar'],
    correctAnswer: '.gz'
  },
  {
    question: '¿Para qué sirve el comando top en Linux?',
    options: ['Ver archivos ocultos', 'Mostrar procesos en ejecución', 'Eliminar procesos', 'Actualizar el sistema'],
    correctAnswer: 'Mostrar procesos en ejecución'
  },
  {
    question: '¿Qué tipo de software es Eclipse?',
    options: ['Navegador web', 'IDE', 'Sistema operativo', 'Servidor web'],
    correctAnswer: 'IDE'
  },
  {
    question: '¿Qué hace el comando man en Linux?',
    options: ['Ejecuta programas', 'Abre el manual de un comando', 'Cierra la terminal', 'Instala paquetes'],
    correctAnswer: 'Abre el manual de un comando'
  },
  {
    question: '¿Qué comando se usa para ver el contenido de un archivo en la terminal?',
    options: ['cat', 'ls', 'cd', 'pwd'],
    correctAnswer: 'cat'
  },
  {
    question: '¿Qué comando sirve para buscar texto dentro de archivos?',
    options: ['grep', 'find', 'search', 'locate'],
    correctAnswer: 'grep'
  },
  {
    question: '¿Qué comando se utiliza para cambiar los permisos de un archivo?',
    options: ['chmod', 'chperm', 'chown', 'perm'],
    correctAnswer: 'chmod'
  },
  {
    question: '¿Qué comando se usa para mover o renombrar archivos?',
    options: ['mv', 'cp', 'rm', 'rename'],
    correctAnswer: 'mv'
  },
  {
    question: '¿Cuál es el propósito de un sistema de control de versiones?',
    options: ['Eliminar versiones antiguas de software', 'Gestionar el acceso a redes', 'Controlar cambios en el código fuente', 'Proteger el código con antivirus'],
    correctAnswer: 'Controlar cambios en el código fuente'
  },
  {
    question: '¿Qué comando muestra la cantidad de espacio libre en disco?',
    options: ['df -h', 'free -m', 'ls -l', 'du -s'],
    correctAnswer: 'df -h'
  },
  {
    question: '¿Cómo puedes ver el contenido de un archivo de texto?',
    options: ['kill', 'mkdir', 'chmod', 'cat'],
    correctAnswer: 'cat'
  },
  {
    question: '¿Cómo verías el uso de espacio de archivos y carpetas con formato legible (human)?',
    options: ['ls -lh', 'df', 'du', 'du -h'],
    correctAnswer: 'du -h'
  },
  {
    question: '¿Cuál comando te lleva al directorio /etc desde cualquier ubicación?',
    options: ['cd etc', 'cd /etc', 'cd ../etc', 'cd ./etc'],
    correctAnswer: 'cd /etc'
  },
  {
    question: '¿Cuál de los siguientes comandos permite ver procesos en tiempo real?',
    options: ['ls', 'top', 'kill', 'pstree'],
    correctAnswer: 'top'
  },
  {
    question: '¿Cuál es una distribución de Linux?',
    options: ['Ubuntu', 'Windows XP', 'Solaris', 'macOS'],
    correctAnswer: 'Ubuntu'
  },
  {
    question: '¿Cuál es una ruta absoluta válida?',
    options: ['/home/usuario/Documentos', 'Ninguna de las opciones.', '../usuario/Documentos', 'home/usuario/Documentos'],
    correctAnswer: '/home/usuario/Documentos'
  },
  {
    question: '¿Cuántas secciones de permisos muestra ls -l?',
    options: ['Dos', 'Una', 'Cuatro', 'Tres (usuario, grupo, otros)'],
    correctAnswer: 'Tres (usuario, grupo, otros)'
  },
  {
    question: '¿Qué archivo contiene información sobre las cuentas de usuario?',
    options: ['/etc/passwd', '/home/passwd', '/etc/shadow', '/etc/users'],
    correctAnswer: '/etc/passwd'
  },
  {
    question: '¿Qué comando cambia los permisos de un archivo de forma octal?',
    options: ['chmod 777 archivo', 'chperm archivo', 'chmod u+x archivo', 'chown archivo'],
    correctAnswer: 'chmod 777 archivo'
  },
  {
    question: '¿Qué comando daría permiso de ejecución al propietario de un archivo?',
    options: ['chmod g+x archivo', 'chmod u+x archivo', 'chmod +x archivo', 'chmod o+x archivo'],
    correctAnswer: 'chmod u+x archivo'
  },
  {
    question: '¿Qué comando elimina un archivo?',
    options: ['rm', 'del', 'erase', 'mv'],
    correctAnswer: 'rm'
  },
  {
    question: '¿Qué comando lista archivos ocultos?',
    options: ['ls -R', 'ls', 'ls -l', 'ls -la'],
    correctAnswer: 'ls -la'
  },
  {
    question: '¿Qué comando muestra cuánto espacio ocupa cada archivo/directorio?',
    options: ['free', 'top', 'df', 'du'],
    correctAnswer: 'du'
  },
  {
    question: '¿Qué comando muestra un árbol de procesos?',
    options: ['pstree', 'top', 'ps', 'grep'],
    correctAnswer: 'pstree'
  },
  {
    question: '¿Qué comando se usa para copiar archivos?',
    options: ['mv', 'ls', 'cat', 'cp'],
    correctAnswer: 'cp'
  },
  {
    question: '¿Qué comando te permite ver el contenido detallado de un directorio?',
    options: ['ls -l', 'cat', 'ls', 'dir'],
    correctAnswer: 'ls -l'
  },
  {
    question: '¿Qué comando usarías para redirigir la salida de ls al archivo lista.txt (sobrescribiendo)?',
    options: ['ls &> lista.txt', 'ls < lista.txt', 'ls >> lista.txt', 'ls > lista.txt'],
    correctAnswer: 'ls > lista.txt'
  },
  {
    question: '¿Qué hace cd .?',
    options: ['Va al directorio home', 'Va al directorio padre', 'Va al directorio raíz', 'Se queda en el mismo directorio'],
    correctAnswer: 'Se queda en el mismo directorio'
  },
  {
    question: '¿Qué hace cd ..?',
    options: ['Cambia al directorio raíz', 'Sube un nivel en el árbol de directorios', 'Va al directorio home', 'Muestra el contenido del directorio'],
    correctAnswer: 'Sube un nivel en el árbol de directorios'
  },
  {
    question: '¿Qué hace chmod o+x archivo.sh?',
    options: ['Da permiso de escritura a otros', 'Da permiso de ejecución a otros', 'Quita permisos de ejecución a otros', 'Da permiso de lectura a otros'],
    correctAnswer: 'Da permiso de ejecución a otros'
  },
  {
    question: '¿Qué hace comando > salida.txt 2>&1?',
    options: [
      'Redirige solo errores',
      'Redirige la entrada estándar',
      'Redirige salida y errores al mismo archivo',
      'Copia el archivo salida.txt'
    ],
    correctAnswer: 'Redirige salida y errores al mismo archivo'
  },
  {
    question: '¿Qué hace el comando chmod g-w archivo.txt?',
    options: [
      'Elimina el permiso de lectura del grupo',
      'Da permiso de escritura al grupo',
      'Elimina el permiso de escritura del grupo',
      'Elimina el permiso de escritura para todos'
    ],
    correctAnswer: 'Elimina el permiso de escritura del grupo'
  },
  {
    question: '¿Qué hace el comando comando 2> errores.txt?',
    options: [
      'Redirige todo al archivo errores.txt',
      'Redirige la salida estándar al archivo errores.txt',
      'Elimina el archivo errores.txt',
      'Redirige los errores al archivo errores.txt'
    ],
    correctAnswer: 'Redirige los errores al archivo errores.txt'
  },
  {
    question: '¿Qué hace el comando mkdir?',
    options: [
      'Cambia permisos',
      'Mueve un archivo',
      'Borra un archivo',
      'Crea un directorio'
    ],
    correctAnswer: 'Crea un directorio'
  },
  {
    question: '¿Qué hace el comando ps?',
    options: [
      'Lista directorios',
      'Cambia los permisos de un archivo',
      'Elimina procesos',
      'Muestra los procesos en ejecución'
    ],
    correctAnswer: 'Muestra los procesos en ejecución'
  },
  {
    question: '¿Qué hace el símbolo <?',
    options: [
      'Redirige la salida al terminal',
      'Redirige la entrada estándar desde un archivo',
      'Redirige los errores al terminal',
      'Añade líneas al archivo'
    ],
    correctAnswer: 'Redirige la entrada estándar desde un archivo'
  },
  {
    question: '¿Qué hace el símbolo > en un comando de Linux?',
    options: [
      'Redirige la entrada desde un archivo',
      'Redirige la salida estándar a un archivo (sobrescribiendo)',
      'Redirige errores al archivo',
      'Compara archivos'
    ],
    correctAnswer: 'Redirige la salida estándar a un archivo (sobrescribiendo)'
  },
  {
    question: '¿Qué hace el símbolo >>?',
    options: [
      'Borra un archivo antes de escribir',
      'Redirige la entrada',
      'Crea un nuevo archivo',
      'Redirige la salida estándar y añade (no sobrescribe) al archivo'
    ],
    correctAnswer: 'Redirige la salida estándar y añade (no sobrescribe) al archivo'
  },
  {
    question: '¿Qué hace ls -la que no hace ls -l?',
    options: [
      'Ordena por fecha',
      'Ordena por tamaño',
      'Muestra permisos octales',
      'Muestra archivos ocultos'
    ],
    correctAnswer: 'Muestra archivos ocultos'
  },
  {
    question: '¿Qué hace man chmod?',
    options: [
      'Cambia la contraseña del usuario',
      'Ejecuta el comando chmod',
      'Muestra la ayuda del comando chmod',
      'Elimina chmod'
    ],
    correctAnswer: 'Muestra la ayuda del comando chmod'
  },
  {
    question: '¿Qué hace mv archivo.txt /home/usuario/?',
    options: [
      'Mueve el archivo a la ruta dada',
      'Crea un nuevo archivo',
      'Cambia los permisos',
      'Muestra el archivo'
    ],
    correctAnswer: 'Mueve el archivo a la ruta dada'
  },
  {
    question: '¿Qué indica el número 2 en 2> archivo.txt?',
    options: [
      'La salida estándar',
      'El identificador del proceso',
      'El número de líneas',
      'El canal de error estándar (stderr)'
    ],
    correctAnswer: 'El canal de error estándar (stderr)'
  },
  {
    question: '¿Qué indica un archivo que empieza por .?',
    options: [
      'Archivo de sistema',
      'Archivo temporal',
      'Archivo oculto',
      'Archivo ejecutable'
    ],
    correctAnswer: 'Archivo oculto'
  },
  {
    question: '¿Qué indica una d al inicio de los permisos en ls -l?',
    options: [
      'Un archivo ejecutable',
      'Un archivo de dispositivo',
      'Un directorio',
      'Un enlace simbólico'
    ],
    correctAnswer: 'Un directorio'
  },
  {
    question: '¿Qué información guarda /etc/passwd?',
    options: [
      'Lista de permisos de archivos',
      'Claves encriptadas',
      'Historial de comandos',
      'Usuarios, UID, GID y shell'
    ],
    correctAnswer: 'Usuarios, UID, GID y shell'
  },
  {
    question: '¿Qué significa el operador | (pipe) en Linux?',
    options: [
      'Redirige errores al mismo lugar',
      'Envía la salida de un comando como entrada de otro',
      'Redirige la salida al mismo archivo',
      'Copia archivos de un directorio a otro'
    ],
    correctAnswer: 'Envía la salida de un comando como entrada de otro'
  },
  {
    question: '¿Qué significa el punto (.) en rutas relativas?',
    options: [
      'Directorio actual',
      'Directorio raíz',
      'Directorio home',
      'Directorio padre'
    ],
    correctAnswer: 'Directorio actual'
  },
  {
    question: '¿Qué significa r--r--r--?',
    options: [
      'Todos pueden leer, nadie puede escribir ni ejecutar',
      'Todos pueden leer y escribir',
      'Nadie puede leer',
      'Solo el propietario puede escribir'
    ],
    correctAnswer: 'Todos pueden leer, nadie puede escribir ni ejecutar'
  },
  {
    question: '¿Qué significa rwxr-xr--?',
    options: [
      'Nadie puede leer ni escribir',
      'Todos pueden escribir',
      'El propietario tiene todos los permisos, el grupo puede leer y ejecutar, los demás solo leer',
      'Solo el grupo puede ejecutar'
    ],
    correctAnswer: 'El propietario tiene todos los permisos, el grupo puede leer y ejecutar, los demás solo leer'
  },
  {
    question: '¿Quién creó el núcleo de Linux?',
    options: [
      'Steve Jobs',
      'Richard Stallman',
      'Linus Torvalds',
      'Dennis Ritchie'
    ],
    correctAnswer: 'Linus Torvalds'
  },
  {
    question: '¿Cuál de las siguientes opciones representa un sistema operativo?',
    options: [
      'Google Chrome',
      'Windows 10',
      'Photoshop',
      'Oracle'
    ],
    correctAnswer: 'Windows 10'
  },
  {
    question: '¿Qué componente se encarga de ejecutar las instrucciones de los programas?',
    options: [
      'RAM',
      'Disco duro',
      'CPU',
      'Tarjeta gráfica'
    ],
    correctAnswer: 'CPU'
  },
  {
    question: '¿Cuál es la función principal de la memoria RAM?',
    options: [
      'Almacenar datos de forma permanente',
      'Procesar instrucciones',
      'Almacenar datos temporalmente',
      'Controlar el acceso a Internet'
    ],
    correctAnswer: 'Almacenar datos temporalmente'
  },
  {
    question: '¿Qué tipo de software es un antivirus?',
    options: [
      'Software de sistema',
      'Software de aplicación',
      'Firmware',
      'Software de desarrollo'
    ],
    correctAnswer: 'Software de aplicación'
  },
  {
    question: '¿Qué es un driver o controlador?',
    options: [
      'Un hardware externo',
      'Un programa para instalar aplicaciones',
      'Un software que permite al sistema operativo comunicarse con el hardware',
      'Un archivo de configuración'
    ],
    correctAnswer: 'Un software que permite al sistema operativo comunicarse con el hardware'
  },
  {
    question: '¿Qué sistema de archivos utiliza Windows por defecto?',
    options: [
      'FAT32',
      'NTFS',
      'EXT4',
      'HFS+'
    ],
    correctAnswer: 'NTFS'
  },
  {
    question: '¿Qué componente físico se encarga de mostrar la salida visual del sistema?',
    options: [
      'Placa base',
      'Monitor',
      'Impresora',
      'Disco duro'
    ],
    correctAnswer: 'Monitor'
  },
  {
    question: '¿Qué arquitectura de procesador es más común en ordenadores personales?',
    options: [
      'RISC',
      'ARM',
      'x86',
      'MIPS'
    ],
    correctAnswer: 'x86'
  },
  {
    question: '¿Qué comando de Windows se usa para ver la configuración IP?',
    options: [
      'ipconfig',
      'ping',
      'ifconfig',
      'netstat'
    ],
    correctAnswer: 'ipconfig'
  },
  {
    question: '¿Cuál de los siguientes es un sistema operativo de código abierto?',
    options: [
      'macOS',
      'Windows',
      'Linux',
      'MS-DOS'
    ],
    correctAnswer: 'Linux'
  },
  {
    question: '¿Qué es una BIOS?',
    options: [
      'Un sistema operativo',
      'Un tipo de memoria RAM',
      'Un programa de arranque básico',
      'Una interfaz gráfica de usuario'
    ],
    correctAnswer: 'Un programa de arranque básico'
  },
  {
    question: '¿Qué herramienta de Windows permite gestionar discos y particiones?',
    options: [
      'Administrador de tareas',
      'Explorador de archivos',
      'Administrador de discos',
      'Regedit'
    ],
    correctAnswer: 'Administrador de discos'
  },
  {
    question: '¿Qué comando se utiliza en Linux para listar archivos?',
    options: [
      'dir',
      'ls',
      'list',
      'show'
    ],
    correctAnswer: 'ls'
  },
  {
    question: '¿Qué es un sistema operativo multitarea?',
    options: [
      'Un sistema que puede ejecutar varios programas a la vez',
      'Un sistema que usa varios procesadores',
      'Un sistema de archivo distribuido',
      'Un sistema exclusivo para redes'
    ],
    correctAnswer: 'Un sistema que puede ejecutar varios programas a la vez'
  },
  {
    question: '¿Cuál de los siguientes dispositivos se considera de almacenamiento secundario?',
    options: [
      'CPU',
      'RAM',
      'Disco duro',
      'Cache'
    ],
    correctAnswer: 'Disco duro'
  },
  {
    question: '¿Qué protocolo se utiliza para acceder de forma remota a otro ordenador de manera segura?',
    options: [
      'HTTP',
      'FTP',
      'SSH',
      'SMTP'
    ],
    correctAnswer: 'SSH'
  },
  {
    question: '¿Cuál es la principal función de un sistema operativo?',
    options: [
      'Crear software de usuario',
      'Administrar recursos del sistema',
      'Ensamblar programas',
      'Diseñar hardware'
    ],
    correctAnswer: 'Administrar recursos del sistema'
  },
  {
    question: '¿Qué sistema operativo es conocido por su uso en servidores?',
    options: [
      'Windows 11',
      'macOS',
      'Linux',
      'Android'
    ],
    correctAnswer: 'Linux'
  },
  {
    question: '¿Qué es un archivo ejecutable en Windows?',
    options: [
      '.doc',
      '.exe',
      '.txt',
      '.zip'
    ],
    correctAnswer: '.exe'
  },
  {
    question: "¿Qué representa el término 'hardware'?",
    options: [
      'Aplicaciones de usuario',
      'Sistema operativo',
      'Componentes físicos del ordenador',
      'Archivos del sistema'
    ],
    correctAnswer: 'Componentes físicos del ordenador'
  },
  {
    question: '¿Qué parte del ordenador mantiene su contenido incluso cuando está apagado?',
    options: [
      'RAM',
      'Disco duro',
      'CPU',
      'Cache'
    ],
    correctAnswer: 'Disco duro'
  },
  {
    question: '¿Qué elemento almacena el firmware UEFI?',
    options: [
      'RAM',
      'Disco duro',
      'ROM',
      'Cache'
    ],
    correctAnswer: 'ROM'
  },
  {
    question: "¿Qué es el 'kernel' de un sistema operativo?",
    options: [
      'La interfaz gráfica',
      'La aplicación principal',
      'El núcleo del sistema operativo',
      'El sistema de archivos'
    ],
    correctAnswer: 'El núcleo del sistema operativo'
  },
  {
    question: '¿Qué sistema de archivos es más adecuado para memorias USB?',
    options: [
      'NTFS',
      'EXT4',
      'FAT32',
      'ReFS'
    ],
    correctAnswer: 'FAT32'
  },
  {
    question: '¿Qué tipo de dispositivo es un escáner?',
    options: [
      'De salida',
      'De entrada',
      'De almacenamiento',
      'De red'
    ],
    correctAnswer: 'De entrada'
  },
  {
    question: '¿Qué componente se encarga de conectar todos los elementos de hardware?',
    options: [
      'Procesador',
      'Placa base',
      'Memoria RAM',
      'Fuente de alimentación'
    ],
    correctAnswer: 'Placa base'
  },
  {
    question: '¿Qué es el software libre?',
    options: [
      'Software sin errores',
      'Software con pago único',
      'Software cuyo código fuente está disponible',
      'Software que no se puede modificar'
    ],
    correctAnswer: 'Software cuyo código fuente está disponible'
  },
  {
    question: '¿Qué permite la virtualización?',
    options: [
      'Eliminar el sistema operativo',
      'Crear discos duros físicos',
      'Ejecutar varios sistemas operativos en un solo equipo',
      'Eliminar virus del sistema'
    ],
    correctAnswer: 'Ejecutar varios sistemas operativos en un solo equipo'
  },
  {
    question: '¿Qué medida es más adecuada para expresar la velocidad de un procesador?',
    options: [
      'GB',
      'GHz',
      'MB',
      'ms'
    ],
    correctAnswer: 'GHz'
  },
  {
    question: '¿Qué sistema operativo está basado en Unix?',
    options: [
      'Windows',
      'Linux',
      'DOS',
      'AmigaOS'
    ],
    correctAnswer: 'Linux'
  },
  {
    question: '¿Cuál es la utilidad del comando `ping`?',
    options: [
      'Borrar archivos',
      'Ver la configuración de red',
      'Comprobar la conectividad con otro equipo',
      'Iniciar sesión como administrador'
    ],
    correctAnswer: 'Comprobar la conectividad con otro equipo'
  },
  {
    question: "¿Qué significa el término 'boot'?",
    options: [
      'Actualizar drivers',
      'Formatear el sistema',
      'Arrancar el sistema',
      'Apagar el equipo'
    ],
    correctAnswer: 'Arrancar el sistema'
  },
  {
    question: '¿Qué componente almacena temporalmente datos e instrucciones frecuentes para el procesador?',
    options: [
      'RAM',
      'Cache',
      'BIOS',
      'SSD'
    ],
    correctAnswer: 'Cache'
  },
  {
    question: '¿Qué es un sistema embebido?',
    options: [
      'Un sistema operativo con interfaz gráfica',
      'Un programa de gestión de redes',
      'Un sistema computacional dentro de un dispositivo dedicado',
      'Un sistema operativo virtualizado'
    ],
    correctAnswer: 'Un sistema computacional dentro de un dispositivo dedicado'
  },
  {
    question: '¿Qué utilidad tiene un sistema RAID?',
    options: [
      'Mejorar la interfaz de usuario',
      'Proteger contra virus',
      'Aumentar velocidad y/o redundancia en almacenamiento',
      'Reducir consumo eléctrico'
    ],
    correctAnswer: 'Aumentar velocidad y/o redundancia en almacenamiento'
  },
  {
    question: '¿Qué significa SSD?',
    options: [
      'Solid State Drive',
      'Secure System Disk',
      'System Software Device',
      'Serial Storage Device'
    ],
    correctAnswer: 'Solid State Drive'
  },
  {
    question: '¿Qué es una máquina virtual?',
    options: [
      'Un ordenador físico sin sistema operativo',
      'Un entorno simulado que actúa como un ordenador',
      'Una red de dispositivos físicos',
      'Una BIOS modificada'
    ],
    correctAnswer: 'Un entorno simulado que actúa como un ordenador'
  },
  {
    question: "¿Qué significa 'formatear' un disco?",
    options: [
      'Eliminar virus',
      'Reorganizar archivos',
      'Prepararlo para almacenar datos',
      'Actualizar el firmware'
    ],
    correctAnswer: 'Prepararlo para almacenar datos'
  },
  {
    question: '¿Qué herramienta permite automatizar la instalación de software en Linux?',
    options: [
      'CMD',
      'apt',
      'Task Manager',
      'Explorer'
    ],
    correctAnswer: 'apt'
  },
  {
    question: '¿Qué es una máscara de red?',
    options: [
      'Un identificador único de cada red',
      'Una dirección IP pública',
      'Una dirección de broadcast',
      'Un valor que define la división de la red y el host en una dirección IP'
    ],
    correctAnswer: 'Un valor que define la división de la red y el host en una dirección IP'
  },
  {
    question: '¿Cuál es la fórmula para calcular la cantidad de subredes disponibles?',
    options: [
      '2^(número de bits de subred)',
      '(2^número de bits de host) - 2',
      '2^(número de bits de host)',
      '(2^número de bits de subred) - 2'
    ],
    correctAnswer: '2^(número de bits de subred)'
  },
  {
    question: '¿Cómo se calcula la cantidad de hosts disponibles en una subred?',
    options: [
      '(2^número de bits de host) - 2',
      '(2^número de bits de subred)',
      '(número de bits de host) + (número de bits de subred)',
      '(2^número de bits de subred)'
    ],
    correctAnswer: '(2^número de bits de host) - 2'
  },
  {
    question: '¿Qué rango de direcciones IP es utilizado por las redes privadas?',
    options: [
      '10.0.0.0 a 10.255.255.255',
      '172.16.0.0 a 172.31.255.255',
      '192.168.0.0 a 192.168.255.255',
      'Todos los anteriores'
    ],
    correctAnswer: 'Todos los anteriores'
  },
  {
    question: '¿Qué representa la dirección IP 255.255.255.255?',
    options: [
      'La dirección de red',
      'La dirección de broadcast',
      'La dirección de un host específico',
      'La dirección de puerta de enlace'
    ],
    correctAnswer: 'La dirección de broadcast'
  },
  {
    question: 'En una máscara de subred 255.255.255.0, ¿cuántos bits son utilizados para la red?',
    options: [
      '24 bits',
      '16 bits',
      '32 bits',
      '8 bits'
    ],
    correctAnswer: '24 bits'
  },
  {
    question: '¿Cuál es la dirección de red en la subred 192.168.1.0/24?',
    options: [
      '192.168.1.0',
      '192.168.1.1',
      '192.168.1.255',
      '192.168.0.0'
    ],
    correctAnswer: '192.168.1.0'
  },
  {
    question: '¿Qué significa la notación CIDR /24?',
    options: [
      '24 bits dedicados a la dirección de red',
      '24 bits dedicados a la dirección de host',
      'El rango de subred va de 0 a 255',
      'Es una máscara de subred con 24 bits para los hosts'
    ],
    correctAnswer: '24 bits dedicados a la dirección de red'
  },
  {
    question: '¿Qué función realiza un router en una red?',
    options: [
      'Conectar diferentes redes y dirigir el tráfico entre ellas',
      'Conectar dispositivos en la misma red',
      'Gestionar la memoria de los dispositivos',
      'Convertir señales digitales en analógicas'
    ],
    correctAnswer: 'Conectar diferentes redes y dirigir el tráfico entre ellas'
  },
  {
    question: 'En una red con máscara 255.255.255.192, ¿cuántas subredes pueden crearse?',
    options: [
      '4',
      '2',
      '8',
      '16'
    ],
    correctAnswer: '4'
  },
  {
    question: '¿Cuál es el propósito de una dirección de puerta de enlace predeterminada?',
    options: [
      'Definir el punto de acceso a Internet',
      'Asociar una dirección IP a cada host',
      'Establecer la dirección de red',
      'Asociar una dirección IP a una red específica'
    ],
    correctAnswer: 'Definir el punto de acceso a Internet'
  },
  {
    question: '¿Cómo se calcula la cantidad de direcciones IP disponibles para los hosts en una subred?',
    options: [
      '(2^número de bits de host) - 2',
      '(2^número de bits de subred)',
      '(número de bits de red) + (número de bits de host)',
      '(número de bits de host) * 2'
    ],
    correctAnswer: '(2^número de bits de host) - 2'
  },
  {
    question: 'Si una dirección IP es 192.168.0.128 y la máscara de subred es 255.255.255.128, ¿cuál es la dirección de red?',
    options: [
      '192.168.0.0',
      '192.168.0.128',
      '192.168.0.64',
      '192.168.0.255'
    ],
    correctAnswer: '192.168.0.0'
  },
  {
    question: '¿Qué es una subred?',
    options: [
      'Un segmento de una red que comparte el mismo espacio de direcciones IP',
      'Un tipo de hardware',
      'Un tipo de dirección de red',
      'Una dirección IP pública'
    ],
    correctAnswer: 'Un segmento de una red que comparte el mismo espacio de direcciones IP'
  },
  {
    question: '¿Cuál es la dirección de broadcast en la subred 192.168.1.0/24?',
    options: [
      '192.168.1.0',
      '192.168.1.1',
      '192.168.1.255',
      '192.168.0.255'
    ],
    correctAnswer: '192.168.1.255'
  },
  {
    question: '¿Qué es el rango de direcciones IP que se pueden asignar a hosts en una subred 192.168.1.0/24?',
    options: [
      '192.168.1.1 a 192.168.1.254',
      '192.168.1.0 a 192.168.1.255',
      '192.168.1.1 a 192.168.1.255',
      '192.168.0.0 a 192.168.1.255'
    ],
    correctAnswer: '192.168.1.1 a 192.168.1.254'
  },
  {
    question: '¿Qué es un host en una red?',
    options: [
      'Un dispositivo que envía o recibe datos a través de una red',
      'Un dispositivo que administra el tráfico de red',
      'Un componente de hardware de redes',
      'El servidor central de la red'
    ],
    correctAnswer: 'Un dispositivo que envía o recibe datos a través de una red'
  },
  {
    question: '¿Cuál es la dirección IP de la puerta de enlace en una subred 192.168.1.0/24?',
    options: [
      '192.168.1.0',
      '192.168.1.1',
      '192.168.1.255',
      '192.168.1.254'
    ],
    correctAnswer: '192.168.1.1'
  },
  {
    question: '¿Qué sucede si dos dispositivos en una misma red tienen la misma dirección IP?',
    options: [
      'Los dispositivos se comunican correctamente',
      'El sistema genera un conflicto y no se podrán comunicar',
      'El sistema asigna una nueva dirección IP automáticamente',
      'El dispositivo con la dirección más baja será el primero en recibir datos'
    ],
    correctAnswer: 'El sistema genera un conflicto y no se podrán comunicar'
  },
  {
    question: '¿Cómo se calcula el número de direcciones de host disponibles en una subred?',
    options: [
      '(2^número de bits de host) - 2',
      '(2^número de bits de subred)',
      '(2^número de bits de host)',
      '(2^número de bits de host) + 2'
    ],
    correctAnswer: '(2^número de bits de host) - 2'
  },
  {
    question: 'Si tienes la dirección IP 192.168.10.16 y la máscara 255.255.255.240, ¿cuál es la dirección de red?',
    options: [
      '192.168.10.0',
      '192.168.10.16',
      '192.168.10.32',
      '192.168.10.15'
    ],
    correctAnswer: '192.168.10.16'
  },
  {
    question: 'Si tienes una máscara de subred 255.255.255.0, ¿cuál es el número de hosts disponibles?',
    options: [
      '254',
      '256',
      '510',
      '1024'
    ],
    correctAnswer: '254'
  },
  {
    question: '¿Cuál es la dirección de broadcast para la subred 192.168.1.0/26?',
    options: [
      '192.168.1.63',
      '192.168.1.64',
      '192.168.1.127',
      '192.168.1.255'
    ],
    correctAnswer: '192.168.1.63'
  },
  {
    question: '¿Cuántos bits de host quedan en una máscara de subred 255.255.255.192?',
    options: [
      '6 bits',
      '8 bits',
      '10 bits',
      '12 bits'
    ],
    correctAnswer: '6 bits'
  },
  {
    question: 'Si la dirección de red es 192.168.1.0/24, ¿cuál es la última dirección IP de la subred?',
    options: [
      '192.168.1.255',
      '192.168.1.254',
      '192.168.1.1',
      '192.168.0.255'
    ],
    correctAnswer: '192.168.1.255'
  },
  {
    question: 'Si tienes una dirección IP 10.0.0.20 y una máscara 255.255.255.248, ¿cuál es el rango de direcciones IP disponibles para hosts?',
    options: [
      '10.0.0.17 a 10.0.0.22',
      '10.0.0.17 a 10.0.0.18',
      '10.0.0.0 a 10.0.0.7',
      '10.0.0.20 a 10.0.0.27'
    ],
    correctAnswer: '10.0.0.17 a 10.0.0.22'
  },
  {
    question: 'Si una subred tiene una máscara 255.255.255.128, ¿cuál es el número de subredes que pueden formarse?',
    options: [
      '2 subredes',
      '4 subredes',
      '8 subredes',
      '16 subredes'
    ],
    correctAnswer: '2 subredes'
  },
  {
    question: 'Si tienes la dirección 172.16.0.1 y una máscara 255.255.255.0, ¿cuál es la dirección de broadcast?',
    options: [
      '172.16.0.0',
      '172.16.0.255',
      '172.16.1.0',
      '172.16.1.255'
    ],
    correctAnswer: '172.16.0.255'
  },
  {
    question: 'En una red 192.168.10.0/29, ¿cuál es el rango de direcciones IP para los hosts?',
    options: [
      '192.168.10.1 a 192.168.10.6',
      '192.168.10.0 a 192.168.10.7',
      '192.168.10.0 a 192.168.10.5',
      '192.168.10.1 a 192.168.10.4'
    ],
    correctAnswer: '192.168.10.1 a 192.168.10.6'
  },
  {
    question: 'Si una subred tiene la máscara 255.255.254.0, ¿cuántos hosts pueden conectarse a la red?',
    options: [
      '510',
      '1022',
      '1024',
      '512'
    ],
    correctAnswer: '510'
  },
  {
    question: 'Si tienes la dirección IP 192.168.1.160 y la máscara 255.255.255.192, ¿cuál es la dirección de red?',
    options: [
      '192.168.1.128',
      '192.168.1.160',
      '192.168.1.255',
      '192.168.1.0'
    ],
    correctAnswer: '192.168.1.128'
  },
  {
    question: '¿Cuántos bits de red están disponibles en una subred con máscara 255.255.255.224?',
    options: [
      '27 bits',
      '28 bits',
      '29 bits',
      '30 bits'
    ],
    correctAnswer: '27 bits'
  },
  {
    question: 'Si una subred tiene la dirección de red 192.168.0.0/25, ¿cuál es la dirección de broadcast?',
    options: [
      '192.168.0.127',
      '192.168.0.255',
      '192.168.0.64',
      '192.168.0.31'
    ],
    correctAnswer: '192.168.0.127'
  },
  {
    question: '¿Cuál es la dirección de red para la subred 10.0.1.0/28?',
    options: [
      '10.0.1.0',
      '10.0.1.15',
      '10.0.1.1',
      '10.0.1.16'
    ],
    correctAnswer: '10.0.1.0'
  },
  {
    question: 'Si la máscara de subred es 255.255.255.252, ¿cuántas direcciones de host hay por subred?',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: '2'
  },
  {
    question: 'En una subred con máscara 255.255.255.128, ¿qué rango de direcciones IP es válido?',
    options: [
      '192.168.1.1 a 192.168.1.126',
      '192.168.1.128 a 192.168.1.255',
      '192.168.1.1 a 192.168.1.128',
      '192.168.1.129 a 192.168.1.255'
    ],
    correctAnswer: '192.168.1.1 a 192.168.1.126'
  },
  {
    question: '¿Qué dirección se utiliza para enviar paquetes a todos los dispositivos dentro de una subred?',
    options: [
      'Dirección de broadcast',
      'Dirección de red',
      'Dirección IP pública',
      'Dirección de puerta de enlace'
    ],
    correctAnswer: 'Dirección de broadcast'
  },
  {
    question: 'Si tienes la dirección IP 10.1.2.3 y la máscara 255.255.255.252, ¿cuál es la dirección de broadcast?',
    options: [
      '10.1.2.3',
      '10.1.2.4',
      '10.1.2.7',
      '10.1.2.0'
    ],
    correctAnswer: '10.1.2.7'
  },
  {
    question: 'Si la dirección de red es 192.168.1.0/24, ¿cuál es la primera dirección IP disponible para los hosts?',
    options: [
      '192.168.1.1',
      '192.168.1.0',
      '192.168.1.255',
      '192.168.1.254'
    ],
    correctAnswer: '192.168.1.1'
  }
  
  

  
];
