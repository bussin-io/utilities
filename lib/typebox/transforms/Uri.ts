import { FormatRegistry, SchemaOptions, Type } from '@sinclair/typebox';

FormatRegistry.Set('uri', value => {
  return URL.canParse(value);
});

FormatRegistry.Set('uri-no-scheme', value => {
  return URL.canParse(value) || URL.canParse('scheme://' + value);
});

export function Uri(options?: SchemaOptions & { allowMissingScheme?: boolean }) {
  const format = options?.allowMissingScheme ? 'uri-no-scheme' : 'uri';

  return Type.Transform(Type.String({ format, ...options }))
    .Decode(value => value)
    .Encode(value => value);
}

// // with "defaultScheme" option and URL type:

// FormatRegistry.Set('uri', value => {
//   return URL.canParse(value);
// });

// function sanitizeScheme(scheme: string) {
//   // make “http://” → “http-”
//   return scheme.replace(/[^a-zA-Z0-9]+/g, '-');
// }

// export function Uri(options?: SchemaOptions & { defaultScheme: string }) {
//   if (options?.defaultScheme) {
//     const scheme = options.defaultScheme;
//     const format = `uri-with-default-${sanitizeScheme(scheme)}`;

//     FormatRegistry.Set(format, value => {
//       return URL.canParse(value) || URL.canParse(scheme.concat(value));
//     });

//     return Type.Transform(Type.String({ format, ...options }))
//       .Decode(value => {
//         if (URL.canParse(value)) return new URL(value);
//         return new URL(scheme.concat(value));
//       })
//       .Encode(value => value.toString());
//   }

//   return Type.Transform(Type.String({ format: 'uri', ...options }))
//     .Decode(value => new URL(value))
//     .Encode(value => value.toString());
// }
