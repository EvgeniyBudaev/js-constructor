import {col, row} from '@/js/utils'

function title(block) {
  const {tag, styles} = block.options
  return row(col(`
             <${tag}>${block.value}</${tag}>
  `), styles)
}

function text(block) {
  const {tag, styles} = block.options
  return row(col(`
             <${tag} style="margin-bottom: 0;">${block.value}</${tag}>
  `), styles)
}

function textColumns(block) {
  const {styles} = block.options
  const html = block.value.map(item => col(item))
  return row(html.join(''), styles)
}

function image(block) {
  const {styles, alt, imageStyles} = block.options
  const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}" />`
  return row(html, styles)
}

export const templates = {title, text, textColumns, image}
