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
            <p>
              We are blessed beyond words to have such a compassionate, wise,
              and dedicated pastor leading our congregation. Our beloved pastor
              has been a pillar of faith, strength, and guidance for our
              community, serving not only as a spiritual leader but as a friend,
              mentor, and confidant to us all.
            </p>
            <p>
              From the very beginning of their ministry, our pastor has
              demonstrated an unwavering commitment to God's word and His
              people. With sermons that inspire, teachings that challenge, and
              prayers that uplift, they have continually guided us in deepening
              our relationship with the Lord. Whether through worship,
              counseling, or service, our pastor leads with humility, grace, and
              a heart full of love for every member of the congregation.
            </p>
            <a href="#home">Join us</a>
          </div>
        </div>
      </div>
    </section>
  );
};
