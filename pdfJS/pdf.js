function getPDF() {
    //dom
    aValue = document.getElementById('a').value;
    bValue = document.getElementById('b').value;
    cValue = document.getElementById('c').value;
    var doc = new jsPDF();
    doc.addFont('Helvetica', 'Helvetica', 'normal')
    doc.text(aValue, 10, 10);
    doc.text(bValue, 10, 20)
    doc.text(cValue, 10, 30)
    doc.addPage();
    doc.text('Second page', 10, 10);
    doc.save('Test.pdf');
}