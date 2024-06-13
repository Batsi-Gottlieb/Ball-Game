function check(e){
    var x=Document.getElementsByTagName(value)
    // for(let z=0;z<x.lengt
    if (e.keyCode < 48 || e.keyCode > 57||x>9) {
        e.preventDefault();
    }
}



function nextpage(){
localStorage.setItem('id', document.getElementsByTagName("input").value);
 window.open('../html/openpage.html')
}