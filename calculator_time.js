function update(){
let show_tag = document.getElementById('show_time');
let time = new Date();
let hor = time.getHours();
let mnt = time.getMinutes();
let scnd = time.getSeconds();
let am_pm = "AM"

if(mnt < 10){
    mnt = "0" + mnt;
}if(scnd < 10){
    scnd = "0" + scnd;
}if(hor > 12){
    am_pm = 'PM';
    hor = hor - 12;
}if(hor < 10){
    hor = "0" + hor;
}
show_tag.innerHTML = hor + " : " + mnt + " : " + scnd + ' ' + am_pm;
}
setInterval(update);

//catculator js
let btn_item = document.querySelectorAll('.btn_item');
//let btn_item = document.querySelector('.btn_item');
let display = document.querySelector('.display');
let clear_btn = document.querySelector('.cler ');
// function all_btn(x){
// display.value = display.value + x;
// }
for(let i = 0; i < btn_item.length; i ++){
    btn_item[i].addEventListener('click',()=>{
    display.value += btn_item[i].value;
    })
}

function result(){
    let rej = document.querySelector('.display').value;
    document.querySelector('.display').value = eval(rej);
}
clear_btn.addEventListener('click',()=>{
    document.querySelector('.display').value = " ";
})