import React, {Component} from 'react';
import axios from 'axios';
import Films from './Films';
import Species from './Species';
import Vehicles from './Vehicles';
import Starships from './Starships';
import Homeworld from './Homeworld';

class Personagem extends Component {
  state = {people:null, loading: true};

  componentDidMount(){
    axios.get("https://swapi.co/api/people/1")
    .then((response) =>{
      this.setState({
        people: response.data,
        loading: false
      })
    console.log(response.data)
    })
  }

  render() {
    const {people,loading} = this.state;

    if(loading){
      return 'LOADING...';
    }

    return (
      <tr>
        <td>{people.name}</td>
        <td>{people.height}</td>
        <td>{people.mass}</td>
        <td>{people.hair_color}</td>
        <td>{people.skin_color}</td>
        <td>{people.eye_color}</td>
        <td>{people.birth_year}</td>
        <td>{people.gender}</td>
        <Homeworld homeworld={people.homeworld} />
        <Films films={people.url} />
        <Species species={people.species} />
        <Vehicles vehicles={people.url} />
        <Starships starships={people.url} />
        <td>{people.created}</td>
        <td>{people.edited}</td>
        <td>{people.url}</td>
      </tr>
    )
  }
}

export default Personagem;