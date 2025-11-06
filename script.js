$(document).ready(function(){
  $("#studentForm").submit(function(e){
    e.preventDefault();

    if($("#name").val()=="" || $("#email").val()=="" || $("#phone").val()=="" || 
       $("#course").val()=="" || $("#address").val()=="") {
      alert("Please fill all fields!");
      return false;
    }

    $.ajax({
      url: "submit.php",
      type: "POST",
      data: $("#studentForm").serialize(),
      success: function(data){
        $("#result").html(data).fadeIn();
        $("#studentForm")[0].reset();
      }
    });
  });
});
