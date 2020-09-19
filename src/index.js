import 'normalize.css'
import './scss/index.scss'

import {model} from '@/js/model'
import {Site} from '@/js/classes/site'
import {Sidebar} from '@/js/classes/sidebar'
// import {templates} from '@/js/templates'

const site = new Site('#site')

const updateCallback = newBlock => {
  model.push(newBlock)
  site.render(model)
}

new Sidebar('#panel', updateCallback)

site.render(model)



// model.forEach(block => {
//   site.insertAdjacentHTML('beforeend', block.toHTML())
//
//   // const generate = templates[block.type]
//   // if (generate) {
//   //   const html = generate(block)
//   //   site.insertAdjacentHTML('beforeend', html)
//   // }
//
// })

