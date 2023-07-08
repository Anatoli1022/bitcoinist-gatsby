import React from 'react';
import classNames from 'classnames/bind';
import styles from './hero.module.scss';

import light from './images/hero-light.svg';
import ellipse_1 from './images/hero-ellipse-1.svg';
import ellipse_2 from './images/hero-ellipse-2.svg';
import ellipse_3 from './images/hero-ellipse-3.svg';
import ellipse_4 from './images/hero-ellipse-4.svg';

const cx = classNames.bind(styles);

const Hero = () => (
  <section className={cx('hero')}>
    <div className={cx('container', 'hero-container')}>
      <div>
        <h1 className={cx('hero-title')}>
          <span className={cx('hero-span-text')}>Paint</span>
          <span className={cx('hero-span-text')}>your thoughts</span>
          <span className={cx('hero-span-text')}>
            with <span className={cx('title-span')}>IVAX</span>
          </span>
        </h1>
        <div className={cx('links-wrapper')}>
          <a href="#" className={cx('hero-link')}>
            Portfolio
          </a>
          <a href="#" className={cx('link-circle')}>
            Check with us
          </a>
        </div>
      </div>
      <div className={cx('light-wrapper')}>
        <img src={ellipse_1} alt="" loading="eager" aria-hidden="true" className={cx('ellipse')} />
        <img src={ellipse_2} alt="" loading="eager" aria-hidden="true" className={cx('ellipse')} />
        <img src={ellipse_3} alt="" loading="eager" aria-hidden="true" className={cx('ellipse')} />
        <img src={ellipse_4} alt="" loading="eager" aria-hidden="true" className={cx('ellipse')} />
        <img src={light} alt="" loading="eager" aria-hidden="true" className={cx('light')} />
      </div>
    </div>
  </section>
);

export default Hero;
