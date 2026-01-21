function contar() {
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let passo = document.getElementById('pass')
    let res = document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'      
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(num1.value)
        let f = Number(num2.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }        
        res.innerHTML += `\u{1F3C1}`
    }
}