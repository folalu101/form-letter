$(document).ready(function() {
    $("#form-letter").submit(function(event) {
        const name1 = $("#name-1").val();
        const name2 = $("#name-2").val();
        const name3 = $("#name-3").val();
        const number1 = $("#number-1").val();
        const email1 = $("#email-1").val();
        const address1 = $("#address-1").val();
        const address2 = $("#address-2").val();
        const address3 = $("#address-3").val();
        const number2 = $("#number-2").val();
        const name4 = $("#name-4").val();
        const address4 = $("#address-4").val();
        const number3 = $("#number-3").val();
        const relative1 = $("#relative-1").val();


        $("#name-1").text(name1);
        $("#name-2").text(name2);
        $("#name-3").text(name3);
        $("#number-1").text(number1);
        $("#email-1").text(email1);
        $("#address-1").text(address1);
        $("#address-2").text(address2);
        $("#address-3").text(address3);
        $("#number-2").text(number2);
        $("#name-4").text(name4);
        $("#address-4").text(address4);
        $("#number-3").text(number3);
        $("#relative-1").text(relative1);

        $("#letter").show();

        event.preventDefault();

    });

});