// $(document).ready(function(){
//     $("form").submit(function(event){
//         var formData = {
//             name: $("#name").val(),
//             email: $("#email").val(),
//             alias: $("#alias").val(),
//         }
//         $(".form_response").removeClass("success")
//         $(".form_response").html("<h1>Form</h1>")
//         $.ajax({
//             type: "POST",
//             url: "process.php",
//             data: formData,
//             dataType: "json",
//             encode: true,
//         }).done(function (data){
//                 $(".form_response").addClass("success")
//                 $(".form_response").append("<p>Nome: "+formData.name+"</p>")
//                 $(".form_response").append("<p>Email: "+formData.email+"</p>")
//                 $(".form_response").append("<p>Alias: "+formData.alias+"</p>")
//         });
//         event.preventDefault();
//     })
// })

   