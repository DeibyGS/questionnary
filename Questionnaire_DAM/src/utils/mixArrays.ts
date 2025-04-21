
export const mixArrays = <T> (array: T[]): T[] => {
  const shuffled = [...array]; // Crear una copia del arreglo original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
