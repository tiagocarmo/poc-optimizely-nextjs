import { v4 as uuidv4 } from 'uuid';

import {
  createInstance,
  OptimizelyProvider,
  OptimizelyFeature
} from '@optimizely/react-sdk';

import VersaoA from '../templates/versaoa';
import VersaoB from '../templates/versaob';
import VersaoC from '../templates/versaoc';
import VersaoD from '../templates/versaod';

const optimizely = createInstance({
  sdkKey: '<SDK_ID>'
});

const user = {
  id: uuidv4()
};

const Index = () => {

  return (
    <>
      <p><strong><a href='https://app.optimizely.com/v2/projects/xxxxxxxxxxx/experiments' target='_blank'>Experiments</a></strong>: <a href='https://app.optimizely.com/v2/projects/xxxxxxxxxxx/experiments/xxxxxxxxxx/variations' target='_blank'>layout test</a> (layouts_test)</p>
      <p><strong>Environments</strong>: Development</p>
      <OptimizelyProvider optimizely={optimizely} user={user}>
        <OptimizelyFeature feature='layouts'>
          {(enabled, variable) => {
            if (enabled && variable) {
              const { theme } = variable;
              switch (theme) {
                case 'b':
                  return <VersaoB />;
                case 'c':
                  return <VersaoC />;
                case 'd':
                  return <VersaoD />;
                case 'a':
                default:
                  return <VersaoA />;
              }
            }
            return <h1>Teste A/B DESATIVADO</h1>;
          }}
        </OptimizelyFeature>
      </OptimizelyProvider>
    </>
  );
};

export default Index;
