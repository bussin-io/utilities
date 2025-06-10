import { FormatRegistry, SchemaOptions, Type } from '@sinclair/typebox';

FormatRegistry.Set('email', value => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
});

export function Email(options?: SchemaOptions) {
  return Type.Transform(Type.String({ format: 'email', ...options }))
    .Decode(value => value)
    .Encode(value => value);
}
