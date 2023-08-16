import AddArea from '@components/AddArea';
import { useTemplate } from '@components/Templates/Provider/useTemplate';

function Index() {
  const {
    templates,
  } = useTemplate();

  console.log('templates', templates);

  return (
    <div>
      <AddArea />
    </div>
  );
}

export default Index;
