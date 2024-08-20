import React from 'react';

function SellNFT() {
  const items = [
    {
      icon: 'bx bx-wallet-alt',
      title: "Xizmat ko'rsatish",
      text: "Bu bo'limda biz sizga keng turdagi xizmatlarni taqdimBu bo'limda biz ta'lim markazlari uchun taqdim etadigan barcha xizmatlarni ko'rsatamiz. O'qituvchilar, kurslar, treninglar va boshqa ta'lim xizmatlari haqida ma'lumotlar mavjud."
    },

    { icon: 'bx bx-cart-alt', title: 'Statistika', text: "Bu bo'limda siz ta'lim markazlari faoliyati bo'yicha statistik ma'lumotlarni va tahlillarni topishingiz mumkin. Talabalar soni, kurslar bo'yicha natijalar va boshqa muhim ko'rsatkichlar haqida ma'lumotlar taqdim etiladi.." },
    { icon: 'bx bx-grid-alt', title: 'Moliya', text: " Bu bo'limda ta'lim markazlari uchun moliyaviy maslahatlar va rejalashtirish xizmatlarini taqdim etamiz. Budjetni boshqarish, moliyaviy rejalashtirish va investitsiya strategiyalari bo'yicha yordam." }
  ];

  return (
    <div>
      <h2 className="separator">Yuqori qulayliklar</h2>
      <div className="sell-nft">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <div className="header">
              <i className={item.icon}></i>
              <h5>{item.title}</h5>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SellNFT;
