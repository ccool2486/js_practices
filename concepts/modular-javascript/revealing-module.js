// https://www.youtube.com/watch?v=pOfwp6VlnlM&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=3
// github src: https://github.com/pandemiccreative/modular_javascript/blob/master/js/modular.js

// 把模組用一個變數=IIFE的方式，實作一個封裝，避免內部變數/函式被外部取用
var people = (function() {
  var people = ['Justify', 'Hellraiser']

  // Cache DOM
  // 在object literal module裡，這邊會是一個馬上執行的init函式，可是我們用revealing的模式就不用了
  var $el = $('#peopleModule')
  var $button = $el.find('button')
  var $input = $el.find('input')
  var $ul = $el.find('ul')
  var template = $el.find('#people-template').html()

  // Bind Events
  $button.on('click', addPerson)
  $ul.delegate('i.del', 'click', deletePerson)

  _render() // 一般來說，有底線的函式，代表了私有

  function _render () {
    $ul.html(Mustache.render(template, { people: people }))
    events.emit('peopleChanged', people.length) // 不重要不用看懂
  }

  function addPerson (value) {
    var name = typeof value === 'string' ? value : $input.val()
    people.push(name)
    _render()
    $input.val('')
  }

  function deletePerson (event) {
    var i
    if (typeof event === 'number') {
      i = event
    } else {
      var $remove = $(event.target).closest('li')
      i = $ul.find('li').index($remove)
    }

    people.splice(i, 1)
    _render()
  }

  //[重要!] revealing module最核心的概念在這邊：只把外部可以取用的部分回傳，其他就都會是私有的了
  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  }
})()
