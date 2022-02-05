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





let body = document.getElementById("body");
body.innerHTML = `
<style id = "style">
</style>
<header id="header">
    
</header>
<section id="section">


</section>
<footer id="footer">
</footer>
`;

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


let header = document.getElementById("header");
header.innerHTML = `
<h1>Postyk</h1>
<p>Версия:0.1</p>
<p>Веб - приложение для создания постов</p>
<p>Postyk:<a href="https://andrey-berlin.github.io/"> Различные версии. Нажать  здесь</a></p>
<!--div id="NetWebAppJs">



<p>Подробности о проекте по ссылке:<a href="https://netwebappjs.github.io"> https://netwebappjs.github.io</a></p>
</div-->

<form action="">
        <br>
        <label for="">
            
            1. Чтобы поменять цвет фона, нажмите на "цвет", настройте его и нажмите "ok":

        </label>
        <br>
        <input type="color" id="body background" name="favcolor" value="#ffffff">
        <br>
        <br>
        <button type="button" onclick="createBodyBackground()">OK</button>
        <br>
        <br>

        <label for="">
            2. Введите текст на любом языке и нажмите 'OK':
        </label>
        <br>
        <textarea type='text' id="text" style="width:300px; height:200px;">
        </textarea> 
         <br>
         <button type="button" onclick="createText()">OK.....</button>
         <br>
         <br>

         <label for="">
         3. Поменять размер текста, движением ползунка от -> 18px -> 100px:
         <label>
         <br>
         <input type="range" min="18" name="a" max="100" value="18" step="10" id="font size" >
         <!--output name="x" for="a b"></output-->
         <br>
         <button type="button" onclick="createText()">OK</button>
         <br>
         <br>
         
         <label for="">
         4. Выравнить текст вправо-влево:
         <label>
         <br>
         <input type = "range" min='0' max='100' value="10" step='10' id="poziciyaText"  >
         <br>
         <button type="button" onclick="createText()">OK</button>
         <br>
         <br>

         <label for="">
         5. Чтобы изменить цвет текста нажмите на "цвет", настройте его и нажмите "ok"
         </label>
         <br>
        
         <input type="color" id="colorText" name="favcolor" value="#000">
         <br>
         <br>
         <button type="button" onclick="createText()">OK....</button>
         <br>
         <br>
    </form>

<p>Ваш пост будет в рамке. Сделайте скриншот, сохраните картинку и поделитесь в соц сетях. </p>
<br>
`;

/*header.style.textAlign = 'center';*/
header.style.color = '#112244';
let text1 = document.getElementById("text1");




let section = document.getElementById("section");
section.innerHTML = `
       
        <p id="inText"></p>
        <p id ='p1'>©Postyk:)</p>

`;
section.style.border = 'thick double #32a1ce';
let p1 = document.getElementById('p1');
p1.style.textAlign = 'right';

let footer = document.getElementById('footer');
footer.innerHTML = `
<br>
<br>
<button onClick="shotit()">Сделать скриншот</button>
<br>
<p>Postyk:<a href="https://andrey-berlin.github.io/"> Различные версии. Нажать  здесь</a></p>
<br>
<p>C уважением, Берлин Андрей.</p>

`;

footer.style.textAlign = 'center';



function createBodyBackground() {

    let bodyBackground = document.getElementById("body background").value;
    section.style.background = bodyBackground;

}

function createText() {

    let text = document.getElementById("text").value;

    let inText = document.getElementById("inText");
    inText.innerHTML = text;

    let textsize = document.getElementById("font size").value;
    inText.style.fontSize = textsize + "px";

    let poziciyaText = document.getElementById("poziciyaText").value;
    inText.style.paddingLeft = poziciyaText + 'px';

    let colorText = document.getElementById("colorText").value;
    inText.style.color = colorText;


}
