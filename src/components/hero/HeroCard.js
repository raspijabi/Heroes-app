import React from 'react';
import { Link } from 'react-router-dom';
import { heroImg } from '../../helpers/heroImages';


export const HeroCard = ({ 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
 }) => {

    // const imagePath = `/assets/${id}.jpg`;

    return (
        <div className='col pb-2 animate__animated animate__fadeIn'>
            <div className='card'>
                
                {/* col-12 col-md-6 */}
                <div className='row'> 
                    <img src={heroImg(`./${id}.jpg`)} className='card-img' alt={superhero}/>
                </div>
                <div className='row'>
                    <div className='card-body'>
                        <h5 className='card-title'>{superhero}</h5>
                        <p className='card-text'>{alter_ego}</p>
                        {
                            (alter_ego !== characters) && 
                                <p className='text-muted'>{characters}</p>
                        }
                        <p className='card-text'>
                            <small className='text-muted'>{first_appearance}</small>
                        </p>

                        <Link to={`/hero/${id}`}>
                            Más...
                        </Link>

                    </div>
                </div>

            </div>
        </div>
    )
};
