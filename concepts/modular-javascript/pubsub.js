// pubsub有點像是RX
// pubsub會有一個中間者，去協調各個event要做的事情
// https://www.youtube.com/watch?v=nQRXi1SVOow&list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f&index=4
// github src: https://github.com/pandemiccreative/modular_javascript/tree/master/js

// 這邊實作一個pubsub機制
var events = {
  events: {},
  on: function (eventName, fn) {
    this.events[eventName] = this.events[eventName] || []
    this.events[eventName].push(fn)
  },
  off: function (eventName, fn) {
    if (this.events[eventName]) {
      for (var i = 0; i < this.events[eventName].length; i++) {
        if (this.events[eventName][i] === fn) {
          this.events[eventName].splice(i, 1)
          break
        }
      }
    }
  },
  emit: function (eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(function (fn) {
        fn(data)
      })
    }
  }
}

// 這邊實作另一個模組，用來統計數量的
var stats = (function () {
  var people = 0

  // Cache DOM
  var $stats = $("#statsModule")
  var template = $("#stats-template").html()

  // Bind Events
  events.on("peopleChanged", setPeople)

  render()

  function render () {
    $stats.html(Mustache.render(template, { people: people }))
  }

  function setPeople (newPeople) {
    people = newPeople
    render()
  }

  function destroy () {
    $stats.remove()
    events.off("peopleChanged", setPeople)
  }

  return {
    destroy: destroy
  }
})()


// People模組會透過pubsub模式去註冊event
var people = (function() {
  var people = ['Justify', 'Hellraiser']

  // Cache DOM
  var $button = $el.find('button')
  var $input = $el.find('input')
  var $ul = $el.find('ul')
  var template = $el.find('#people-template').html()

  // Bind Events
  $button.on('click', addPerson)
  $ul.delegate('i.del', 'click', deletePerson)

  _render()

  function _render () {
    $ul.html(Mustache.render(template, { people: people }))
    events.emit('peopleChanged', people.length) // 這邊註冊了一個event
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

  return {
    addPerson: addPerson,
    deletePerson: deletePerson
  }
})()