import { css } from '@styles/css';
import * as icons from '@sweatpants/react/';
import { ElementType } from 'react';
import { Stack, Text } from '../../packages/react/src';

directory('Icons', () => {
  add('All icons', () => {
    return (
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '8',
        })}
      >
        {Object.keys(icons).map((name) => {
          // @ts-ignore
          const Icon = icons[name] as ElementType;
          return (
            <Stack align="center">
              <Icon width="22" height="22" />
              <Text>{name}</Text>
            </Stack>
          );
        })}
      </div>
    );
  });
});
