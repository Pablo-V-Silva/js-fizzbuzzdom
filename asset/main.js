let list = document.querySelector('.list')

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    const element = `<li class="square red"> fizzBuzz </li>`

    list.innerHTML += element

  } else if (i % 5 === 0) {
    const element = `<li class="square yellow"> buzz </li>`

    list.innerHTML += element

  } else if (i % 3 === 0) {
    const element = `<li class="square lightgreen"> fizz </li>`

    list.innerHTML += element
  } else {

    const element = `<li class="square blue"> ${i} </li>`

    list.innerHTML += element
  }
}