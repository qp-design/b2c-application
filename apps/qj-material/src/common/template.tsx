import { FederationModule } from '@brushes/qj-shared-library';

function Template({ port, ...rest }: { port: any }) {
  return <FederationModule port={port} {...rest} />;
}

export default Template;
