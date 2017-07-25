import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { Carousel, Panel } from 'react-bootstrap';
import Slider from 'react-rangeslider';

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

    this.state = {
      seniorActiveYear: 2017,
      seniorDirection: null,
      juniorActiveYear: 2017,
      juniorDirection: null
    };
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
      return <img style={{
        margin: 'auto'
      }} src={imageUrl}/>;
    } else {
      return <img style={{
        margin: 'auto'
      }} src="http://via.placeholder.com/500x500"/>;
    }
  }

  createCarouselItem(ppItem, year, junior) {
    let itm = <Carousel.Item>
      { this.createImage(ppItem.picture) }
      <Carousel.Caption>
        <Panel header={<h3>{!junior ? 'Prinzenpaar' : 'Kinderprinzenpaar'} {year}</h3>}>
          Prinz {ppItem.nameMan} ({ppItem.name}) {mapNumericalToRoman(ppItem.numMan)}. {ppItem.titleMan ? ppItem.titleMan : ''},<br/>
          Prinzessin {ppItem.woman} {mapNumericalToRoman(ppItem.numWoman)}. {ppItem.titleWoman ? ppItem.titleWoman : ''}
        </Panel>
      </Carousel.Caption>
    </Carousel.Item>;
    return itm;
  }

  handleSeniorChange = (value, e) => {
    this.setState({
      seniorActiveYear: e.direction ? value + 1949 : value,
      seniorDirection: e ? e.direction : this.state.direction
    });
  }

  handleJuniorChange = (value, e) => {
    this.setState({
      juniorActiveYear: e.direction ? value + 2013 : value,
      juniorDirection: e ? e.direction : this.state.direction
    });
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
        this.createCarouselItem(ppItem, ppYear, false)
      );
    }

    let juniorItems = [];
    for (let kppYear in this.props.junior) {
      let kppItem = this.props.junior[kppYear];
      juniorItems.push(
        this.createCarouselItem(kppItem, kppYear, true)
      );
    }

    return (
      <div>
        <Header titleText={'Prinzengallerie'}/>
        <section id="senior">
          <Carousel indicators={false} interval={null} activeIndex={this.state.seniorActiveYear - 1949} direction={this.state.seniorDirection} onSelect={this.handleSeniorChange}>
            {seniorItems}
          </Carousel>
          <Slider
            min={1949}
            max={2017}
            value={this.state.seniorActiveYear}
            onChange={this.handleSeniorChange}
          />
        </section>
        <section id="junior">
          <Carousel indicators={false} interval={null} activeIndex={this.state.juniorActiveYear - 2013} direction={this.state.juniorDirection} onSelect={this.handleJuniorChange}>
            {juniorItems}
          </Carousel>
          <Slider
            min={2013}
            max={2017}
            value={this.state.juniorActiveYear}
            onChange={this.handleJuniorChange}
          />
        </section>
      </div>
    );
  }
}

Prinzenpaare.propTypes = {
  dispatch: PropTypes.func
};

export default Prinzenpaare;
