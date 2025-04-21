
# Questionnaire DAM

**Author:** Deiby Gorrín

## Descripción

`Questionnaire DAM` es una aplicación web dirigida a estudiantes de los ciclos formativos de DAM (Desarrollo de Aplicaciones Multiplataforma) y DAW (Desarrollo de Aplicaciones Web). A través de cuestionarios interactivos, los estudiantes pueden prepararse para los exámenes finales de diversas materias. Los cuestionarios cubren temas como Lenguaje de Marcas, Programación, Base de Datos, Sistemas Informáticos, y más.

El objetivo es facilitar una forma de repaso activa mediante cuestionarios completos y rápidos que simulan los exámenes reales, ayudando a los estudiantes a evaluar sus conocimientos.

## Características

- Cuestionarios interactivos por materia.
- Modo de "Sprint Rápido" para practicar rápidamente.
- Modo "Quizz Completo" para cuestionarios más extensos.
- Estilos responsivos y una interfaz amigable para los estudiantes.
- **Próximas actualizaciones**:
  - Cuestionarios con un límite de tiempo.
  - Filtros para ver los resultados por materia.
  - Funcionalidad de login y registro de usuarios.
  - Comparación de resultados con otros usuarios.

## Tecnologías Utilizadas

- **HTML**: Estructura de la página web.
- **CSS / SCSS**: Estilos para la interfaz.
- **TypeScript**: Lógica de la aplicación.
- **SweetAlert2**: Alertas estilizadas para la interacción con el usuario.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/DeibyGS/questionnary.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd Questionnaire-DAM
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Ejecuta el proyecto localmente:
   ```bash
   npm run dev
   ```

   Esto abrirá la aplicación en `http://localhost:3000` (o el puerto que indique tu consola).

## Uso

### Interfaz Principal

Al ingresar a la página, se mostrará la pantalla principal con tarjetas de las materias. Cada tarjeta representa una materia y contiene un botón para iniciar un cuestionario. Puedes elegir entre los siguientes modos:

- **Quizz Completo**: Responde todas las preguntas de la materia seleccionada.
- **Sprint Rápido**: Responde un número limitado de preguntas para una práctica más rápida.

### Resultados

Los resultados se muestran al finalizar el cuestionario. En futuras actualizaciones, se espera que los resultados puedan ser filtrados por materia y comparados con otros usuarios.

### Navegación

En la parte superior de la aplicación se encuentra un menú que permite navegar entre las diferentes secciones, incluyendo la vista de los resultados y la página de inicio.

## Estructura del Proyecto

```
/src
  /data
    dataCards.ts
  /pages
    /Footer
      Footer.ts
    /InterfaceQuestion
      InterfaceQuestion.ts
    /LenguajeDeMarcas
      LenguajeDeMarcas.ts
    /Programacion
      Programacion.ts
    ...
  /utils
    cleanContainer.ts
    navButtons.ts
  /styles
    styles.scss
  main.ts
index.html
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tu nueva funcionalidad o corrección de errores.
3. Envía un pull request describiendo los cambios realizados.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Si deseas comunicarte conmigo o colaborar en mejoras, puedes encontrarme en [LinkedIn](https://www.linkedin.com/in/deibygorrin).
