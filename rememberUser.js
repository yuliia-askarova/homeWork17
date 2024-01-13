const button = document.querySelector('.btn');
const block1 = document.querySelector('.container');
const block2 = document.querySelector('.section');
const savedName = document.getElementById('outputName');

button.addEventListener('click', function(){
    
    const name = document.getElementById('name').value;
    
    if(name !== ''){
        localStorage.setItem('name', name);
        savedName.textContent = name;

        block1.classList.add('hidden');
        block2.classList.remove('hidden');
    }
});

const userName = localStorage.getItem('name');
        if (userName) {
            block1.classList.add('hidden');
            block2.classList.remove('hidden');
            savedName.textContent = userName;
}
console.log(userName);

