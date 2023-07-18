import React from 'react';
import classNames from 'classnames/bind';

import styles from './tell.module.scss';

import attach from './images/tell-attach.svg';

const cx = classNames.bind(styles);

const Tell = () => (
  <section className={cx('tell')}>
    <div className={cx('container', 'tell-container')}>
      <div className={cx('wrapper-form')}>
        <h2 className={cx('title')}>
          <span className={cx('title-span')}>Tell us</span> more
        </h2>
        <form className={cx('form')}>
          <div className={cx('wrapper-input')}>
            <input type="text" placeholder="Name*" className={cx('input-form')} />
            <input type="text" placeholder="Phone*" className={cx('input-form')} />
          </div>
          <input type="email" placeholder="Email*" className={cx('input-form', 'email')} />
          <input type="text" placeholder="Message" className={cx('input-form', 'message')} />
        </form>
        <div className={cx('wrapper-buttons')}>
          <button className={cx('form-button', 'link-circle')}>Send</button>
          <label className={cx('input-label')}>
            <input type="file" className={cx('input-file')} />
            <span className={cx('input-file-button')}>
              <img src={attach} alt="" loading="lazy" aria-hidden="" className={cx('attach')} />{' '}
              <span className={cx('input-text')}>Attach file</span>
            </span>
          </label>
        </div>
      </div>
      <iframe
        className={cx('map')}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A64aaa8560deda591b48460d518c6f8e352d8253a47595c6deaf39bdbef6ed9c7&amp;source=constructor"
        frameborder="0"
      ></iframe>
    </div>
  </section>
);

export default Tell;
