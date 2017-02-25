import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import FilmDetail from './FilmDetail';

class FilmList extends Component {
    state = { movies: []}

componentWillMount(){
    axios.get('http://www.myapifilms.com/imdb/top?start=1&end=10&token=0023c194-07b2-4092-9c66-953b17ce4ca2&format=json&data=1')
        .then(response => this.setState({movies: response.data.data.movies}));
}

renderFilms(){
 return this.state.movies.map(film => <FilmDetail key={film.title} filmdata={film}/>);
}

  render() {
      console.log(this.state);
    return (
      <ScrollView>
        {this.renderFilms()}    
      </ScrollView>
    );
  }
}
export default FilmList;
