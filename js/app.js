document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');


  const handleFormSubmit = function(event){
    event.preventDefault()

    const newListItem = document.createElement('li');
    newListItem.textContent = `Title: ${event.target.title.value} Author: ${event.target.author.value} Category:${event.target.category.value}`
    newListItem.classList.add('black', 'bold');

    const list = document.querySelector('ul');
    list.appendChild(newListItem);

    event.target.title.value = ''
    event.target.author.value = ''
    event.target.category.value = ''

  }

  const handleFormDelete = function(){
    // let list = [];
    let readingList = document.querySelector('ul');
    readingList.innerHTML= ""
    
    
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const list = document.querySelector('#delete');
  list.addEventListener('click', handleFormDelete)




// handleAuthor = 


//   const author = document.querySelector('#author')
//   author.addEventListener('input', handleAuthor)
})

