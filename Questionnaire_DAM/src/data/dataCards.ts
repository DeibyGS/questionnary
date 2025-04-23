

interface Cards{
    urlImg: string;
    title: string;
    description: string;
    isActive: boolean;
    dataLink: string;
};


const questionnaireCards : Cards []= [
  {urlImg : '/assets/baseDeDatos.jpg',
    title: 'Base de Datos',
    description: 'Quizz de BBDD',
    isActive : true,
    dataLink: 'baseDeDatos'
  }
  ,
  {urlImg : '/assets/programacion.jpg',
    title: 'Programación',
    description: 'Quiz de Programación',
    isActive : true,
    dataLink: 'programacion'

  }
  ,
  {urlImg : '/assets/lenguajeDeMarcas.jpg',
    title: 'Lenguaje de Marcas',
    description: 'Quizz de Lenguaje de Marcas',
    isActive : true,
    dataLink: 'lenguajeDeMarcas'

  }
  ,
  {urlImg : '/assets/sistemasInformaticos.jpg',
    title: 'Sistemas Informaticos',
    description: 'Quizz de Sistemas Informáticos',
    isActive : true,
    dataLink: 'sistemasInformaticos'

  }
  ,
  {urlImg : '/assets/entornosDeDesarrollo.jpg',
    title: 'Entornos de Desarrollo',
    description: 'Quizz de Entornos de Desarrollo',
    isActive : true,
    dataLink: 'entornosDeDesarrollo'

  }
  ,
  {urlImg : '/assets/itinerarioEmpleabilidad.jpg',
    title: 'Itinerario para la Empleabilidad',
    description: 'Quizz de Itinerario de empleabilidad',
    isActive : true,
    dataLink: 'itinerarioEmpleabilidad'

  }
  ,
  {urlImg : '/assets/fundamentosBBDD.jpg',
    title: 'Fundamentos BBDD',
    description: 'Quizz de fundamentos de BBDD',
    isActive : true,
    dataLink: 'fundamentosBBDD'

  }
];

export {questionnaireCards, type Cards};