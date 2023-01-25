import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ), [publisher]);
//rows-cols-1 row-cols-md-3 g-3
    return <div
        className='row animate__animated animate__fadeIn '
    >
        {
            heroes.map( hero => (
                <div 
                    className='col-12 col-sm-6 col-md-4 col-xxl-3'
                    key={hero.id}
                >
                    <HeroCard { ...hero }/>
                </div>
                
            ))
        }
    </div>;
};
