import React from 'react';
import { Image } from 'semantic-ui-react';
import prinzengardeFoto from '../img/garden/PG_2019.JPG';
import PageHeader from './PageHeader';

const Prinzengarde: React.FC = () => {
  return <>
    <PageHeader
      title="Prinzengarde"
    />
    <Image src={prinzengardeFoto} />
    <p>Die Prinzengarde der KG &quot;Mir hale Pool&quot; Verscheid mit ihrer Trainerin Doro Schmitz</p>
  </>;
};

export default Prinzengarde;
