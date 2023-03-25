const txtn1=document.getElementById("n1")
const txtn2=document.getElementById("n2")
const resps1=document.getElementById("resps")
const respr1=document.getElementById("respr")
const respm1=document.getElementById("respm")
const respd1=document.getElementById("respd")
const botons=document.getElementById("bs")
const botonr=document.getElementById("br")
const botonm=document.getElementById("bm")
const botond=document.getElementById("bd")
const botont=document.getElementById("bt")

botons.addEventListener('click',suma)
botonr.addEventListener('click',resta)
botonm.addEventListener('click',multi)
botond.addEventListener('click',division)
botont.addEventListener('click',todo)
function suma(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp=op1+op2
    resps1.innerText=resp
}
function resta(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp=op1-op2
    respr1.innerText=resp
}
function multi(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp=op1*op2
    respm1.innerText=resp
}
function division(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resp=op1/op2
    respd1.innerText=resp
}
function todo(){
    const op1=parseFloat(txtn1.value)
    const op2=parseFloat(txtn2.value)
    let resps=op1+op2
    let respr=op1-op2
    let respm=op1*op2
    let respd=op1/op2
    resps1.innerText=resps
    respr1.innerText=respr
    respm1.innerText=respm
    respd1.innerText=respd
}