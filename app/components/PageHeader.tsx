import React, { useContext } from 'react';
import { Container, Divider, Header } from 'semantic-ui-react';
import MobileContext from '../MobileContext';

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  content?: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({
  content,
  subtitle,
  title
}) => {

  const { isMobile } = useContext(MobileContext);

  return <Container text>
    <Header
      as='h1'
      content={title}
      style={{
        fontSize: isMobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: isMobile ? '1.5em' : '3em',
      }}
    />
    {
      subtitle && <Header
        as='h2'
        content={subtitle}
        style={{
          fontSize: isMobile ? '1.5em' : '1.7em',
          fontWeight: 'normal',
          marginTop: isMobile ? '0.5em' : '1.5em',
        }}
      />
    }
    {
      content && <>
        <Divider horizontal><span className="fkg fkg-narrenkappe" style={{
          fontSize: '3em'
        }}></span></Divider>
        {content}
      </>
    }
  </Container>;
};

export default PageHeader;
