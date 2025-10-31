function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    
    var data = new Date();
    var horaAtual = data.getHours();

    msg.innerHTML = `Agora são <b>${horaAtual} horas</b>.`;

    if (horaAtual >= 0 && horaAtual < 12) {
        // BOM DIA!!
        img.src = 'images/manha.jpg';
        document.body.style.backgroundColor = '#d1af8b';
    }else if(horaAtual >= 12 && horaAtual < 18) {
        // BOA TARDE!!
        img.src = 'images/tarde.jpg';
        document.body.style.backgroundColor = '#216377ff';
    } else {
        //BOA NOITE
        img.src = 'images/noite.jpg';
        document.body.style.backgroundColor = '#13444c';
    }
    
}
