document.getElementById('showMenu').addEventListener('click', function name() {
    document.querySelector('.navbar').style.display='block';
    document.querySelector('#hideMenu').style.display='flex';
    document.querySelector('#showMenu').style.display='none';
})

document.getElementById('hideMenu').addEventListener('click', function name() {
    document.querySelector('.navbar').style.display='none';
    document.querySelector('#showMenu').style.display='flex';
    document.querySelector('#hideMenu').style.display='none';
})