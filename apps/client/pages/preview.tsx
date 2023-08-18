import dynamic from 'next/dynamic';

const TemplatePreview = dynamic(() => import('@components/Templates/TemplatePreview'), {
  ssr: false,
});

function PreviewPage() {
  return (
    <div>
      <TemplatePreview />
    </div>
  );
}

export default PreviewPage;