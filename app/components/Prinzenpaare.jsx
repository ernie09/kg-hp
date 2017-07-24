import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Carousel, Card} from 'antd';
import YearSlider from './YearSlider.jsx';

import Header from './Header.jsx';
import {loadPPSenior, loadPPJunior} from '../actions/PrinzenPaarAction';

import mapNumericalToRoman from '../util/utils';

var axios = require('axios');

@connect((store) => {
  return {senior: store.ppChange.senior, junior: store.ppChange.junior};
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
    axios.get('/resources/prinzenpaare.json').then(function(response) {
      self.props.dispatch(loadPPSenior(response.data));
    });

    axios.get('/resources/kinderprinzenpaare.json').then(function(response) {
      self.props.dispatch(loadPPJunior(response.data));
    });
  }

  createImage(imageUrl) {
    if (imageUrl) {
      return <img style={{margin: 'auto'}} src={imageUrl}/>;
    } else {
      return <img style={{margin: 'auto'}} src="http://via.placeholder.com/500x500"/>;
    }
  }

  createCaption(ppItem, year, junior) {
    return <div><h2>
      <span>{!junior ? 'Prinzenpaar' : 'Kinderprinzenpaar'} {year}</span>
    </h2>
    <p className="caption">
      <span>Prinz {ppItem.nameMan}
        ({ppItem.name}) {mapNumericalToRoman(ppItem.numMan)}. {ppItem.titleMan
          ? ppItem.titleMan
          : ''},<br/>
        Prinzessin {ppItem.woman}
        {mapNumericalToRoman(ppItem.numWoman)}. {ppItem.titleWoman
          ? ppItem.titleWoman
          : ''}</span>
    </p></div>;
  }

  onChange(a, b, c) {
    console.log(a, b, c);
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

    let seniorCards = [];
    for (let ppYear in this.props.senior) {
      let ppItem = this.props.senior[ppYear];
      seniorCards.push(
        <Card style={{ width: 500 }} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">,
            {this.createImage(ppItem.picture)},
          </div>
          <div className="custom-card">,
            {this.createCaption(ppItem, ppYear, false)},
          </div>
        </Card>
      );
    }

    let juniorCards = [];
    for (let kppYear in this.props.junior) {
      let kppItem = this.props.junior[kppYear];
      juniorCards.push(
        <Card style={{ width: 500 }} bodyStyle={{ padding: 0 }}>
          <div className="custom-image">,
            {this.createImage(kppItem.picture)},
          </div>
          <div className="custom-card">,
            {this.createCaption(kppItem, kppYear, false)},
          </div>
        </Card>
      );
    }

    return (
      <div>
        <Header titleText={'Prinzengallerie'}/>
        <section id="senior">
          <Carousel afterChange={this.onChange}>
            {seniorCards}
          </Carousel>
          <YearSlider />
        </section>
        <section id="junior">
          <Carousel afterChange={this.onChange}>
            {juniorCards}
          </Carousel>
          <YearSlider />
        </section>
      </div>
    );
  }
}

Prinzenpaare.propTypes = {
  dispatch: PropTypes.func
};

export default Prinzenpaare;
