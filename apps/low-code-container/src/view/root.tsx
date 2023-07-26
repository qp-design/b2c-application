import React from 'react';
// @ts-ignore
import { FederationModule } from 'qj-shared-library';

function Root({ port, ...props }: { port: Object; [v: string]: any }) {
  return <FederationModule port={port} {...props} />;
}

export default Root;
