import { ComponentPropsWithRef, forwardRef } from 'react';
import { ScreenReaderOnly } from '../screen-reader-only/ScreenReaderOnly';
import { Text } from '../text/Text';
import { css, cx } from '@styles/css';

const labelStyles = css({
  display: 'block',
  color: 'gray12'
});

export type LabelProps = ComponentPropsWithRef<'label'> & {
  hide?: boolean;
};

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, userRef) => {
  const { children, className, hide = false, id, ...rest } = props;

  return hide ? (
    <ScreenReaderOnly asChild>
      <label htmlFor={id} ref={userRef}>
        {children}
      </label>
    </ScreenReaderOnly>
  ) : (
    <Text
      htmlFor={id}
      element="label"
      looksLike="p"
      className={cx(labelStyles, className)}
      ref={userRef}
      {...rest}
    >
      {children}
    </Text>
  );
});

Label.displayName = 'Label';

export { Label };
