// Typescript representation of JSON structure. Useful for when a method accepts or returns a parsed json value.

export type JsonPrimitive = string | number | boolean | null | undefined;
export type JsonObject = { [key: string]: JsonValue };
export type JsonArray = JsonValue[];
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;
