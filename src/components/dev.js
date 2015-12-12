import React from 'react';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

export default function(store) {
  return class Dev extends React.Component {
    render() {
      return (
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
        </DebugPanel>
      );
    }
  };
}
