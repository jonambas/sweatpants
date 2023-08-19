import { definePreset } from '@pandacss/dev';

export const preset = definePreset({
  theme: {
    tokens: {
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
        10: { value: '4rem' }
      },
      colors: {
        black: { value: '#000' },
        white: { value: '#fff' },
        gray1: { value: '#fcfcfd' },
        gray2: { value: '#f9f9fb' },
        gray3: { value: '#f2f2f5' },
        gray4: { value: '#ebebef' },
        gray5: { value: '#e4e4e9' },
        gray6: { value: '#dddde3' },
        gray7: { value: '#d3d4db' },
        gray8: { value: '#b9bbc6' },
        gray9: { value: '#8b8d98' },
        gray10: { value: '#7e808a' },
        gray11: { value: '#60646c' },
        gray12: { value: '#35373c' },
        gray13: { value: '#27282d' },
        gray14: { value: '#1c2024' },

        purple1: { value: '#fdfcfe' },
        purple2: { value: '#fbfaff' },
        purple3: { value: '#f5f2ff' },
        purple4: { value: '#ede9fe' },
        purple5: { value: '#e4defc' },
        purple6: { value: '#d7cff9' },
        purple7: { value: '#c4b8f3' },
        purple8: { value: '#aa99ec' },
        purple9: { value: '#6e56cf' },
        purple10: { value: '#644fc1' },
        purple11: { value: '#5746af' },
        purple12: { value: '#2f265f' },
        blue1: { value: '#fbfdff' },
        blue2: { value: '#f5faff' },
        blue3: { value: '#edf6ff' },
        blue4: { value: '#e1f0ff' },
        blue5: { value: '#cee7fe' },
        blue6: { value: '#b7d9f8' },
        blue7: { value: '#96c7f2' },
        blue8: { value: '#5eb0ef' },
        blue9: { value: '#0091ff' },
        blue10: { value: '#0880ea' },
        blue11: { value: '#0b68cb' },
        blue12: { value: '#113264' },
        green1: { value: '#fbfefb' },
        green2: { value: '#f3fcf3' },
        green3: { value: '#ebf9eb' },
        green4: { value: '#dff3df' },
        green5: { value: '#ceebcf' },
        green6: { value: '#b7dfba' },
        green7: { value: '#97cf9c' },
        green8: { value: '#65ba75' },
        green9: { value: '#46a758' },
        green10: { value: '#3d9a50' },
        green11: { value: '#297c3b' },
        green12: { value: '#203c25' },
        red1: { value: '#fffcfc' },
        red2: { value: '#fff8f7' },
        red3: { value: '#fff0ee' },
        red4: { value: '#ffe6e2' },
        red5: { value: '#fdd8d3' },
        red6: { value: '#fac7be' },
        red7: { value: '#f3b0a2' },
        red8: { value: '#ea9280' },
        red9: { value: '#e54d2e' },
        red10: { value: '#d84224' },
        red11: { value: '#c33113' },
        red12: { value: '#5c271f' },
        orange1: { value: '#fefcfb' },
        orange2: { value: '#fff8f4' },
        orange3: { value: '#ffedd5' },
        orange4: { value: '#ffe0bb' },
        orange5: { value: '#ffd3a4' },
        orange6: { value: '#ffc291' },
        orange7: { value: '#ffaa7d' },
        orange8: { value: '#ed8a5c' },
        orange9: { value: '#f76808' },
        orange10: { value: '#ed5f00' },
        orange11: { value: '#99543a' },
        orange12: { value: '#582d1d' }
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
        12: { value: '3rem', description: '48px' }
      },
      radii: {
        sm: { value: '3px' },
        md: { value: '5px' }
      },
      fontWeights: {
        normal: { value: '400' },
        bold: { value: '600' }
      },
      fonts: {
        sans: {
          value:
            "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif"
        },
        mono: {
          value:
            'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace'
        }
      },
      shadows: {
        focus: { value: '0 0 0 1px #fff, 0 0 0 4px #0880ea' }
      }
    }
  }
});
