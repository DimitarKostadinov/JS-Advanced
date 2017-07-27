function focus(){
    let input=document.getElementsByTagName('input');
    Array.from(input).forEach(i=>{
        i.addEventListener('focus',(event)=>{
            event.target.parentNode.className='focused';
        });
        i.addEventListener('blur',(event)=>{
            event.target.parentNode.removeAttribute('class');
        });
    })

}