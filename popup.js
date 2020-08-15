var domains = ["test item"]
$(function(){
    $("#action").click(function(){
        domains.push($("#domains").val());
        alert(domains);
        $("#domains").val("");
        alert("Domain added.")
    })
})