import React from 'react';
import classNames from 'classnames/bind';
// import { StaticImage } from 'gatsby-plugin-image';

import styles from './projects.module.scss';

import block from './images/projects-block.svg';
import arrow from './images/projects-arrow.svg';
import image_1 from './images/projects-image-1.jpg';
import image_2 from './images/projects-image-2.jpg';
import image_3 from './images/projects-image-3.jpg';
import image_4 from './images/projects-image-4.jpg';
import image_5 from './images/projects-image-5.jpg';
import image_6 from './images/projects-image-6.jpg';
import image_7 from './images/projects-image-7.jpg';
import image_8 from './images/projects-image-8.jpg';

const cx = classNames.bind(styles);

const Projects = () => (
  <section className={cx('projects')}>
    <div className={cx('container')}>
      <h2 className={cx('title')}>
        Latest <span className={cx('title-span')}>Projects</span>
      </h2>
      <ul className={cx('list')}>
        <li className={cx('list-item')}>
          <a href="" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_1} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>desing</span>
          <p className={cx('item-text')}>Unique product design</p>
        </li>
        <li className={cx('list-item')}>
          <a href="" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_2} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>development</span>
          <p className={cx('item-text')}>Development software</p>
        </li>
        <li className={cx('list-item')}>
          <a href="" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_3} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>desing</span>
          <p className={cx('item-text')}>Technology process</p>
        </li>
        <li className={cx('list-item')}>
          <a href="" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_4} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>desing</span>
          <p className={cx('item-text')}>Unique product design</p>
        </li>
        <li className={cx('list-item')}>
          <a href="" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_5} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>development</span>
          <p className={cx('item-text')}>Unique product design</p>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_6} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>development | technology</span>
          <p className={cx('item-text')}> Unique product design</p>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_7} alt="" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>development</span>
          <p className={cx('item-text')}>Unique product design</p>
        </li>
        <li className={cx('list-item')}>
          <a href="#" className={cx('item-link')} target="_blank" rel="noreferrer">
            <img src={image_8} alt="" aria-hidden="true" className={cx('image')} />
            <img src={block} alt="" aria-hidden="true" className={cx('block')} />
            <img src={arrow} alt="" aria-hidden="true" className={cx('arrow')} />
          </a>
          <span className={cx('item-span')}>desing</span>
          <p className={cx('item-text')}>Unique product design</p>
        </li>
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
