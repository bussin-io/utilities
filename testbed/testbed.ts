import { generateUUID } from '@bussin/utilities/uuid';
import { JsonObject } from '@bussin/utilities/types';
import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';
import { ExtTypes } from '@bussin/utilities/typebox';

const schema = Type.Object({
  email: ExtTypes.Email(),
  created: ExtTypes.DateTime(),
  ip: ExtTypes.IpV4(),
  url: ExtTypes.Uri({ allowMissingScheme: true }),
  id: ExtTypes.Uuid(),
});

const t = Value.Parse(schema, {
  email: 'me@example.com',
  created: '2025-05-05T00:00:01Z',
  ip: '1.1.1.1',
  url: 'google.com',
  id: '15f062ca-70de-43aa-9032-0be04962e68d',
});

console.log(t);

const run = async () => {
  try {
    const j: JsonObject = {
      key1: {
        key2: [
          [1],
          2,
          {
            key3: 4,
          },
        ],
      },
    };

    const uuid = generateUUID();

    console.log(uuid);
  } catch (error) {
    console.log(error);
  }
};

run();
