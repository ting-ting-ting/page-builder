/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback, useRef } from 'react';
import dynamic from 'next/dynamic';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Loading } from '@mezzanine-ui/react';
import Link from 'next/link';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import { templateData } from '@components/Templates/index';
import Controller from './Controller';
import classes from './index.module.scss';

const TemplateEditModal = dynamic(() => import('@components/TemplateEditModal'), {
  ssr: false,
});

function TemplatesContainer() {
  const [loading, setLoading] = useState<boolean>(false);
  const pdfRef = useRef<HTMLDivElement>(null);
  const {
    templateUuids,
    templatesDataWithUuid,
  } = useTemplate();

  const [editUuid, setEditUuid] = useState<string>('');
  const [pushUuid, setPushUuid] = useState<string>('');

  const onEditClose = useCallback(() => {
    setEditUuid('');
  }, []);

  const onPushClose = useCallback(() => {
    setPushUuid('');
  }, []);

  const download = () => {
    setLoading(true);
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
        // const imageY = 40;
        pdf.addImage(imageData, 'PNG', imageX, 0, imageWidth * ratio, imageHeight * ratio);
        pdf.save('page.pdf');
        setLoading(false);
      });
    }
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.paper} ref={pdfRef}>
          {templateUuids.map((uuid, index) => {
            const target = templatesDataWithUuid[uuid];
            const TComponent: any = templateData[target.id].Template;

            return (
              <Controller
                key={uuid}
                uuid={uuid}
                setEditUuid={setEditUuid}
                setPushUuid={setPushUuid}
                canNotUp={index === 0}
                canNotDown={index === templateUuids.length - 1}
              >
                <div className={classes.templateWrapper}>
                  <TComponent {...target.props} />
                </div>
              </Controller>
            );
          })}
        </div>
      </div>
      <div className={classes.emptyArea} />
      <div className={classes.btnWrapper}>
        <Link href="/preview" className={classes.btn}>
          <span className={classes.text}>Preview</span>
        </Link>
        <button
          type="button"
          onClick={download}
          className={classes.btn}
          disabled={templateUuids.length === 0 || loading}
        >
          {loading ? (
            <Loading loading />
          ) : (
            <span className={classes.text}>Download</span>
          )}
        </button>
      </div>
      <TemplateEditModal
        open={!!editUuid}
        onClose={onEditClose}
        uuid={editUuid}
        editMode
      />
      <TemplateEditModal
        open={!!pushUuid}
        onClose={onPushClose}
        uuid={pushUuid}
      />
    </>
  );
}

export default TemplatesContainer;
