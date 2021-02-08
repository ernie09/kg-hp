import React from 'react';
import { Image } from 'semantic-ui-react';
import jfFoto from '../img/garden/jf.jpeg';
import PageHeader from './PageHeader';

type JugendgardeProps = {};

const Jugendgarde: React.FC<JugendgardeProps> = () => {
  return <>
    <PageHeader
      title="Jugendgarde"
    />
    <Image src={jfFoto} />
    <p>Die Jungfunken bei einem Gastauftritt in Kurtscheid.</p>
  </>;
};

export default Jugendgarde;
