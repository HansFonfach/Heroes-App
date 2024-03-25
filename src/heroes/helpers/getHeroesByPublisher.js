import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {

  const validPublishers = ['DC Comics' , 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${publisher} no es un publisher valido`);
  }
  return heroes.filter(heroe => heroe.publisher === publisher) //si existe retorno el que es igual al publisher que recibo como argumento

  

};
