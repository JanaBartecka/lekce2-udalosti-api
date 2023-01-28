// tady je místo pro náš program

function cervenyPoKliknuti() {
    let prvniOdstavec=document.querySelector('.prvniUkol');
    prvniOdstavec.classList.toggle('cervena-trida');
    console.log(prvniOdstavec);
}


function vetsiPoKliknuti() {
  let druhyOdstavec=document.querySelector('.druhyUkol');
  let fontSize=window.getComputedStyle(druhyOdstavec).getPropertyValue("font-size")
  druhyOdstavec.style.fontSize=parseInt(fontSize)+1+'px'

}

let druhyOdstavecMInus=document.querySelector('.druhyUkol');
var mensiPismo = document.querySelector('.druhyUkolMinus')

mensiPismo.onclick = function() {
  let fontSizeMinus=window.getComputedStyle(druhyOdstavecMInus).getPropertyValue("font-size")
  druhyOdstavecMInus.style.fontSize =  parseInt(fontSizeMinus) - 1 + 'px';
}

// var odstraneniStylu=document.querySelector('removeProperty')

// odstraneniStylu.onclick = function() {
function odstraneniStylu() {
  var myDocument=document.styleSheets;
  for (var i in myDocument) {
    if (myDocument[i].ownerNode.attributes.href.textContent == "style.css") {
      var myStyleSheet=myDocument[i];
      for (var j in myStyleSheet.cssRules) {
        if (myStyleSheet.cssRules[j].selectorText== ".druhyUkol") {
          let myCssRule=myStyleSheet.cssRules[j];
          let barva=myCssRule.style;
          barva.removeProperty('color');
        }
      }
    }
  }

}

let zvuk=document.querySelector('#zvuk')

function Start() { 
  zvuk.play()
}

function Stop() { 
  zvuk.pause()
}

function Restart() { 
  zvuk.currentTime=0
}

function Volume0() { 
  zvuk.volume=0
}

function Volume05() { 
  zvuk.volume=0.5
}

function Volume1() { 
  zvuk.volume=1
}