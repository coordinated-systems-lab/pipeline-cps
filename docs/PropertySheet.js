
// Handle link click on 'view attributes' or 'view parameters'; hide/show the sheets
function ViewSheet_Click(strViewSheet) {
if (strViewSheet == 'attributes') {
document.getElementById('spnViewAttributes').style.textDecoration = 'underline';
document.getElementById('spnViewParameters').style.textDecoration = 'none';
document.getElementById('tblAttribSheet').style.display = 'block';
document.getElementById('tblParamSheet').style.display = 'none';
}
else {
document.getElementById('spnViewAttributes').style.textDecoration = 'none';
document.getElementById('spnViewParameters').style.textDecoration = 'underline';
document.getElementById('tblAttribSheet').style.display = 'none';
document.getElementById('tblParamSheet').style.display = 'block';
}
}

// Handle 'views' combo change; load the selected page
function View_Change() {
strURL = document.getElementById('cmbEntityViews').value;
window.location.assign(strURL);
}
