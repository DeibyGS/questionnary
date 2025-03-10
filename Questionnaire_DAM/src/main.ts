import './utils/mixArrays';
import './styles/styles.scss'
import { intercambiar } from './utils/mixArrays';


document.body.innerHTML = `
<h1>hola</h1>
`;

const numbers: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(intercambiar(numbers));
