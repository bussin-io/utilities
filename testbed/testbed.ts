import { generateUUID } from '@bussin/utilities/uuid';
import { JsonObject } from '@bussin/utilities/types';

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
