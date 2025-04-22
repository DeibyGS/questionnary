import { Question } from "../InterfaceQuestion";

export const questionsSistemasInformaticos: Question[] = [
  {
    question: "¿Qué es un sistema informático?",
    options: [
      "Un conjunto de programas que permiten realizar tareas específicas",
      "Un conjunto de componentes electrónicos que forman una computadora",
      "Un conjunto de elementos interrelacionados que permiten procesar y almacenar información",
      "Un dispositivo que permite la conexión a internet"
    ],
    correctAnswer: "Un conjunto de elementos interrelacionados que permiten procesar y almacenar información"
  },
  {
    question: "¿Cuál de los siguientes es un componente de hardware?",
    options: [
      "Sistema operativo",
      "Procesador (CPU)",
      "Antivirus",
      "Microsoft Word"
    ],
    correctAnswer: "Procesador (CPU)"
  },
  {
    question: "¿Qué función tiene la memoria RAM en un sistema informático?",
    options: [
      "Almacenar datos de forma permanente",
      "Procesar las instrucciones del sistema",
      "Almacenar temporalmente datos e instrucciones en uso",
      "Controlar los dispositivos de entrada y salida"
    ],
    correctAnswer: "Almacenar temporalmente datos e instrucciones en uso"
  },
  {
    question: "¿Qué es el software de sistema?",
    options: [
      "Programas diseñados para realizar tareas específicas para el usuario",
      "Conjunto de instrucciones que permiten el funcionamiento del hardware",
      "Aplicaciones de ofimática como procesadores de texto",
      "Programas que protegen al sistema de virus"
    ],
    correctAnswer: "Conjunto de instrucciones que permiten el funcionamiento del hardware"
  },
  {
    question: "¿Cuál de los siguientes es un sistema operativo?",
    options: [
      "Linux",
      "Google Chrome",
      "Adobe Photoshop",
      "Intel Core i7"
    ],
    correctAnswer: "Linux"
  },
  {
    question: "¿Qué componente se encarga de ejecutar las instrucciones de los programas?",
    options: [
      "Memoria RAM",
      "Disco duro",
      "Procesador (CPU)",
      "Tarjeta gráfica"
    ],
    correctAnswer: "Procesador (CPU)"
  },
  {
    question: "¿Qué es un dispositivo de entrada?",
    options: [
      "Un componente que muestra información al usuario",
      "Un componente que almacena datos",
      "Un componente que permite al usuario introducir datos al sistema",
      "Un componente que procesa datos"
    ],
    correctAnswer: "Un componente que permite al usuario introducir datos al sistema"
  },
  {
    question: "¿Qué es un dispositivo de salida?",
    options: [
      "Un componente que permite al usuario introducir datos al sistema",
      "Un componente que almacena datos",
      "Un componente que procesa datos",
      "Un componente que muestra información al usuario"
    ],
    correctAnswer: "Un componente que muestra información al usuario"
  },
  {
    question: "¿Qué es un archivo con extensión .docx?",
    options: [
      "Un archivo de imagen",
      "Un archivo de audio",
      "Un documento de Microsoft Word",
      "Un archivo ejecutable"
    ],
    correctAnswer: "Un documento de Microsoft Word"
  },
  {
    question: "¿Qué es la BIOS en un sistema informático?",
    options: [
      "Un tipo de memoria de almacenamiento",
      "Un sistema operativo",
      "Un software que inicia el hardware al encender el ordenador",
      "Una aplicación de ofimática"
    ],
    correctAnswer: "Un software que inicia el hardware al encender el ordenador"
  },
  {
    "question": "¿Cómo puedes ver la ayuda rápida de un comando?",
    "options": [
      "comando /help",
      "comando --help",
      "man comando",
      "help comando"
    ],
    "correctAnswer": "comando --help"
  },
  {
    "question": "¿Cómo se accede al manual del comando ls?",
    "options": [
      "help ls",
      "man ls",
      "info man",
      "ls --help"
    ],
    "correctAnswer": "man ls"
  },
  {
    "question": "¿Cómo se puede ver el número de inodo de un archivo?",
    "options": [
      "stat",
      "info",
      "ls -l",
      "ls -li"
    ],
    "correctAnswer": "ls -li"
  },
  {
    "question": "¿Cuál de los siguientes comandos cambia al directorio raíz?",
    "options": [
      "cd root",
      "cd ~",
      "cd /",
      "cd .."
    ],
    "correctAnswer": "cd /"
  },
  {
    "question": "¿Cuál de los siguientes crea un enlace simbólico?",
    "options": [
      "cp -s",
      "ln -s",
      "mv -s",
      "ln"
    ],
    "correctAnswer": "ln -s"
  },
  {
    "question": "¿Cuál es el comando para borrar todos los archivos de un directorio sin eliminar el directorio?",
    "options": [
      "delete .",
      "rm -r",
      "rm *",
      "rmdir"
    ],
    "correctAnswer": "rm *"
  },
  {
    "question": "¿Cuál es el comando para ver los permisos de los archivos?",
    "options": [
      "ls -l",
      "touch",
      "cat",
      "chmod"
    ],
    "correctAnswer": "ls -l"
  },
  {
    "question": "¿Cuál es el propósito de rmdir?",
    "options": [
      "Crea enlaces",
      "Cambia permisos",
      "Borra directorios vacíos",
      "Borra archivos"
    ],
    "correctAnswer": "Borra directorios vacíos"
  },
  {
    "question": "¿Cuál es el propósito del comando pwd?",
    "options": [
      "Mostrar el directorio actual",
      "Borrar archivos",
      "Mover archivos",
      "Crear archivos"
    ],
    "correctAnswer": "Mostrar el directorio actual"
  },
  {
    "question": "¿Cuál es el uso principal del comando cp?",
    "options": [
      "Eliminar archivos",
      "Crear enlaces",
      "Copiar archivos",
      "Mover archivos"
    ],
    "correctAnswer": "Copiar archivos"
  },
  {
    "question": "¿Cuál es la diferencia entre > y >> en Linux?",
    "options": [
      "> borra el archivo original",
      "Ambos hacen lo mismo",
      ">> borra, > no",
      "> sobrescribe, >> añade"
    ],
    "correctAnswer": "> sobrescribe, >> añade"
  },
  {
    "question": "¿Por qué es peligroso usar rm -r sin cuidado?",
    "options": [
      "Congela el equipo",
      "Puede borrar todo el sistema",
      "Oculta archivos",
      "Cambia contraseñas"
    ],
    "correctAnswer": "Puede borrar todo el sistema"
  },
  {
    "question": "¿Qué añade el parámetro -a al comando ls?",
    "options": [
      "Muestra el propietario",
      "Cambia permisos",
      "Muestra archivos ocultos",
      "Borra archivos"
    ],
    "correctAnswer": "Muestra archivos ocultos"
  },
  {
    "question": "¿Qué comando crea un nuevo archivo vacío?",
    "options": [
      "touch",
      "mkfile",
      "cat",
      "nano"
    ],
    "correctAnswer": "touch"
  },
  {
    "question": "¿Qué comando elimina un directorio y todo su contenido?",
    "options": [
      "delete",
      "rm",
      "rm -r",
      "rmdir"
    ],
    "correctAnswer": "rm -r"
  },
  {
    "question": "¿Qué comando muestra los archivos en orden cronológico?",
    "options": [
      "ls -r",
      "ls -lt",
      "ls -a",
      "ls -i"
    ],
    "correctAnswer": "ls -lt"
  },
  {
    "question": "¿Qué comando muestra los manuales divididos por secciones?",
    "options": [
      "ls -man",
      "man",
      "help",
      "man -k"
    ],
    "correctAnswer": "man -k"
  },
  {
    "question": "¿Qué comando permite visualizar el contenido de un archivo?",
    "options": [
      "touch",
      "rm",
      "ls",
      "cat"
    ],
    "correctAnswer": "cat"
  },
  {
    "question": "¿Qué comando se usa para copiar un directorio con todo su contenido?",
    "options": [
      "cp -r",
      "ln -r",
      "cp",
      "mv -r"
    ],
    "correctAnswer": "cp -r"
  },
  {
    "question": "¿Qué comando se usa para mover archivos?",
    "options": [
      "touch",
      "cp",
      "mv",
      "rm"
    ],
    "correctAnswer": "mv"
  },
  {
    "question": "¿Qué comando se utiliza para cambiar de directorio en Linux?",
    "options": ["ls", "cd", "pwd", "mv"],
    "correctAnswer": "cd"
  },
  {
    "question": "¿Qué comando se utiliza para renombrar archivos?",
    "options": ["cp", "rename", "mv", "ln"],
    "correctAnswer": "mv"
  },
  {
    "question": "¿Qué contiene el archivo /etc/passwd?",
    "options": ["Información del hardware", "Logs del sistema", "Permisos del sistema", "Información de usuarios"],
    "correctAnswer": "Información de usuarios"
  },
  {
    "question": "¿Qué es un inodo en Linux?",
    "options": ["Una carpeta", "Una estructura con metadatos del archivo", "Un tipo de enlace", "Una contraseña"],
    "correctAnswer": "Una estructura con metadatos del archivo"
  },
  {
    "question": "¿Qué es una opción en un comando de Linux?",
    "options": ["Un modificador del comportamiento del comando", "Una ruta", "Un archivo", "Un usuario"],
    "correctAnswer": "Un modificador del comportamiento del comando"
  },
  {
    "question": "¿Qué hace el comando cat archivo > nuevo_archivo?",
    "options": ["Borra el archivo original", "Copia el contenido en un nuevo archivo", "Une dos archivos", "Mueve el archivo"],
    "correctAnswer": "Copia el contenido en un nuevo archivo"
  },
  {
    "question": "¿Qué hace el comando cd ..?",
    "options": ["Sube un nivel en la jerarquía de directorios", "Borra el directorio actual", "Muestra archivos", "Cambia nombre"],
    "correctAnswer": "Sube un nivel en la jerarquía de directorios"
  },
  {
    "question": "¿Qué hace el comando ln sin opciones?",
    "options": ["Copia archivos", "Crea enlaces duros", "Elimina enlaces", "Crea enlaces simbólicos"],
    "correctAnswer": "Crea enlaces duros"
  },
  {
    "question": "¿Qué hace el comando man en Linux?",
    "options": ["Muestra manuales", "Lista procesos", "Cambia usuarios", "Elimina archivos"],
    "correctAnswer": "Muestra manuales"
  },
  {
    "question": "¿Qué hace el comando rm?",
    "options": ["Elimina archivos", "Cambia nombre", "Muestra contenido", "Lista archivos"],
    "correctAnswer": "Elimina archivos"
  },
  {
    "question": "¿Qué hace el modificador -l en ls -l?",
    "options": ["Muestra archivos ocultos", "Ordena alfabéticamente", "Muestra detalles", "Muestra inodos"],
    "correctAnswer": "Muestra detalles"
  },
  {
    "question": "¿Qué hace el parámetro -i en ls -li?",
    "options": ["Oculta carpetas", "Ordena por fecha", "Muestra el inodo", "Muestra solo archivos"],
    "correctAnswer": "Muestra el inodo"
  },
  {
    "question": "¿Qué indica una \"-\" al principio de una línea de ls -l?",
    "options": ["Enlace simbólico", "Archivo", "Directorio", "Ninguna de las anteriores"],
    "correctAnswer": "Archivo"
  },
  {
    "question": "¿Qué indica una \"d\" al principio de una línea de ls -l?",
    "options": ["Archivo ejecutable", "Directorio", "Enlace simbólico", "Archivo oculto"],
    "correctAnswer": "Directorio"
  },
  {
    "question": "¿Qué información adicional muestra ls -la?",
    "options": ["Fecha de modificación", "Archivos ocultos y detalles", "Tipo de sistema de archivos", "Solo carpetas"],
    "correctAnswer": "Archivos ocultos y detalles"
  },
  {
    "question": "¿Qué muestra el comando ls?",
    "options": ["Cambia de directorio", "Borra archivos", "Lista archivos y carpetas", "Muestra el directorio actual"],
    "correctAnswer": "Lista archivos y carpetas"
  },
  {
    "question": "¿Qué pasa si se ejecuta cp archivo1 archivo1?",
    "options": ["No hace nada", "Cambia su nombre", "Lo renombra", "Elimina el archivo"],
    "correctAnswer": "No hace nada"
  },
  {
    "question": "¿Qué representa el símbolo ~ en Linux?",
    "options": ["El directorio /etc", "El directorio temporal", "El directorio del usuario actual", "El directorio /"],
    "correctAnswer": "El directorio del usuario actual"
  },
  {
    "question": "¿Qué sucede si borras el archivo original de un enlace simbólico?",
    "options": ["Se mantiene el contenido", "El enlace queda roto", "Se oculta", "Se borra también el enlace"],
    "correctAnswer": "El enlace queda roto"
  },
  {
    "question": "¿Qué tipo de enlace apunta al mismo inodo que el archivo original?",
    "options": ["Alias", "Soft link", "Symbolic link", "Hard link"],
    "correctAnswer": "Hard link"
  },
  {
    question: "¿Cómo se accede a la página de Servicios en Windows?",
    options: [
      "Ejecutando services.msc",
      "Abriendo el Administrador de Tareas",
      "Ejecutando taskmgr",
      "Desde el Explorador de Archivos"
    ],
    correctAnswer: "Ejecutando services.msc"
  },
  {
    question: "¿Cómo se clasifican comúnmente los SSII?",
    options: [
      "Centralizados y distribuidos",
      "Públicos y privados",
      "Manuales y automáticos",
      "Locales y globales"
    ],
    correctAnswer: "Centralizados y distribuidos"
  },
  {
    question: "¿Cuál de las siguientes máscaras permite más hosts?",
    options: [
      "255.255.0.0",
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.0"
    ],
    correctAnswer: "255.255.0.0"
  },
  {
    question: "¿Cuál de las siguientes opciones tiene un menor tiempo de arranque del sistema operativo?",
    options: [
      "HDD",
      "Disco óptico",
      "SSD",
      "USB 2.0"
    ],
    correctAnswer: "SSD"
  },
  {
    question: "¿Cuál de los siguientes NO es un beneficio de la virtualización?",
    options: [
      "Aumento del consumo energético",
      "Ahorro de espacio físico",
      "Mejora en la recuperación ante desastres",
      "Mayor flexibilidad"
    ],
    correctAnswer: "Aumento del consumo energético"
  },
  {
    question: "¿Cuál es el principal factor que hace a los HDD más económicos que los SSD?",
    options: [
      "Capacidad limitada",
      "Mayor velocidad",
      "Más eficiencia energética",
      "Tecnología de fabricación más simple y madura"
    ],
    correctAnswer: "Tecnología de fabricación más simple y madura"
  },
  {
    question: "¿Cuál es la dirección de broadcast para la red 192.168.1.0/24?",
    options: [
      "192.168.1.0",
      "192.168.1.1",
      "192.168.1.254",
      "192.168.1.255"
    ],
    correctAnswer: "192.168.1.255"
  },
  {
    question: "¿Cuál es la función principal de la máscara de red?",
    options: [
      "Establecer el rango de puertos abiertos",
      "Asignar direcciones dinámicas",
      "Determinar la dirección MAC de un dispositivo",
      "Identificar la parte de red y de host en una dirección IP"
    ],
    correctAnswer: "Identificar la parte de red y de host en una dirección IP"
  },
  {
    question: "¿Cuál es la función principal de la Unidad Lógica y Aritmética (ALU)?",
    options: [
      "Realizar operaciones matemáticas y lógicas",
      "Almacenar datos a largo plazo",
      "Controlar el flujo de datos de red",
      "Ejecutar aplicaciones de usuario"
    ],
    correctAnswer: "Realizar operaciones matemáticas y lógicas"
  },
  {
    question: "¿Cuál es la principal diferencia entre IPv4 e IPv6?",
    options: [
      "La cantidad de puertos disponibles",
      "La velocidad de transmisión",
      "La longitud de la dirección",
      "El tipo de protocolo de transporte"
    ],
    correctAnswer: "La longitud de la dirección"
  },
  {
    question: "¿Cuál es un beneficio de IPv6 sobre IPv4?",
    options: [
      "Uso de direcciones dinámicas únicamente",
      "Menor seguridad",
      "Mayor latencia",
      "Más direcciones disponibles"
    ],
    correctAnswer: "Más direcciones disponibles"
  },
  {
    question: "¿Cuál es un ejemplo válido de una dirección IPv4?",
    options: [
      "192.168.1",
      "300.168.1.1",
      "192.168.1.1",
      "2001:0db8:85a3:0000:0000:8a2e:0370:7334"
    ],
    correctAnswer: "192.168.1.1"
  },
  {
    question: "¿Cuál es una ventaja clave de la virtualización?",
    options: [
      "Disminución de la seguridad",
      "Mayor consumo energético",
      "Reducción de costos operativos",
      "Necesidad de más hardware"
    ],
    correctAnswer: "Reducción de costos operativos"
  },
  {
    question: "¿Cuál es una ventaja de los discos SSHD sobre los HDD?",
    options: [
      "Menor velocidad",
      "Rendimiento superior al combinar SSD y HDD",
      "Más partes móviles",
      "Mayor costo"
    ],
    correctAnswer: "Rendimiento superior al combinar SSD y HDD"
  },
  {
    question: "¿Cuál es una ventaja de los SSD sobre los HDD?",
    options: [
      "Mayor velocidad de lectura y escritura",
      "Menor costo por GB",
      "Mayor capacidad de almacenamiento",
      "Más partes móviles"
    ],
    correctAnswer: "Mayor velocidad de lectura y escritura"
  },
  {
    question: "¿Cuántas subredes de tamaño /26 se pueden obtener al dividir una red con máscara /22?",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    correctAnswer: "16"
  },
  {
    question: "¿Cuántos bits tiene una dirección IPv4?",
    options: [
      "64",
      "32",
      "256",
      "128"
    ],
    correctAnswer: "32"
  },
  {
    question: "¿Cuántos gigabytes (GB) hay en 8192 megabytes (MB)?",
    options: [
      "16 GB",
      "2 GB",
      "8 GB",
      "4 GB"
    ],
    correctAnswer: "8 GB"
  },
  {
    question: "¿Cuántos kilobytes (KB) hay en 2 megabytes (MB)?",
    options: [
      "4096 KB",
      "1024 KB",
      "512 KB",
      "2048 KB"
    ],
    correctAnswer: "2048 KB"
  },
  {
    question: "¿Cuántos MB hay en 3 GB?",
    options: [
      "1024 MB",
      "2048 MB",
      "4096 MB",
      "3072 MB"
    ],
    correctAnswer: "3072 MB"
  },
  {
    "question": "¿Cuántos megabytes (MB) hay en 5 gigabytes (GB)?",
    "options": [
      "2048 MB",
      "4096 MB",
      "1024 MB",
      "5120 MB"
    ],
    "correctAnswer": "5120 MB"
  },
  {
    "question": "¿Cuántos terabytes (TB) hay en 10,240 gigabytes (GB)?",
    "options": [
      "15 TB",
      "10 TB",
      "20 TB",
      "5 TB"
    ],
    "correctAnswer": "10 TB"
  },
  {
    "question": "¿Cuántos terabytes (TB) hay en 2048 gigabytes (GB)?",
    "options": [
      "1 TB",
      "2 TB",
      "4 TB",
      "0.5 TB"
    ],
    "correctAnswer": "2 TB"
  },
  {
    "question": "¿Por qué es importante que un estudiante de DAM y DAW comprenda el funcionamiento de las direcciones IP?",
    "options": [
      "Para gestionar bases de datos relacionales.",
      "Para diseñar componentes de hardware y configurar redes físicas.",
      "Para asegurar la correcta comunicación entre aplicaciones, servidores y redes durante el desarrollo y despliegue de software.",
      "Para crear interfaces gráficas de usuario (GUI)."
    ],
    "correctAnswer": "Para asegurar la correcta comunicación entre aplicaciones, servidores y redes durante el desarrollo y despliegue de software."
  },
  {
    "question": "¿Qué acción se puede realizar desde el Administrador de Tareas para cerrar un programa que no responde?",
    "options": [
      "Finalizar tarea",
      "Analizar cadena de espera",
      "Crear acceso directo",
      "Ejecutar nuevo proceso"
    ],
    "correctAnswer": "Finalizar tarea"
  },
  {
    "question": "¿Qué característica distingue a los discos duros HDD?",
    "options": [
      "Almacenamiento basado en memoria flash",
      "Uso de platos giratorios y cabezales de lectura/escritura",
      "Tiempo de acceso ultra rápido",
      "Mayor resistencia a golpes"
    ],
    "correctAnswer": "Uso de platos giratorios y cabezales de lectura/escritura"
  },
  {
    "question": "¿Qué característica distingue al firmware del hardware y software?",
    "options": [
      "Es un sistema operativo",
      "Es un programa que gestiona el hardware a bajo nivel",
      "Es un periférico",
      "Es tangible como el hardware"
    ],
    "correctAnswer": "Es un programa que gestiona el hardware a bajo nivel"
  },
  {
    "question": "¿Qué comando se usa para cambiar de directorio en CMD?",
    "options": [
      "chdir",
      "rmdir",
      "cd",
      "mkdir"
    ],
    "correctAnswer": "cd"
  },
  {
    "question": "¿Qué comando se usa para listar archivos y carpetas en el directorio actual?",
    "options": [
      "dir",
      "copy",
      "del",
      "cd"
    ],
    "correctAnswer": "dir"
  },
  {
    "question": "¿Qué comando se utiliza para ver la dirección IP en CMD?",
    "options": [
      "ipconfig",
      "ping",
      "netstat",
      "dir"
    ],
    "correctAnswer": "ipconfig"
  },
  {
    "question": "¿Qué comando sirve para verificar la conectividad a una dirección en CMD?",
    "options": [
      "ping",
      "path",
      "tracert",
      "netsh"
    ],
    "correctAnswer": "ping"
  },
  {
    "question": "¿Qué componente conecta la CPU con la memoria RAM?",
    "options": [
      "Puente sur",
      "Chipset",
      "Puente norte",
      "BIOS"
    ],
    "correctAnswer": "Puente norte"
  },
  {
    "question": "¿Qué componente gestiona las máquinas virtuales en un entorno virtualizado?",
    "options": [
      "Firewall",
      "Router",
      "Servidor web",
      "Hipervisor"
    ],
    "correctAnswer": "Hipervisor"
  },
  {
    "question": "¿Qué componente NO forma parte de la arquitectura básica de un ordenador?",
    "options": [
      "Dispositivos de entrada/salida",
      "CPU",
      "Software de usuario",
      "Memoria"
    ],
    "correctAnswer": "Software de usuario"
  },
  {
    "question": "¿Qué define a un cliente ligero?",
    "options": [
      "Software de virtualización",
      "Sistema operativo independiente",
      "Alta capacidad de procesamiento",
      "Depende de un servidor para procesamiento de datos"
    ],
    "correctAnswer": "Depende de un servidor para procesamiento de datos"
  },
  {
    "question": "¿Qué define mejor un Sistema de Información (SSII)?",
    "options": [
      "Hardware del servidor",
      "Sistema que almacena, procesa y distribuye información",
      "Sistema de redes interconectadas",
      "Sistema operativo"
    ],
    "correctAnswer": "Sistema que almacena, procesa y distribuye información"
  },
  {
    "question": "¿Qué define una subred?",
    "options": [
      "Una dirección IP asignada a un host",
      "Un protocolo de enrutamiento",
      "Un grupo de dispositivos en diferentes redes",
      "Un segmento de red que comparte la misma máscara de red"
    ],
    "correctAnswer": "Un segmento de red que comparte la misma máscara de red"
  },
  {
    "question": "¿Qué describe mejor un entorno 'sandbox' en virtualización?",
    "options": [
      "Un servidor en la nube",
      "Un entorno seguro para pruebas sin afectar el sistema principal",
      "Un entorno de producción",
      "Un software de monitoreo de red"
    ],
    "correctAnswer": "Un entorno seguro para pruebas sin afectar el sistema principal"
  },
  {
    "question": "¿Qué disco es más adecuado para almacenar grandes volúmenes de datos de bajo acceso?",
    "options": [
      "SSD",
      "Memoria RAM",
      "Disco óptico",
      "HDD"
    ],
    "correctAnswer": "HDD"
  },
  {
    "question": "¿Qué disco es recomendable para sistemas operativos y aplicaciones que requieren alta velocidad?",
    "options": [
      "Disco óptico",
      "SSD",
      "HDD",
      "Memoria RAM"
    ],
    "correctAnswer": "SSD"
  },
  {
    "question": "¿Qué es el CMD en Windows?",
    "options": [
      "Un gestor de archivos",
      "Una interfaz gráfica de usuario",
      "Un procesador de texto",
      "Un intérprete de comandos"
    ],
    "correctAnswer": "Un intérprete de comandos"
  },
  {
    "question": "¿Qué es la virtualización de servidores?",
    "options": [
      "Dividir un servidor en múltiples redes",
      "Uso de múltiples servidores físicos",
      "Aislamiento de procesos de red",
      "Consolidación de servidores físicos en servidores virtuales"
    ],
    "correctAnswer": "Consolidación de servidores físicos en servidores virtuales"
  },
  {
    "question": "¿Qué es la virtualización en el ámbito informático?",
    "options": [
      "La conexión remota a servidores externos",
      "La simulación de recursos de hardware mediante software",
      "La creación de redes locales",
      "La instalación de software en el hardware físico"
    ],
    "correctAnswer": "La simulación de recursos de hardware mediante software"
  },
  {
    "question": "¿Qué es la virtualización en la nube?",
    "options": [
      "Ejecutar máquinas virtuales en servidores de terceros a través de Internet",
      "Configurar redes privadas",
      "Almacenar datos localmente",
      "Descargar aplicaciones"
    ],
    "correctAnswer": "Ejecutar máquinas virtuales en servidores de terceros a través de Internet"
  },
  {
    "question": "¿Qué es un disco de red?",
    "options": [
      "Una partición local",
      "Un disco duro local",
      "Un almacenamiento accesible a través de una red",
      "Una memoria RAM"
    ],
    "correctAnswer": "Un almacenamiento accesible a través de una red"
  },
  {
    "question": "¿Qué es un proceso en un sistema operativo?",
    "options": [
      "Una instancia de un programa en ejecución",
      "Un archivo de configuración",
      "Una tarea en espera",
      "Un servicio de red"
    ],
    "correctAnswer": "Una instancia de un programa en ejecución"
  },
  {
    "question": "¿Qué es un sistema operativo?",
    "options": [
      "Programa que gestiona hardware y software del sistema",
      "Dispositivo de entrada",
      "Software de usuario",
      "Aplicación de red"
    ],
    "correctAnswer": "Programa que gestiona hardware y software del sistema"
  },
  {
    "question": "¿Qué es una dirección de broadcast?",
    "options": [
      "La dirección del primer host de la red",
      "La última dirección válida de la red",
      "La dirección del router por defecto",
      "La dirección asignada al DNS"
    ],
    "correctAnswer": "La última dirección válida de la red"
  },
  {
    "question": "¿Qué estado indica que un servicio de Windows se está ejecutando?",
    "options": [
      "En ejecución",
      "Pausado",
      "Deshabilitado",
      "Detenido"
    ],
    "correctAnswer": "En ejecución"
  },
  {
    "question": "¿Qué factor es crítico para la eficiencia en entornos virtualizados?",
    "options": [
      "Velocidad del disco duro",
      "Color del gabinete del servidor",
      "Cantidad de memoria RAM disponible",
      "Número de usuarios"
    ],
    "correctAnswer": "Cantidad de memoria RAM disponible"
  },
  {
    "question": "¿Qué factor influye directamente en la vida útil de un SSD?",
    "options": [
      "Color de la carcasa",
      "Velocidad del ventilador",
      "Número de ciclos de lectura/escritura",
      "Capacidad de almacenamiento total"
    ],
    "correctAnswer": "Número de ciclos de lectura/escritura"
  },
  {
    "question": "¿Qué función cumple el núcleo (kernel) en un sistema operativo?",
    "options": [
      "Crear interfaces gráficas",
      "Ejecutar software de usuario",
      "Conectar redes externas",
      "Gestionar la memoria, procesos y hardware"
    ],
    "correctAnswer": "Gestionar la memoria, procesos y hardware"
  },
  {
    "question": "¿Qué hace la ALU en un ordenador?",
    "options": [
      "Procesa gráficos",
      "Realiza operaciones matemáticas y lógicas",
      "Ejecuta instrucciones de control",
      "Controla el flujo de datos en redes"
    ],
    "correctAnswer": "Realiza operaciones matemáticas y lógicas"
  },
  {
    "question": "¿Qué herramienta de Windows muestra el uso de CPU y memoria en tiempo real?",
    "options": [
      "Explorador de Archivos",
      "Panel de Control",
      "Administrador de Tareas",
      "CMD"
    ],
    "correctAnswer": "Administrador de Tareas"
  },
  {
    "question": "¿Qué máscara de red corresponde a /24?",
    "options": [
      "255.255.255.0",
      "255.0.0.0",
      "255.255.0.0",
      "255.255.255.255"
    ],
    "correctAnswer": "255.255.255.0"
  },
  {
    "question": "¿Qué máscara se usa para crear 4 subredes de igual tamaño a partir de una red /24?",
    "options": [
      "/26",
      "/25",
      "/27",
      "/28"
    ],
    "correctAnswer": "/26"
  },
  {
    "question": "¿Qué memoria es más rápida pero tiene menor capacidad?",
    "options": [
      "SSD",
      "Disco duro",
      "Memoria caché",
      "RAM"
    ],
    "correctAnswer": "Memoria caché"
  },
  {
    "question": "¿Qué opción del Administrador de Tareas se utiliza para ver el impacto de las aplicaciones al inicio?",
    "options": [
      "Procesos",
      "Inicio",
      "Servicios",
      "Detalles"
    ],
    "correctAnswer": "Inicio"
  },
  {
    "question": "¿Qué operaciones realiza la ALU además de sumas y restas?",
    "options": [
      "Procesos de red",
      "Gestión de almacenamiento",
      "Operaciones lógicas como AND, OR y NOT",
      "Gestión de entradas y salidas"
    ],
    "correctAnswer": "Operaciones lógicas como AND, OR y NOT"
  },
  {
    "question": "¿Qué pestaña del Administrador de Tareas muestra los procesos en ejecución?",
    "options": [
      "Historial de aplicaciones",
      "Usuarios",
      "Rendimiento",
      "Procesos"
    ],
    "correctAnswer": "Procesos"
  },
  {
    "question": "¿Qué pestaña del Administrador de Tareas permite ver el uso de red?",
    "options": [
      "Usuarios",
      "Servicios",
      "Procesos",
      "Rendimiento"
    ],
    "correctAnswer": "Rendimiento"
  },
  {
    "question": "¿Qué plataforma de virtualización es conocida por su código abierto?",
    "options": [
      "VMware vSphere",
      "Citrix XenServer",
      "Microsoft Hyper-V",
      "Oracle VirtualBox"
    ],
    "correctAnswer": "Oracle VirtualBox"
  },
  {
    "question": "¿Qué protocolo facilita la conexión remota a máquinas virtuales?",
    "options": [
      "RDP (Remote Desktop Protocol)",
      "SSH",
      "FTP",
      "HTTP"
    ],
    "correctAnswer": "RDP (Remote Desktop Protocol)"
  },
  {
    "question": "¿Qué reemplazó a los tubos de vacío en la evolución de los ordenadores?",
    "options": [
      "Discos duros",
      "Transistores",
      "Placas base",
      "ROM"
    ],
    "correctAnswer": "Transistores"
  },
  {
    "question": "¿Qué representa el uso de memoria en el Administrador de Tareas?",
    "options": [
      "La capacidad máxima de la RAM",
      "El uso del disco duro",
      "El total de memoria física utilizada",
      "La cantidad de memoria virtual disponible"
    ],
    "correctAnswer": "El total de memoria física utilizada"
  },
  {
    "question": "¿Qué se entiende por 'máquina virtual' (VM)?",
    "options": [
      "Un protocolo de red",
      "Un servidor físico",
      "Un entorno de software que emula un sistema informático",
      "Un contenedor de aplicaciones"
    ],
    "correctAnswer": "Un entorno de software que emula un sistema informático"
  },
  {
    "question": "¿Qué son los servicios en Windows?",
    "options": [
      "Procesos que se ejecutan en segundo plano",
      "Controladores de hardware",
      "Programas para el usuario",
      "Aplicaciones móviles"
    ],
    "correctAnswer": "Procesos que se ejecutan en segundo plano"
  },
  {
    "question": "¿Qué tecnología permite a un SSD ser más eficiente energéticamente que un HDD?",
    "options": [
      "Tecnología magnética",
      "Memoria flash NAND",
      "Platos giratorios",
      "Cabezal de lectura"
    ],
    "correctAnswer": "Memoria flash NAND"
  },
  {
    "question": "¿Qué tecnología permite ejecutar aplicaciones en entornos virtuales sin crear una máquina virtual completa?",
    "options": [
      "Hipervisor de tipo 1",
      "Contenedores",
      "Emuladores",
      "Virtualización de red"
    ],
    "correctAnswer": "Contenedores"
  },
  {
    "question": "¿Qué tipo de disco es más resistente a golpes y caídas?",
    "options": [
      "SSD",
      "HDD",
      "Ninguno",
      "Disco óptico"
    ],
    "correctAnswer": "SSD"
  },
  {
    "question": "¿Qué tipo de hipervisor se ejecuta directamente sobre el hardware?",
    "options": [
      "Hipervisor de tipo 1",
      "Sistema operativo huésped",
      "Hipervisor de tipo 2",
      "Máquina virtual"
    ],
    "correctAnswer": "Hipervisor de tipo 1"
  },
  {
    "question": "¿Qué tipo de inicio permite que un servicio se ejecute al arrancar el sistema?",
    "options": [
      "Manual",
      "Automático",
      "Diferido",
      "Deshabilitado"
    ],
    "correctAnswer": "Automático"
  },
  {
    "question": "¿Qué tipo de memoria es utilizada para almacenar el firmware del sistema?",
    "options": [
      "Caché",
      "RAM",
      "ROM",
      "SSD"
    ],
    "correctAnswer": "ROM"
  },
  {
    "question": "¿Qué tipo de memoria es volátil?",
    "options": [
      "RAM",
      "ROM",
      "SSD",
      "Disco duro"
    ],
    "correctAnswer": "RAM"
  },
  {
    "question": "¿Qué tipo de memoria se usa para el almacenamiento a largo plazo?",
    "options": [
      "RAM",
      "Memoria caché",
      "ROM",
      "HDD"
    ],
    "correctAnswer": "HDD"
  },
  {
    "question": "¿Qué tipo de virtualización permite ejecutar un sistema operativo distinto sobre otro?",
    "options": [
      "Virtualización de red",
      "Virtualización de almacenamiento",
      "Virtualización de escritorio",
      "Virtualización de aplicaciones"
    ],
    "correctAnswer": "Virtualización de escritorio"
  },
  {
    "question": "¿Qué unidad se utiliza para medir el uso de la CPU en el Administrador de Tareas?",
    "options": [
      "GHz",
      "% (porcentaje)",
      "MB",
      "GB"
    ],
    "correctAnswer": "% (porcentaje)"
  },
  {
    "question": "¿Qué ventaja ofrece la virtualización para pruebas de software?",
    "options": [
      "Ejecución en hardware especializado",
      "Creación rápida de entornos aislados",
      "Mayor dependencia del hardware",
      "Instalaciones permanentes"
    ],
    "correctAnswer": "Creación rápida de entornos aislados"
  },
  {
    "question": "Convierte 0.5 terabytes (TB) a gigabytes (GB).",
    "options": [
      "2048 GB",
      "512 GB",
      "1024 GB",
      "256 GB"
    ],
    "correctAnswer": "512 GB"
  },
  {
    "question": "Convierte 1.5 terabytes (TB) a gigabytes (GB).",
    "options": [
      "1024 GB",
      "512 GB",
      "1536 GB",
      "2048 GB"
    ],
    "correctAnswer": "1536 GB"
  },
  {
    "question": "Convierte 20480 kilobytes (KB) a megabytes (MB).",
    "options": [
      "20 MB",
      "25 MB",
      "15 MB",
      "10 MB"
    ],
    "correctAnswer": "20 MB"
  },
  {
    "question": "Convierte 256 megabytes (MB) a gigabytes (GB).",
    "options": [
      "1 GB",
      "0.5 GB",
      "0.25 GB",
      "2 GB"
    ],
    "correctAnswer": "0.25 GB"
  },
  {
    "question": "Convierte 4096 kilobytes (KB) a megabytes (MB).",
    "options": [
      "4 MB",
      "6 MB",
      "2 MB",
      "8 MB"
    ],
    "correctAnswer": "4 MB"
  },
  {
    "question": "Convierte el número binario 1001 a decimal.",
    "options": [
      "7",
      "9",
      "8",
      "10"
    ],
    "correctAnswer": "9"
  },
  {
    "question": "Convierte el número binario 1010 a decimal.",
    "options": [
      "12",
      "15",
      "10",
      "8"
    ],
    "correctAnswer": "10"
  },
  {
    "question": "Convierte el número binario 1101 a decimal.",
    "options": [
      "11",
      "14",
      "13",
      "12"
    ],
    "correctAnswer": "13"
  },
  {
    "question": "Convierte el número decimal 15 a binario.",
    "options": [
      "1100",
      "1111",
      "1010",
      "1001"
    ],
    "correctAnswer": "1111"
  },
  {
    "question": "Convierte el número decimal 255 a binario.",
    "options": [
      "11111111",
      "11111110",
      "11001100",
      "10101010"
    ],
    "correctAnswer": "11111111"
  },
  {
    "question": "Convierte el número decimal 64 a binario.",
    "options": [
      "1100000",
      "100000",
      "111111",
      "1000000"
    ],
    "correctAnswer": "1000000"
  }
  
  
  
  

  
    
  
  
    
  
  
  
    
  
  
];
