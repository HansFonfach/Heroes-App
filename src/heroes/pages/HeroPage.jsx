import {useMemo} from 'react';
import {  Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]); //cuando el id cambia se vuelve a disparar la funcion
  const navigate = useNavigate();

  const onNavigateBack = () =>{
    navigate(-1) //regreso 1 pagina anterior
  }

  if (!hero) {
    return <Navigate to="/marvel" />;
  }



  return (
    <>
      <div className="row mt-5 animate__animated animate__fadeInLeft
      ">
        <div className="col-4">
          <img
            src={`/assets/heroes/${heroId}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3> {hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b> Alter ego:</b> {hero.alter_ego}</li>
            <li className="list-group-item"> <b> Publisher:</b> {hero.publisher}</li>
            <li className="list-group-item"> <b> First appearance:</b> {hero.first_appearance}</li>
             
          </ul>

          <h3 className="mt-3"> Characters </h3>
          <p>{hero.characters}</p>

          <button className="btn btn-outline-primary" onClick={onNavigateBack}> Volver </button>
        </div>
      </div>
    </>
  );
};
