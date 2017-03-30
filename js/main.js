window.addEventListener('load', setup);

function setup(){
    document.querySelectorAll('.project .content').forEach(hide);

    function hide(el){
        el.classList.add('hidden')
    }
}
