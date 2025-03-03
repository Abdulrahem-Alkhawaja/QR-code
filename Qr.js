const continar = document.querySelector(".continar"),
qrInput = continar.querySelector(".form input"),
generateBtn = continar.querySelector(".form button"),
qrImg = continar.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", function(){
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innertext = " generating QR code...";
    qrImg.src =  `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", function(){ 
        continar.classList.add("active");
        generateBtn.innertext = " Generate QR code";
    });
});

qrInput.addEventListener("keyup", function(){ 
    if(!qrInput.value.trim()){
        continar.classList.remove("active");
        preValue = "";
    }
});