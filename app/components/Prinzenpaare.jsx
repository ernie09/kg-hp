import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { Carousel, Panel } from 'react-bootstrap';
import Slider from 'react-rangeslider';

import Header from './Header.jsx';
import {loadPPSenior, loadPPJunior} from '../actions/PrinzenPaarAction';
import mapNumericalToRoman from '../util/utils';

const mapStateToProps = state => {
  return {
    senior: state.ppChange.senior,
    junior: state.ppChange.junior
  };
};

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
    const { dispatch } = this.props;
    fetch('/resources/prinzenpaare.json')
      .then(response => response.json())
      .then(response => dispatch(loadPPSenior(response)));

    fetch('/resources/kinderprinzenpaare.json')
      .then(response => response.json())
      .then(response => dispatch(loadPPJunior(response)));
  }

  createImage = imageUrl => {
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

  generatePrinzText = (ppItem, junior) => {
    return ppItem.noPP ?
      <p>Leider gab es kein {!junior ? 'Prinzenpaar' : 'Kinderprinzenpaar'} in diesem Jahr</p>:
      <p>Prinz {ppItem.nameMan} {ppItem.name ? '(' + ppItem.name + ')' : ''} {mapNumericalToRoman(ppItem.numMan)}. {ppItem.titleMan ? ppItem.titleMan : ''},<br/>
         Prinzessin {ppItem.woman} {mapNumericalToRoman(ppItem.numWoman)}. {ppItem.titleWoman ? ppItem.titleWoman : ''}</p>;
  }

  createCarouselItem = (ppItem, year, junior) => {
    let itm = <Carousel.Item key={!junior ? 'Prinzenpaar'+year : 'Kinderprinzenpaar'+year}>
      { this.createImage(ppItem.picture) }
      <Carousel.Caption>
        <Panel bsStyle="danger">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{!junior ? 'Prinzenpaar' : 'Kinderprinzenpaar'}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {
              this.generatePrinzText(ppItem, junior)
            }
          </Panel.Body>
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
      juniorActiveYear: e.direction ? value + 1978 : value,
      juniorDirection: e ? e.direction : this.state.direction
    });
  }

  render() {
    const {
      senior,
      junior
    } = this.props;

    if (!senior && !junior) {
      return <div/>;
    }

    if (!senior || (senior && senior.length === 0)) {
      return <div/>;
    }

    if (!junior || (junior && junior.length === 0)) {
      return <div/>;
    }

    let seniorItems = [];
    for (let ppYear in senior) {
      let ppItem = senior[ppYear];
      seniorItems.push(
        this.createCarouselItem(ppItem, ppYear, false)
      );
    }

    let juniorItems = [];
    for (let kppYear in junior) {
      let kppItem = junior[kppYear];
      juniorItems.push(
        this.createCarouselItem(kppItem, kppYear, true)
      );
    }

    return (
      <div>
        <Header titleText={'Prinzengallerie'}>
          <span className="fkg fkg-narrenkappe" style={{
            fontSize: '3em'
          }}></span>
        </Header>
        <section id="senior">
          <h1><b>Prinzenpaare der KG</b></h1>
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
        <hr style={{
          width: '90%',
          border: '1px solid #aaa',
          borderRadius: 9
        }} />
        <section id="junior">
          <h1><b>Kinderprinzenpaare der KG</b></h1>
          <Carousel indicators={false} interval={null} activeIndex={this.state.juniorActiveYear - 1978} direction={this.state.juniorDirection} onSelect={this.handleJuniorChange}>
            {juniorItems}
          </Carousel>
          <Slider
            min={1978}
            max={2017}
            value={this.state.juniorActiveYear}
            onChange={this.handleJuniorChange}
          />
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Prinzenpaare);
