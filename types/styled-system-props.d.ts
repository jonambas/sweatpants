declare module '@styled-system/props' {
  /**
   * Picks styled system props
   *
   * @see https://github.com/styled-system/styled-system/tree/master/packages/props
   */
  export function pick(props: object): object;

  /**
   * Omits styled-system props
   *
   * @see https://github.com/styled-system/styled-system/tree/master/packages/props
   */
  export function omit(props: object): object;
}
