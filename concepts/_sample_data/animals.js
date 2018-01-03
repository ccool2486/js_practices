var animals = [
  {name : 'Fluffykins', species : 'rabbit'},
  {name : 'Caro', species : 'dog'},
  {name : 'Hamilton', species : 'fish'},
  {name : 'Harold', species : 'cat'},
  {name : 'Jimmy', species : 'fish'}
]

let categories = [
  {id: 'animals', parent: null},
  {id: 'mammals', parent: 'animals'},
  {id: 'cats', parent: 'mammals'},
  {id: 'dogs', parent: 'mammals'},
  {id: 'chihuahua', parent: 'dogs'},
  {id: 'labrador', parent: 'dogs'},
  {id: 'persian', parent: 'cats'},
  {id: 'siamese', parent: 'cats'},
  {id: 'ghosts', parent: null},
  {id: 'casper', parent: 'ghosts'}
]