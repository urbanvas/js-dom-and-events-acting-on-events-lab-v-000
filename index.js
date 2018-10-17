function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  return document.querySelector('input').value
}

function addNewElementAsLi() {
  const element = retrieveEmployeeInformation()
  return document.querySelector('.employee-list').insertAdjacentHTML('beforeend', `<li>${element}</li>`)
}

function addNewLiOnClick() {
  document.getElementsByTagName('input')[1].addEventListener('click', addNewElementAsLi())
  document.getElementsByTagName('input')[0].value = ''
}

function clearEmployeeListOnLinkClick() {
  document.getElementsByTagName('a')[0].addEventListener('click', () => {
    document.querySelector('.employee-list').innerHTML = ''
  })
}
