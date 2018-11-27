function web(){
    document.querySelector('.web').classList.add("d-block");
    document.querySelector('.web').classList.remove("d-none");
    document.querySelector('.mobile').classList.remove("d-block");
    document.querySelector('.mobile').classList.add("d-none");
};

function mobile(){
    document.querySelector('.mobile').classList.remove("d-none");
    document.querySelector('.mobile').classList.add("d-block");
    document.querySelector('.web').classList.add("d-none");
    document.querySelector('.web').classList.remove("d-block");
    

    
};
function all(){
    document.querySelector('.mobile').classList.remove("d-none");
    document.querySelector('.mobile').classList.remove("d-none");
    document.querySelector('.web').classList.add("d-block");
    document.querySelector('.web').classList.add("d-block");
}

document.querySelector('.btn1').addEventListener('click',web )
document.querySelector('.btn2').addEventListener('click', mobile)
document.querySelector('.btn3').addEventListener('click', all)