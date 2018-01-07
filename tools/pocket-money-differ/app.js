function processFormData() {
    var easyCardRemains = document.getElementById('easyCardRemains').value

    var walletRemains = document.getElementById('walletRemains').value
    var ynabRemains = document.getElementById('ynabRemains').value

    var result = calc(ynabRemains, walletRemains, easyCardRemains) 
    alert(result)
}

function calc (ynabRemains, walletRemains, easyCardRemains) {
    return (ynabRemains - walletRemains - easyCardRemains)
}