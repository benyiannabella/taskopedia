import logo from "../../images/react.png";

const MainHeader = () => {
  return (
    <div
      className=".flex-md-nowrap"
      style={{ backgroundColor: "grey", width: "100%" }}
    >
      <div>
        <img src={logo} style={{ height: "100px" }}></img>
      </div>
      <div className="pm-100">
        <h1 style={{ marginBottom: "10px", color: "black" }}>
          REACT COURSE - TaskOPedia
        </h1>
      </div>
    </div>
  );
};

const subheaderStyle = {
  color: "darkblue",
  backgroundColor: "gray",
  width: "100%"
};

const SubHeader = () => {
  return (
    <div className="text-center">
      <h4 style={subheaderStyle}>This will be an exciting course!</h4>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};

export default Header;
