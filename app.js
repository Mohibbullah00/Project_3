
document.getElementById("bars").addEventListener('click', function(){
    document.getElementById("side").classList.add('active');
});

document.getElementById("close_bars").addEventListener('click', function(){
    document.getElementById("side").classList.remove('active');
});

