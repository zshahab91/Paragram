import React, {useEffect, useState } from 'react';
import nookies from 'nookies';
import { IUser } from '@models/user';
import { removeToken } from '@services/auth/cookieHelper';
import s from './styles.module.scss';

const Header: React.FC = () => {
  const [customer, setCustomer] = useState<IUser>();


  useEffect(() => {
    (async () => {
      if (!nookies.get().hasOwnProperty('token')) {
        return;
      }

      try {
        // const response = await DashboardApiService.getUser();
        // if (response?.data) {
        //   setCustomer(response?.data.results);
        // }
      } catch {
        console.error('Error receiving information');
      }
    })();
  }, []);



  return (
    <>
     header
    </>
  );
};

export default Header;
