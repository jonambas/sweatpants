import { cva, cx } from '@styles/css';
import { ComponentProps, ComponentPropsWithRef, forwardRef } from 'react';

export type TextProps = ComponentPropsWithRef<'span'> & {
  looksLike?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'em' | 'strong';
  element?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'em'
    | 'strong'
    | 'label';
  htmlFor?: ComponentProps<'label'>['htmlFor'];
};

const styles = cva({
  base: {},
  variants: {
    looksLike: {
      h1: { fontSize: '12', fontWeight: 'bold', lineHeight: '1.2em' },
      h2: { fontSize: '10', fontWeight: 'bold', lineHeight: '1.3em' },
      h3: { fontSize: '8', fontWeight: 'bold', lineHeight: '1.4em' },
      h4: { fontSize: '6', fontWeight: 'bold', lineHeight: '1.5em' },
      h5: { fontSize: '5', fontWeight: 'bold', lineHeight: '1.5em' },
      h6: { fontSize: '4', fontWeight: 'bold', lineHeight: '1.7em' },
      p: { fontSize: '4', fontWeight: 'normal', lineHeight: '1.7em' },
      em: { fontSize: '4', fontStyle: 'italic', lineHeight: '1.7em' },
      strong: { fontSize: '4', fontWeight: 'bold', lineHeight: '1.7em' }
    }
  }
});

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, userRef) => {
  const {
    element = 'p',
    children,
    className,
    looksLike = 'p',
    ...rest
  } = props;

  const Elem = element;

  return (
    <Elem
      ref={userRef as any}
      className={cx(styles({ looksLike }), className)}
      {...rest}
    >
      {children}
    </Elem>
  );
});
