import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header.jsx';

import {loadPPSenior, loadPPJunior} from '../actions/PrinzenPaarAction';
import mapNumericalToRoman from '../util/utils';

var axios = require('axios');

@connect((store) => {
  return {
    senior: store.ppChange.senior,
    junior: store.ppChange.junior
  };
})
class Prinzenpaare extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    senior: PropTypes.object,
    junior: PropTypes.object
  };

  constructor() {
    super();
  }


  componentWillMount() {
    var self = this;
    axios.get('/resources/prinzenpaare.json').then(function (response) {
      self.props.dispatch(loadPPSenior(response.data));
    })
      .catch(function (error) {
        //show modal
      });

    axios.get('/resources/kinderprinzenpaare.json').then(function (response) {
      self.props.dispatch(loadPPJunior(response.data));
    })
      .catch(function (error) {
        //show modal
      });
  }

  createImage (imageUrl) {
    if (imageUrl) {
      return <img style={{margin: 'auto'}} src={imageUrl}/>;
    } else {
      return <img style={{margin: 'auto'}} src="http://via.placeholder.com/500x500"/>;
    }
  }

  createCaption (ppItem, year, junior) {
    return <div className="container-fluid">
      <div className="carousel-caption">
        <h2>
          <span>{!junior ? 'Prinzenpaar' : 'Kinderprinzenpaar'} {year}</span>
        </h2>
        <p className="caption">
          <span>Prinz {ppItem.nameMan} ({ppItem.name}) {mapNumericalToRoman(ppItem.numMan)}. {ppItem.titleMan ? ppItem.titleMan : ''},<br/>
          Prinzessin {ppItem.woman} {mapNumericalToRoman(ppItem.numWoman)}. {ppItem.titleWoman ? ppItem.titleWoman : ''}</span>
        </p>
      </div>
    </div>;
  }

  render() {
    if (!this.props.senior && !this.props.junior) {
      return <div/>;
    }

    if (!this.props.senior || (this.props.senior && this.props.senior.length === 0)) {
      return <div/>;
    }

    if (!this.props.junior || (this.props.junior && this.props.junior.length === 0)) {
      return <div/>;
    }

    let seniorItems = [];
    for (let ppYear in this.props.senior) {
      let ppItem = this.props.senior[ppYear];
      seniorItems.push(
        <div className={ppItem.active ? 'item active' : 'item'} id={'ppYear'+ppYear}>
          {this.createImage(ppItem.picture)}
          {this.createCaption(ppItem,ppYear)}
        </div>
      );
    }

    let juniorItems = [];
    for (let kppYear in this.props.junior) {
      let kppItem = this.props.junior[kppYear];
      juniorItems.push(
        <div className={kppItem.active ? 'item active' : 'item'} id={'kppYear'+kppYear}>
          {this.createImage(kppItem.picture)}
          {this.createCaption(kppItem, kppYear, true)}
        </div>
      );
    }

    return (
      <div>
        <Header titleText={'Prinzengallerie'}/>
        <section id="senior">
          <div className="container">
            <div className="row">
              <div className="col-lg-12"></div>
              <h2 className="text-center">Prinzenpaare</h2>
              <div id="prinzenCarousel" className="carousel slide">
                <div className="carousel-inner">
                  {seniorItems}
                </div>
                <a className="left carousel-control" href="#prinzenCarousel" data-slide="prev">
                  <span className="fa fa-chevron-left fa-2x"></span>
                </a>
                <a className="right carousel-control" href="#prinzenCarousel" data-slide="next">
                  <span className="fa fa-chevron-right fa-2x"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="junior">
          <div className="container">
            <div className="row">
              <div className="col-lg-12"></div>
              <h2 className="text-center">Kinderprinzenpaare</h2>
              <div id="kinderPrinzenCarousel" className="carousel slide">
                <div className="carousel-inner">
                  {juniorItems}
                </div>
                <a className="left carousel-control" href="#kinderPrinzenCarousel" data-slide="prev">
                  <span className="fa fa-chevron-left fa-2x"></span>
                </a>
                <a className="right carousel-control" href="#kinderPrinzenCarousel" data-slide="next">
                  <span className="fa fa-chevron-right fa-2x"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Prinzenpaare.propTypes = {
  dispatch: PropTypes.func
};

export default Prinzenpaare;
