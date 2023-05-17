// Làm đồng hồ 
function Time(){
    //tạo đối tựng trong lớp class thời gian
    var date = new Date();
    // lấy ngày
    var day = date.getDate();
    // lấy giờ
    var hour = date.getHours();
    // lấy phút
    var minute = date.getMinutes();
    // lấy giây
    var second = date.getSeconds();
    // tính toán số giây còn lại trong ngày
    var remainingSeconds = 24 * 60 * 60 - (hour * 60 * 60 + minute * 60 + second);
    // tính toán giờ, phút, giây còn lại
    var remainingHours = Math.floor(remainingSeconds / 3600);
    var remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
    var remainingSeconds = remainingSeconds % 60;
    // định dạng chuỗi hiển thị
    var dateString = day ;
    var timeString = update(remainingHours) + " " + update(remainingMinutes) + " " + update(remainingSeconds);
    document.getElementById("digital-clock").innerText = dateString + " " + timeString;
    setTimeout(Time, 1000);
  }
  function update(t){
    if(t < 10){
      return "0" + t;
    } else {
      return t;
    }
  }
  
  Time();