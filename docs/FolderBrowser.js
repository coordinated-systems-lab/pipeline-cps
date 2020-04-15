var m_selectedFolderPackage = null; // the selected folder/package

// Handle link click on 'view folders' or 'view packages'; hide/show the folder and package trees
function ViewTree_Click(strViewBy) {
if (strViewBy == 'folder') {
document.getElementById('spnViewFolders').style.textDecoration = 'underline';
document.getElementById('spnViewPackages').style.textDecoration = 'none';
document.getElementById('divFolderTree').style.display = 'block';
document.getElementById('divPackageTree').style.display = 'none';
}
else {
document.getElementById('spnViewFolders').style.textDecoration = 'none';
document.getElementById('spnViewPackages').style.textDecoration = 'underline';
document.getElementById('divFolderTree').style.display = 'none';
document.getElementById('divPackageTree').style.display = 'block';
}
// Clear entities in entity browser
document.getElementById('tdEntitiesBorder').innerHTML = '';
}

// Handle a folder/package browser image click; show or hide child folders/packages
function T_C(objElement) {
// Get all children of the DIV parent of the clicked SPAN; the SPAN contains the folder/package image and link
childElements = objElement.parentNode.parentNode.childNodes;
for (index = 0; index < childElements.length; index++) {
// If the child node is part of the next level in the folder/package hierarchy, then hide or show it
if (childElements[index].className == 'cLn') {
if (childElements[index].style.display == 'none' || childElements[index].style.display == '') {
childElements[index].style.display = 'block';
}
else {
childElements[index].style.display = 'none';
}
}
}
}

// Handle a folder/package browser name click; fill entity browser based on the selected folder/package
function FP_C(objElement, guidID) {
if (m_selectedFolderPackage != null) {
m_selectedFolderPackage.style.textDecoration = 'none';
}
m_selectedFolderPackage = objElement;
m_selectedFolderPackage.style.textDecoration = 'underline';
// From linked .js file
FillEntityBrowser(guidID);
}
