/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { templateData } from '@components/Templates/index';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import classes from './index.module.scss';

function TemplatePreview() {
  const pdfRef = useRef<HTMLDivElement>(null);

  const {
    templateUuids,
    templatesDataWithUuid,
  } = useTemplate();

  useEffect(() => {
    if (templateUuids.length === 0) {
      const link = document.createElement('a');
      link.href = '/page-builder';
      document.body.appendChild(link);
      link.click();
    }
  }, [templateUuids]);

  const download = () => {
    const input = pdfRef.current;

    if (input) {
      html2canvas(input).then(canvas => {
        const imageData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imageWidth = canvas.width;
        const imageHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imageWidth, pdfHeight / imageHeight);
        const imageX = (pdfWidth - imageWidth * ratio) / 2;
        const imageY = 30;
        pdf.addImage(imageData, 'PNG', imageX, imageY, imageWidth * ratio, imageHeight * ratio);
        pdf.save('page.pdf');
      });
    }
  }

  return (
    <>
      <div ref={pdfRef} className={classes.root}>
        {templateUuids.map((uuid) => {
          const target = templatesDataWithUuid[uuid];
          const TComponent: any = templateData[target.id].Template;

          return (
            <TComponent key={uuid} {...target.props} />
          );
        })}
      </div>
      <div className={classes.btnWrapper}>
        <button type="button" onClick={download} className={classes.btn}>
          <span className={classes.text}>download</span>
        </button>
      </div>
    </>
  );
}

export default TemplatePreview;