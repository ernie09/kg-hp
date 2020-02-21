import React, { PureComponent } from 'react';

interface HeaderProps {
  titleText: string;
  skillsText?: string;
  hrClassName?: string;
};

/**
 *
 */
class Header extends PureComponent<HeaderProps> {

  /**
   *
   */
  constructor(props: HeaderProps) {
    super(props);
  }

  /**
   *
   */
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
                this.props.hrClassName ? <hr className={this.props.hrClassName} /> : undefined
              }
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    </header>);
  }
}

export default Header;
