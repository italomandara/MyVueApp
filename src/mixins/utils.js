import jQuery from 'jquery'
var $ = jQuery

function slugify (item) {
  if (typeof item === typeof undefined) {
    return ''
  }
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

function getCategoryIdFromSlug (obj, value) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (slugify(obj[prop]) === value) {
        return prop
      }
    }
  }
}

function filterEl (e) {
  $.fn.attr_safe = function (attribute) {
    return (typeof this.attr(attribute) !== typeof undefined || !this.attr(attribute)) ? this.attr(attribute) : 'undefined'
  }
  var $el = $(e.target)
  if (typeof e !== typeof undefined) {
    e.preventDefault()
  }
  $el.addClass('active').siblings('[data-filter], [data-filter-sub]').removeClass('active')
  var category = $el.attr_safe('data-filter')
  var subcategory = $el.attr_safe('data-filter-sub')
  var elClass = '.category-' + category
  var elClassSub = '.subcategory-' + subcategory

  // '.subcategory-' + elClassSub
  if (typeof category !== typeof undefined && category.toLowerCase() === 'none') {
    $('.js-filter').removeAttr('style')
  } else {
    $('.js-filter').not(elClass + ', ' + elClassSub).css({
      'opacity': 0.3
    })
    $(elClass + ', ' + elClassSub).removeAttr('style')
  }
  return true
}

export { slugify, getCategories, filterEl, getCategoryIdFromSlug }
