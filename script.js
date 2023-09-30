const container = document.querySelector('.container'),
qrInput = container.querySelector('.card input'),
generateBtn = container.querySelector('.card button')
qrImg = container.querySelector('.qr-code .img')


    generateBtn.addEventListener('click', () => {
        let qrValue = qrInput.value;
        if (!qrValue) {
            alert('Insira uma URL ou texto para gerar um QR Code!')
            return;
        }
        generateBtn.innerHTML = "Gerando QR Code...";
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
        qrImg.addEventListener('load', () => {
            generateBtn.innerText = "Gerar QRCode";
            container.classList.add('active');
        });
    });


qrInput.addEventListener('keyup', () => {
    if(!qrInput.value) {
        container.classList.remove('active');
        qrImg.src = '';
    }
})