import React from 'react';
import classNames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';

import styles from './technologies.module.scss';

const cx = classNames.bind(styles);

const Technologies = () => (
  <section className={cx('technologies')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        Our <span className={cx('title-span')}> technologies</span>
      </h2>
      <div className={cx('wrapper-images')}>
        <div className={cx('container-images')}>
          <StaticImage
            src="../../../../images/css.png"
            alt="css"
            loading="lazy"
            className={cx('image')}
          />
          <StaticImage
            src="../../../../images/java.png"
            alt="java"
            loading="lazy"
            className={cx('image')}
          />
          <StaticImage
            src="../../../../images/company.png"
            alt="company"
            loading="lazy"
            className={cx('image')}
          />
          <StaticImage
            src="../../../../images/js.png"
            alt="java script"
            loading="lazy"
            className={cx('image')}
          />

          <StaticImage
            src="../../../../images/tagline_here.png"
            alt=""
            loading="lazy"
            className={cx('image')}
          />
          <StaticImage
            src="../../../../images/goes.png"
            alt=""
            loading="lazy"
            className={cx('image')}
          />
          <StaticImage
            src="../../../../images/tagline.png"
            alt=""
            loading="lazy"
            className={cx('image')}
          />
          <StaticImage
            src="../../../../images/here.png"
            alt=""
            loading="lazy"
            className={cx('image')}
          />
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;
