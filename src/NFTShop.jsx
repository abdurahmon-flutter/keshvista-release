import React from 'react';
import item1 from './assets/item-1.png';
import item2 from './assets/item-2.png';  
import item3 from './assets/item-3.png';
import item4 from './assets/item-4.png';

function 
NFTShop() {

  const items = [
    {
      img: item1,
      title: 'Boshqaruvchilar',
      price: '0.29 BTC',
      stock: '5 of 33',
      time: '2h 28m 1s'
    },
    {
      img: item2,
      title: "O'quvchilar",
      price: '0.21 BTC',
      stock: '7 of 12',
      time: '1h 28m 1s'
    },
    { img: item3, 
      title: 'Ota-onalar', 
      price: '0.21 BTC',
      stock: '9 of 23',
      time: '4h 21m 1s' },

    { img: item4,
      title: "O'qituvchilar",
      price: '0.45 BTC', 
      stock: '1 of 33',
      time: '0h 28m 1s' }
  ];

  return (
    <div>
      <h2 className="separator">Ilovalar</h2>
      <div className="nft-shop">
        <div className="nft-list">
          {items.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="info">
                <h4 >{item.title}</h4>
    
              </div>
              <div className="view-more">
                <button>Download</button>
              </div>
              <div className="bid">
                {/* Add bidding or other actions here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NFTShop;
