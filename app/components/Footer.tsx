/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {

  return <Container
    className="footer"
  >
    <Grid divided inverted stackable columns={3}>
      <Grid.Column>
        <Header inverted as='h3' content='Facebook' />
        <a
          href="https://www.facebook.com/MirHalePool/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="circular big facebook icon"></i>
        </a>
      </Grid.Column>
      <Grid.Column>
        <Header inverted as='h3' content='Email' />
        <a href="mailto:info@mir-hale-pool.de?Subject=Frage%20an%20die%20KG%20%22Mir%20hale%20Pool%22%20Verscheid">
          <i className="circular big envelope outline icon"></i>
        </a>
      </Grid.Column>
      <Grid.Column>
        <Header inverted as='h3' content='Impressum' />
        <Link
          to="impressum"
          className="btn-social btn-outline">
          <i className="circular big balance scale icon"></i>
        </Link>
      </Grid.Column>
    </Grid>
    <p>
      Copyright &copy; KG &quot;Mir hale Pool&quot; Verscheid ( 2021 )
    </p>
  </Container>;
};

export default Footer;
