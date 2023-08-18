import { useState } from 'react';
import Quill from 'react-quill';
import 'quill/dist/quill.snow.css';

const EditorField = () => {
  const [editorState, setEditorState] = useState('');

  console.log('gggg', editorState)

  return (
    <Quill
      onChange={v => {
        setEditorState(v);
      }}
      theme="snow"
      modules={{
        toolbar: [['bold', 'italic', 'underline', 'link']],
      }}
      value={editorState}
    />
  );
}

export default EditorField;