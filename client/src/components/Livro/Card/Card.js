import React from "react";
import './Card.css';

const LivroCard = ({ livro }) => (
  <div className="livro-card">
    <div className="livro-card__info">
      <h1 className="livro-card__nome">{livro.nome}</h1>
      <span className="livro-card__autor">{livro.autor}</span>
      <footer className="livro-card__footer">
        <div className="livro-card__isbn">ISBN: {livro.isbn}</div>
        <div className="livro-card__editora">Editora: {livro.editora}</div>
        <div className="livro-card__ano">Ano: {livro.ano}</div>
      </footer>
    </div>
  </div>
)

export default LivroCard;