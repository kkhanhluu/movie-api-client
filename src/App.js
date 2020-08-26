import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import MovieDetailPage from './pages/MovieDetailPage';
import AddMoviePage from './pages/AddMoviePage';
import HomePage from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <Switch>
      <Route path='/movie/add' exact component={AddMoviePage} />
      <Route path='/movie/:id' exact component={MovieDetailPage} />
      {/* <Route path='/movie/:id/edit' exact component={} /> */}
      <Route path='/' exact component={HomePage} />
      <Redirect to='/' />
    </Switch>
  );
};

export default App;
