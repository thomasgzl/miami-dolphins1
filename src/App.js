import React, { Component } from 'react';
import './App.css';

import NavbarMain from './components/NavbarMain';
import Bandeau from './components/Bandeau';
import Footer from './components/Footer';
import News from './components/News';
import Home from './components/Home';

import { Route, Switch } from "react-router-dom";
import NewsZoom from './components/NewsZoom';
import Calendrier from './components/Calendrier';
import Historique from './components/Historique';
import Equipe from './components/Equipe';
import ProfilJoueur from './components/ProfilJoueur';

import GlobalAdmin from './components/GlobalAdmin';

import AdminCalendrier from './components/AdminCalendrier';
import AdminNews from './components/AdminNews';

import AdminJoueurModifie from './components/AdminJoueurModifie';
import AdminJoueurNew from './components/AdminJoueurNew';
import AdminEquipe from './components/AdminEquipe';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Bandeau />
        <NavbarMain />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/historique" component={Historique} />
          <Route path="/equipe" component={Equipe} />
          <Route path="/news" component={News} />
          <Route path="/calendrier" component={Calendrier} />
          <Route path="/newszoom/:id" component={NewsZoom} />
          <Route path="/historique" component={Historique} />
          <Route path="/equipe" component={Equipe} />
          <Route path="/profiljoueur" component={ProfilJoueur} />
          <Route path="/admincalendrier" component={AdminCalendrier} />
          <Route path="/admin-news" component={AdminNews} />
          <Route path="/admin" component={GlobalAdmin} />
          <Route path="/adminjoueurnew" component={AdminJoueurNew} />
          <Route path="/adminequipe" component={AdminEquipe} />
          <Route path="/adminjoueurmodifie" component={AdminJoueurModifie} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
