var BaseElement = require('base-element')
var inherits = require('inherits')

module.exports = Item
inherits(Item, BaseElement)

function Item (options) {
  if (!(this instanceof Item)) return new Item(options)
  BaseElement.call(this)
  this.text = options.text
  this.id = options.id
  this.onclick = options.onclick
}

Item.prototype.render = function (state) {
  var h = this.html.bind(this)
  var self = this

  var vtree = h('li.menu-item', [
    h('button#' + this.id, {
      onclick: function (e) {
        e.preventDefault()
        this.onclick ? this.onclick(e) : self.send('click', e)
      }
    }, this.text)
  ])

  return this.afterRender(vtree)
}
