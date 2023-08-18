import dynamic from 'next/dynamic';

const TemplatePreview = dynamic(() => import('@components/TemplatePreview'), {
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