var input = document.querySelector('.header__screen-number'); // lấy phần tử đầu tiên trong class header__screen-number để thay thế
var button = Array.from(document.querySelectorAll('.hover__number')); // tạo 1 mảng tên button, lấy tất cả phần tử trong class hover__number cho vô mảng
// hàm xoá lần lượt ký tự cuối cùng của dãy
function Delete(s) {
    var s2 = s.substring(0, s.length -1);
    return s2;
}

// hàm ktra sự tồn tại của toán tử
function Alive(s){
    var s2 = s.substring(s.length-1);
    return s2;
}
button.forEach(function(btn){
    // duyệt qua từng phần tử của mảng button với btn là từng biến ứng với vị trí các biến trong mảng
    btn.addEventListener('click', function(){
        // thêm sự kiện click cho đối tượng
        if(input.innerHTML == '0'){
            input.innerHTML = ''; // số đầu tiên trong dãy số là số 0 thì k in ra
        }
        
        // nút C trong bàn phím (xóa tất cả)
        if(btn.innerHTML == 'C'){
            input.innerHTML = '0'; 
        }
        // nút CE xóa ký tự nhập gần nhất
        else if(btn.id == 'delete'){
            var s = input.innerHTML;
            var s2 = Delete(s);
            input.innerHTML = s2;
            if(input.innerHTML.length == ''){
                input.innerHTML = '0';
            }
        }
        //tính căn bậc hai
        else if(btn.id == 'canbachai'){
            input.innerHTML = Math.sqrt(input.innerHTML);
        }
        // tính phần trăm
        else if(btn.id == 'divide'){
            input.innerHTML = input.innerHTML / 100;
        }
        // thêm dấu chia
        else if(btn.id == 'phepchia'){
            var s = input.innerHTML;
            if(Alive(s) == '+' ||Alive(s) == '-'||Alive(s) == '*'||Alive(s) == '/'){
                input.innerHTML = Delete(s);
                input.innerHTML = input.innerHTML + '/';
            }
            else{
                input.innerHTML = input.innerHTML + '/';
            }
        }
        // thêm dấu nhân
        else if(btn.id == 'phepnhan'){
            var s = input.innerHTML;
            if(Alive(s) == '+' ||Alive(s) == '-'||Alive(s) == '*'||Alive(s) == '/'){
                input.innerHTML = Delete(s);
                input.innerHTML = input.innerHTML + '*';
            }
            else{
                input.innerHTML = input.innerHTML + '*';
            }
        }
        // thêm dấu trừ
        else if(btn.id == 'pheptru'){
            var s = input.innerHTML;
            if(Alive(s) == '+' ||Alive(s) == '-'||Alive(s) == '*'||Alive(s) == '/'){
                input.innerHTML = Delete(s);
                input.innerHTML = input.innerHTML + '-';
            }
            else{
                input.innerHTML = input.innerHTML + '-';
            }
        }
        // thêm dấu cộng
        else if(btn.id == 'phepcong'){
            var s = input.innerHTML;
            if(Alive(s) == '+' ||Alive(s) == '-'||Alive(s) == '*'||Alive(s) == '/'){
                input.innerHTML = Delete(s);
                input.innerHTML = input.innerHTML + '+';
            }
            else{
                input.innerHTML = input.innerHTML + '+';
            }
        }
        // thêm dấu âm
        else if(btn.id == 'dautru'){
            var x = '-';
            var y = input.innerHTML;
            var kq = x.concat(y);
            if(y[0] == '-'){
                input.innerHTML = y;
            }else{
                input.innerHTML = kq;
            }
        }
        
        // thêm dấu ngoặc
        else if(btn.innerHTML == '( )'){
            input.innerHTML = '(' + input.innerHTML + ')';
        }
               
        // dấu chấm số thập phân
        else if(btn.id == 'daucham'){
            var s = input.innerHTML;
            if(input.innerHTML == ''){
                input.innerHTML = '0.';
            }
            else if(Alive(s) == '.'){
                input.innerHTML = input.innerHTML;
            }
            else{
                input.innerHTML = input.innerHTML + '.';
            }
        }
        
        // tính bình phương
        else if(btn.id == 'binhphuong'){
            input.innerHTML *= input.innerHTML;
        }
        // phân số
        else if(btn.id == 'phanso'){
            input.innerHTML = 1/input.innerHTML;
        }
        // thực hiện phép tính
        else if(btn.id == 'ketqua'){
            input.innerHTML = eval(input.innerHTML);
        }
        // onclick
        else{
            input.innerHTML += btn.innerHTML;
        }
        
        if (input.innerHTML.length > 13){
            input.innerHTML = input.innerHTML.substring(0,13);
        }

    })
})