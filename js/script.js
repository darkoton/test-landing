document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.header__item');
  const catalogBtn = document.querySelector('.header-menu-service__btn');
  const headerList = document.querySelector('.header__list');
  const closeHeaderList = document.querySelector('.header-list__close');
  const closeProfile = document.querySelector('.header-profile__close');
  const profileBtn = document.querySelector('.header-right__btn-mobile');
  const profileContent = document.querySelector('.header-right__content');
  const backgroundBlack = document.querySelector('.background-black');
  const accordionHeaders = document.querySelectorAll('.accordion__header');
  const newAccordionItems = document.querySelectorAll('.service__item');

  newAccordionItems.forEach(item => {
    const button = item.querySelector('.service-item-btn');
    button.addEventListener('click', function () {
      const content = item.querySelector('.service-item__content');

      // Закрытие всех других аккордеонов
      newAccordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.service-item__content').classList.remove('active');
          otherItem.querySelector('.service-item-btn').classList.remove('active');
        }
      });

      // Переключение активного состояния текущего аккордеона
      content.classList.toggle('active');
      button.classList.toggle('active');
    });
  });
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;

      // Toggle the active class for the clicked item
      content.classList.toggle('active');
      header.classList.toggle('active');

      // Close other contents and headers
      accordionHeaders.forEach(otherHeader => {
        if (otherHeader !== this) {
          otherHeader.nextElementSibling.classList.remove('active');
          otherHeader.classList.remove('active');
        }
      });
    });
  });

  accordionItems.forEach(item => {
    const button = item.querySelector('.header-item-btn');
    button.addEventListener('click', function () {
      const content = item.querySelector('.header-item__content');

      // Close all other contents and remove active class from other buttons
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.header-item__content').classList.remove('active');
          otherItem.querySelector('.header-item-btn').classList.remove('active');
        }
      });

      // Toggle the current content and button class
      content.classList.toggle('active');
      button.classList.toggle('active');
    });
  });

  catalogBtn.addEventListener('click', function () {
    headerList.classList.add('active');
  })

  closeHeaderList.addEventListener('click', function () {
    headerList.classList.toggle('active');
  })

  closeProfile.addEventListener('click', function () {
    profileContent.classList.remove('active');
    backgroundBlack.classList.toggle('active')
  })

  profileBtn.addEventListener('click', function () {
    profileContent.classList.add('active');
    backgroundBlack.classList.add('active')
  })
});

document.querySelectorAll('.select').forEach(select => {
  const value = select.querySelector('.select-top')
  const valueLabel = select.querySelector('.select-text')
  const list = select.querySelector('.select-list')

  value.addEventListener('click', ()=>{
    const height= document.documentElement.scrollHeight
    const coords = value.getBoundingClientRect()
    const top = coords.top + window.pageYOffset + value.offsetHeight + list.offsetHeight;

    if (top > height) {
      list.style.top = 'auto'
      list.style.bottom = 'calc(100% + 2px)'
    }else{
      list.style.top = 'calc(100% + 2px)'
      list.style.bottom = 'auto'
    }
    
    select.classList.toggle('active')
  })

  list.querySelectorAll('li > span').forEach(item=>{
    item.addEventListener('click', ()=>{

      select.classList.remove('active')
      valueLabel.textContent = item.textContent
    })
  })
}
)