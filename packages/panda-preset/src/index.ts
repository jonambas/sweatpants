import { definePreset } from '@pandacss/dev';
import * as colors from '@radix-ui/colors';

const colorKeys: Array<keyof typeof colors> = [
  'gold',
  'bronze',
  'brown',
  'yellow',
  'amber',
  'orange',
  'tomato',
  'red',
  'ruby',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'iris',
  'indigo',
  'blue',
  'cyan',
  'teal',
  'jade',
  'green',
  'grass',
  'lime',
  'mint',
  'sky',
];

const semanticColors = colorKeys.reduce((acc, key) => {
  let scale = {};

  for (const scaleKey of Object.keys(colors[key])) {
    scale = {
      ...scale,
      [scaleKey]: {
        value: {
          // @ts-ignore
          base: colors[key][scaleKey],
          // @ts-ignore
          _dark: colors[`${key}Dark`][scaleKey],
        },
      },
    };
  }

  return {
    ...acc,
    ...scale,
  };
}, {});

export default definePreset({
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    tokens: {
      colors: {
        white: { value: '#ffffff' },
        black: { value: '#000000' },
      },
      spacing: {
        1: { value: '1px' },
        2: { value: '0.125rem' },
        3: { value: '0.25rem' },
        4: { value: '0.5rem' },
        5: { value: '0.75rem' },
        6: { value: '1rem' },
        7: { value: '1.5rem' },
        8: { value: '2rem' },
        9: { value: '3rem' },
        10: { value: '4rem' },
      },
      fontSizes: {
        0: { value: '0.5rem', description: '8px' },
        1: { value: '0.625rem', description: '10px' },
        2: { value: '0.6875rem', description: '11px' },
        3: { value: '0.75rem', description: '12px' },
        4: { value: '0.8125rem', description: '13px' },
        5: { value: '0.875rem', description: '14px' },
        6: { value: '1rem', description: '16px' },
        7: { value: '1.125rem', description: '18px' },
        8: { value: '1.25rem', description: '20px' },
        9: { value: '1.5rem', description: '24px' },
        10: { value: '2rem', description: '32px' },
        11: { value: '2.5rem', description: '40px' },
        12: { value: '3rem', description: '48px' },
      },
      radii: {
        xs: { value: '3px' },
        sm: { value: '6px' },
        md: { value: '8px' },
        xl: { value: '15px' },
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
        bold: { value: '600' },
      },
      fonts: {
        sans: {
          value:
            "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif",
        },
        mono: {
          value:
            'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace',
        },
      },
    },
    semanticTokens: {
      colors: {
        baseBg: {
          value: { base: '{colors.gray3}', _dark: '{colors.gray1}' },
        },
        contentBg: {
          value: { base: '{colors.gray1}', _dark: '{colors.gray2}' },
        },
        borders: {
          value: {
            base: '{colors.gray5}',
            _dark: '{colors.gray4}',
          },
        },
        gray1: { value: { base: '#fcfcfd', _dark: '#18181a' } },
        gray2: { value: { base: '#f9f9fb', _dark: '#1f2024' } },
        gray3: { value: { base: '#f2f2f5', _dark: '#27282d' } },
        gray4: { value: { base: '#ebebef', _dark: '#2e3035' } },
        gray5: { value: { base: '#e4e4e9', _dark: '#35373c' } },
        gray6: { value: { base: '#dddde3', _dark: '#3c3f44' } },
        gray7: { value: { base: '#d3d4db', _dark: '#464b50' } },
        gray8: { value: { base: '#b9bbc6', _dark: '#5a6165' } },
        gray9: { value: { base: '#8b8d98', _dark: '#696e77' } },
        gray10: { value: { base: '#7e808a', _dark: '#7d828a' } },
        gray11: { value: { base: '#60646c', _dark: '#adb1b8' } },
        gray12: { value: { base: '#1c2024', _dark: '#edeef0' } },
        ...semanticColors,
      },
      shadows: {
        sm: {
          value: '0 1px 2px 0 rgba(0,0,0,0.05)',
        },
        md: {
          value: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        },
        focus: {
          value: '0 0 0 1px {colors.baseBg}, 0 0 0 3px {colors.blue9}',
        },
      },
    },
  },
  conditions: {
    light: '[data-color-scheme=light] &',
    dark: '[data-color-scheme=dark] &',
  },
});
