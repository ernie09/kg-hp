import React from 'react';
import LandingPageNews from './LandingPageNews';

import pp2020 from '../img/prinzenpaare/Prinzenpaar2020.png';
import kinderprinzessin2020 from '../img/prinzenpaare/Kinderprinzenpaar2020.png';

import PageHeader from './PageHeader';
import { Container } from 'semantic-ui-react';
import AliceCarousel from 'react-alice-carousel';
import PrinzenImage from './PrinzenImage';

const Main: React.FC = () => {
  const printNews = false;

  const ppDescription = <Container text>
    <strong>Prinz Thomas II.</strong>, von den alten Herren bekannt, fliegt er mit Schrauben durchs ganze Land,<br />
    <strong>Prinzessin Bea I.</strong>, Jungfunkenmutter und im M&ouml;hnenverein,
      war es ihr Traum einmal Prinzessin zu sein
  </Container>;

  const kppDescription = <Container text>
    <strong>Prinzessin Julia II.</strong>, liebt Pferde und fetzigen Tanz, mag es kunterbunt mit viel Glanz.
  </Container>;

  const handleDragStart = (e: Event) => e.preventDefault();

  const items = [
    <PrinzenImage
      src={pp2020}
      handleDragStart={handleDragStart}
      title="Unser Prinzenpaar"
      description={ppDescription}
    />,
    <PrinzenImage
      src={kinderprinzessin2020}
      title="Unsere Kinderprinzessin"
      handleDragStart={handleDragStart}
      description={kppDescription}
    />
  ];

  return (
    <>
      <PageHeader
        title={'KG "Mir hale Pool" Verscheid'}
        subtitle={'3x Hüh\'Scheldche Alaaf!'}
        content={
          'Die Karnevalsgesellschaft "Mir hale Pool" Verscheid 1929 ist ein gemeinnütziger Verein ' +
        'zur Pflege des Brauchtums Karneval auf Hüh und Scheldche, Breitscheid und dem Elsbachtal.'
        }
      />
      {
        printNews && <LandingPageNews />
      }
      <AliceCarousel
        mouseTracking
        items={items}
        autoHeight
      />
    </>
  );
};

export default Main;
