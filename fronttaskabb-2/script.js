let axtarish = document.querySelector('#axtarish');
let close = document.querySelector('#closeicon');
let lang = document.querySelector('#lang');

axtarish.addEventListener('click', function() {
    document.querySelector('#Search').classList.toggle('active-1');
})

close.addEventListener('click', function() {
    document.querySelector('#Search').classList.remove('active-1')
})


lang.addEventListener('click', function(){
    document.querySelector('#langdiv').classList.toggle('active-1')
    document.querySelector('#langicon').classList.toggle('active-2')
})
