import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (<header>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="intro-text">
              <h1 className="name">{this.props.titleText}</h1>
              {
                this.props.skillsText ? <span className="skills">{this.props.skillsText}</span> : undefined
              }
              {
                this.props.hrClassName ? <hr className={this.props.hrClassName}/> : undefined
              }
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    </header>);
  }
}

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  skillsText: PropTypes.string,
  hrClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Header;
