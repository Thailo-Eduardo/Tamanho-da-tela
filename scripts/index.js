function sizeOfThings(){
  var larguraJanela = window.innerWidth;
  var alturaJanela= window.innerHeight;
  
  var larguraTela = screen.width;
  var alturaTela = screen.height;
  
  document.querySelector('.window-size').innerHTML = larguraJanela + ' x ' + alturaJanela;
  document.querySelector('.screen-size').innerHTML = larguraTela + ' x ' + alturaTela;

};

sizeOfThings();

window.addEventListener('resize', function(){
	sizeOfThings();
});