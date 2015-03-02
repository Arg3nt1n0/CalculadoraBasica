$(function(){

$("#calculadora tr td").click(function(){
if ($(this).text() != "C" && $(this).text() != "=")
{
$("#resultado_calculadora").append($(this).text());
}
if ($(this).text() == "=")
{
operacion = $("#resultado_calculadora").text().split("");
total = "";
for ( var index in operacion)
{
total = total + operacion[index];

}
$("#resultado_calculadora").text(eval(total));
}
if($(this).text() == "C")
{
$("#resultado_calculadora").text("");
}
});
});
