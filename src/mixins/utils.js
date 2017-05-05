function slugify (item) {
  var outputString = item
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
  return outputString
}

function getCategories (model, mymodel) {
  var obj = {}
  var categories = model[mymodel]
  for (var idx in categories) {
    var cat = categories[idx]
    obj[idx] = {slug: slugify(cat), name: cat}
  }
  return obj
}

export { slugify, getCategories }
