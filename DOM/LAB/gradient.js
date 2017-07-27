function attachGradientEvents() {
   let gradient=document.getElementById('gradient');
   gradient.addEventListener('mousemove',gradientMove);
   gradient.addEventListener('mouseout',gradientOut);
   function gradientMove(event) {
       let x=event.offsetX;
       let percent=(x/(event.target.clientWidth-1));

       percent=Math.trunc(percent*100);
       document.getElementById('result').textContent=percent + '%';
   }
    function gradientOut(event) {
        document.getElementById('result').textContent='';
    }
}