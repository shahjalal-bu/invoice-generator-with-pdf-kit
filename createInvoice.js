const fs = require("fs");
const PDFDocument = require("pdfkit");

// Constants for section header styling
const sectionHeaderBg = "#54b6e7";
const sectionHeaderColor = "#FFFFFF";
const sectionHeaderFontSize = 10;

// Constants for normal text styling
const textColor = "#000000";
const textSize = 10;
const lineHeight = 20;

function createInvoice(invoice, path) {
  let doc = new PDFDocument({ size: "A4", margin: 30 });
  generateHeader(doc);
  generateSupplierInformation(doc, invoice);
  generateDeliveryInfo(doc);
  generateNote(doc);
  generateItemTable(doc);
  doc.end();
  doc.pipe(fs.createWriteStream(path));
}

function generateHeader(doc) {
  doc.image("logo.png", 20, 15, { width: 50 });
  const textY = 80;
  const textLeftX = 52;
  doc
    .fillColor(textColor)
    .font("Helvetica-Bold")
    .fontSize(20)
    .text("Purchase Control™", textLeftX, textY, { bold: true, fontSize: 20 });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Boston Office", textLeftX, textY + lineHeight * 1.5);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text(
      "One Post Office Square, Suite 3600",
      textLeftX,
      textY + lineHeight * 2.5
    );
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Boston MA, 02109", textLeftX, textY + lineHeight * 3.5);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("USA", textLeftX, textY + lineHeight * 4.5);

  const textRightX = 300;
  doc
    .font("Helvetica-Bold")
    .fontSize(20)
    .fillColor(textColor)
    .text("Purchase Order", textRightX, textY, { bold: true, fontSize: 20 });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("PO No.: PO00495", textRightX, textY + lineHeight * 1.5);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("04/26/2017", textRightX, textY + lineHeight * 2.5);
  doc
    .font("Helvetica")
    .fillColor(textColor)
    .fontSize(textSize)
    .text("PO Status Closed Completed", textRightX, textY + lineHeight * 3.5);
}

function generateSupplierInformation(doc, invoice) {
  const sectionStartY = 170;

  doc.rect(20, sectionStartY, 550, 22).fill(sectionHeaderBg);

  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("SUPPLIER", 52, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("DELIVERY ADDRESS", 320, sectionStartY + 8);

  // Text
  const textY = sectionStartY + 30;
  const textLeftX = 52;

  // Left 1st row
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Taylor Dickens", textLeftX, textY, { bold: true });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("70 Bowman St.", textLeftX, textY + lineHeight);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("South Windsor, CT 06074", textLeftX, textY + lineHeight * 2);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("USA", textLeftX, textY + lineHeight * 3);

  // Left 2nd row
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Terms:", textLeftX, textY + lineHeight * 4.5, { bold: true });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("30 Days", textLeftX + 35, textY + lineHeight * 4.5);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Phone No:", textLeftX, textY + lineHeight * 5.5, { bold: true });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("800-123-4567", textLeftX + 55, textY + lineHeight * 5.5);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Email:", textLeftX, textY + lineHeight * 6.5, { bold: true });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("john@taylordickens.com", textLeftX + 35, textY + lineHeight * 6.5);

  // Right side
  const textRightX = 300;

  // Right 1st row
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Boston Office", textRightX, textY);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("One Post Office Square, Suite 3600", textRightX, textY + lineHeight);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Boston MA, 02109", textRightX, textY + lineHeight * 2);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("USA", textRightX, textY + lineHeight * 3);

  // Right 2nd row
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Phone No:", textRightX, textY + lineHeight * 4.5, { bold: true });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("800-123-4567", textRightX + 55, textY + lineHeight * 4.5);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Attn:", textRightX, textY + lineHeight * 5.5, { bold: true });
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Patrick", textRightX + 30, textY + lineHeight * 5.5);
}

const generateDeliveryInfo = (doc, text) => {
  const sectionStartY = 350;

  // Section header
  doc.rect(20, sectionStartY, 550, 22).fill(sectionHeaderBg);

  // Heading left
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text(" DELIVERY DATE", 52, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("REQUESTED BY", 52 + 120, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("APPROVED BY", 52 + 240, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("DEPARTMENT", 52 + 360, sectionStartY + 8);

  // Text
  const textY = sectionStartY + 30;
  const textX = 52;

  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("04/28/2017", textX, textY);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Patrick Smith", textX + 120, textY);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Patrick Smith", textX + 240, textY);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("IT Department", textX + 360, textY);
};

const generateNote = (doc, text) => {
  const sectionStartY = 400;

  // Section header
  doc.rect(20, sectionStartY, 550, 22).fill(sectionHeaderBg);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("NOTES", 52, sectionStartY + 8);

  // Text
  const textY = sectionStartY + 30;
  const textX = 52;

  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("Description ABC", textX, textY);
};

const generateItemTable = (doc, text) => {
  const sectionStartY = 450;

  // Section header
  doc.rect(20, sectionStartY, 175, 22).fill(sectionHeaderBg);
  doc.rect(196, sectionStartY, 80, 22).fill(sectionHeaderBg);
  doc.rect(277, sectionStartY, 56, 22).fill(sectionHeaderBg);
  doc.rect(334, sectionStartY, 78, 22).fill(sectionHeaderBg);
  doc.rect(413, sectionStartY, 75, 22).fill(sectionHeaderBg);
  doc.rect(489, sectionStartY, 78, 22).fill(sectionHeaderBg);

  // Heading left
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("ITEM NAME", 50, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("ITEM CODE", 50 + 150, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("QTY.", 50 + 250, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("ITEM PRICE", 50 + 300, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("DISC.", 50 + 380, sectionStartY + 8);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("TOTAL", 50 + 450, sectionStartY + 8);

  // Text
  const textY = sectionStartY + 30;
  const textX = 52;

  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  items.forEach((item, index) => {
    doc
      .font("Helvetica")
      .fontSize(textSize)
      .fillColor(textColor)
      .text("Nescafe Gold Blend Coffee 7oz", textX, textY + lineHeight * index);
    doc
      .font("Helvetica")
      .fontSize(textSize)
      .fillColor(textColor)
      .text("GD2-00350", textX + 150, textY + lineHeight * index);
    doc
      .font("Helvetica")
      .fontSize(textSize)
      .fillColor(textColor)
      .text("1.00", textX + 250, textY + lineHeight * index);
    doc
      .font("Helvetica")
      .fontSize(textSize)
      .fillColor(textColor)
      .text("34.99", textX + 300, textY + lineHeight * index);
    doc
      .font("Helvetica")
      .fontSize(textSize)
      .fillColor(textColor)
      .text("0.00", textX + 380, textY + lineHeight * index);
    doc
      .font("Helvetica")
      .fontSize(textSize)
      .fillColor(textColor)
      .text("34.99", textX + 450, textY + lineHeight * index, {
        align: "right",
      });
  });

  // Order total calculate
  const orderTotalButtonY = textY + lineHeight * items.length;

  doc
    .rect(doc.page.width - 200, orderTotalButtonY, 80, 25)
    .fill(sectionHeaderBg);
  doc
    .fillColor(sectionHeaderColor)
    .fontSize(sectionHeaderFontSize)
    .text("Order Total", textX + 355, orderTotalButtonY + 10);
  doc
    .font("Helvetica")
    .fontSize(textSize)
    .fillColor(textColor)
    .text("$ 34.99", textX + 440, orderTotalButtonY + 10, {
      align: "right",
    });
};

module.exports = {
  createInvoice,
};
