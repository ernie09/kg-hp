import React, {Component} from 'react';

import { Carousel, Panel } from 'react-bootstrap';
import Slider from 'react-rangeslider';

import prinzenpaare from '../resources/prinzenpaare';
import kinderprinzenpaare from '../resources/kinderprinzenpaare';

import mapNumericalToRoman from '../util/utils';

import Header from './Header';

interface Tollitaet {
  givenname: string;
  surname: string;
  title: string;
  romanNumber: 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | string;
}

interface Tollitaeten {
  isDreigestirn: boolean;
  prinz: Tollitaet;
  prinzessin: Tollitaet;
  bauer?: Tollitaet;
  imageSrc: string;
  year: number;
}

interface PrinzenpaareProps {}
interface PrinzenpaareState {
  senior: Tollitaeten[];
  junior: Tollitaeten[];
  seniorActiveYear: number;
  juniorActiveYear: number;
  seniorDirection: string;
  juniorDirection: string;
}

/**
 *
 */
class Prinzenpaare extends Component<PrinzenpaareProps, PrinzenpaareState> {

  /**
   *
   * @param {*} props
   */
  constructor(props: PrinzenpaareProps) {
    super(props);

    const senior = Object.keys(prinzenpaare).map((yearString: string) => {
      const obj: any = prinzenpaare[yearString];

      const prinz: Tollitaet = {
        givenname: obj.nameMan,
        surname: obj.name,
        romanNumber: mapNumericalToRoman(obj.numMan),
        title: obj.titleMan
      };
      const prinzessin: Tollitaet = {
        givenname: obj.woman,
        surname: obj.nameWoman || obj.name,
        romanNumber: mapNumericalToRoman(obj.numWoman),
        title: obj.titleWoman
      };
      const isDreigestirn: boolean = !!obj.isDreiGestirn;

      const bauer: Tollitaet = isDreigestirn ? {
        givenname: obj.bauerGivenName,
        surname: obj.bauerSurName,
        romanNumber: mapNumericalToRoman(obj.numBauer),
        title: obj.titleBauer
      } : null;
      const imageSrc: string = obj.picture;
      const t: Tollitaeten = {
        year: parseInt(yearString),
        isDreigestirn,
        imageSrc,
        prinz,
        prinzessin,
        bauer
      };
      return t;
    });

    const junior = Object.keys(kinderprinzenpaare).map((yearString: string) => {
      const obj: any = kinderprinzenpaare[yearString];

      const prinz: Tollitaet = {
        givenname: obj.nameMan,
        surname: obj.name,
        romanNumber: mapNumericalToRoman(obj.numMan),
        title: obj.titleMan
      };
      const prinzessin: Tollitaet = {
        givenname: obj.woman,
        surname: obj.nameWoman || obj.name,
        romanNumber: mapNumericalToRoman(obj.numWoman),
        title: obj.titleWoman
      };
      const isDreigestirn: boolean = !!obj.isDreiGestirn;

      const bauer: Tollitaet = isDreigestirn ? {
        givenname: obj.bauerGivenName,
        surname: obj.bauerSurName,
        romanNumber: mapNumericalToRoman(obj.numBauer),
        title: obj.titleBauer
      } : null;
      const imageSrc: string = obj.picture;
      const t: Tollitaeten = {
        year: parseInt(yearString),
        isDreigestirn,
        imageSrc,
        prinz,
        prinzessin,
        bauer
      };
      return t;
    });

    this.state = {
      senior,
      junior,
      seniorActiveYear: 2020,
      seniorDirection: null,
      juniorActiveYear: 2020,
      juniorDirection: null
    };

  }

  createImage = (imageUrl: string) => {
    const imgSrc = imageUrl || 'https://via.placeholder.com/500x500';
    return <img
      className="prinzen-img"
      src={imgSrc}
    />;
  };

  createText = (t: Tollitaeten) => {
    const {
      prinz,
      prinzessin,
      bauer
    } = t;

    const bauerElem = bauer ? <div>
      Bauer {bauer.givenname} {'(' + bauer.surname + ')'
      } {bauer.romanNumber}.{bauer.title}</div>
      : '';

    let ts = <p>Prinz {prinz.givenname} {'(' + prinz.surname + ')'} {prinz.romanNumber}. {prinz.title},<br />
      Prinzessin {prinzessin.givenname} {'(' + prinzessin.surname + ')'} {prinzessin.romanNumber}. {prinzessin.title}
      {
        bauerElem
      }
    </p>;

    return ts;
  };

  createCarouselItem = (t: Tollitaeten, junior: boolean) => {
    const itm = <Carousel.Item key={!junior ? `Prinzenpaar ${t.year}` : `Kinderprinzenpaar ${t.year}`}>
      {this.createImage(t.imageSrc) }
      <Carousel.Caption>
        <Panel bsStyle="danger">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{!junior ? `Prinzenpaar ${t.year}` : `Kinderprinzenpaar ${t.year}`}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {
              this.createText(t)
            }
          </Panel.Body>
        </Panel>
      </Carousel.Caption>
    </Carousel.Item>;
    return itm;
  };

  handleSeniorChange = (value?: any, e?: any) => {
    this.setState({
      seniorActiveYear: e.direction ? value + 1949 : value,
      seniorDirection: e ? e.direction : this.state.seniorDirection
    });
  };

  handleJuniorChange = (value?: any, e?: any) => {
    this.setState({
      juniorActiveYear: e.direction ? value + 1978 : value,
      juniorDirection: e ? e.direction : this.state.juniorDirection
    });
  };

  /**
   *
   */
  render() {
    const {
      senior,
      junior,
      seniorActiveYear,
      seniorDirection,
      juniorActiveYear,
      juniorDirection
    } = this.state;

    if (!senior && !junior) {
      return <div />;
    }

    if (!senior || (senior && senior.length === 0)) {
      return <div />;
    }

    if (!junior || (junior && junior.length === 0)) {
      return <div />;
    }

    let seniorItems = [];
    for (let ppYear in senior) {
      let ppItem = senior[ppYear];
      seniorItems.push(
        this.createCarouselItem(ppItem, false)
      );
    }

    let juniorItems = [];
    for (let kppYear in junior) {
      let kppItem = junior[kppYear];
      juniorItems.push(
        this.createCarouselItem(kppItem, true)
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
          <Carousel
            indicators={false}
            interval={null}
            activeIndex={seniorActiveYear - 1949}
            direction={seniorDirection}
            onSelect={this.handleSeniorChange}
          >
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
          <Carousel
            indicators={false}
            interval={null}
            activeIndex={juniorActiveYear - 1978}
            direction={juniorDirection}
            onSelect={this.handleJuniorChange}
          >
            {juniorItems}
          </Carousel>
          <Slider
            min={1978}
            max={2017}
            value={juniorActiveYear}
            onChange={this.handleJuniorChange}
          />
        </section>
      </div>
    );
  }
}

export default Prinzenpaare;
