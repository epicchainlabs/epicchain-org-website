import * as React from 'react';
import TopLayoutBlog from 'docs/src/modules/components/TopLayoutBlog';
import { docs } from './2024-5-28-introducing-epicchain.md?muiMarkdown';

export default function Page() {
  return <TopLayoutBlog docs={docs} />;
}
