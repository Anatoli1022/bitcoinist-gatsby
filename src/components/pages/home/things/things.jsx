import React from 'react';
import classNames from 'classnames/bind';
import styles from './things.module.scss';

import line from './images/line.svg';

const cx = classNames.bind(styles);

const Things = () => (
  <section className={cx('things')}>
    <div className={cx('container')}>
      <h2 className={cx('title', 'title-things')}>
        We promise <span className={cx('title-span')}>six things</span>
      </h2>
      <div className={cx('content')}>
        <div className={cx('wrapper-text')}>
          <p className={cx('text')}>
            Your deadline is <br /> our religion
          </p>
        </div>
        <div className={cx('wrapper-text')}>
          <p className={cx('text')}>
            Maximum flexibility to <br /> meet your needs{' '}
          </p>
        </div>
        <div className={cx('wrapper-text')}>
          <p className={cx('text')}>
            24/7 direct contact <br /> with us{' '}
          </p>
        </div>
      </div>
      <div className={cx('lights-wrapper')}>
        <span className={cx('light')}></span>
        <span className={cx('light')}></span>
        <span className={cx('light')}></span>
        <span className={cx('light')}></span>
        <span className={cx('light')}></span>
        <span className={cx('light')}></span>
        <img src={line} alt="" loading="lazy" aria-hidden="true" />
      </div>
      <div className={cx('content')}>
        <div className={cx('wrapper-text')}>
          <p className={cx('text')}>
            Personalized approach <br /> towards each case
          </p>
        </div>
        <div className={cx('wrapper-text')}>
          <p className={cx('text')}>
            No job is too <br /> small
          </p>
        </div>
        <div className={cx('wrapper-text')}>
          <p className={cx('text')}>
            We are creative, inspired, curious, <br /> logic and open to critic
          </p>
        </div>
      </div>
      <div className={cx('link-wrapper')}>
        <a href="" className={cx('link-circle')}>
          Talk to us
        </a>
      </div>
    </div>
  </section>
);

export default Things;
