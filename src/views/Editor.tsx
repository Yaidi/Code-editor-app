import React, { ReactElement } from 'react';
import Logout from '../components/Logout';
import CodeEditor from '../components/CodeEditor';
import FileViewer from '../components/FileViewer';
import WorkSpace from '../components/WorkSpace';

const Editor = (): ReactElement => {
  return (
    <div>
      <Logout />
      <WorkSpace />
      <CodeEditor />
      <FileViewer />
    </div>
  );
};
export default Editor;
