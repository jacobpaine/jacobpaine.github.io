// Global functions
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));

}

$(function(){
  var boxNum = 330;
  for(var i = 0; i < boxNum; i++){
    $('.board').append(`
        <div class='grid-item'>
          <div class="box" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        </div>
      `);
  }

})
