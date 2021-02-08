import React from 'react';
import { Image } from 'semantic-ui-react';
import kg from '../img/kg/rotejacken.jpg';
import PageHeader from './PageHeader';

type KgProps = {};

const Kg: React.FC<KgProps> = () => {
  return <>
    <PageHeader
      title="KG"
      subtitle="Die roten Jacken"
    />
    <Image src={kg} />
  </>;
};

export default Kg;
