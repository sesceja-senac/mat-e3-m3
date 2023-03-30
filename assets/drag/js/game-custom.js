

// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPile"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1"),
  document.querySelector('#slot-2'), 
  document.querySelector('#slot-3'),
  document.querySelector("#slot-4"),
  document.querySelector('#slot-5'), 
  document.querySelector('#slot-6'),
  document.querySelector("#slot-7"),
  document.querySelector('#slot-8'), 
  document.querySelector('#slot-9')
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function(e) {
  console.log(scrollable)
    if (! scrollable) {
        e.preventDefault();
    }
}

document.addEventListener('touchmove', listener, { passive:false });

// Solução ao dragindrop

dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
     // return el.dataset.target == target.id;
      return el.classList.contains(target.id);
  }
}).on('drag', function(el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function(){
  scrollable = true;

  $('#bgmodal-acerto').modal('show')
      // audio.setAttribute('src','audios/acerto.mp3'); //change the source
      // audio.load(); //load the new source
      // audio.play(); //play

}).on("cancel", function(el, source, target){
  scrollable = true;

      // Executa o áudio e a modal necessária
      // Também é possível fazer algum teste aqui caso necessário.

      var item = el;
      //console.log(item)

      if(item.classList.contains('slot-3') || item.classList.contains('slot-5') || item.classList.contains('slot-8')){
        $('#bgmodal-erro-relativa').modal('show')
      }else{
        $('#bgmodal-erro-absoluta').modal('show')
      }
      
      
      // audio.setAttribute('src','audios/erro.mp3'); //change the source
      // audio.load(); //load the new source
      // audio.play(); //play
});

// document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });