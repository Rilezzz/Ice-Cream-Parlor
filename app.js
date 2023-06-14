const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1.25,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 1.25,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: .25
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: .25
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

function addCookieDoughToCart() {
  let cookDough = iceCream.find(iceCreamItem => iceCreamItem.name == 'Cookie Dough')
  cookDough.quantity++

  drawCart()
}
function addVanillaToCart() {
  let cookDough = iceCream.find(iceCreamItem => iceCreamItem.name == 'Vanilla')
  cookDough.quantity++

  drawCart()
}
function addStrawberryToCart() {
  let cookDough = iceCream.find(iceCreamItem => iceCreamItem.name == 'Strawberry')
  cookDough.quantity++

  drawCart()
}

function drawCart() {
  // store a string of html outside of forEach loop to avoid cart clear on every iteration.
  let stringOfIceCreamItemHTML = ''

  iceCream.forEach(iceCreamItem => {

    // place current menu item in cart before adding html to the string above.
    if (iceCreamItem.quantity > 0) {

      // use backticks to for a multi line string 
      stringOfIceCreamItemHTML += `
    <li>
    <div class="d-flex fs-3 justify-content-between">
      <span>${iceCreamItem.name} x${iceCreamItem.quantity}</span>
      <span>$${(iceCreamItem.price * iceCreamItem.quantity).toFixed(2)}</span>
    </div>
  </li>`

      console.log(iceCreamItem)
    }
  })

  console.log(stringOfIceCreamItemHTML)


  const cartElement = document.getElementById('cart')

  cartElement.innerHTML = stringOfIceCreamItemHTML

  drawTotal()
}

function drawTotal() {
  let cartSum = 0

  iceCream.forEach(iceCreamItem => {

    cartSum += iceCreamItem.price * iceCreamItem.quantity
  })
  let cartTotalElement = document.getElementById('cartTotal')

  cartTotalElement.innerText = cartSum.toFixed(2).toString()

}


function checkOut() {
  const timeToCheckOut = window.confirm("Are you ready to checkout?")

  if (!timeToCheckOut) {
    return
  }
  iceCream.forEach(iceCreamItem => iceCreamItem.quantity = 0)

  drawCart()
}






