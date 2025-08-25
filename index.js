document.getElementById('login-btn').addEventListener('click',function(e) {
    const number = 123456789;
    const pinCode = 1234;
    e.preventDefault()
    let numberFiled = parseInt(document.getElementById("number-filed").value)
    let pinCodeFiled = parseInt(document.getElementById("pin-id").value)
    if(number === numberFiled && pinCode === pinCodeFiled){
        window.location.href = "home.html";
        alert("✅ Login successfully!");
    }else{
        alert("please sumbit valid info good job")
    }
})