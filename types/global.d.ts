declare module 'lucide-react';

declare module 'next/image' {
  import * as React from 'react';
  const Image: React.ComponentType<any>;
  export default Image;
}

declare module 'next' {
  // minimal Next types to satisfy TS when next types are missing
  export type Metadata = any;
}
