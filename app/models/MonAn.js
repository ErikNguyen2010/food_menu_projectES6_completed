export class MonAn {
    maMon = "";
    tenMon = "";
    giaMon = 0;
    khuyenMai = 0;
    loaiMon = "";
    maTinhTrang = false;
    moTa = "";
    hinhAnh = "";
    constructor(){

    }
    giaKhuyenMai = function (){
        let result = this.giaMon - (this.giaMon * this.khuyenMai / 100)
        return result;
    }
}