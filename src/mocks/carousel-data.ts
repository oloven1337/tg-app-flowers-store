import bag from '../assets/carousel-images/bag.png';
import cart from '../assets/carousel-images/cart.png';
import dollar from '../assets/carousel-images/dollar.png';
import fire from '../assets/carousel-images/fire.png';
import map from '../assets/carousel-images/map.png';
import questions from '../assets/carousel-images/questions.png';
import { ICarouselItem } from "../models/ICarouselItem.ts";

export const carouselData: ICarouselItem[] = [
  {
    id: 0,
    name: 'О нас',
    link: 'https://teletype.in/@rf-lovers/XvLQLv_9_9W',
    image: fire,
    bgColor: '#383838',
    textColor: '#FFFFFF'
  },
  {
    id: 1,
    name: 'Как сделать заказ?',
    link: 'https://teletype.in/@rf-lovers/u9DvHMF5Xf2',
    image: cart,
    bgColor: '#F5F1FF',
    textColor: '#383838'
  },
  {
    id: 2,
    name: 'Частые вопросы',
    link: 'https://teletype.in/@rf-lovers/Dww10O8cmgG',
    image: questions,
    bgColor: '#ECF9FF',
    textColor: '#1C1C1E'
  },
  {
    id: 3,
    name: 'Доставка и самовывоз',
    link: 'https://teletype.in/@rf-lovers/gOswAclXmEW',
    image: map,
    bgColor: '#383838',
    textColor: '#FFFFFF'
  },
  {
    id: 4,
    name: 'Оплата',
    link: 'https://teletype.in/@rf-lovers/PyxV01OYjzm',
    image: dollar,
    bgColor: '#FFF7DA',
    textColor: '#1C1C1E'
  },
  {
    id: 5,
    name: 'Возврат или обмен цветка',
    link: 'https://www.figma.com/exit?url=https%3A%2F%2Fteletype.in%2F%40rf-lovers%2FtVeqDuBJE5y',
    image: bag,
    bgColor: '#FFC9CD',
    textColor: '#1C1C1E'
  },
]