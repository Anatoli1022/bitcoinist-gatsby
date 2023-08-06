import React from 'react';
import classNames from 'classnames/bind';
import styles from './clients.module.scss';
import data from './data';

import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const cx = classNames.bind(styles);

const Clients = () => (
  <section className={cx('clients')}>
    <div className={cx('container', 'wrapper')}>
      <h2 className={cx('title', 'title-center')}>
        What our clients <span className={cx('title-span')}>say about us</span>
      </h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y]}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {data.map(({ image, name, companyWork, info }) => {
          return (
            <SwiperSlide>
              <div className={cx('image-container')}>
                <img src={image.default} alt="" loading="lazy" aria-hidden="true" />
              </div>
              <div className={cx('text-container')}>
                <p className={cx('name')}>{name}</p>
                <p className={cx('company-work')}>{companyWork} </p>
                <p className={cx('text-info')}>{info}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </section>
);

export default Clients;
