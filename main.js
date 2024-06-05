const db = [
  {
    "name":"chat",
    "url":"/img/chat.jpg",
    "alt":"chat"
  },
  {
    "name":"chien",
    "url":"/img/chien.jpg",
    "alt":"chien"
  },
  {
    "name":"gecko",
    "url":"/img/gecko.jpg",
    "alt":"gecko"
  }
]

const Box = document.querySelector('#box')
const btnLeft = document.querySelector('#btnLeft')
const btnRight = document.querySelector('#btnRight')
let fin;

let Index = 0;

const renderImage = (index)=>{
  img.src=`${db[index].url}`
}

btnRight.addEventListener('click',()=>{
  clearInterval(fin)
      Index++;
  if (Index === db.length) {
    Index = 0;
  }
fin = setInterval(() => {
    Index++;
    if (Index === db.length) {
      Index = 0;
    }
      renderImage(Index)
  }, 2000);
    renderImage(Index)
})

btnLeft.addEventListener('click',()=>{
  Index--;
  if(Index < 0 ){
    Index = db.length - 1
  }
    renderImage(Index)
})

fin = setInterval(() => {
  Index++;
  if (Index === db.length) {
    Index = 0;
  }
    renderImage(Index)
}, 2000);



