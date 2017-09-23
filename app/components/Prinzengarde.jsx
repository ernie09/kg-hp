import React, {Component} from 'react';
import Header from './Header.jsx';
import prinzengardeFoto from '../img/garden/Prinzengarde.jpg';

class Prinzengarde extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header titleText={'Prinzengarde'}/>
        <section id="group">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <img src={prinzengardeFoto} className="img-responsive" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Prinzengarde.propTypes = {

};

export default Prinzengarde;
