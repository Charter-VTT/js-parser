/**
 * DataParser is a generic interface for parsing and stringifying data types
 */
export type DataParser<T extends string> = {
  /**
   * The data structure this parser will handle
   */
  readonly type: T;
  /**
   * Parse from a data type to a JS output
   * @param data is the input string representation of the data
   * @returns a JS type
   */
  parse<R extends Record<string, unknown> = Record<string, unknown>>(
    data: string,
  ): Promise<R>;
  /**
   * Take a JS type and convert it to an string representation of the data type
   * @param data the input data type
   * @returns a string representation of the data structure
   */
  stringify<D extends Record<string, unknown> = Record<string, unknown>>(
    data: D,
  ): Promise<string>;
};
