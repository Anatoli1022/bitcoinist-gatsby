import React from 'react';
import classNames from 'classnames/bind';

import styles from './web.module.scss';

const cx = classNames.bind(styles);

const Web = () => (
  <div className={cx('web')}>
    <div className={cx('wrapper')}></div>
    <span className={cx('text')}>UX _ Web development _ Brand identity </span>
    <span className={cx('text')}>UX _ Mobile apps _ Video _ Filmmaking </span>
  </div>
);

export default Web;
