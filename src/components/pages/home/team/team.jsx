import React from 'react';
import classNames from 'classnames/bind';

import styles from './team.module.scss';

const cx = classNames.bind(styles);

const Team = () => (
  <div className={cx('team')}>
    <span className={cx('text')}>UX _ Our Team _ Our Team_Our Team</span>
    <span className={cx('text')}>UX _Our Team _ Our Team_Our Team</span>
  </div>
);

export default Team;
