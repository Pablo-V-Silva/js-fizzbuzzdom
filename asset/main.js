let list = document.querySelector('.list')

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    const fizz = `<li class="square lightgreen"> fizz </li>`

    list.innerHTML += fizz
  } else if (i % 5 === 0) {
    const buzz = `<li class="square yellow"> fizz </li>`

    list.innerHTML += buzz
  }
  console.log(i);
  const element = `<li class="square blue"> ${i} </li>`

  list.innerHTML += element
}