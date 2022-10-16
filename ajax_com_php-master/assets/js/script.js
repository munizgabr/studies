$('#form1').submit(function (e){
    e.preventDefault();

    // Get the name
    let name = $('#name').val()
    // Get comment
    let comment = $('#comment').val()
    // Get email
    let email = $('#email').val()

    // Ajax request
    $.ajax({
        url: 'http://localhost/studies/ajax_com_php-master/inserir.php',
        method: 'POST',
        data: {
            name: name,
            comment: comment,
            email: email

        },
        dataType: 'json'
    }).done(function (result){
        $('#name').val('')
        $('#comment').val('')
        $('#email').val('')
        getComments()
    })
})

function getComments() {
    $.ajax({
        url: 'http://localhost/studies/ajax_com_php-master/selecionar.php',
        method: 'GET',
        dataType: 'json'
    }).done(function (result){
        for (let i = 0; i < result.length; i++) {
            $('.box_comment').prepend('<div class="b_comm"><h4>' +result[i].name+ ' - ' +result[i].email+ '</h4><p>' +result[i].comment+ '</p></div>')
        }
    })
}
getComments()