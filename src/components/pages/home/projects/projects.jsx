import React from 'react';
import classNames from 'classnames/bind';

import styles from './projects.module.scss';

import block from './images/projects-block.svg';
import arrow from './images/projects-arrow.svg';

import data from './data/projects';

const cx = classNames.bind(styles);

const Projects = () => (
  <section className={cx('projects')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        Latest <span className={cx('title-span')}>Projects</span>
      </h2>
      <ul className={cx('list')}>
        {data.map((datas, index) => {
          return (
            <li className={cx('list-item')} key={index}>
              <a href="" className={cx('item-link')} target="_blank" rel="noreferrer">
                <img
                  src={datas.image.default}
                  alt=""
                  aria-hidden="true"
                  className={cx('image')}
                  loading="lazy"
                />
                <img src={block} alt="" aria-hidden="true" className={cx('block')} loading="lazy" />
                <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} loading="lazy" />
              </a>
              <span className={cx('item-span')}>{datas.span}</span>
              <p className={cx('item-text')}>{datas.text}</p>
            </li>
          );
        })}
      </ul>
      <div className={cx('wrapper-link')}>
        <a href="#" className={cx('link-circle')}>
          Load more projects
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
