import dynamic from 'next/dynamic';
import { useTemplate } from '@components/Templates/Provider/useTemplate';
import GoToPreviewLink from '@components/GoToPreviewLink';

const TemplatesContainer = dynamic(() => import('@components/Templates/TemplatesContainer'), {
  ssr: false,
});

const AddArea = dynamic(() => import('@components/AddArea'), {
  ssr: false,
});

function Index() {
  const {
    templateUuids,
  } = useTemplate();

  return (
    <div>
      {templateUuids.length > 0 ? (
        <>
          <TemplatesContainer />
          <GoToPreviewLink />
        </>
      ) : (
        <AddArea />
      )}
    </div>
  );
}

export default Index;
