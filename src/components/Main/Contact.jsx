import React, { useEffect } from 'react';
import Link from 'next/link';
//= Scripts
import parallaxie from '@/common/parallaxie';
import { circleStarSvg } from '@/data/icons';

function Contact({ lightMode, innerPageStyle }) {
  useEffect(() => {
    parallaxie(`.sec-bg-img.parallaxie`, 0.4);
  }, []);

  return (
    <section className="contact-img">
      <div className="container">
        <div className="sec-bg-img bg-img parallaxie" data-background="/dark/assets/imgs/background/viña-del-mar.webp"></div>
        <div className="sec-lg-head section-padding">
          <div className="row ontop">
            <div className="col-11 d-flex align-items-center bg-dark">
              <div className="valign">
                <h2 className="fz-50 d-rotate wow">
                  <span className="rotate-text">Tienes un proyecto en mente?</span>
                  <span className="rotate-text">Entonces <span className={innerPageStyle ? '' : 'sub-font'}>trabajemos juntos.</span>.</span>
                </h2>
              </div>
              <div className="ml-auto">
                <Link href={`/${lightMode ? "dark/page-contact" : "light/page-contact"}`} className="butn-circle d-flex align-items-center text-center m-auto">
                  <div className="full-width">
                    <span>{circleStarSvg} </span>
                    <span className="full-width">Escríbenos</span>
                  </div>
                  <img src={`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/circle-star.svg`} alt="" className="circle-star" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
