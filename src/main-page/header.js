import logo  from "./log3.JPG";

const Header = ({subtitle,title}) => (
    <header>
        <div className="row">
            <div className="col-md-5">
                <img src={logo} className="logo" alt="logo"/>
            </div>
            <div className="col-md-7 mt-5 subtitle">
                {subtitle}
            </div>
        </div>
    </header>
);

export default Header;