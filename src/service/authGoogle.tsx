import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

const authGoogle = (response: any): any | ReactElement => {
  if (response) {
    const history = useHistory();
    history.push('/Editor');
  }
  return <div>could not login please try again</div>;
};
export default authGoogle;
