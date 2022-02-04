'use strict';

const showAuto = () => {

  let auto = document.getElementById('car');
  let autoItem = document.querySelector('.auto__item');
  let autoModel = document.querySelector('.auto__model');
  let autoPrice = document.querySelector('.auto__price');

  auto.addEventListener('click', (e) => {
    try {
      if (e.target[e.target.selectedIndex].value == 'BMW') {
        fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1643914799&s=zJTa-S1dN2RWbI5xbnB5yA')
          .then(response => response.json())
          .then(data => {
            autoItem.style.display = 'none';
            autoModel.textContent = `Тачка ${data.cars[0].brand} ${data.cars[0].model}`;
            autoPrice.textContent = `Цена: ${data.cars[0].price}$`;
          })
          .catch(error => {
            console.log(error.massage);
          })
      } else if (e.target[e.target.selectedIndex].value == 'Volvo') {
        fetch('https://bfs01.getcourse.ru/public/files/12250/88/84120897322424565eb4cddeea2b910a.json?e=1643914799&s=zJTa-S1dN2RWbI5xbnB5yA')
          .then(response => response.json())
          .then(data => {
            autoModel.textContent = `Тачка ${data.cars[1].brand} ${data.cars[1].model}`;
            autoPrice.textContent = `Цена: ${data.cars[1].price}$`;
          })
          .catch(error => {
            console.log(error.massage);
          })
      } else if (e.target[e.target.selectedIndex].value == 'Выберите тачку') {
        autoItem.style.display = 'block';
        autoModel.textContent = '';
        autoPrice.textContent = '';
      }

    } catch (error) {
      throw new Error(error);
    }
  });
};
showAuto()