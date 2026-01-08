const qrInput = document.getElementById('qr-input');
const qrButton = document.getElementById('qr-button');
const qrImg = document.getElementById('qr-img');

console.log(qrButton, qrImg, qrInput);

qrButton.addEventListener('click', ()=>{
  const inputValue = qrInput.value;
  console.log(inputValue);
  
  if(!inputValue){ // not inputValue == ''
    alert("Please enter a valid URL / text");
    return;
  }else{
    qrImg.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
    qrImg.alt = `QR code for ${inputValue}`
  }
});


// script file for the qrcode genearto project 