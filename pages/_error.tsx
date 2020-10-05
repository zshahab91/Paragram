import cs from 'classnames';
import Link from 'next/link';
import err503 from 'public/static/images/error/503.svg';
import err403 from 'public/static/images/error/403.svg';
import { MainLayout } from '@components/common/layout';
import s from '../stylesheets/error.styles.module.scss'; // it must be relative

function Error({ statusCode }) {
  const renderError = () => {
    switch (statusCode) {
      case 503:
        return (
          <div className={cs(s.main_body, s.error_page)}>
            <img src={err503} alt="" />
            <div className={s.title}>خطای 503</div>
            <div className={s.desc}>
              موقتا سرورها از دسترس خارج شده اند!
              <br />
              لطفا بعدا تلاش کنید.
            </div>
            <Link href="/">
              <a className={cs(s.custom_btn, s.btn_fill_40)}>بازگشت به صفحه اصلی</a>
            </Link>
          </div>
        );
      case 403:
        return (
          <div className={cs(s.main_body, s.error_page)}>
            <img src={err403} alt="" />
            <div className={s.title}>خطای 403</div>
            <div className={s.desc}>دسترسی شما به این صفحه امکان پذیر نیست!</div>
            <Link href="/">
              <a className={cs(s.custom_btn, s.btn_fill_40)}>بازگشت به صفحه اصلی</a>
            </Link>
          </div>
        );
      case 500:
        return (
          <div className={cs(s.main_body, s.error_page)}>
            <img src={err503} alt="" />
            <div className={s.title}>خطای 500</div>
            <div className={s.desc}>
              خطایی رخ داده است!
              <br />
              لطفا بعدا تلاش کنید.
            </div>
            <Link href="/">
              <a className={cs(s.custom_btn, s.btn_fill_40)}>بازگشت به صفحه اصلی</a>
            </Link>
          </div>
        );
      default:
        return (
          <div className={cs(s.main_body, s.error_page)}>
            <img src={err503} alt="" />
            <div className={s.title}>خطا در ارتباط با سرور</div>
            <div className={s.desc}>
              خطایی رخ داده است!
              <br />
              لطفا بعدا تلاش کنید.
            </div>
            <Link href="/">
              <a className={cs(s.custom_btn, s.btn_fill_40)}>بازگشت به صفحه اصلی</a>
            </Link>
          </div>
        );
    }
  };

  return <MainLayout title="خطا!">{renderError()}</MainLayout>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
