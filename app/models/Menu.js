import { DANH_SACH_MON_AN } from "../util/settings.js";
import { MonAn } from "./MonAn.js";

export class Menu{
    arrMonAn = [];
    constructor(){

    };
    themMonAn = (monAn) =>{
        let result = this.arrMonAn.push(monAn);
        return result;
    }
    xoaMonAn = (maMonClick) =>{
        this.arrMonAn = this.arrMonAn.filter(monAn => monAn.maMon !== maMonClick)
        return this.arrMonAn;
    }
    layMonAn = (maMonClick) =>{
        let result = this.arrMonAn.find(monAn => monAn.maMon === maMonClick)
        return result
    }
    suaMonAn = (monAn) => {
        let result = this.layMonAn(monAn.maMon);
        for(let key in monAn){
            result[key] = monAn[key]
        }
    }
    luuStorage =() =>{
        let sMangMonAn = JSON.stringify(this.arrMonAn);
        localStorage.setItem(DANH_SACH_MON_AN, sMangMonAn)
    }
    layStorage = () =>{
        if(localStorage.getItem(DANH_SACH_MON_AN)){
            let sMangMonAn = localStorage.getItem(DANH_SACH_MON_AN);
            this.arrMonAn = JSON.parse(sMangMonAn)
        }
    }
    renderTableMenu = (selector) => {
        let html = '';
        for(let index of this.arrMonAn){
            let monAn = new MonAn();
            monAn ={...monAn, ...index}
            html +=
            `
                <tr>
                    <td>${monAn.maMon}</td>
                    <td>${monAn.tenMon}</td>
                    <td>${monAn.loaiMon == "loai1" ? "Chay" : "Mặn"}</td>
                    <td>${monAn.giaMon}</td>
                    <td>${monAn.khuyenMai}</td>
                    <td>${monAn.giaKhuyenMai()}</td>
                    <td>${monAn.maTinhTrang == "1" ? "Còn" : "Hết"}</td>
                    <td>
                        <button class = "btn btn-danger" onclick = "xoaMonAn('${monAn.maMon}')">Xóa</button>
                        <button data-toggle="modal"  data-target="#exampleModal" class = "btn btn-primary" onclick ="suaMonAn('${monAn.maMon}')">Sửa</button>
                    </td>
                </tr>
            
            `
        }
        document.querySelector(selector).innerHTML = html
    }
    sortMonAn = (value, selector) =>{
        let dsMonAn = [...this.arrMonAn]
        if(value !== "all"){
            this.arrMonAn = this.arrMonAn.filter(monAn => monAn.loaiMon === value)
        }
        this.renderTableMenu(selector);
        this.arrMonAn = dsMonAn
    }
}