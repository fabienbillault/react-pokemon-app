import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Pokemon from '../models/pokemon';
import PokemonForm from '../components/pokemon-form';
import PokemonService from '../services/pokemon-service';
import Loader from '../components/loader';

type Params = { id: string };

const PokemonEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    PokemonService.getPokemon(Number(match.params.id)).then(pokemon => setPokemon(pokemon));
  }, [match.params.id]);

  return (
    <div>
      {pokemon ? (
        <div className="row">
          <h2 className="header center">Editer {pokemon.name}</h2>
          <PokemonForm pokemon={pokemon} isEditForm={true} />
        </div>
      ) : (
        <h4 className="center">
          <Loader />
        </h4>
      )}
    </div>
  );
};

export default PokemonEdit;
