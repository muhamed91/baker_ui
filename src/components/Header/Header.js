import './Header.scss'


const Header = ({bgImage, title}) => (
    <div style={{backgroundImage: `url(${bgImage})`}}  className="header">
        <h1 className="header__title">{title}</h1>
        <p className="header__content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
    </div>
);

export default Header;