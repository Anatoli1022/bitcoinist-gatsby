import React from 'react';
import classNames from 'classnames/bind';
import styles from './advantages.module.scss';

const cx = classNames.bind(styles);

const Advantages = () => (
  <div className={cx('advantages')}>
    <div className={cx('container')}>
      <ul className={cx('list')}>
        <li>
          <span className={cx('item-number')}>20+</span>
          <p className={cx('item-text')}>Experts</p>
        </li>
        <li>
          <span className={cx('item-number')}>25+</span>
          <p className={cx('item-text')}>Verticals</p>
        </li>
        <li>
          <span className={cx('item-number')}>50+</span>
          <p className={cx('item-text')}>Regular customers</p>
        </li>
        <li>
          <span className={cx('item-number')}>110+</span>
          <p className={cx('item-text')}>Completed projects</p>
        </li>
      </ul>
    </div>
  </div>
);

export default Advantages;
