import './styles/styles.scss';
import { createFooter } from './pages/Footer/Footer';
import { questionnaireCards } from './data/dataCards'; //
import { cleanContainer } from './utils/cleanContainer'; //Funcion que me limpia el main
import { Question } from './pages/InterfaceQuestion';
import { questionsLenguajeDeMarcas } from './pages/LenguajeDeMarcas/LenguajeDeMarcas'; //Array que contiene todas las question de la materia lenguaje de marcas y su interface
import { questionsProgramacion } from './pages/Programacion/Programacion';
import { questionsBaseDeDatos } from './pages/BasedeDatos/BaseDeDatos';
import { questionsSistemasInformaticos } from './pages/SistemasInformaticos/SistemasInformaticos';
import { questionsEntornosDesarrollo } from './pages/EntornoDeDesarrollo/EntornosDeDesarrollo';
import { questionsItinerarioEmpleabilidad } from './pages/ItinerarioEmpleabilidad/ItinerarioEmpleabilidad';
import { questionsFundamentosBBDD } from './pages/FundamentosBBDD/FundamentosBBDD';
import { mixArrays } from './utils/mixArrays';
import Swal from 'sweetalert2'; //importo libreria para los alert
import { createNavButton } from './utils/navButtons';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

const init = (): void => {
  renderCards();
  createFooter();

};

//funcion que me crea un contenedor donde va el title de la web
const renderHeader = (): void => {
  const containerTitle = document.createElement('div');
  containerTitle.className = 'container-title';
  containerTitle.innerHTML = `<h1 class="container-title__title">¿Listo para el Push Final?</h1>`;
  main.append(containerTitle);
};
const main = document.querySelector('main') || document.createElement('main');
if (!document.body.contains(main)) document.body.appendChild(main);

//revisar mas adelantes, ya que si llamo a la funcion desde el init, se renderiza al final de la web, posiblemente es mal manejo dwl DOM
renderHeader();




// Cards
const containerQuizzCards = document.createElement('div');
containerQuizzCards.className = 'quizz-cards-container';
main.appendChild(containerQuizzCards);


//Funcion que me renderiza la pantalla principal con las cards de todas las materias

const renderCards = (): void => {
  containerQuizzCards.innerHTML = "";

  createLeaderBoardButton(main); // aca llamo a la funcion que me pinta el btn para ver los resultados


  const ul = document.createElement('ul');
  ul.className = 'quizz-cards-container__list';

  questionnaireCards.forEach((card) => {
    const li = document.createElement('li');
    li.className = 'quizz-cards-container__card';

    // Front
    const divFront = document.createElement('div');
    divFront.className = 'quizz-card';

    divFront.innerHTML = `
      <img class="quizz-card__image" src="${card.urlImg}" alt="${card.description}" />
      <p class="quizz-card__title">${card.title}</p>
      <span class="quizz-card__description">${card.description}</span>
    `;

    const startBtn = document.createElement('button');
    startBtn.textContent = '¡Demuestra lo que sabes!';
    startBtn.className = 'quizz-card__button';
    startBtn.addEventListener('click', () => {  
        showCardBack(li);
    });

    divFront.appendChild(startBtn);

  
    
    interface QuestionSetEntry  {
      title: string;
      questions: Question[];
    };
    
    //Defino un objeto que mapee los datalink, busque la coincidencia y renderice los questionarios 

    const questionSets: { [key: string]: QuestionSetEntry } = {
      lenguajeDeMarcas: {
        title: "Lenguaje de Marcas",
        questions: questionsLenguajeDeMarcas
      },
      programacion: {
        title: "Programación",
        questions: questionsProgramacion
      },
      baseDeDatos: {
        title: "Base de Datos",
        questions: questionsBaseDeDatos
      },
      sistemasInformaticos: {
        title: "Sistemas Informáticos",
        questions: questionsSistemasInformaticos
      },
      entornosDeDesarrollo: {
        title: "Entornos de Desarrollo",
        questions: questionsEntornosDesarrollo
      },
      itinerarioEmpleabilidad: {
        title: "Itinerario de Empleabilidad",
        questions: questionsItinerarioEmpleabilidad
      },
      fundamentosBBDD: {
        title: "Fundamentos de Bases de Datos",
        questions: questionsFundamentosBBDD
      }
    };
    
    

      
    // Back
    const back = document.createElement('div');
    back.className = 'quizz-card__back';

    const btnClassic = document.createElement('button');
    btnClassic.textContent = '📚 Quiz Completo';
    btnClassic.className = 'quizz-card__back-button';
    btnClassic.dataset.link = card.dataLink;
    btnClassic.dataset.mode = 'Quizz Completo';

    btnClassic.addEventListener('click',()=>{
      handleQuizStart(btnClassic);
      
    })

    const btnClassic20 = document.createElement('button');
    btnClassic20.textContent = '⚡ Sprint Rápido';
    btnClassic20.className = 'quizz-card__back-button';
    btnClassic20.dataset.link = card.dataLink;
    btnClassic20.dataset.mode = 'Sprint Rápido';


    btnClassic20.addEventListener('click', () => {
      handleQuizStart(btnClassic20);

      
      
  });

  let titleQuestionnarie: string = "";
  

  //Funcion que me permite  conocer a que btn se le dio click y conocer que mode aplicarle 
  const handleQuizStart =(button: HTMLButtonElement):void=>{
    cleanContainer(containerQuizzCards);
  
    const dataLink = button.dataset.link;

    if(dataLink && questionSets){
      titleQuestionnarie = questionSets[dataLink].title;
      
    }

    const  isValidMode =(value: any): value is QuizMode =>{
      return value === 'Quizz Completo' || value === 'Sprint Rápido';
    }
    
    const modeFromDataset = button.dataset.mode;
    const selectedMode: QuizMode = isValidMode(modeFromDataset) ? modeFromDataset : 'Quizz Completo';
    

  
    if (dataLink && questionSets[dataLink]) {
      const allQuestions = mixArrays([...questionSets[dataLink].questions]);
  
      // Segun el mode que tenga el btn, renderizare la cantidad de preguntas
      const questionsToUse = selectedMode === 'Quizz Completo'
        ? allQuestions
        : allQuestions.slice(0, 2); //  ACA COLOCAR LA CANTIDAD DE PREGUNTAS QUE QUIERES QUE SE RENDERICEN CUANDO SE LE DE CLICK AL BTN SRPINT RAPIDO 
  
      renderQuestions(questionsToUse, selectedMode,titleQuestionnarie);
      
      
      
    } else {
      console.error(`No se encontró un conjunto de preguntas para la clave: ${dataLink}`);
    }
  }
  


    const backBtn = document.createElement('button');
    backBtn.textContent = '🏠 Regresar al Inicio';
    backBtn.className = 'quizz-card__back-backButton';
    backBtn.addEventListener('click', () => {
      showCardFront(li);
    });

    back.append(btnClassic, btnClassic20, backBtn);

    li.append(divFront, back);
    ul.appendChild(li);
  });

  containerQuizzCards.appendChild(ul);
};



//Funcion que me muestra la parte trasera de la card
const showCardBack = (cardElement: HTMLElement): void =>{
    const front = cardElement.querySelector('.quizz-card') as HTMLElement;
    const back = cardElement.querySelector('.quizz-card__back') as HTMLElement;

  if (!front || !back) return;

  front.classList.add('quizz-card--inactive');
  back.classList.add('quizz-card__back--active');
  
}


//Funcion que me muestra la parte frontal de la card

const showCardFront = (cardElement: HTMLElement): void =>{
    const front = cardElement.querySelector('.quizz-card') as HTMLElement;
    const back = cardElement.querySelector('.quizz-card__back') as HTMLElement;

  if (!front || !back) return;

  front.classList.remove('quizz-card--inactive');
  back.classList.remove('quizz-card__back--active');
}


//funcion que me pinta todas las preguntas del questionario

type QuizMode = 'Quizz Completo' | 'Sprint Rápido';
const renderQuestions = (questions: Question[], mode: QuizMode, titleQuestionnarie: string): void => {
    const containerQuizzCards = document.querySelector('.quizz-cards-container') as HTMLElement;
    containerQuizzCards.innerHTML = '';


     //variables que luego utilizare para mostrar la cantidad de respuestas correctas e incorrectas y el indice actual
     const currentIndex = { value: 0 };
     let correctAnswers :number =0;
     let incorrectAnswers : number= 0;
     let questionsAnswered: { [index: number]: string } = {};
     let arrayLength :number = 0;
     
     
     


     const getResults = () => ({
      correct: correctAnswers,
      incorrect: incorrectAnswers,
    });
  
    const shuffledQuestions = mixArrays([...questions]).map(question => ({
      ...question,
      options: mixArrays(question.options)
  }));
// guardo la longitud del array

  arrayLength = shuffledQuestions.length;
  
    const containerQuestion = document.createElement('div');
    containerQuestion.classList.add('container__quiz__card');

    const containerBtn = document.createElement('div');
    containerBtn.classList.add('containerBtn');

    const containerBtnControls = document.createElement('div');
    containerBtnControls.classList.add('containerBtn__controls');


    const containerNavButtons = document.createElement('div');
    containerNavButtons.classList.add('containerBtn__navButtons');

    const result = document.createElement('div');
    result.classList.add('containerResults');


    
    
    //  aca agrego los dos contenedores principales, el primero donde se cargan todas las preguntas y el segundo dionde se cargan los btn
    containerQuizzCards.append(containerQuestion,containerBtn);

    const renderSingleQuestion = (index: number) => {
      containerQuestion.innerHTML = '';
      const question = shuffledQuestions[index];
    
      const card = document.createElement('div');
      card.classList.add('quiz__card');
    
      const title = document.createElement('h2');
      title.classList.add('quiz__question');
      title.textContent = question.question;
    
      const optionsList = document.createElement('ul');
      optionsList.classList.add('quiz__options');
    
      const selectedOption = questionsAnswered[index]; // 👈 respuesta guardada (si existe)
    
      question.options.forEach((option) => {
        const optionItem = document.createElement('li');
        optionItem.classList.add('quiz__option');
        optionItem.textContent = option;
        optionItem.setAttribute('data-correct', option === question.correctAnswer ? 'true' : 'false');
    
        if (selectedOption) {
          // Ya respondió esta pregunta
          optionItem.setAttribute('disabled', 'true');
    
          if (option === selectedOption) {
            optionItem.classList.add(
              option === question.correctAnswer ? 'quiz__option--correct' : 'quiz__option--incorrect'
            );
          }
    
          if (
            selectedOption !== question.correctAnswer &&
            option === question.correctAnswer
          ) {
            optionItem.classList.add('quiz__option--correct');
          }
        } else {
          // Aún no respondió esta pregunta
          optionItem.addEventListener('click', () => {
            // Guardamos la respuesta
            questionsAnswered[index] = option;
    
            const allOptions = optionsList.querySelectorAll('.quiz__option');
            allOptions.forEach(opt => {
              opt.setAttribute('disabled', 'true');
            });
    
            if (optionItem.getAttribute('data-correct') === 'true') {
              optionItem.classList.add('quiz__option--correct');
              correctAnswers++;
            } else {
              optionItem.classList.add('quiz__option--incorrect');
              const correctOption = optionsList.querySelector('[data-correct="true"]');
              correctOption?.classList.add('quiz__option--correct');
              incorrectAnswers++;
            }
          });
        }
    
        optionsList.appendChild(optionItem);
      });
    
      card.append(title, optionsList);
      containerQuestion.appendChild(card);
    };
    
    renderSingleQuestion(currentIndex.value);
    //aca agrego los btn que se encargaran de ir hacia adelante o atras para recorrer cada pregunta
    containerBtnControls.append(btnPrev(currentIndex,shuffledQuestions,renderSingleQuestion,),updateQuestionCounter(currentIndex.value,arrayLength),btnNext(currentIndex,shuffledQuestions,renderSingleQuestion));

    //aca agrego los btn que me llevaran al inicio o que me mostrarn el resultado de las preguntas correctas e incorrectas
    containerNavButtons.append(btnEnd(getResults, questionsAnswered, shuffledQuestions,mode,titleQuestionnarie));
    
    
    //este es el contenedor principal de todos los btn 
    containerBtn.append(containerBtnControls,containerNavButtons,result);

    };

         //Funcion que me crea un btn que dice anterior,y que me permite retroceder a la pregunta anterior

         const btnPrev = (
          currentIndex: { value: number },
          questions: Question[],
          renderFn: (index: number) => void
        ): HTMLButtonElement => {
          return createNavButton({
            label: 'Anterior',
            className: 'containerBtn__btnPrev',
            condition: () => currentIndex.value === 0,
            onClick: () => {
              if (currentIndex.value > 0) {
                currentIndex.value--;
                renderFn(currentIndex.value);
                updateQuestionCounter(currentIndex.value, questions.length);
        
                const btnNext = document.querySelector<HTMLButtonElement>('#containerBtn__btnNext');
                if (btnNext) btnNext.disabled = false;
              }
            }
          });
        };
        

      //Funcion que me crea un btn que dice siguiente, que me permite avanzar a la siguiente pregunta

      const btnNext = (
        currentIndex: { value: number },
        questions: Question[],
        renderFn: (index: number) => void
      ): HTMLButtonElement => {
        return createNavButton({
          label: 'Siguiente',
          className: 'containerBtn__btnNext',
          id: 'containerBtn__btnNext',
          condition: () => currentIndex.value >= questions.length - 1,
          onClick: () => {
            if (currentIndex.value < questions.length - 1) {
              currentIndex.value++;
              renderFn(currentIndex.value);
              updateQuestionCounter(currentIndex.value, questions.length);
      
              const btnPrev = document.querySelector<HTMLButtonElement>('.containerBtn__btnPrev');
              if (btnPrev) btnPrev.disabled = false;
            }
          }
        });
      };
      

    //Funcion que me indica la posicion de la prehgunta en la que me encuentro y la longitud del array

  // Variable para mantener la referencia del contador
let questionCounterElement: HTMLElement | null = null;

const updateQuestionCounter = (currentIndex: number, lengthArray: number): HTMLElement => {
    if (!questionCounterElement) {
        questionCounterElement = document.createElement('div');
        questionCounterElement.classList.add('containerBtn__counter');
    }
    questionCounterElement.textContent = `${currentIndex + 1} / ${lengthArray}`;
    return questionCounterElement;
};
  
    //Funcion que verifica si todas las opciones estan marcadas y luego me pinta los resultados o me muestra un alert indicandome que me faltan opciones spor marcar
   


    const btnEnd = (
      getResults: () => { correct: number; incorrect: number },
      questionsAnswered: { [index: number]: string },
      questions: Question[],
      mode: QuizMode,
      titleQuestionnarie: string 
    ): HTMLButtonElement => {
      const btnEnd = document.createElement('button');
      btnEnd.textContent = 'Finalizar Intento';
      btnEnd.classList.add('containerBtn__btnEnd');

      
     
    
      btnEnd.addEventListener('click', () => {
        // Verificamos si todas las preguntas tienen respuesta
        const allQuestionsAnswered = questions.length;
        const totalAnswered = Object.keys(questionsAnswered).length; //aca voy guardando la cantidad de preguntas constestadas
        
        
        
        const currentQuestionnarie = questions; // aca guardo el cuestionario actual, para poder renderizarlo de nuevo en caso de ser necesario
        if (totalAnswered < allQuestionsAnswered) {
        
          Swal.fire({
            title: "¿Te vas sin terminar?",
            text: "Todavía hay preguntas esperando tu sabiduría.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "¡Seguir jugando!",
            cancelButtonText: "Me rindo 😢",
            allowEscapeKey: false,  
          allowOutsideClick: false 

          }).then((result)=>{
            if(result.dismiss){
              renderCards();
            }
          });          
          return;
        }else{
            

        const { correct, incorrect } = getResults();
        let title = titleQuestionnarie;

          //defino un type para tener un molde donde lo utilizare poara guardar el titulo, y las respuestas correctas e incorrectas
        type Result = {
          title: string;
          correct: number;
          incorrect: number;
          mode :string
        };
        

        // funcion que me permite guardar los resultados en el localStorage
        const saveResults =(): void=>{
          const storedResults = localStorage.getItem('quizResults');
          const results: Result[] = storedResults ? JSON.parse(storedResults) : [];


          results.push({title,correct,incorrect,mode});
          localStorage.setItem('quizResults', JSON.stringify(results));

        }
    
        saveResults();
        
        Swal.fire({
          title: "¡Resultados del cuestionario!",
          html: `
            <p><strong>✅ Correctas:</strong> ${correct}</p>
            <p><strong>❌ Incorrectas:</strong> ${incorrect}</p>
          `,
          icon: "success",
          showCancelButton: true,
          showDenyButton: true,
          confirmButtonText: "👀 Comprobar resultados",
          denyButtonText: "🔄 Empezar de nuevo",
          cancelButtonText: "📝 Archivar conocimientos",
          allowEscapeKey: false,
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            //aca no se realiza ninguna accion ya que lo que se quiere es revisar los resultados
          } else if (result.isDenied) {
            // 🔄 Reiniciar cuestionario
           renderQuestions(currentQuestionnarie,mode,titleQuestionnarie) 
          } else if (result.isDismissed) {
            renderCards();
          }
        });
      
      }
      });
    
      return btnEnd;
    };
    

   

    //FUNCION QUE ME PINTA EN LA PAGINA PRINCIPAL UN BTN QUE ME PERMITE VER MIS RESULTADOS OBTENIDOS


    const renderResults = (): void => {
      const storedResults = localStorage.getItem('quizResults');
      console.log(storedResults);
    
      const results = storedResults ? JSON.parse(storedResults) : [];
    
      // Crear el contenedor principal de resultados
      const resultContainer = document.createElement('div');
      resultContainer.classList.add('result');
    
      // Si hay resultados almacenados, renderizarlos
      if (results.length > 0) {
        results.forEach((result: any) => {
          const resultItem = document.createElement('div');
          resultItem.classList.add('result__item');

          resultItem.innerHTML = `
            <div class="result__item-left">
              <h3 class="result-title">🎯 ${result.title}</h3>
            </div>
            <div class="result__item-right">
              <span class="result-correct">✅ ${result.correct} correctas</span>
              <span class="result-incorrect">❌ ${result.incorrect} incorrectas</span>
              <span class="result-quizz">📝 ${result.mode}</span>
            </div>
          `;

resultContainer.appendChild(resultItem);

    
          resultContainer.appendChild(resultItem);
        });
      } else {
        const noResultsMessage = document.createElement('p');
        noResultsMessage.textContent = 'No hay resultados guardados.';
        resultContainer.appendChild(noResultsMessage);
      }
    
      // Agregar el contenedor de resultados al main (o donde tú prefieras)
      const main = document.querySelector('main');
      if (main) {
        main.appendChild(resultContainer);
      } else {
        document.body.appendChild(resultContainer);
      }
    };
    

// Función leaderBoard

interface ButtonOptions {
  text: string;
  emoji?: string;
  className: string;
  onClick: () => void;
}

const createButton = ({ text, emoji, className, onClick }: ButtonOptions): HTMLButtonElement => {
  const button = document.createElement('button');
  button.classList.add(className);
  button.innerHTML = `${text} ${emoji ? `<span>${emoji}</span>` : ''} `;
  button.addEventListener('click', onClick);
  return button;
};


const createHomeButton = (main: HTMLElement): HTMLButtonElement => {
  return createButton({
    text: 'Home',
    emoji: '🏠',
    className: 'header-leaderboards__btn',
    onClick: () => {
      cleanContainer(main);
      main.appendChild(containerQuizzCards);
      containerQuizzCards.innerHTML = "";
      renderHeader();
      renderCards();
    }
  });
};

const createLeaderBoardButton = (main: HTMLElement): HTMLButtonElement => {
  const btnLeaderBoard = createButton({
    text: 'LeaderBoard',
    emoji: '🏆',
    className: 'leaderboard-btn',
    onClick: () => {
      cleanContainer(main);

      // Crear el encabezado para LeaderBoards
      const header = document.createElement('div');
      header.classList.add('header-leaderboards');

      const title = document.createElement('h1');
      title.classList.add('header-leaderboards__title');
      title.textContent = 'LeaderBoards';

      header.append(title, createHomeButton(main));
      main.append(header);

      renderResults();

      // Verificar si el contenedor existe, si no lo crea
      let container = document.querySelector('.quizz-cards-container');

      // Si no existe, crearlo
      if (!container) {
        container = document.createElement('div');
        container.classList.add('quizz-cards-container');
        main.appendChild(container); // Añadir al main
      }

      // Aquí no se agrega nuevamente el botón
    }
  });

  // En lugar de agregar el botón dentro del click, agrégalo al main al inicio
  main.appendChild(btnLeaderBoard); 

  return btnLeaderBoard;
};

















/*
const createLeaderBoardButton = (): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.classList.add('leaderbordBtn');
  btn.textContent = 'LeaderBoard';

  const icon = document.createElement('span');
  icon.textContent = '🏆';
  btn.appendChild(icon);

  return btn;
};


// ESTE BTN ESTARA CUANDO SE RENDERICEN LOS RESULATDOS, Y SE ENCARGARA DE VOLVER A LA PAGINA DE INICIO

const createHomeButton = (main: HTMLElement): HTMLButtonElement => {
  const btnHome = document.createElement('button');
  btnHome.textContent = 'Home';
  btnHome.classList.add('headerLeaderboards__btn')

  const icon = document.createElement('span');
  icon.textContent = '🏆';
  btnHome.appendChild(icon)

  //LISTENER QUE ME LLEVA A LA PAGINA DE INICIO

  btnHome.addEventListener('click', () => {
    cleanContainer(main);
    main.appendChild(containerQuizzCards);
    containerQuizzCards.innerHTML = "";
    renderHeader();
    renderCards();
  });

  return btnHome;
};



const leaderBoard = (): HTMLButtonElement | null => {
  const main = document.querySelector('main') as HTMLElement;
  const container = document.querySelector('.quizz-cards-container');

  if (!container) return null;

  const btn = createLeaderBoardButton();
  container.append(btn);
  main.appendChild(container);

  btn.addEventListener('click', () => {
    cleanContainer(main);

    const headerLeaderboards = document.createElement('div');
    headerLeaderboards.classList.add('headerLeaderboards');

  
    headerLeaderboards.innerHTML = ""; 

    const title = document.createElement('h1');
    title.classList.add('headerLeaderboards__title');
    title.textContent = 'LeaderBoards';


    headerLeaderboards.append(title,createHomeButton(main));
    main.append(headerLeaderboards);
    renderResults(); 
  });

  return btn;
};
*/