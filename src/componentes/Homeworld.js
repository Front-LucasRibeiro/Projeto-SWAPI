import React, {Component} from 'react';
import axios from 'axios';

class Homeworld extends Component {
  state = {homeworld: null, loading: true};

  componentDidMount(){

    axios.get(this.props.homeworld)
    .then((response) =>{

      this.setState({
        homeworld: response.data.name,
        loading: false
      })
    })
  }

  render() {
    const {homeworld,loading} = this.state;

    if(loading){
      return 'LOADING...';
    }

    return (
      <td>
        {homeworld}
      </td>
    )
  }
}

export default Homeworld;