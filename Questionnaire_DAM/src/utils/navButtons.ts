interface NavButtonOptions {
    label: string;
    className: string;
    id?: string;
    condition: () => boolean;
    onClick: () => void;
  }  
//ACA CREO LA FUNCION UTILIZARE PARA CREAR LOS BTN, QUE ME PERMITIRAN IR ADELNTE Y ATRAS EN EL CUESTIONARIO, CON SU LISTENER Y CONDICIOJN PARTIENDO DE LA INTERFACE NavButtonOptions
const createNavButton = ({
  label,
  className,
  id,
  condition,
  onClick,
}: NavButtonOptions): HTMLButtonElement => {
  const btn = document.createElement('button');
  btn.textContent = label;
  btn.classList.add(className);
  if (id) {
    btn.id = id;
  }
  
  const updateState = (): void => {
    btn.disabled = condition();
  };
  
  btn.addEventListener('click', () => {
    onClick();
    updateState();
  });
  
  updateState();
  return btn;
};
  

export {createNavButton};


