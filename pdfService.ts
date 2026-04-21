import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function generateInvoicePDF(orderData: any) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 800]);
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  page.drawText('INVOICE - Ek-Thikana', {
    x: 50,
    y: height - 50,
    size: 30,
    font,
    color: rgb(0.1, 0.1, 0.1),
  });

  page.drawText(`Order ID: #ET-2026-${orderData.id}`, { x: 50, y: height - 100, size: 12 });
  page.drawText(`Date: ${new Date().toLocaleDateString()}`, { x: 50, y: height - 120, size: 12 });
  
  page.drawLine({
    start: { x: 50, y: height - 150 },
    end: { x: 550, y: height - 150 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText('Product', { x: 50, y: height - 180, size: 12, font });
  page.drawText('Qty', { x: 400, y: height - 180, size: 12, font });
  page.drawText('Price', { x: 500, y: height - 180, size: 12, font });

  let y = height - 210;
  orderData.items.forEach((item: any) => {
    page.drawText(item.name, { x: 50, y, size: 10 });
    page.drawText(item.quantity.toString(), { x: 400, y, size: 10 });
    page.drawText(`৳${item.price}`, { x: 500, y, size: 10 });
    y -= 25;
  });

  page.drawLine({
    start: { x: 50, y: y - 10 },
    end: { x: 550, y: y - 10 },
    thickness: 1,
    color: rgb(0.8, 0.8, 0.8),
  });

  page.drawText('Total Amount:', { x: 400, y: y - 40, size: 14, font });
  page.drawText(`৳${orderData.totalAmount}`, { x: 500, y: y - 40, size: 14, font, color: rgb(0.9, 0.4, 0) });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  window.open(url, '_blank');
}
