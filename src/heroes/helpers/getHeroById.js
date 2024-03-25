import { heroes } from "../data/heroes";

export const getHeroById = (id) => { //recibo el id del heroe

return heroes.find(hero => hero.id === id);



};
