import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";


let menu = new Menu();
menu.layStorage()
menu.renderTableMenu("#tbodyFood")


window.xoaMonAn = (maMonClick) =>{
    let result = menu.xoaMonAn(maMonClick);
    menu.renderTableMenu("#tbodyFood");
    menu.luuStorage()
}


window.suaMonAn = (maMonClick) => {
    let result = menu.layMonAn(maMonClick);
    let arrFood = document.querySelectorAll("#foodForm input, #foodForm select, #foodForm textarea")
    for(let index of arrFood){
        let {id,value} = index;
        index.value = result[id]
    }
}

document.querySelector('#btnCapNhat').onclick = function(){
    let monAnChinhSua = new MonAn();
    let arrFood = document.querySelectorAll("#foodForm input, #foodForm select, #foodForm textarea")
    for(let index of arrFood){
        let {id, value} = index;
        monAnChinhSua[id] = value;
    }
    menu.suaMonAn(monAnChinhSua);
    menu.renderTableMenu('#tbodyFood');
    menu.luuStorage()
}

document.querySelector('#selLoai').onchange = function (){
    let value = document.querySelector('#selLoai').value;
    menu.sortMonAn(value, "#tbodyFood")
}