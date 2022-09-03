const form = document.getElementById('formulario-agrgar');
const categoria = document.getElementById('typetipo');
const tipo = document.getElementById('descripciontype');
const valor = document.getElementById('valortype');
const parrafo = document.getElementById('parrafo-a-mostrar');

form.addEventListener('submit', (art)=>{
    art.preventDefault();
    let texto = '';
    let entrar = false;
    if(categoria.value.length < 3) {
        texto = 'caracteres minimos para categoria es de 3😊';
        entrar = true;
    } else if (tipo.value.length < 3) {
        texto = 'caracteres minimos para tipo es de 3😊';
        entrar = true;
    } else if(valor.value.length < 1) {
        texto = 'minimo de un numero.😊';
        entrar = true;
    } else {
        let transactionFormData = new FormData(form);
        let transactionTableRef = document.getElementById('tabla-de-transacciones');
        newTransactionRowRef = transactionTableRef.insertRow(1);
    
        newTypeCellRef = newTransactionRowRef.insertCell(0);
        newTypeCellRef.textContent = transactionFormData.get('categoria');

        newTypeCellRef = newTransactionRowRef.insertCell(1);
        newTypeCellRef.textContent = transactionFormData.get('tipo');

        newTypeCellRef = newTransactionRowRef.insertCell(2);
        newTypeCellRef.textContent = transactionFormData.get('valor');
        entrar = true;
    }
    if(entrar) {
        parrafo.innerHTML = texto;
    }
});