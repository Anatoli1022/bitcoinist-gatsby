import React from 'react';
import classNames from 'classnames/bind';

import styles from './web.module.scss';

const cx = classNames.bind(styles);

const Web = () => (
  <div className={cx('web')}>
    <div className="container">
      <div className={cx('wrapper')}>
        <span className={cx('text')}>Web development _ Brand identity </span>
        <span className={cx('text')}>Mobile apps _ Video _ Filmmaking </span>
      </div>
    </div>
  </div>
);

export default Web;
