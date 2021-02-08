import React, { useState } from 'react';

// import prinzenpaare from '../resources/prinzenpaare';
// import kinderprinzenpaare from '../resources/kinderprinzenpaare';

import PageHeader from './PageHeader';

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

type PrinzenpaareProps = {};

const Prinzenpaare: React.FC<PrinzenpaareProps> = () => {

  // /**
  //  *
  //  * @param {*} props
  //  */
  // constructor(props: PrinzenpaareProps) {
  //   super(props);

  //   const senior = Object.keys(prinzenpaare).map((yearString: string) => {
  //     const obj: any = prinzenpaare[yearString];

  //     const prinz: Tollitaet = {
  //       givenname: obj.nameMan,
  //       surname: obj.name,
  //       romanNumber: mapNumericalToRoman(obj.numMan),
  //       title: obj.titleMan
  //     };
  //     const prinzessin: Tollitaet = {
  //       givenname: obj.woman,
  //       surname: obj.nameWoman || obj.name,
  //       romanNumber: mapNumericalToRoman(obj.numWoman),
  //       title: obj.titleWoman
  //     };
  //     const isDreigestirn: boolean = !!obj.isDreiGestirn;

  //     const bauer: Tollitaet = isDreigestirn ? {
  //       givenname: obj.bauerGivenName,
  //       surname: obj.bauerSurName,
  //       romanNumber: mapNumericalToRoman(obj.numBauer),
  //       title: obj.titleBauer
  //     } : null;
  //     const imageSrc: string = obj.picture;
  //     const t: Tollitaeten = {
  //       year: parseInt(yearString),
  //       isDreigestirn,
  //       imageSrc,
  //       prinz,
  //       prinzessin,
  //       bauer
  //     };
  //     return t;
  //   });


  const [senior, setSenior] = useState<Tollitaeten[]>();
  const [junior, setJunior] = useState<Tollitaeten[]>();
  const [seniorActiveYear, setSeniorActiveYear] = useState<number>();
  const [juniorActiveYear, setJuniorActiveYear] = useState<number>();
  const [seniorDirection, setSeniorDirection] = useState<string>();
  const [juniorDirection, setJuniorDirection] = useState<string>();

  // const junior = Object.keys(kinderprinzenpaare).map((yearString: string) => {
  //   const obj: any = kinderprinzenpaare[yearString];

  //   const prinz: Tollitaet = {
  //     givenname: obj.nameMan,
  //     surname: obj.name,
  //     romanNumber: mapNumericalToRoman(obj.numMan),
  //     title: obj.titleMan
  //   };
  //   const prinzessin: Tollitaet = {
  //     givenname: obj.woman,
  //     surname: obj.nameWoman || obj.name,
  //     romanNumber: mapNumericalToRoman(obj.numWoman),
  //     title: obj.titleWoman
  //   };
  //   const isDreigestirn: boolean = !!obj.isDreiGestirn;

  //   const bauer: Tollitaet = isDreigestirn ? {
  //     givenname: obj.bauerGivenName,
  //     surname: obj.bauerSurName,
  //     romanNumber: mapNumericalToRoman(obj.numBauer),
  //     title: obj.titleBauer
  //   } : null;
  //   const imageSrc: string = obj.picture;
  //   const t: Tollitaeten = {
  //     year: parseInt(yearString),
  //     isDreigestirn,
  //     imageSrc,
  //     prinz,
  //     prinzessin,
  //     bauer
  //   };
  //   return t;
  // });

  const createImage = (imageUrl: string) => {
    const imgSrc = imageUrl || 'https://via.placeholder.com/500x500';
    return <img
      className="prinzen-img"
      src={imgSrc}
    />;
  };

  const createText = (t: Tollitaeten) => {
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

  const createCarouselItem = (t: Tollitaeten, junior: boolean) => {
    // const itm = <Carousel.Item key={!junior ? `Prinzenpaar ${t.year}` : `Kinderprinzenpaar ${t.year}`}>
    //   {this.createImage(t.imageSrc) }
    //   <Carousel.Caption>
    //     <Panel bsStyle="danger">
    //       <Panel.Heading>
    //         <Panel.Title componentClass="h3">{!junior ? `Prinzenpaar ${t.year}` :
    // `Kinderprinzenpaar ${t.year}`}</Panel.Title>
    //       </Panel.Heading>
    //       <Panel.Body>
    //         {
    //           this.createText(t)
    //         }
    //       </Panel.Body>
    //     </Panel>
    //   </Carousel.Caption>
    // </Carousel.Item>;
    return <></>;
  };

  const handleSeniorChange = (value?: any, e?: any) => {
    setSeniorActiveYear(e.direction ? value + 1949 : value);
    setSeniorDirection(e ? e.direction : seniorDirection);
  };

  const handleJuniorChange = (value?: any, e?: any) => {
    setJuniorActiveYear(e.direction ? value + 1978 : value);
    setJuniorDirection(e ? e.direction : juniorDirection);
  };

  if (!senior && !junior) {
    return <></>;
  }

  if (!senior || (senior && senior.length === 0)) {
    return <></>;
  }

  if (!junior || (junior && junior.length === 0)) {
    return <></>;
  }

  let seniorItems = [];
  // for (let ppYear in senior) {
  //   let ppItem = senior[ppYear];
  //   seniorItems.push(
  //     createCarouselItem(ppItem, false)
  //   );
  // }

  let juniorItems = [];
  // for (let kppYear in junior) {
  // let kppItem = junior[kppYear];
  // juniorItems.push(
  // createCarouselItem(kppItem, true)
  // );
  // }

  return (
    <>
      <PageHeader
        title="Prinzengallerie"
      />
      <section id="senior">
        <h1><b>Prinzenpaare der KG</b></h1>
        {/* <Carousel
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
          /> */}
      </section>
      <hr style={{
        width: '90%',
        border: '1px solid #aaa',
        borderRadius: 9
      }} />
      <section id="junior">
        <h1><b>Kinderprinzenpaare der KG</b></h1>
        {/* <Carousel
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
          /> */}
      </section>
    </>
  );
};

export default Prinzenpaare;
