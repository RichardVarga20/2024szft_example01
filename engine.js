const allatok = ['kutya', 'macska', 'gekko', 'oroszlan', 'zsiraf', 'zebra']
function init() {
    document.getElementById('allatok').innerHTML = allatok.map( v =>
        `<div onclick="f('${v}')">${v}</div>`  
    ).join("")
}
function f (a) {
    console.log(a)
}