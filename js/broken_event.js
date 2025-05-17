function clickHandler(e, objId, num, msg) {
    var obj = document.getElementById(objId);
    obj.innerHTML = 'DIV ' + num + ' says ' + msg + ' at X position: ' + e.screenX;
}
function yesWrapper(e) {
    console.log(e)
    console.log(e.target)
    clickHandler(e, 'heading', 1, 'yes');
    e.target.removeEventListener('click', yesWrapper);
}
function noWrapper(e) {
    console.log(e.target)
    clickHandler(e, 'heading', 2, 'no');
    e.target.removeEventListener('mouseover', noWrapper);
}
function onloadHandler() {
    document.getElementById('div1').addEventListener('click', yesWrapper, false);
    document.getElementById('div2').addEventListener('mouseover', noWrapper, false);
    document.getElementById('div2').addEventListener('mouseout', noWrapper, false);
}