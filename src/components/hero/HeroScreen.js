import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";
import { heroImg } from "../../helpers/heroImages";



export const HeroScreen = () => {

    const {heroeId} = useParams();

    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        //volver a la pagina anterior
        navigate(-1);
    };

    if(!hero) {
        return <Navigate to='/'/>
    };

    

    // const imagePath = `/assets/${id}.jpg`;

    return <div className="row mt-5">
        <div className="col-4">
            <img 
                src={heroImg(`./${id}.jpg`)} 
                alt={superhero} 
                className="img-thumbnail animate__animated animate__fadeInLeft"
            />
        </div>
        <div className="col-8 animate__animated animate__fadeIn">
            <h3>{superhero}</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                <li className="list-group-item"><b>First appereance: </b>{first_appearance}</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{characters}</p>
            <button
                className="btn btn-outline-info"
                onClick={handleReturn}
            >
                Volver
            </button>
        </div>
    </div>;
};
