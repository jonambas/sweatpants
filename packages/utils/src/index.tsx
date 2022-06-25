import {
  ComponentPropsWithRef,
  ComponentType,
  ElementRef,
  ElementType,
  forwardRef,
  ForwardRefRenderFunction,
  ForwardRefExoticComponent as ReactForwardRefExoticComponent,
  ReactElement,
} from 'react';

export type Merge<
  P1 = { [key: string]: any },
  P2 = { [key: string]: any }
> = Omit<P1, keyof P2> & P2;

/**
 * Infers the OwnProps if E is a ForwardRefExoticComponentWithAs
 */
export type OwnProps<E> = E extends PolymorphicForwardRefComponent<any, infer P>
  ? P
  : { [key: string]: any };

/**
 * Infers the JSX.IntrinsicElement if E is a ForwardRefExoticComponentWithAs
 */
export type IntrinsicElement<E> = E extends PolymorphicForwardRefComponent<
  infer I,
  any
>
  ? I
  : never;

export type ForwardRefExoticComponent<E, OwnProps> =
  ReactForwardRefExoticComponent<
    Merge<
      E extends ElementType
      ? ComponentPropsWithRef<E>
      : never,
      OwnProps & { as?: E }
    >
  >;

export type PolymorphicComponentProps<E, Props> = Merge<
  E extends ElementType ? ComponentPropsWithRef<E> : never,
  Props & { as?: E }
>;

export interface PolymorphicForwardRefComponent<
  IntrinsicElementString,
  OwnProps = { [key: string]: any }
/**
 * Extends original type to ensure built in React types play nice
 * with polymorphic components still e.g. `React.ElementRef` etc.
 */
> extends ForwardRefExoticComponent<
  IntrinsicElementString,
  OwnProps
> {
  /**
   * When `as` prop is passed, use this overload.
   * Merges original own props (without DOM props) and the inferred props
   * from `as` element with the own props taking precendence.
   *
   * We explicitly avoid `React.ElementType` and manually narrow the prop types
   * so that events are typed when using JSX.IntrinsicElements.
   */
  <As = IntrinsicElementString>(
    props: As extends ''
      ? { as: keyof JSX.IntrinsicElements }
      : As extends ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : never
  ): ReactElement | null;
}

/**
 * A `React.forwardRef` wrapper that supplies polymorphism to the component
 * @example
 * const Component = polymorphicForwardRef<'button', { foo?: boolean }>(
 *   function Component({ as: Element = 'button' }, ref) {
 *     return <Element ref={ref} />;
 * });
 */
export function polymorphicForwardRef<IntrinsicElementString, Props = {}>(
  render: ForwardRefRenderFunction<
    ElementRef<PolymorphicForwardRefComponent<IntrinsicElementString, Props>>,
    PolymorphicComponentProps<IntrinsicElementString, Props>
  >,
) {
  return forwardRef(render) as PolymorphicForwardRefComponent<
    IntrinsicElementString,
    Props
  >;
}