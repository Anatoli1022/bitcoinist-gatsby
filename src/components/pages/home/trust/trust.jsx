import React from 'react';
import classNames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';

import styles from './trust.module.scss';

const cx = classNames.bind(styles);

const Trust = () => (
  <section className={cx('trust')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        They <span className={cx('title-span')}> trust us</span>
      </h2>
      <div className={cx('wrapper-images')}>
        <div className={cx('container-images')}>
          <StaticImage src="../../../../images/css.png" alt="css" loading="lazy" />
          <StaticImage src="../../../../images/company.png" alt="company" loading="lazy" />
          <StaticImage src="../../../../images/js.png" alt="java script" loading="lazy" />
          <StaticImage src="../../../../images/tagline_here.png" alt="company" loading="lazy" />
          <StaticImage src="../../../../images/java.png" alt="java" loading="lazy" />
          <StaticImage src="../../../../images/goes.png" alt="company" loading="lazy" />
          <StaticImage src="../../../../images/tagline.png" alt="tagline" loading="lazy" />
          <StaticImage src="../../../../images/here.png" alt="company" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default Trust;
