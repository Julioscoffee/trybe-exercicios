import React, { useEffect } from 'react';

function BestPokemon() {
  // WillUnmount NÃO ESTÁ FUNCIONANDO CORRETAMENTE!
  useEffect(() => {
    return () => console.log('Desmontou!')
  }, []);
  return (
    <div>
      <h3>MELHOR POKEMON</h3>
    </div>
  );
}

export default BestPokemon;
