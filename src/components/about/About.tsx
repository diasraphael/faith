import './About.scss';

export const About = () => {
  return (
    <section className="section about">
      <div className="row">
        <div className="imgWrapper">
          <img src="images/uncle.jpg" alt="our pastor" />
        </div>
        <div className="contentWrapper">
          <div className="content">
            <span className="textWrapper">
              <span></span>Our Pastor
            </span>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              dolores consectetur nihil tempore exercitationem maxime illo,
              voluptates illum tenetur autem, soluta ad quae perferendis! Nulla
              excepturi cupiditate suscipit debitis omnis.
            </p>
            <a href="#home">Join us</a>
          </div>
        </div>
      </div>
    </section>
  );
};
