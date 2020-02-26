import React, {Component} from 'react';
import axios from 'axios';

class Films extends Component {
  state = { filmeName: [], loading: true};

  componentDidMount(){
    
    axios.get(this.props.films) 
    .then((response) =>{
  
      axios.all([
        axios.get(response.data.films[0]),
        axios.get(response.data.films[1]),
        axios.get(response.data.films[2]),
        axios.get(response.data.films[3]),
        axios.get(response.data.films[4]),
      ]).then(axios.spread((response1, response2, response3, response4, response5) => {
        
        this.setState({
          filmeName: [
                        response1.data.title,
                        response2.data.title,
                        response3.data.title,
                        response4.data.title,
                        response5.data.title
                      ],
          loading: false
        })
      }))
    })
  }

  render() {
    const { filmeName, loading} = this.state;

    if(loading){
      return 'LOADING...';
    }

    return (
      <td className="tdFilmes">
        {filmeName[0]} <br/>
        {filmeName[1]} <br/>
        {filmeName[2]} <br/>
        {filmeName[3]} <br/>
        {filmeName[4]} <br/>
      </td>
    )
  }
}

export default Films;