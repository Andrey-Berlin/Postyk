let shotit = function() {
    html2canvas(document.getElementById('section'), {
        onrendered: function(canvas) {
            document.body.appendChild(canvas);
            leCanvas = document.getElementsByTagName("canvas")[0];
            let img = leCanvas.toDataURL("image/png");
            document.write('<br><br><span style="font:14px normal Helvetica, Arial; font-weight: bold; color:#13a6f5; margin-left:16px">Это Ваш скриншот. Нажав, можете сохранить как картинку. Чтобы вернуться, обновите страницу браузера:</span> <br><br> <img src="' + img + '"/>');
        },
        /*width: 390,
        height: 220*/
    });
}





/*let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
    
</header>
<section id="section">


</section>
<footer id="footer">
</footer>
`;*/

let style = document.getElementById("style");
style.innerHTML = `

#body background{
    
    width: 50%;

}   

#text{

    text-align: center;
    font-size: 20px;
    padding:10px 0px 0px 0px;


}



h1, p, form {

text-align: center;

}

section {
  
 background:#ffffff; 
  
}

#NetWebAppJs{

text-align: center;

}

ul {
    margin-left: 20%;
}

li {

    padding: 20px;  

    
}




`;


