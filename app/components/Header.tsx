import React from 'react';

type HeaderProps = {
  titleText: string;
  skillsText?: string;
  hrClassName?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Header: React.FC<HeaderProps> = ({
  titleText,
  skillsText,
  hrClassName,
  children
}) => {
  return <header>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="intro-text">
            <h1 className="name">{titleText}</h1>
            {
              skillsText ? <span className="skills">{skillsText}</span> : undefined
            }
            {
              hrClassName ? <hr className={hrClassName} /> : undefined
            }
            { children }
          </div>
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
