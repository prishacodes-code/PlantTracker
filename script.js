function login(){

let role = document.getElementById("role").value;

if(role === "owner"){
window.location.href = "owner.html";
}
else{
window.location.href = "worker.html";
}

}
