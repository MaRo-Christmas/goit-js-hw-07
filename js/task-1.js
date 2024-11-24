'use strict'

const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`)

categories.forEach(function (category) {
  const heading = category.querySelector('h2')
  const categoryItem = category.querySelector('ul')

  console.log(`Category: ${heading.textContent}`)
  console.log(`Elements: ${categoryItem.children.length}`)
})
