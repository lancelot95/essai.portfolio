function langage(){
    document.querySelector('.langage').classList.add("d-block");
    document.querySelector('.langage').classList.remove("d-none");
    document.querySelector('.design').classList.remove("d-block");
    document.querySelector('.design').classList.add("d-none");
};

function design(){
    document.querySelector('.design').classList.remove("d-none");
    document.querySelector('.design').classList.add("d-block");
    document.querySelector('.langage').classList.add("d-none");
    document.querySelector('.langage').classList.remove("d-block");
    

    
};
function all(){
    document.querySelector('.design').classList.remove("d-none");
    document.querySelector('.design').classList.remove("d-none");
    document.querySelector('.langage').classList.add("d-block");
    document.querySelector('.langage').classList.add("d-block");
}

document.querySelector('.btn1').addEventListener('click',langage )
document.querySelector('.btn2').addEventListener('click', design)
document.querySelector('.btn3').addEventListener('click', all)