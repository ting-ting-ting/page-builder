import dynamic from 'next/dynamic';
import { useTemplate } from '@components/Templates/Provider/useTemplate';

const TemplatesContainer = dynamic(() => import('@components/Templates/TemplatesContainer'), {
  ssr: false,
});

const AddArea = dynamic(() => import('@components/AddArea'), {
  ssr: false,
});

const GetHtmlButton = dynamic(() => import('@components/GetHtmlButton'), {
  ssr: false,
});

function Index() {
  const {
    templateUuids,
  } = useTemplate();

  return (
    <div>
      {templateUuids.length > 0 ? (
        <TemplatesContainer />
      ) : (
        <AddArea />
      )}
      <GetHtmlButton />
    </div>
  );
}

export default Index;
