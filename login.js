function adduser(){
   var player1name=document.getElementById("player1_nameinput").value;
   var player2name=document.getElementById("player2_nameinput").value;
    localStorage.setItem("player1namekey",player1name);
    localStorage.setItem("player2namekey",player2name);
    window.location="game_page.html";
}