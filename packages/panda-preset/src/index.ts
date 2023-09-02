import { definePreset } from '@pandacss/dev';

export default definePreset({
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
        white: { value: '#fff' }
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
      }
    },
    semanticTokens: {
      colors: {
        appBg: { value: { _lightScheme: '#fcfcfd', _darkScheme: '#18181a' } },
        contentBg: { value: { _lightScheme: 'white', _darkScheme: '#27282d' } },
        gray1: { value: { _lightScheme: '#fcfcfd', _darkScheme: '#18181a' } },
        gray2: { value: { _lightScheme: '#f9f9fb', _darkScheme: '#1b1b1f' } },
        gray3: { value: { _lightScheme: '#f2f2f5', _darkScheme: '#27282d' } },
        gray4: { value: { _lightScheme: '#ebebef', _darkScheme: '#2e3035' } },
        gray5: { value: { _lightScheme: '#e4e4e9', _darkScheme: '#35373c' } },
        gray6: { value: { _lightScheme: '#dddde3', _darkScheme: '#3c3f44' } },
        gray7: { value: { _lightScheme: '#d3d4db', _darkScheme: '#464b50' } },
        gray8: { value: { _lightScheme: '#b9bbc6', _darkScheme: '#5a6165' } },
        gray9: { value: { _lightScheme: '#8b8d98', _darkScheme: '#696e77' } },
        gray10: { value: { _lightScheme: '#7e808a', _darkScheme: '#7d828a' } },
        gray11: { value: { _lightScheme: '#60646c', _darkScheme: '#adb1b8' } },
        gray12: { value: { _lightScheme: '#1c2024', _darkScheme: '#edeef0' } },
        red1: { value: { _lightScheme: '#fffcfc', _darkScheme: '#1f1315' } },
        red2: { value: { _lightScheme: '#fff7f7', _darkScheme: '#291618' } },
        red3: { value: { _lightScheme: '#ffefef', _darkScheme: '#3b191d' } },
        red4: { value: { _lightScheme: '#ffe5e5', _darkScheme: '#481a20' } },
        red5: { value: { _lightScheme: '#fdd8d8', _darkScheme: '#551c22' } },
        red6: { value: { _lightScheme: '#f9c6c6', _darkScheme: '#691d25' } },
        red7: { value: { _lightScheme: '#f3aeaf', _darkScheme: '#8c1d28' } },
        red8: { value: { _lightScheme: '#eb9091', _darkScheme: '#d21e24' } },
        red9: { value: { _lightScheme: '#e5484d', _darkScheme: '#e5484d' } },
        red10: { value: { _lightScheme: '#d93d42', _darkScheme: '#f26669' } },
        red11: { value: { _lightScheme: '#c62a2f', _darkScheme: '#ff8589' } },
        red12: { value: { _lightScheme: '#641723', _darkScheme: '#ffd1d9' } },
        purple1: { value: { _lightScheme: '#fdfcfe', _darkScheme: '#17151f' } },
        purple2: { value: { _lightScheme: '#fbfaff', _darkScheme: '#1c172b' } },
        purple3: { value: { _lightScheme: '#f5f2ff', _darkScheme: '#271f3f' } },
        purple4: { value: { _lightScheme: '#ede9fe', _darkScheme: '#2d254c' } },
        purple5: { value: { _lightScheme: '#e4defc', _darkScheme: '#342a58' } },
        purple6: { value: { _lightScheme: '#d7cff9', _darkScheme: '#3d316a' } },
        purple7: { value: { _lightScheme: '#c4b8f3', _darkScheme: '#4c3e89' } },
        purple8: { value: { _lightScheme: '#aa99ec', _darkScheme: '#6654c0' } },
        purple9: { value: { _lightScheme: '#6e56cf', _darkScheme: '#6e56cf' } },
        purple10: {
          value: { _lightScheme: '#644fc1', _darkScheme: '#836add' }
        },
        purple11: {
          value: { _lightScheme: '#5746af', _darkScheme: '#b399ff' }
        },
        purple12: {
          value: { _lightScheme: '#2f265f', _darkScheme: '#e2ddfe' }
        },
        blue1: { value: { _lightScheme: '#fbfdff', _darkScheme: '#0f1720' } },
        blue2: { value: { _lightScheme: '#f5faff', _darkScheme: '#0f1b2d' } },
        blue3: { value: { _lightScheme: '#edf6ff', _darkScheme: '#11253f' } },
        blue4: { value: { _lightScheme: '#e1f0ff', _darkScheme: '#122b4c' } },
        blue5: { value: { _lightScheme: '#cee7fe', _darkScheme: '#12325a' } },
        blue6: { value: { _lightScheme: '#b7d9f8', _darkScheme: '#123d6f' } },
        blue7: { value: { _lightScheme: '#96c7f2', _darkScheme: '#0f5096' } },
        blue8: { value: { _lightScheme: '#5eb0ef', _darkScheme: '#1276e2' } },
        blue9: { value: { _lightScheme: '#0091ff', _darkScheme: '#0091ff' } },
        blue10: { value: { _lightScheme: '#0880ea', _darkScheme: '#3cabff' } },
        blue11: { value: { _lightScheme: '#0b68cb', _darkScheme: '#6bc1ff' } },
        blue12: { value: { _lightScheme: '#113264', _darkScheme: '#c2e5ff' } },
        green1: { value: { _lightScheme: '#fbfefc', _darkScheme: '#0d1912' } },
        green2: { value: { _lightScheme: '#f2fcf5', _darkScheme: '#0f1d17' } },
        green3: { value: { _lightScheme: '#e9f9ee', _darkScheme: '#12281f' } },
        green4: { value: { _lightScheme: '#ddf3e4', _darkScheme: '#143125' } },
        green5: { value: { _lightScheme: '#ccebd7', _darkScheme: '#173a2a' } },
        green6: { value: { _lightScheme: '#b4dfc4', _darkScheme: '#194633' } },
        green7: { value: { _lightScheme: '#92ceac', _darkScheme: '#1f5e41' } },
        green8: { value: { _lightScheme: '#5bb98c', _darkScheme: '#2c8c5e' } },
        green9: { value: { _lightScheme: '#30a46c', _darkScheme: '#30a46c' } },
        green10: { value: { _lightScheme: '#299764', _darkScheme: '#35b979' } },
        green11: { value: { _lightScheme: '#18794e', _darkScheme: '#3dd68c' } },
        green12: { value: { _lightScheme: '#193b2d', _darkScheme: '#b1f1cb' } },
        orange1: { value: { _lightScheme: '#fefcfb', _darkScheme: '#1f1206' } },
        orange2: { value: { _lightScheme: '#fff8f4', _darkScheme: '#271504' } },
        orange3: { value: { _lightScheme: '#ffedd5', _darkScheme: '#341c0a' } },
        orange4: { value: { _lightScheme: '#ffe0bb', _darkScheme: '#3f220d' } },
        orange5: { value: { _lightScheme: '#ffd3a4', _darkScheme: '#4b2910' } },
        orange6: { value: { _lightScheme: '#ffc291', _darkScheme: '#5d3213' } },
        orange7: { value: { _lightScheme: '#ffaa7d', _darkScheme: '#7e4318' } },
        orange8: { value: { _lightScheme: '#ed8a5c', _darkScheme: '#c36522' } },
        orange9: { value: { _lightScheme: '#f76808', _darkScheme: '#f76808' } },
        orange10: {
          value: { _lightScheme: '#ed5f00', _darkScheme: '#ff802b' }
        },
        orange11: {
          value: { _lightScheme: '#99543a', _darkScheme: '#ffa366' }
        },
        orange12: {
          value: { _lightScheme: '#582d1d', _darkScheme: '#ffe0c2' }
        },
        yellow1: { value: { _lightScheme: '#fdfdf9', _darkScheme: '#1c1500' } },
        yellow2: { value: { _lightScheme: '#fffbe0', _darkScheme: '#221a04' } },
        yellow3: { value: { _lightScheme: '#fff8c6', _darkScheme: '#2c230a' } },
        yellow4: { value: { _lightScheme: '#fcf3af', _darkScheme: '#342a0e' } },
        yellow5: { value: { _lightScheme: '#f7ea9b', _darkScheme: '#3d3211' } },
        yellow6: { value: { _lightScheme: '#ecdd85', _darkScheme: '#493d14' } },
        yellow7: { value: { _lightScheme: '#dac56e', _darkScheme: '#615119' } },
        yellow8: { value: { _lightScheme: '#c9aa45', _darkScheme: '#8f7d24' } },
        yellow9: { value: { _lightScheme: '#fbe32d', _darkScheme: '#fbe32d' } },
        yellow10: {
          value: { _lightScheme: '#f9da10', _darkScheme: '#fcea5c' }
        },
        yellow11: {
          value: { _lightScheme: '#775f28', _darkScheme: '#ffee33' }
        },
        yellow12: { value: { _lightScheme: '#473b1f', _darkScheme: '#fff5ad' } }
      },
      shadows: {
        focus: {
          value: {
            _lightScheme:
              '0 0 0 1px {colors.contentBg}, 0 0 0 3px {colors.blue9}',
            _darkScheme:
              '0 0 0 1px {colors.contentBg}, 0 0 0 3px {colors.blue9}'
          }
        },
        focusInset: { value: 'inset 0 0 0 2px #0880ea' }
      }
    }
  },
  conditions: {
    lightScheme: '[data-color-scheme=light] &',
    darkScheme: '[data-color-scheme=dark] &'
  }
});
