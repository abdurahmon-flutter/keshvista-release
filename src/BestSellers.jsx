import React from 'react';
import profile1 from './assets/profile-1.png';
import profile2 from './assets/profile-2.png';
import profile3 from './assets/profile-3.png';
import profile4 from './assets/profile-4.png';

function BestSellers() {
  const sellers = [
    { img: profile1, name: 'Abdurahmon', sales: '15.2K' },
    { img: profile2, name: 'Husniddin', sales: '12.7K' },
    { img: profile3, name: 'Abdurahmon', sales: '7.9K' },
    { img: profile4, name: 'Husniddin', sales: '4.2K' }
  ];

  return (
    <div>
      <h2 className="separator">Eng zo'r mijozlar</h2>
      <div className="sellers">
        {sellers.map((seller, index) => (
          <div className="item" key={index}>
            <img src={seller.img} alt={seller.name} />
            <div className="info">
              <h4>{seller.name}</h4>
              <p>{seller.sales}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestSellers;
