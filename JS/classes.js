/*document.getElementById("dco").innerHTML="this is the new text";changes element inside html */

/*

    
/*
document.getElementById("id1").style.display=""; */

document.getElementById("dropList1").addEventListener("click",dl1);

function dl1(){

    document.getElementById("id1").style.display="flex"; 
    document.getElementById("id2").style.display="none"; 
    document.getElementById("id3").style.display="none"; 
}
document.getElementById("dropList2").addEventListener("click",dl2);

function dl2(){

    document.getElementById("id1").style.display="none"; 
    document.getElementById("id2").style.display="flex"; 
    document.getElementById("id3").style.display="none"; 
}
document.getElementById("dropList3").addEventListener("click",dl3);

function dl3(){

    document.getElementById("id1").style.display="none"; 
    document.getElementById("id2").style.display="none"; 
    document.getElementById("id3").style.display="flex"; 
}