import image from '../../public/assets/images/javascript.jpg'
import {ImageBlock, TextBlock, TextColumnsBlock, TitleBlock} from '@/js/classes/blocks'
import {css} from '@/js/utils'

const text = `Крутое приложение по JavaScript от Евгения Будаева`

export const model = [
  new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
    tag: 'h2',
    styles: css({
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center'
    }),
  }),
  new ImageBlock(image, {
    styles: 'padding: 2rem 0; display: flex; justify-content: center;',
    alt: 'my image',
    imageStyles: 'width: 500px; height: auto;'
  }),
  // {type: 'image', value: image, options: {
  //   styles: 'padding: 2rem 0; display: flex; justify-content: center;',
  //     alt: 'my image',
  //     imageStyles: 'width: 500px; height: auto;'
  //   }},
  new TextColumnsBlock([
    'Приложение на чистом JavaScript, без использования бибилиотек',
    'Принципы SOLID и ООП в JavaScript',
    'JavaScript - это просто, интересно. Создаю любые UI своими руками'
  ], {
    styles: 'padding: 2rem; color: #fff; background: linear-gradient(to bottom, #8e2de2, #4a00e0); font-weight: bold;'
  }),
  new TextBlock(text, {
    tag: 'p',
    styles: 'background: darkblue; background: linear-gradient(to left, #f2994a, #f2c94c); font-weight: bold; padding: 1rem;'
  }),

]
