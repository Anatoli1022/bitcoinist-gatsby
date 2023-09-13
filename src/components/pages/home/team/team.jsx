import React from 'react';
import classNames from 'classnames/bind';

import styles from './team.module.scss';

const cx = classNames.bind(styles);

const Team = () => (
  <div className={cx('team')}>
    <div className="container">
      <div className={cx('wrapper')}>
        <span className={cx('text')}>Our Team _ Our Team_Our Team</span>
        <span className={cx('text')}>Our Team _ Our Team_Our Team</span>
      </div>
    </div>
  </div>
);

export default Team;
