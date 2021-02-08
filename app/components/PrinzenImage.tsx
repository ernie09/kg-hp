import React, { ReactNode } from 'react';
import { Card, Image, ImageProps } from 'semantic-ui-react';

type OwnProps = {
  title: string;
  description: ReactNode;
};

type PrinzenImageProps = OwnProps & ImageProps;

const PrinzenImage: React.FC<PrinzenImageProps> = ({
  title,
  description,
  ...passThroughProps
}) => {
  return <Card>
    <Image {...passThroughProps} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      {/* <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta> */}
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>;
};

export default PrinzenImage;
