import { FormatRegistry, SchemaOptions, Type } from '@sinclair/typebox';

FormatRegistry.Set('uuid', value => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
});

export function Uuid(options?: SchemaOptions) {
  return Type.Transform(Type.String({ format: 'uuid', ...options }))
    .Decode(value => value)
    .Encode(value => value);
}
