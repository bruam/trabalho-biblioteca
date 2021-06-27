import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import PagesLivroForm from './Livro/Form/Form';
import PagesLivroSearch from './Livro/Search/Search';

const Root = () => {
  // Retorna rotas que são rederizadas em sequência
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagesLivroForm} />
        <Route path="/edit/:id" component={PagesLivroForm} />
        <Route path="/" component={PagesLivroSearch}/>
      </Switch>
    </Router>
  );
};

export default Root;