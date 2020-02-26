import React, {Component} from 'react';
import axios from 'axios';


class Vehicles extends Component {
  state = {vehicles:[], loading: true};

  componentDidMount(){
    
    axios.get(this.props.vehicles)
    .then((response) =>{
  
      axios.all([
        axios.get(response.data.vehicles[0]),
        axios.get(response.data.vehicles[1]),
      ]).then(axios.spread((response1,response2) => {
        
        this.setState({
          vehicles: [ 
                      response1.data.name,
                      response2.data.name
                    ],
          loading: false
        })
      }))
    })
  }

  render() {
    const {vehicles,loading} = this.state;

    if(loading){
      return 'LOADING...';
    }

    return (
      <td>
        {vehicles[0]} <br/>
        {vehicles[1]}
      </td>
    )
  }
}

export default Vehicles;
