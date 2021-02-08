import React, { useState } from 'react';

import {
  Button,
  Container,
  Dropdown,
  Grid,
  Icon,
  Image,
  Menu
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import kgImage from './img/kg.png';

import Main from './components/Main';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import News from './components/News';
import Historie from './components/Historie';
import Termine from './components/Termine';
import Kg from './components/Kg';
import Prinzengarde from './components/Prinzengarde';
import Jugendgarde from './components/Jugendgarde';
import KleineFunken from './components/KleineFunken';
import Prinzenpaare from './components/Prinzenpaare';
import Vorstand from './components/Vorstand';
import Sponsoren from './components/Sponsoren';
import Datenschutzerklaerung from './components/Datenschutzerklaerung';

import {Route, Switch, Link} from 'react-router-dom';

import 'semantic-ui-css/semantic.min.css';

import './less/Navbar.less';
import MobileContext from './MobileContext';

type DropdownMenuStyle = {
  display: string;
};

type AppProps = {};

/**
 *
 */
const App: React.FC<AppProps> = () => {

  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);
  const [dropdownMenuStyle, setDropdownMenuStyle] = useState<DropdownMenuStyle>({
    display: 'none'
  });
  const isMobile = (window.innerWidth <= 760);

  const acceptCookies = () => setCookiesAccepted(true);

  const handleToggleDropdownMenu = () => {
    if (dropdownMenuStyle.display === 'none') {
      setDropdownMenuStyle({ display: 'flex' });
    } else {
      setDropdownMenuStyle({ display: 'none' });
    }
  };

  /**
   * The render function
   */
  return <MobileContext.Provider
    value={{
      isMobile
    }}
  >
    <Container>
      <Grid padded className="tablet computer only">
        <Menu borderless fluid size="huge">
          <Container>
            <Menu.Item>
              <Link to="/"><Image src={kgImage} size="tiny" wrapped /></Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Link to="news">Neuigkeiten</Link>
              </Menu.Item>
              <Menu.Item >
                <Link to="termine">Termine</Link>
              </Menu.Item>
              <Dropdown item text="Der Verein">
                <Dropdown.Menu>
                  <Dropdown.Header>Über uns</Dropdown.Header>
                  <Dropdown.Item>
                    <Link to="kg">Die roten Jacken</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="vorstand">Vorstand</Link>
                  </Dropdown.Item>
                  <Dropdown.Header>Tanzgarden</Dropdown.Header>
                  <Dropdown.Item>
                    <Link to="prinzengarde">Prinzengarde</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="jugendgarde">Jungfunken</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="kleinefunken">Kleine Funken</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Prinzenpaare</Dropdown.Header>
                  <Dropdown.Item>
                    <Link to="prinzenpaare">Aktuelle Tollitäten</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="prinzenpaare">Ehemalige Tollitäten</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>
                <Link to="history">Historie</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="sponsoren">Sponsoren</Link>
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Grid>
      <Grid padded className="mobile only">
        <Menu borderless fluid size="huge">
          <Menu.Item header>
              KG "Mir hale Pool" Verscheid
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                icon
                basic
                toggle
                onClick={handleToggleDropdownMenu}
              >
                <Icon name="content" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu
            vertical
            borderless
            fluid
            style={dropdownMenuStyle}
            // onItemClick={() => {
            //   setDropdownMenuStyle({
            //     display: 'none'
            //   });
            // }}
          >
            <Menu.Item>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="news">Neuigkeiten</Link>
            </Menu.Item>
            {/* <Menu.Item >Contact</Menu.Item>
          <Dropdown text="Dropdown" className="item">
            <Dropdown.Menu>
              <Dropdown.Item >Action</Dropdown.Item>
              <Dropdown.Item >Another action</Dropdown.Item>
              <Dropdown.Item >Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Navbar header</Dropdown.Header>
              <Dropdown.Item >Seperated link</Dropdown.Item>
              <Dropdown.Item >One more seperated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item >Default</Menu.Item>
          <Menu.Item active >
            Static top
          </Menu.Item>
          <Menu.Item >Fixed top</Menu.Item> */}
          </Menu>
        </Menu>
      </Grid>
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/news" component={News} />
          <Route exact path="/termine" component={Termine} />
          <Route exact path="/kg" component={Kg} />
          <Route exact path="/prinzengarde" component={Prinzengarde} />
          <Route exact path="/jugendgarde" component={Jugendgarde} />
          <Route exact path="/kleinefunken" component={KleineFunken} />
          <Route exact path="/prinzenpaare" component={Prinzenpaare} />
          <Route exact path="/vorstand" component={Vorstand} />
          <Route exact path="/history" component={Historie} />
          <Route exact path="/sponsoren" component={Sponsoren} />
          <Route exact path="/impressum" component={Impressum} />
          {/* <Route exact path="/contact" component={Kontakt}/> */}
          <Route exact path="/datenschutz" component={Datenschutzerklaerung} />
        </Switch>
        <div id="cookie-law-info-bar" style={{
          display: !cookiesAccepted ? 'block' : 'none'
        }}>
          <span>Diese Website benutzt Cookies </span>
          <Link to="datenschutz">(Weitere Informationen)</Link>
          <span>. Wenn Sie die Webseite weiter nutzen, gehen wir von ihrem Einverständnis aus.</span>
          <Button onClick={acceptCookies} className="btn btn-danger btn-xs" >OK</Button>
        </div>
      </Container>
      <Footer />
    </Container>
  </MobileContext.Provider>;

};

export default App;
