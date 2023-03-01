import React, { useEffect } from 'react';
import './EventSlider.scss';
import Slide from './Slide';
import data from './data.json';

const EventSlider = () => {
  const slider = function () {
    const slides = document.querySelectorAll<HTMLElement>('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;
    console.log(maxSlide);

    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer?.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide: any) {
      document
        .querySelectorAll('.dots__dot')
        .forEach((dot) => dot.classList.remove('dots__dot--active'));

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)!
        .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide: any) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };

    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };
    init();

    // Event handlers
    btnRight?.addEventListener('click', nextSlide);
    btnLeft?.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer?.addEventListener('click', function (e: Event) {
      const element = e.target as HTMLElement;
      if (element.classList.contains('dots__dot')) {
        const { slide } = element.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  useEffect(() => {
    slider();
  }, []);

  return (
    <section className="section">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className="slider">
        {data.map((slideArgs: any, index: number) => (
          <Slide key={index} {...slideArgs}></Slide>
        ))}

        <button className="slider__btn slider__btn--left">&larr;</button>
        <button className="slider__btn slider__btn--right">&rarr;</button>
        <div className="dots"></div>
      </div>
    </section>
  );
};

export default EventSlider;
