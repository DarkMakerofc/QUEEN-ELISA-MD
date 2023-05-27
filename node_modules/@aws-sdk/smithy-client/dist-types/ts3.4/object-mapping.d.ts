export type ObjectMappingInstructions = Record<
  string,
  ObjectMappingInstruction
>;
export type SourceMappingInstructions = Record<
  string,
  ValueMapper | SourceMappingInstruction
>;
export type ObjectMappingInstruction =
  | LazyValueInstruction
  | ConditionalLazyValueInstruction
  | SimpleValueInstruction
  | ConditionalValueInstruction
  | UnfilteredValue;
export type UnfilteredValue = any;
export type LazyValueInstruction = [FilterStatus, ValueSupplier];
export type ConditionalLazyValueInstruction = [
  FilterStatusSupplier,
  ValueSupplier
];
export type SimpleValueInstruction = [FilterStatus, Value];
export type ConditionalValueInstruction = [ValueFilteringFunction, Value];
export type SourceMappingInstruction = [
  (ValueFilteringFunction | FilterStatus)?,
  ValueMapper?,
  string?
];
export type FilterStatus = boolean | unknown | void;
export type FilterStatusSupplier = () => boolean;
export type ValueFilteringFunction = (value: any) => boolean;
export type ValueSupplier = () => any;
export type ValueMapper = (value: any) => any;
export type Value = any;
export declare function map(
  target: any,
  filter: (value: any) => boolean,
  instructions: Record<string, ValueSupplier | Value>
): typeof target;
export declare function map(instructions: ObjectMappingInstructions): any;
export declare function map(
  target: any,
  instructions: ObjectMappingInstructions
): typeof target;
export declare const convertMap: (target: any) => Record<string, any>;
export declare const take: (
  source: any,
  instructions: SourceMappingInstructions
) => any;
