function doSomething() {
        if (document.getElementById("neco").innerText == "3") {
                document.getElementById("neco").innerText = "2"
                console.log("if")
        }
        else {
                document.getElementById("neco").innerText = "3"
                console.log("else")
        }
}
function generatePlnaMoc() {
        alert("heloo");
}
function somethingDo() {
        document.getElementById("h1").innerText = "testak"
}
function saveAsPDF() {
        const doc = new jsPDF();

        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
}
function createPDF() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const content = document.getElementById("signedBy").innerText;

        doc.text(content, 10, 10);
        doc.save("div_content.pdf");
}
function changeIt() {
        let x = document.getElementById("signedBy").value;
        console.log("This" + x);
        document.getElementById("neco").innerText = x;

}
function createPDF2() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('Plná moc', 105, 20, { align: 'center' });

        doc.setFontSize(12);

        doc.addFont('../fonts/DejaVuSans.ttf', 'DejaVuSans', 'bold');
        doc.setFont('DejaVuSans');
        console.log(doc.getFontList())

        doc.text('Já, níže podepsaný(á):', 20, 40);
        doc.text('.............................................................', 20, 50);
        doc.text('Rodné číslo / IČ:', 20, 60);
        doc.text('.............................................................', 20, 70);
        doc.text('Trvale bytem (nebo sídlo):', 20, 80);
        doc.text('.............................................................', 20, 90);

        doc.text('z m o c ň u j i', 105, 100, { align: 'center' });

        doc.text('Jméno a příjmení / název společnosti:', 20, 110);
        doc.text('.............................................................', 20, 120);
        doc.text('Rodné číslo / IČ:', 20, 130);
        doc.text('.............................................................', 20, 140);
        doc.text('Trvale bytem (nebo sídlo):', 20, 150);
        doc.text('.............................................................', 20, 160);

        doc.text('pro (určení konkrétního právního úkonu/ nebo úkonů):', 20, 170);
        doc.text('provení přepisu vozidla v registru silničních vozidel', 20, 180);
        doc.text('na místně příslušném obecním úřadě.', 20, 190);

        doc.text('Vozidlo (značka, typ):', 20, 200);
        doc.text('.............................................................', 20, 210);
        doc.text('Registrační značka (RZ):', 20, 220);
        doc.text('.............................................................', 20, 230);
        doc.text('VIN (číslo karoserie):', 20, 240);
        doc.text('.............................................................', 20, 250);

        doc.text('V ............................... dne .........................', 20, 270);
        doc.text('.............................................................', 20, 280);
        doc.text('Zmocnitel', 20, 290);

        doc.text('Plnou moc přijímám.', 20, 310);
        doc.text('V ............................... dne .........................', 20, 320);
        doc.text('.............................................................', 20, 330);
        doc.text('Zmocněnec', 20, 340);

        doc.save('Plna-moc.pdf');
}

