import dynamic from 'next/dynamic';
import AddArea from '@components/AddArea';

const TemplatesContainer = dynamic(() => import('@components/Templates/TemplatesContainer'), {
  ssr: false,
});

function Index() {
  return (
    <div>
      <TemplatesContainer />
      <AddArea />
    </div>
  );
}

export default Index;
