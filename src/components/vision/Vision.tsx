import React from 'react';
import './Vision.scss';

const Vision = () => {
  return (
    <section className="section" id="about">
      <div className="section__title">
        <h2 className="section__description">About Us</h2>
        <h3 className="section__header">
          Reaching the nations with the good news.
        </h3>
      </div>

      <div className="features">
        <div className="features__img__box">
          <img
            src="images/vision/fellowship.jpg"
            data-src="images/vision/fellowship.jpg"
            alt="fellowship"
            className="features__img lazy-img"
          />
        </div>

        <div className="features__feature">
          <div className="features__icon"></div>
          <h5 className="features__header">Fellowship</h5>
          <p className="font-text">
            Building a united church that is spiritually powerful. Consisting of
            Tamil Christian brothers and sisters who wish to worship the Lord
            God in truth and spirit, with Jesus Christ as the head and
            themselves as the body of Christ.
            <div className="pt-4">
              We believe, Bible is the word of God breath of the Spirit of God
              (2Tim.3:16, 2Pet.1:20, 21), after knowing God and to get his
              salvation, the procedures are been explained in the following
              (John 20:31, 2Tim.3:15). An individual Christian's personal,
              family, society and Church life's all kind of advises, rules and
              regulations are been explained in this (Deut.6:6-8, 11:9-22),
              among all the regulations we agree that this has the authority and
              final command.
            </div>
          </p>
        </div>

        <div className="features__feature">
          <div className="features__icon"></div>
          <h5 className="features__header">Good News</h5>
          <p className="font-text">
            Preaching the Good news of Christ to those Tamil people living in
            Norway. Espesially to those who do not know Christ and His love.
            This is to redeem them from bondages of sin, curse, pain and lead
            them towards Christ teaching.
            <div className="pt-4">
              We accept the Trinity God who are Father, Son and the Holy Spirit
              (Deut.6:4, 1John5:7, 8), who is a creator (Gen.2:1, 2, John1:3)
              who maintains world as my life guide. We believe and accept that
              Jesus who came to earth as a man but He is equaling to Father, He
              came to earth to sacrifice himself for our sin as substitute and
              gave salvation to us, He was dead, buried and resurrected, he went
              to heaven with his glorified body, to take the holy ones and to
              judge the sinners he will come again.
            </div>
          </p>
        </div>
        <img
          src="images/vision/good.jpg"
          data-src="images/vision/good.jpg"
          alt="Good news"
          className="features__img lazy-img"
        />

        <img
          src="images/vision/way.jpg"
          data-src="images/vision/way.jpg"
          alt="Mission"
          className="features__img lazy-img"
        />
        <div className="features__feature">
          <div className="features__icon"></div>
          <h5 className="features__header bold">Mission</h5>
          <p className="font-text">
            The Faith Baptist Church has started its mission from year 2000.
            From the begining Tamil Baptist Church has always volenteered and
            involved with social welfare and mission in SriLanka. Todays
            pathatic situation in which our peoples are facing, so its our duty
            to raise and built our nation. Our loved ones has faced the worst
            humanitarian disaster of the decade.
            <div className="pt-4">
              So our initial step was to give a safe and healthy environment for
              the younger generation, by adopting 25 childs who are sevearly
              affected in the cruel war during that period in the East of
              SriLanka. The orphens where taken care by opening a refuge home
              called ’ADAIKALAM’ in Eastern SriLanka. And we are running it
              untill 2009, even though the home was damaged in Tsunami, we
              reconstructed it with upgradations. As its known we have raised
              many funds and did a huge mission in the Tsunami effected areas
              like fulfilling their basic needs as helping the injured, supply
              food, clothes and built houses.
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;
