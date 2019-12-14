export const isDefined = (value: any) => typeof value !== 'undefined';

export const isBoolean = (value: any) => typeof value === 'boolean';

export const isNumber = (value: any) => typeof value === 'number';

export const isPrimitive = (value: any) => /^(b|st|n)/.test(typeof value);
