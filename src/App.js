import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import AddMoviePage from './pages/AddMoviePage/AddMoviePage';
import HomePage from './pages/HomePage/HomePage';
import Authentication from './pages/Authentication/Authentication';
import YourMoviesPage from './pages/YourMoviesPage/YourMoviesPage';

export const App = () => {
  return (
    <Switch>
      <Route path='/movie/add' exact component={AddMoviePage} />
      <Route path='/movie/:id' exact component={MovieDetailPage} />
      <Route path='/authentication/:mode' exact component={Authentication} />
      <Route path='/me/movies' exact component={YourMoviesPage} />
      <Route path='/movie/:id/edit' exact component={AddMoviePage} />
      <Route path='/' exact component={HomePage} />
      <Redirect to='/' />
    </Switch>
  );
};

export default App;
