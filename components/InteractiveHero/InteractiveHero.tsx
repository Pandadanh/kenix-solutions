'use client'

import { MessageCircle, Phone, Users, TrendingUp, Zap, Clock, Calendar, PhoneCall, Hospital } from 'lucide-react'
import styles from './InteractiveHero.module.css'

export default function InteractiveHero() {
  return (
    <section className={styles.secIntro}>
      <div className={styles.container}>
        <div className={styles.imagesDeco}>
          <div className={styles.decoCircle}></div>
        </div>
        
        <div className={styles.contentMain}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <Zap size={16} />
              <span>TỰ ĐỘNG HÓA ZALO MESSAGING</span>
            </div>  
            <h1 className={styles.title}>
              TỰ ĐỘNG HÓA CHĂM SÓC KHÁCH HÀNG{' '}
              <span className={styles.brandText}>QUA ZALO</span>
            </h1>
            <div className={styles.text}>
              Giải pháp tự động gửi tin nhắn Zalo thông minh cho doanh nghiệp.<br />
              Tăng hiệu quả bán hàng, chăm sóc khách hàng 24/7 với AI tự động trả lời.
            </div>

            {/* Auto-scrolling features */}
            <div className={styles.featureScroll}>
              <div className={styles.featureTrack}>
                <div className={styles.featureItem}>
                  <MessageCircle size={20} />
                  <span>Tự động trả lời tin nhắn</span>
                </div>
                <div className={styles.featureItem}>
                  <Users size={20} />
                  <span>Quản lý khách hàng</span>
                </div>
                <div className={styles.featureItem}>
                  <TrendingUp size={20} />
                  <span>Báo cáo thống kê</span>
                </div>
                <div className={styles.featureItem}>
                  <Clock size={20} />
                  <span>Hoạt động 24/7</span>
                </div>
                <div className={styles.featureItem}>
                  <Zap size={20} />
                  <span>Phản hồi nhanh chóng</span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className={styles.featureItem}>
                  <MessageCircle size={20} />
                  <span>Tự động trả lời tin nhắn</span>
                </div>
                <div className={styles.featureItem}>
                  <Users size={20} />
                  <span>Quản lý khách hàng</span>
                </div>
                <div className={styles.featureItem}>
                  <TrendingUp size={20} />
                  <span>Báo cáo thống kê</span>
                </div>
                <div className={styles.featureItem}>
                  <Clock size={20} />
                  <span>Hoạt động 24/7</span>
                </div>
                <div className={styles.featureItem}>
                  <Zap size={20} />
                  <span>Phản hồi nhanh chóng</span>
                </div>
              </div>
            </div>
           
          </div>

          <div className={styles.aniImages}>
            <div className={styles.inner}>
              {/* Phone Customer - Left */}
              <div className={styles.phoneLeft}>
                <div className={styles.phoneMockup}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneHeader}>
                      <div className={styles.phoneTime}>18:11</div>
                      <div className={styles.phoneIcons}>
                        <div className={styles.signal}></div>
                      </div>
                    </div>
                    <div className={styles.chatHeader}>
                      <div className={styles.chatAvatar}>
                        <Hospital size={25}/>
                      </div>
                      <div className={styles.chatInfo}>
                        <div className={styles.chatTitle}>Nha Khoa Đăng</div>
                        <div className={styles.chatStatus}>Đang hoạt động</div>
                      </div>
                    </div>
                    <div className={styles.chatMessages}>
                      <div className={styles.messageReceived}>
                        <div className={styles.messageCard}>
                          <div className={styles.messageText}>
                            Dạ em chào anh, anh tới lịch hẹn kiểm tra răng định kỳ của bạn rồi đấy! Anh có muốn đặt lịch hẹn không ạ? 
                          </div>
                        </div>
                      </div>
                      <div className={styles.messageReceived}>
                        <div className={styles.messageOptions}>
                          <div className={styles.optionBtn}>
                            <Calendar size={14} /> Đặt lịch
                          </div>
                          <div className={styles.optionBtn}>
                            <PhoneCall size={14} /> Liên hệ
                          </div>
                        </div>
                      </div>
                      <div className={styles.messageSent}>
                        <div className={styles.sentBubble}>Anh sẽ tới lúc 2h chiều mai</div>
                      </div>
                      <div className={styles.messageReceived}>
                        <div className={styles.messageCard}>
                          <div className={styles.messageText}>
                            Lịch hẹn đã được đặt vào lúc 2h chiều mai, cảm ơn anh nhé!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

         
              {/* Phone Management - Center Right */}
              <div className={styles.phoneManagement}>
                <div className={styles.phoneMockup}>
                  <div className={styles.phoneScreen}>
                    <div className={styles.phoneHeader}>
                      <div className={styles.phoneTime}>18:11</div>
                      <div className={styles.phoneIcons}>
                        <div className={styles.signal}></div>
                      </div>
                    </div>
                    <div className={styles.managementHeader}>
                      <div className={styles.managementTitle}>
                        <Users size={20} />
                        Quản lý tin nhắn
                      </div>
                    </div>
                    <div className={styles.chatList}>
                      <div className={styles.chatItem}>
                        <div className={styles.chatItemAvatar}></div>
                        <div className={styles.chatItemInfo}>
                          <div className={styles.chatItemName}>Hoàng Đăng</div>
                          <div className={styles.chatItemMessage}>Mai anh tới lúc 2h chiều mai</div>
                        </div>
                        <div className={styles.chatItemBadge}>3</div>
                      </div>
                      <div className={styles.chatItem}>
                        <div className={styles.chatItemAvatar}></div>
                        <div className={styles.chatItemInfo}>
                          <div className={styles.chatItemName}>Thy Uyên</div>
                          <div className={styles.chatItemMessage}>Bạn có lịch hẹn vào 18h nhá</div>
                        </div>
                        <div className={styles.chatItemBadge}>1</div>
                      </div>
                      <div className={styles.chatItem}>
                        <div className={styles.chatItemAvatar}></div>
                        <div className={styles.chatItemInfo}>
                          <div className={styles.chatItemName}>Hữu Luân</div>
                          <div className={styles.chatItemMessage}>Cảm ơn anh, sắp tới lịch em sẽ nhắc anh nha</div>
                        </div>
                      </div>
                      <div className={styles.chatItem}>
                        <div className={styles.chatItemAvatar}></div>
                        <div className={styles.chatItemInfo}>
                          <div className={styles.chatItemName}>Đình Quang</div>
                          <div className={styles.chatItemMessage}>Nay bác có các khung giờ trống nào không?</div>
                        </div>
                        <div className={styles.chatItemBadge}>2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dashboard Analytics - Right */}
              <div className={styles.dashboardRight}>
                <div className={styles.dashboardMockup}>
                  <div className={styles.dashboardHeader}>
                    <div className={styles.dashboardTitle}>
                      <TrendingUp size={20} />
                      Thống kê hiệu suất
                    </div>
                    <div className={styles.dashboardDate}>Hôm nay</div>
                  </div>
                  <div className={styles.dashboardStats}>
                    <div className={styles.statCard}>
                      <div className={styles.statIcon}>
                        <MessageCircle size={18} />
                      </div>
                      <div className={styles.statValue}>2,847</div>
                      <div className={styles.statLabel}>Tin nhắn gửi</div>
                      <div className={styles.statChange}>+12.5%</div>
                    </div>
                    <div className={styles.statCard}>
                      <div className={styles.statIcon}>
                        <Users size={18} />
                      </div>
                      <div className={styles.statValue}>1,243</div>
                      <div className={styles.statLabel}>Khách hàng</div>
                      <div className={styles.statChange}>+8.2%</div>
                    </div>
                    <div className={styles.statCard}>
                      <div className={styles.statIcon}>
                        <Clock size={18} />
                      </div>
                      <div className={styles.statValue}>98%</div>
                      <div className={styles.statLabel}>Phản hồi tự động</div>
                      <div className={styles.statChange}>+5.1%</div>
                    </div>
                  </div>
                  <div className={styles.dashboardChart}>
                    <div className={styles.chartTitle}>Tin nhắn theo giờ</div>
                    <div className={styles.chartBars}>
                      {[65, 78, 85, 92, 88, 95, 90, 98, 85, 92, 88, 75, 82, 90, 85, 95, 92, 88, 85, 78, 70, 65, 60, 55].map((height, i) => (
                        <div 
                          key={i} 
                          className={styles.chartBar}
                          style={{
                            height: `${height}%`,
                            animationDelay: `${i * 0.03}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.avatar3}></div>
              </div>

              {/* Decorative circles */}
              <div className={styles.deco1}></div>
              <div className={styles.deco2}></div>
              <div className={styles.deco3}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
