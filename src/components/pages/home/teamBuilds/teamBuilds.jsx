import React from 'react';
import classNames from 'classnames/bind';

import team from './data/team';

import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './teamBuilds.module.scss';

const cx = classNames.bind(styles);

const TeamBuilds = () => (
  <section className={cx('team-builds')}>
    <div className={cx('container', 'wrapper', 'title-center')}>
      <h2 className={cx('title')}>
        <span className={cx('title-span')}>Team</span> that Builds Ideas Driven by the Future
      </h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {team.map((teams, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={teams.image.default}
                alt=""
                loading="lazy"
                aria-hidden="true"
                className={cx('image')}
              />
              <p className={cx('name')}>{teams.name}</p>
              <p className={cx('profession')}>{teams.profession}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </section>
);

export default TeamBuilds;
