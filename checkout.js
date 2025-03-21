let subtotal = Number(localStorage.getItem("subtotal"))
let textoSubtotal = document.getElementById("subtotal")
let textoTotal = document.getElementById("precoTotal")

textoSubtotal.textContent="R$"+subtotal+",00"

let total = subtotal + 40
textoTotal.textContent="R$"+total+",00"




const finalizar = document.getElementById("concluirTodos")
document.getElementById('concluirTodos').addEventListener('click', function() {
    document.getElementById('formPessoal').submit();
    document.getElementById('formEndereco').submit();
    document.getElementById('formPagamento').submit();

    window.location.href = 'finalizado.html';
})
