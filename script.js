// Define masonry items, their heights and their hslValues to randomize
const masonryItems = document.querySelectorAll('.masonry-item')
const heights = ['150', '200', '300', '350']
const hslValues = ['55', '60', '70', '75']

// Loop through masonry items and set their height, background color, images and animation delay
let animationMilliseconds = 100
masonryItems.forEach((item) => {
  const randomHeight = Math.floor(Math.random() * heights.length)
  const randomHSLValue = Math.floor(Math.random() * hslValues.length)
  item.style.height = `${heights[randomHeight]}px`
  item.style.backgroundColor = `hsl(320, 80%, ${hslValues[randomHSLValue]}%)`
  item.style.backgroundImage = `url('https://picsum.photos/id/${Math.floor(
    Math.random() * 1000
  )}/300/${heights[randomHeight]}')`

  // Add animation delay to each item
  if (animationMilliseconds < 1500) {
    item.style.animation = `fadeIn ${animationMilliseconds}ms ease-in`
    animationMilliseconds += 50
  } else {
    animationMilliseconds = 100
  }
})
