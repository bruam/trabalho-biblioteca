import React from 'react';
import LivroCard from 'components/Livro/Card/Card';

const App = () => {

  const livro = {
    "id": 1,
    "nome": "Dom Casmurro",
    "autor": "MACHADO DE ASSIS",
    "isbn": "8508004672",
    "editora": "Ática",
    "ano": 1995
  }

  return (
    <div className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}>
      <LivroCard livro={livro}/>
    </div>
  );
}

export default App;
