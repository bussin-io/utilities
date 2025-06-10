import { FormatRegistry, SchemaOptions, Type } from '@sinclair/typebox';

FormatRegistry.Set('ipv4', value => {
  // return /^(25[0-5]|2[0-4]\d|[01]?\d?\d)(\.(?!$)|$){4}$/.test(value);
  return /^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)\.?\b){4}$/.test(value);
});

export function IpV4(options?: SchemaOptions) {
  return Type.Transform(Type.String({ format: 'ipv4', ...options }))
    .Decode(value => value)
    .Encode(value => value);
}
