/* let's put some js code */

const menu = document.getElementById('menu');

const close = document.getElementById('close');

const nav = document.getElementById('nav');

/*here lets put a function so that we can reuse it */

function isOpen()
{
  return nav.style.right === '0';
}

/*here lets add event listener to our menu and close button and invoke the click attribute */

menu.addEventListener('click', ()=>{
  if(!isOpen()) /*here we wonnA flip the result to make it easier for us */
  {
    nav.style.right = '0';
  }
  else{
    nav.style.right = '-300px';
  }
});

/*here lets add event listener to our menu and close button and invoke the click attribute */

close.addEventListener('click', ()=>{
  if(!isOpen()) /*here we wonnA flip the result to make it easier for us */
  {
    nav.style.right = '-300px';
  }
  else{
    nav.style.right = '0';
  }
});