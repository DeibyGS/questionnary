

export const createFooter = () => {
  let footer = document.querySelector('footer');
  
  if (!footer) {
    footer = document.createElement('footer');
    document.body.appendChild(footer);
  }
  
  footer.innerHTML = `
<p>
  Creado por 
  <strong><a href="https://www.linkedin.com/in/deibygorrin" target="_blank" rel="noopener noreferrer">
    Deiby Gorrin
  </a> </strong>© 2025.
</p>
<p>Todos los derechos reservados.</p>`;
};