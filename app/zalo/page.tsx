import React from 'react';
import styles from './zalo.module.css';

export default function ZaloPage() {
  return (
    <div className={styles.container}>
      <div className={styles.content_main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            KẾT NỐI VÀ TƯƠNG TÁC VỚI NGƯỜI DÙNG{' '}
            <span className={styles.brand}>ZALO</span>
          </h1>
          
          <div className={styles.description}>
            Zalo Official Account là tài khoản chính thức của doanh nghiệp trên nền tảng Zalo.
            <br />
            Cung cấp giải pháp giúp doanh nghiệp kết nối và tương tác với người dùng Zalo.
          </div>
          
          <button className={styles.btn_primary}>
            <a 
              target="_blank" 
              href="https://oa.zalo.me/manage/register/service?%3Foasrc%3Dwebsite%26utm_source%3Doa_website%26utm_medium%3Dtop_banner"
              rel="noopener noreferrer"
            >
              Tạo Official Account
            </a>
          </button>
        </div>
        
        <div className={styles.phones_container}>
          {/* Phone Left */}
          <div className={styles.phone_left}>
            <img 
              src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/sec_intro_2.png" 
              alt="Zalo Official Account"
              className={styles.phone_image}
            />
          </div>
          
          {/* Data Transfer Animation */}
          <div className={styles.data_transfer}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
          
          {/* Phone Right */}
          <div className={styles.phone_right}>
            <img 
              src="https://stc-oa.zdn.vn/resources/zoa-landing/v122023/images/home/sec_intro_1.png" 
              alt="Zalo Interface"
              className={styles.phone_image}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
