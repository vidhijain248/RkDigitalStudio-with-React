import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Blogs!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='BlogImages/1.jpg'
              text='You can’t go wrong with a Nikon camera. Maybe you’re into sports or fashion photography. Or maybe landscapes or portraits are your favorite style of photography. It doesn’t matter where your interests lie. Nikon has you covered.'
              label='Nikon-Our Top Choice'
              path='/Blog'
            />
            <CardItem
              src='BlogImages/keshoraipatan.jpg'
              text='Keshav Rai Temple is a famous hindu temple situated on the banks of river Chambal in the town of Keshorai Patan near Kota city of Rajasthan. Built by Rao Raja Chattar Sal of Bundi in 1641, the temple is devoted to Lord Vishnu and is said to be one of the oldest temples in Rajasthan.'
              label='Our Home-Town'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='BlogImages/about1.jpg'
              text="A great place to work cares about and supports its employees while also challenging them to grow with the trends. At Our Work place, owner and their employees trust and respect each other and have a shared commitment to both individual and customer's Satisfaction."
              label='Our Work-Place'
              path='/services'
            />
            <CardItem
              src='BlogImages/taj-Mahal.jpg'
              text="Monuments are witnesses of India's past. The monuments of India are also the Guardian pillars of India's cultural heritage. While the monu- ments of India have become an inspiration for the future Generation. Now , it is the duty of all citizens to conserve our historical monuments and preserve our Indian Heritage. We at RK Studios are always in a try to bring the beauty of monuments to our readers and help them to know their importace and history attached with them."
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='BlogImages/unsplash2.jpg'
              text="We are well known in town for our candid or natural photographs, we always favor candid shots instead of posed photographs. Because we believe that Candid photography is all about honest and spontaneous moments and it is a great way to show the personalities of the people in the pictures and capture fleeting moments that posed photography can't always show off."
              label='Our-Specialization'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;