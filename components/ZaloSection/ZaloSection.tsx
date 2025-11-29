import React from 'react';
import { Zap } from 'lucide-react';
import styles from './ZaloSection.module.css';

export default function ZaloSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content_main}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <Zap size={14} />
            <span>TỰ ĐỘNG HÓA ZALO MESSAGING</span>
          </div>
          
          <h1 className={styles.title}>
            TỰ ĐỘNG HÓA CHĂM SÓC KHÁCH HÀNG{' '}
            <span className={styles.brand}>ZALO</span>
          </h1>
          
          <div className={styles.description}>
            Giải pháp tự động gửi tin nhắn Zalo thông minh cho doanh nghiệp.
            <br />
            Tăng hiệu quả bán hàng, chăm sóc khách hàng 24/7 với AI tự động trả lời.
          </div>
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
