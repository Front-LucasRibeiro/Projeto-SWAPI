import React, {Component} from 'react';
import axios from 'axios';


class Starships extends Component {
  state = {starships:[], loading: true};

  componentDidMount(){
    
    axios.get(this.props.starships)
    .then((response) =>{
      axios.all([
        axios.get(response.data.starships[0]),
        axios.get(response.data.starships[1]),
      ]).then(axios.spread((response1,response2) => {
        
        this.setState({
          starships: [ 
                      response1.data.name,
                      response2.data.name
                    ],
          loading: false
        })
      }))
    })
  }

  render() {
    const {starships,loading} = this.state;

    if(loading){
      return 'LOADING...';
    }

    return (
      <td>
        {starships[0]}<br/>
        {starships[1]}
      </td>
    )
  }
}

export default Starships;
