const Teamitem = () => {
  return (
    <>
      <div className="team-item">
        <img
          src="https://unitedthemes.com/wp-content/uploads/2018/09/team2.jpg"
          alt=""
        />
        <h3>Kalimi Sultan</h3>
        <h4>MERN Stack Dev</h4>

        <div className="social">
          <a href="#">
            <box-icon name="facebook" type="logo"></box-icon>
          </a>
          <a href="#">
            <box-icon name="linkedin" type="logo"></box-icon>
          </a>
          <a href="#">
            <box-icon name="youtube" type="logo"></box-icon>
          </a>
          <a href="#">
            <box-icon name="github" type="logo"></box-icon>
          </a>
          <a href="#">
            <box-icon name="instagram" type="logo"></box-icon>
          </a>
        </div>
      </div>
    </>
  );
};

export default Teamitem;
