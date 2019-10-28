import path from 'path';
import { testWithLocation } from 'test-fixture';

testWithLocation(
  path.resolve(
    process.cwd(),
    '..',
    'shared-fixtures',
    'fixtures/typescript/basics/import-equal-declaration.src.ts',
  ),
  {
    useJSXTextNode: false,
  },
);