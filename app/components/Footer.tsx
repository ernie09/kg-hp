/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Header } from 'semantic-ui-react';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {

  return <Container>
    <Grid divided inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Header inverted as='h3' content='Facebook' />
          <ul className="list-inline">
            <li>
              <a
                href="https://www.facebook.com/MirHalePool/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social btn-outline"><i className="fa fa-fw fa-facebook"></i></a>
            </li>
          </ul>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as='h3' content='Email' />
          <ul className="list-inline">
            <li>
              <a href="mailto:info@mir-hale-pool.de?Subject=Frage%20an%20die%20KG%20%22Mir%20hale%20Pool%22%20Verscheid" className="btn-social btn-outline"><i className="fa fa-fw fa-envelope"></i></a>
            </li>
          </ul>
        </Grid.Column>
        <Grid.Column width={4}>
          <Header inverted as='h3' content='Impressum' />
          <ul className="list-inline">
            <li>
              <Link
                to="impressum"
                className="btn-social btn-outline">
                <i className="fa fa-fw fa-balance-scale"></i>
              </Link>
            </li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <p>
      Copyright &copy; KG &quot;Mir hale Pool&quot; Verscheid ( 2021 )
    </p>
  </Container>;
};

export default Footer;
