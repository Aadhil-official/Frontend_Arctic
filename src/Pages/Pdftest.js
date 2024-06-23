import React, { useRef } from 'react'
import jsPDF from 'jspdf'
import html2canvas from 'jspdf-html2canvas'
import { Button } from '@mui/material';


function Pdftest() {

    const pdfREF = useRef();

    const downloadPDF = () => {
        const input = pdfREF.current;
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4',true);//in here mm diamention we can pass differant pixel also pixel // a4 or a3 ...etc sheat format // true is optimization of pdf (optional) for reduse size of pdf//in here p - portraight, can use l as lanndscape mood
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = Math.min(pdfWidth/imgWidth,pdfHeight/imgHeight);
                const imgX = (pdfWidth - imgWidth*ratio)/2;
                const imgY = 30;
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
                pdf.save("download.pdf");
                // pdf.addImage(imgData, 'PNG', 0, 0, 211, 298);
                // pdf.save("download.pdf");
            });
    }

    return (
        <>
            <div ref={pdfREF}>
                {/* we can use png ; bcs svg not working; not compatible */}
                <h1>PDF Test</h1>
            </div>
            <Button variant='contain' onClick={downloadPDF}>Download pdf</Button>
        </>
    )
}

export default Pdftest