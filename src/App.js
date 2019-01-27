import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  // component cycle
  //render : componentWillMount()  ->  render()  ->  componentWithMount()
  //update : componentWillRecieveProps()  ->  shouldCompoenetUpdate()  ->  componentWillUpdate()  ->  render()  ->componentDidUpdate
  state = {
    
  }
  componentDidMount(){ 
    setTimeout(()=>{
      this.setState({
        movies : [
          {
            title : "Matrix",
            poster : "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
          },
          {
            title : "Full metal",
            poster : "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
          },
          {
            title : "Old boy",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
          },
          {
            title : "Star wars",
            poster : "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
          },
          {
            title:"Transfomer",
            poster: "https://upload.wikimedia.org/wikipedia/ko/thumb/a/a8/%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%B5%9C%ED%9B%84%EC%9D%98_%EA%B8%B0%EC%82%AC.jpg/250px-%ED%8A%B8%EB%9E%9C%EC%8A%A4%ED%8F%AC%EB%A8%B8_%EC%B5%9C%ED%9B%84%EC%9D%98_%EA%B8%B0%EC%82%AC.jpg"
          }
        ]
      })
    }, 3000)
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loding"}
      </div>
    )
  }
}

export default App;
