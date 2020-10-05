/* eslint-disable camelcase */
/* eslint-env browser, node */
import React, { useState } from 'react';
import { AccountLayoutMobile } from '@components/common/layout';
import OtpInput from 'react-otp-input';
import Button from '@components/button';
import { useForm } from 'react-hook-form';
import AuthApiService from '@services/auth/api.service';
import Countdown from '@components/countdown';
import { IValidationError } from '@models/validation.error';
import { saveToken } from '@services/auth/cookieHelper';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cs from 'classnames';
import s from 'stylesheets/login.mobile.styles.module.scss';

interface IFormInputs {
  mobile: string;
}

interface IData {
  mobile?: string;
  view: 'mobile' | 'otp';
  expirationTimeStamp?: number;
  resend?: boolean;
  hasOtpError?: boolean;
}

export default function LoginPage() {
  const router = useRouter();
  const [OTP, setOTP] = useState('');
  const [data, setData] = useState<IData>({ view: 'mobile' });

  const { handleSubmit, register, errors, setError, reset } = useForm<IFormInputs>();

  const onSubmit = async (values) => {
    try {
      const response = await AuthApiService.otp(values);
      setData({
        view: 'otp',
        mobile: values.mobile,
        expirationTimeStamp: response.data.results.expirationTimeStamp,
        resend: false,
        hasOtpError: false,
      });
    } catch (e) {
      const response: IValidationError = e.response?.data;
      if (response?.results) {
        setError('mobile', {
          type: 'manual',
          message: response?.message,
        });
      }
    }
  };

  const onVerify = async () => {
    try {
      const response = await AuthApiService.verify({ mobile: data.mobile, code: OTP });
      // set cookie and headers and redirect
      const {
        token: { access_token, expires_in },
        account: { isProfileCompleted },
      } = response.data.results;
      saveToken(access_token, expires_in);
      if (process.browser) {
        window.localStorage.setItem('isProfileCompleted', String(isProfileCompleted));
      }
      // router.replace('/');
      location.replace("/");
    } catch (e) {
      setData((prevState) => ({ ...prevState, hasOtpError: true }));
    }
  };

  if (data.view === 'mobile') {
    return (
      <AccountLayoutMobile title="ورود | فروشگاه اینترنتی تیمچه" tabTitle="ورود به حساب کاربری">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.field_caption}>شماره موبایل خود را وارد کنید.</div>
          <div className={s.mobile_field}>
            <i className="icon-Mobile icon" />
            <input
              type="tel"
              name="mobile"
              placeholder="شماره موبایل خود را وارد کنید"
              ref={register({
                required: 'پر کردن فیلد الزامی است.',
                pattern: {
                  value: /^(\+98|0|)?9\d{9}$/i,
                  message: 'این شماره موبایل معتبر نمی‌باشد.',
                },
              })}
            />
            <Button
              mode="close"
              className={s.reset_input}
              onClick={() => {
                reset();
              }}
            />
            {errors.mobile && <div className={s.error_msg}>{errors.mobile.message}</div>}
          </div>
          <Button type="submit" fill size={48} className={s.custom_btn}>
            ادامه
          </Button>
          <div className={s.privacy}>
            <Link href="/terms">
              <a>شرایط و قوانین</a>
            </Link>{' '}
            سایت تیمچه و حریم خصوصی را می پذیرم.
          </div>
        </form>
      </AccountLayoutMobile>
    );
  }

  return (
    <AccountLayoutMobile
      title="لندو | ورود"
      tabTitle=""
      back={(): void => setData((prevState) => ({ ...prevState, view: 'mobile' }))}
    >
      <div>
        <div className={s.blue_msg_box}>
          {OTP?.length === 5 ? (
            <div>حالا دکمه تایید را بزنید.</div>
          ) : (
            <div>کد تاییدی به شماره {data.mobile} ارسال شد.</div>
          )}
          <a
            href="#"
            onClick={() =>
              setData((prevState) => ({ ...prevState, view: 'mobile', hasOtpError: false }))
            }
          >
            تغییر شماره موبایل
          </a>
        </div>
        <div className={cs(s.input_group, data.hasOtpError && s.has_error)}>
          <OtpInput
            isInputNum
            inputStyle={s.otpInputs}
            containerStyle={s.otpWrapper}
            value={OTP}
            onChange={setOTP}
            numInputs={5}
          />
          {data.hasOtpError && <div className={s.error_msg}>کد وارد شده نادرست می‌باشد.</div>}
        </div>
        <div className={s.count_down}>
          <div
            role="presentation"
            className={cs(s.count_down_caption, data.resend && s.active)}
            onClick={() => {
              data.resend && onSubmit({ mobile: data.mobile });
            }}
          >
            دریافت مجدد کد تایید
          </div>
          <div className={s.number_box}>
            <Countdown
              expirationTimeStamp={data.expirationTimeStamp}
              onEnd={() => {
                setData((prevState) => ({ ...prevState, resend: true }));
              }}
            />
          </div>
        </div>
        <Button fill size={48} className={s.custom_btn} onClick={onVerify} key="verify">
          ادامه
        </Button>
        <div className={s.privacy}>
          <Link href="/terms">
            <a>شرایط و قوانین</a>
          </Link>{' '}
          سایت تیمچه و حریم خصوصی را می پذیرم.
        </div>
      </div>
    </AccountLayoutMobile>
  );
}
