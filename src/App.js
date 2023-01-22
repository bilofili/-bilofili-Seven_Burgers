import React from 'react';
import { useState } from 'react';
import { data } from './Dada';
import DisplayData from './DisplayDatat';
import ButtonF from './Button';
import './App.css';
import HeaderApp from './Header';

function App() {

const [food, setFood] = useState(data);

const ButtonSwitch = (type) => {
  let chooseTypeDisplay = data.filter(element => element.type === type)
  setFood(chooseTypeDisplay)
}

const ButtonSwitchByID = (Select) => {
  let  chooseTypeDisplayByID = data.filter(element => element.Select === Select)
  setFood(chooseTypeDisplayByID)
}

return (
<div>
  <div className="butto">
    <ButtonF propsButtenF={ButtonSwitch} propsButtonById={ButtonSwitchByID}/>
    </div>
  <div><DisplayData iteamfood={food}/></div>

  <div className='aboutUs'>

    <div className='ab_block'>
      <h2>Заказать американский бургер</h2>
      <p>Американский бургер-бар в центре города.</p><p>Место, где раз попробовав бургер, вы уже не променяете его ни на что. Бар, где мы смешаем вам коктейль ровно под сегодняшнее настроение.</p><p> Меню, в котором мы соединили нашу любовь к бургерам и приверженность к натуральным продуктам. 
      Прямо в центре любимого города мы каждый день накормим вас завтраком или обедом, сделаем бургер или пожарим вам стейк. Мы выпекаем булочки каждое утро, а мясо привозим из фермерских хозяйств и не используем заморозку. 
      </p>
      <h2>Гамбургеры с доставкой на дом, в офис в Харькове</h2>
      <p>Вкус? Качество? Размер? Да, это все имеет значение! Enjoy your burger!</p>
    </div>

    <div className='ab_block2'>
      <h2>КОНТАКТИ</h2>
      <p>Харків, вул. Трінклера, 2, ст.м. Держпром/Університет</p>
      <p>Режим роботи ресторану 9:00 до 20:00 (пн з 10:00)</p>
      <p>Ресторан: +38 (066) 834 22 77</p>
      <p>Контроль якості gdeburger@gmail.com</p>
      <p>Служба доставки +38 (066) 834 11 88</p>
      <button>НАПИСАТИ НАМ</button>
    </div>

  </div>
</div>
)}

export default App;
