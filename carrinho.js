// ADICIONA NO CARRINHO
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    if (value) {
        let element = document.getElementById(value);
        if (element) {
            element.style.display = "flex";
        }
    }
}

// CALCULA SUBTOTAL
const textoSubtotal = document.getElementById("subtotal")

let subtotal = 0;

for (let i=0; i < localStorage.length; i++) {
    const item = localStorage.key(i)
    console.log(item)
    if (item == "item1" || item == "item2" || item == "item3" || item == "item4" || item == "item5" || item == "item6") {
        subtotal += 500;
    } else if (item == "item7" || item == "item8" || item == "item9" || item == "item10" || item == "item11" || item == "item12") {
        subtotal += 800;
    } else if (item == "item13" || item == "item14" || item == "item15" || item == "item16" || item == "item17" || item == "item18") {
        subtotal += 2000;
    } else if (item == "item19" || item == "item20" || item == "item21" || item == "item22" || item == "item23" || item == "item24") {
        subtotal += 200;
    } else if (item == "item25" || item == "item26" || item == "item27" || item == "item28" || item == "item29" || item == "item30") {
        subtotal += 5000;
    } else if (item == "item31" || item == "item32" || item == "item33" || item == "item34" || item == "item35" || item == "item36") {
        subtotal += 700;
    }
}

textoSubtotal.textContent="R$"+subtotal+",00"

localStorage.setItem("subtotal", subtotal)
