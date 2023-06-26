import React from 'react';
import classNames from 'classnames/bind';
import styles from './deliver.module.scss';

import branding from './images/deliver-branding.svg';
import developer from './images/deliver-developer.svg';
import desing from './images/deliver-desing.svg';
import video from './images/deliver-video.svg';
import light from './images/deliver-light.svg';
import done from './images/deliver-done.svg';

const cx = classNames.bind(styles);

const Deliver = () => (
  <section className={cx('deliver')}>
    <div className={cx('container')}>
      <h2 className={cx('title', 'title-center ')}>
        We <span className={cx('title-span')}>deliver</span>
      </h2>
      <div className={cx('content')}>
        <div>
          <div className={cx('information', 'information-first')}>
            <div className={cx('wrapper')}>
              <img src={branding} alt="" loading="lazy" aria-hidden="true" />
              <span className={'number'}>01</span>
            </div>
            <h3 className={cx('information-title')}>Branding</h3>
            <ul className={cx('list')}>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Brand identity</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Brand strategy</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Visual conception</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Advertising</p>
              </li>
            </ul>
          </div>
          <div className={cx('information', 'information-first')}>
            <div className={cx('wrapper')}>
              <img src={developer} alt="" loading="lazy" aria-hidden="true" />
              <span className={'number'}>02</span>
            </div>
            <h3 className={cx('information-title')}>Web development</h3>
            <ul className={cx('list')}>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Landing-pages</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Corporate sites</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Online-stores</p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={light} alt="" loading="lazy" aria-hidden="true" />
        </div>
        <div>
          <div className={cx('information', 'information-second')}>
            <div className={cx('wrapper')}>
              <img src={video} alt="" loading="lazy" aria-hidden="true" />
              <span className={'number'}>03</span>
            </div>
            <h3 className={cx('information-title')}>Video</h3>
            <ul className={cx('list')}>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Filmmaking</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Animation</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Advertisement</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Social</p>
              </li>
            </ul>
          </div>
          <div className={cx('information', 'information-second')}>
            <div className={cx('wrapper')}>
              <img src={desing} alt="" loading="lazy" aria-hidden="true" />
              <span className={'number'}>04</span>
            </div>
            <h3 className={cx('information-title')}>WEB design</h3>
            <ul className={cx('list')}>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Websites</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>UX/UI</p>
              </li>
              <li className={cx('item')}>
                <img src={done} alt="" loading="lazy" aria-hidden="true" className={cx('done')} />
                <p className={cx('text')}>Mobile apps</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Deliver;
