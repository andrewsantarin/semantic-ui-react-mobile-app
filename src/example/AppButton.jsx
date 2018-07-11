import React from 'react';
import { Button } from 'semantic-ui-react';

import InkFragment from 'lib/ui/ink/InkFragment';

export default function AppButton() {
  return (
    <Button
      content={(
        <InkFragment children="Test" />
      )}
      fluid
      icon="close"
      labelPosition="left"
    />
  );
}
