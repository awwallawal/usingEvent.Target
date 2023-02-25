const outerContainer = document.getElementById('outer-container');

outerContainer.innerHTML = `
      <div class='inner-container'>
        <button id='One'>Sample One</button> 
        <button id='Two'>Sample Two</button> 
        <button id='Three'>Sample Three</button> 
      </div>
`
outerContainer.addEventListener('click', function(event){
      let buttonClicked = document.getElementById(event.target.id);
      buttonClicked.style.backgroundColor = 'green';
      let parentClicked = buttonClicked.parentElement;
      parentClicked.style.backgroundColor = 'yellow';

})