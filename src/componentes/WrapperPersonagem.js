import React, {Component} from 'react';
import Personagem from './Personagem';
import TableHeaderPersonagem from './TableHeaderPersonagem';
import PageHeader from './PageHeader';

class WrapperPersonagem extends Component {

  render() {

    return (
      
      <div>
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>

        <div id="main">
          <PageHeader />
          <div className="content" id="content"> 
            <div className="containerTable">            
              <table className="pure-table">
                <TableHeaderPersonagem />
                <tbody>
                  <Personagem />
                </tbody>
              </table> 
            </div>             
          </div>
        </div>           
      </div>     
    );
  }
}

export default WrapperPersonagem;
