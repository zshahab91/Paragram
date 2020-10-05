/* eslint-disable no-underscore-dangle */
/* eslint-env browser, node */
import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import { parseCookies } from 'nookies';
import kasbokar from 'public/static/images/namad/kasbokar.png';
import enamad from 'public/static/images/namad/enamad.png';
import lendo from 'public/static/images/namad/lendo.png';
import resaneh from 'public/static/images/namad/resaneh.png';
import instagram from 'public/static/images/icons/instagram-gradient.svg';
import { useRouter } from 'next/router';
import Button from '@components/button';
import s from './styles.module.scss';

const Footer: React.FC = () => {
  const router = useRouter();
  const [profileModalStatus, setProfileModalStatus] = useState(false);
  const completeProfileRoutes = ['/']; // List of pages which must show profile complete modal.

  useEffect(() => {
    const cookies = parseCookies();
    const isProfileCompleted = window.localStorage.getItem('isProfileCompleted');
    const isLater = window.localStorage.getItem('isProfileCompleteLater');

    if (isProfileCompleted === 'false' && isLater !== 'true' && cookies.token) {
      setProfileModalStatus(true);
    }
  }, []);

  return (
    <>
      <footer className={s.footer}>
        <div className="top_footer_holder">
          <div className="container">
            <div className="top_footer">
              <div className="tel_box">
                <div className="caption">ﺷﻤﺎره ﺗﻤﺎس:</div>
                <div className="value">۰۲۱-۴۲۴۰۹۰۰۰</div>
              </div>
              <div className="mail_box">
                <div className="caption">آدرس ایمیل:</div>
                <div className="value">info@timcheh.ir</div>
              </div>
              <div className="social_box">
                <div className="caption">تیمچه در شبکه های اجتماعی:</div>
                <div className="social_media">
                  <a className="item instagram" href="http://instagram.com/timchehcom">
                    <img alt="instagram logo" src={instagram} />
                  </a>
                  <a className="item" href="http://twitter.com/timchehcom">
                    <i className="icon icon-twitter" />
                  </a>
                  <a className="item" href="http://t.me/timchehcom">
                    <i className="icon icon-telegram" />
                  </a>
                  <a className="item" href="http://linkedin.com/company/timchehcom">
                    <i className="icon icon-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="main_footer">
            <div className="menu_footer_holder">
              <ul className="cols">
                <li className="titr">
                  دفترچه خریداران
                  <ul className="submenu_footer">
                    <li>
                      <a href="#">ثبت و پیگیری سفارش </a>
                    </li>
                    <li>
                      <a href="#">روش ارسال</a>
                    </li>
                    <li>
                      <a href="#">روش پرداخت</a>
                    </li>
                    <li>
                      <a href="#">شرایط بازگشت کالا</a>
                    </li>
                    <li>
                      <a href="#">اقساطی خرید کنید!</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="cols">
                <li className="titr">
                  دفترچه فروشندگان
                  <ul className="submenu_footer">
                    <li>
                      <a href="#">راهنمای فروشندگان</a>
                    </li>
                    <li>
                      <a href="#">جذب فروشندگان</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="cols">
                <li className="titr">
                  دانستنی‌ها
                  <ul className="submenu_footer">
                    <li>
                      <a href="#">نوشته‌های بلاگ </a>
                    </li>
                    <li>
                      <a href="#">حریم شخصی شما</a>
                    </li>
                    <li>
                      <a href="#">قوانین و مقررات ما</a>
                    </li>
                    <li>
                      <a href="#">پرسش‌های متداول</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="cols">
                <li className="titr">
                  تیمچه!
                  <ul className="submenu_footer">
                    <li>
                      <a href="#">داستان تیمچه</a>
                    </li>
                    <li>
                      <a href="#">تماس با ما</a>
                    </li>
                    <li>
                      <a href="#">در تیمچه دنبال کار میگردید؟</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="left_side">
              <div className="newsletter_holder">
                <h4 className="title">در خبرنامه تیمچه از تخفیف‌های ما باخبر شوید</h4>
                <div className="input_holder">
                  <input type="email" placeholder="ایمیل خود را وارد کنید" />
                  <button className="btn-newsletter" type="submit">
                    ارسال
                  </button>
                </div>
              </div>
              <div className="symbols_holder">
                <a className="symbol" href="#">
                  <img alt="kasbokar logo" src={kasbokar} />
                </a>
                <a className="symbol" href="#">
                  <img alt="enamd logo" src={enamad} />
                </a>
                <a className="symbol" href="#">
                  <img alt="enamd logo" src={resaneh} />
                </a>
                <a className="symbol lendo_sign" href="#">
                  <img alt="lendo logo" src={lendo} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="about_footer_holder">
          <div className="container">
            <div className="title">تیمچه</div>
            <div className="about_footer">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
              طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
              فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
              گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
              شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
              طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و
              فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.
            </div>
            <div className="text-center">
              <span className="view_more">نمایش بیشتر</span>
            </div>
          </div>
        </div>
        <div className="copyright_holder">
          <div className="fa">
            کلیه حقوق این سایت متعلق به شرکت نوین تجارت مجازی آریا (تیمچه) است.
          </div>
          <div className="en">©Copyrights Timcheh Co - 1399</div>
        </div>
      </footer>
      {!!completeProfileRoutes.includes(router.pathname) && (
        <div className={cs(s._modal, profileModalStatus && s.open)} id="complete_info">
          <div className={s.content_holder}>
            <div className={s._head}>
              <div className={s.close_btn}>
                <i
                  className="icon-Close"
                  role="presentation"
                  onClick={() => {
                    setProfileModalStatus(false);
                  }}
                />
              </div>
            </div>
            <div className={s._body}>
              <div className={s.txt}>آیا مایل به تکمیل اطلاعات هستید؟</div>
              <div className={s.btn_holder}>
                <Button
                  role="presentation"
                  size={48}
                  fill
                  className={cs(s.custom_btn, s.btn_fill_48)}
                  onClick={() => {
                    setProfileModalStatus(false);
                    setTimeout(() => {
                      router.push('/dashboard');
                    }, 0);
                  }}
                >
                  بله! تکمیل می‌کنم
                </Button>
                <div
                  role="presentation"
                  className={s.close_btn}
                  onClick={() => {
                    window.localStorage.setItem('isProfileCompleteLater', 'true');
                    setProfileModalStatus(false);
                  }}
                >
                  بعدا کامل می‌کنم
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
