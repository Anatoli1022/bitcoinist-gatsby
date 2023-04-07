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
        <StaticImage src="../../../../images/css.png" alt="css" loading="lazy" />
        <StaticImage src="../../../../images/java.png" alt="" loading="lazy" />
        <StaticImage src="../../../../images/company.png" alt="" loading="lazy" />
        <StaticImage src="../../../../images/js.png" alt="" loading="lazy" />
        <StaticImage src="../../../../images/tagline_here.png" alt="" loading="lazy" />
        <StaticImage src="../../../../images/goes.png" alt="" loading="lazy" />
        <StaticImage src="../../../../images/tagline.png" alt="" loading="lazy" />
        <StaticImage src="../../../../images/here.png" alt="" loading="lazy" />
      </div>
    </div>
  </section>
);

export default Technologies;
