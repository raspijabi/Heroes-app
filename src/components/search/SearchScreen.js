import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string';
import { useMemo } from "react";

export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    //lo desestructuramos y si q no existe que sea un string vacío
    const { q = '' } = queryString.parse(location.search);

    const [{ searchText }, handleInputChange] = useForm({
        searchText: q
    });

    const heroesFiltred = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${ searchText }`);
    };

    return <>
        <h1>Search</h1>
        <hr/>
        <div className="row">
            <div className="col-5">
                <h4>Buscar:</h4>
                <hr/>
                <form onSubmit={handleSearch}>
                    <input 
                        type="text"
                        placeholder="Buscar un héroe"
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={handleInputChange}
                    />

                    <button 
                        type="submit"
                        className="btn btn-warning mt-2 col-12"
                    >
                        Buscar...
                    </button>
                </form>
            </div>
            <div className="row col-7">
                <h4>Resultados</h4>
                <hr/>

                {
                    (q === '')
                        ? <div className="alert alert-info">Busca un héroe</div>
                        : (heroesFiltred.length === 0) && <div className="alert alert-danger">No hay resultados: {q}</div>
                }


                {
                    heroesFiltred.map(hero => (
                        <div
                            className="col-12 col-md-6"
                            key={hero.id}
                        >
                            <HeroCard
                                {...hero}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </>;
  };