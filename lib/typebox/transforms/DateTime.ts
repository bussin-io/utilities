import { FormatRegistry, SchemaOptions, Type } from '@sinclair/typebox';

FormatRegistry.Set('date-time', value => {
  return !Number.isNaN(Date.parse(value));
});

export function DateTime(options?: SchemaOptions) {
  return Type.Transform(Type.String({ format: 'date-time', ...options }))
    .Decode(value => new Date(value))
    .Encode(value => value.toISOString());
}
