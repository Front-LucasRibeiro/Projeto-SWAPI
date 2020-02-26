import React, {Component} from 'react';
import axios from 'axios';

class Species extends Component {
  state = {species:null, loading: true};

  componentDidMount(){

    axios.get(this.props.species)
    .then((response) =>{

      this.setState({
        species: response.data.name,
        loading: false
      })
    })
  }

  render() {
    const {species,loading} = this.state;

    if(loading){
      return 'LOADING...';
    }

    return (
      <td>{species}</td>
    )
  }
}

export default Species;