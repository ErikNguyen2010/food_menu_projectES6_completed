import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js"

let menu = new Menu;
menu.layStorage();
document.querySelector("#btnThemMon").onclick = function (){
    let monAn = new MonAn();
    let arrFood = document.querySelectorAll("#foodForm input, #foodForm select, #foodForm textarea")
    for(let index of arrFood){
        let {id, value} = index;
        monAn[id] = value;
    }
    let html = "";
    for(let key in monAn){
        switch (key){
            case "maTinhTrang":
            html += 
            `
            <li id="maTinhTrang" class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">Mã tình trạng</h6>
                </div>
                <span id="spMa" class="text-muted">${monAn[key] == "1" ? "Còn" : "Hết"}</span>
            </li>
            `
            ;break;
            case "loaiMon":
            html += 
            `
            <li id="loaiMon" class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">Loại món</h6>
                </div>
                <span id="spMa" class="text-muted">${monAn[key] == "loai1" ? "Chay" : "Mặn"}</span>
            </li>
            `
            ;break;
            case "giaKhuyenMai":
            html += 
            `
            <li id="giaKhuyenMai" class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">Giá khuyến mãi</h6>
                </div>
                <span id="spMa" class="text-muted">${monAn.giaKhuyenMai()}</span>
            </li>
            `
            ;break;
            case "hinhAnh":
            html += 
            `
            <li id="hinhAnh" class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">Hình món</h6>
                </div>
                <div width ="75">
                    <img src="${monAn[key]}" alt="..." width ="500">
                </div>
            </li>
            `
            ;break;
            default:
            html += 
            `
            <li id="${key}" class="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                    <h6 class="my-0">${key}</h6>
                </div>
                <span id="spMa" class="text-muted">${monAn[key]}</span>
            </li>
            `
        }
    }
    document.querySelector("#thongTinMonAn").innerHTML = html
    menu.themMonAn(monAn);
    menu.luuStorage();
}