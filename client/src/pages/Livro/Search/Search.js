import React, { useEffect, useState } from 'react';
import LivroCard from 'components/Livro/Card/Card';
import axios from 'axios';

const PagesLivroSearch = () => {
  const [livros, setLivros] = useState([]);

  // Com useEffect o componente é executado apenas quando montado o componente
  useEffect(() => {
    axios.get('http://localhost:3000/api/livro')
      .then((response) => {
        setLivros(response.data);
      });
  }, []);// O array vazio no final garante que a função seja executada apenas uma vez

  return (
    <div style={{
        maxWidth: 800,
        margin: '30px auto',
      }}>
        {livros.map((livro) => (
          <LivroCard livro={livro} />
        ))}
    </div>
  );
};

export default PagesLivroSearch;