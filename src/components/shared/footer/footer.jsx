import React from 'react';
import classNames from 'classnames/bind';

import styles from './footer.module.scss';

import logo from '../../../images/logo.svg';
import { Link } from 'gatsby';

const cx = classNames.bind(styles);

const Footer = () => (
  <footer className={cx('footer')}>
    <div className={cx('container')}>
      <ul className={cx('list')}>
        <li className={cx('item')}>
          <h4 className={cx('title')}>Communication</h4>
          <a href="tel:+38 (032) 295 84 53" className={cx('link')}>
            +38 (032) 295 84 53
          </a>
          <a href="mailto:ivax_dev@gmail.com" className={cx('link')}>
            ivax_dev@gmail.com
          </a>
        </li>
        <li className={cx('item')}>
          <h4 className={cx('title')}>Address</h4>
          <p className={cx('text-address')}>Lviv, Ukraine st. Zalizniaka 21</p>
        </li>
      </ul>
      <div className={cx('footer-copyright')}>
        <Link to="/">
          <img src={logo} alt="" loading="lazy" aria-hidden="true" />
        </Link>
        <p className={cx('copyright')}>Copyright © 2022 IVAX</p>
        <div>
          <Link to="/" className={cx('link-information')}>
            Terms of Use
          </Link>
          <Link to="/" className={cx('link-information')}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
