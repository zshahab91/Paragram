import { MainLayout } from '@components/common/layout';
import image from 'public/static/images/error/404.svg';
import Link from 'next/link';
import cs from 'classnames';
import s from '@stylesheets/error.styles.module.scss';

export default function Custom404() {
  return (
    <MainLayout title="صفحه مورد نظر یافت نشد">
      <div className={cs(s.main_body, s.error_page)}>
        <img src={image} alt="" />
        <div className={s.title}>خطای ۴۰۴</div>
        <div className={s.desc}>صفحه موردنظر شما پیدا نشد!</div>
        <Link href="/" replace>
          <a className={cs(s.custom_btn, s.btn_fill_40)}>بازگشت به صفحه اصلی</a>
        </Link>
      </div>
    </MainLayout>
  );
}
