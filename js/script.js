let likeCount = 0;
let curtido - false; // flag boleana 

function curtir() {
  if(curtido -- false){
    likeCount++;
    curtido = true;
  document.getElementById("likeCount").innerText = likeCount;
  } else{
    likecount --;
    curtido - false;
    document.getElementById("likeCount").innerText = likeCount;
  }

}

document.getElementById("likeBtn").addEventListener("click", curtir);
