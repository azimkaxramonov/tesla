let btns = document.querySelectorAll('.elem button')
let teslaimg = document.querySelector('.teslaimg')
let tprice = document.querySelector('.textprice')
let powereserve = document.querySelector('.powerreserve')
let changecolor = {
    black:'img/image 1.svg',
    white:"img/image 9.svg",
    beige:'img/image 8.svg'
}
let price ={
    blackprice:'$89,990',
    whiteprice:'$91,990',
    beigeprice:'$93,990'
}
let reserve ={
    blackreserve:'750км',
    whitereserve:'800км',
    beigereserve:'850км'
}
btns.forEach(btn => {
    btn.onclick = () => {
       
       let keypower = btn.getAttribute('data-power_reserve')
        let keyprice = btn.getAttribute('data-price')
        let key = btn.getAttribute('data-teslasalon')
        powereserve.innerHTML = reserve[keypower]
        tprice.innerHTML= price[keyprice]
        teslaimg.src = changecolor[key]
    }
})