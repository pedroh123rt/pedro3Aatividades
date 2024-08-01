let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}
 function palavraAleatoria(){
    let palavra = ["DARKEST KNIGHT", "Dr.Manhattan", "Ghost Rider"];
   return random(palavra);
   
 }

 function inicializaCores(){
   background("black");
  fill("darkred");
  textSize(45);
  textAlign(CENTER, CENTER);
 }
 function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
   return parcial;
 }

function draw() {
  
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200)

}