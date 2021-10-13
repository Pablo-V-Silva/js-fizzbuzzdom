let list = document.querySelector('.list')

for (let i = 0; i <= 100; i++) {
  console.log(i);
  const element = `<li class="square"> ${i} </li>`

  list.innerHTML += element
}