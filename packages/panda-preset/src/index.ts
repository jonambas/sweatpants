import { definePreset } from '@pandacss/dev';

export default definePreset({
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
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
        md: { value: '5px' },
        xl: { value: '12px' }
      },
      fontWeights: {
        normal: { value: '400' },
        medium: { value: '500' },
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
        baseBg: {
          value: { _lightScheme: '#f9f9fb', _darkScheme: '#18181a' }
        },
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
        yellow12: {
          value: { _lightScheme: '#473b1f', _darkScheme: '#fff5ad' }
        },
        amber1: { value: { _lightScheme: '#fefdfb', _darkScheme: '#1f1300' } },
        amber2: { value: { _lightScheme: '#fff9ed', _darkScheme: '#251804' } },
        amber3: { value: { _lightScheme: '#fff3d0', _darkScheme: '#30200b' } },
        amber4: { value: { _lightScheme: '#ffecb7', _darkScheme: '#39270f' } },
        amber5: { value: { _lightScheme: '#ffe0a1', _darkScheme: '#432e12' } },
        amber6: { value: { _lightScheme: '#f5d08c', _darkScheme: '#533916' } },
        amber7: { value: { _lightScheme: '#e4bb78', _darkScheme: '#6f4d1d' } },
        amber8: { value: { _lightScheme: '#d6a35c', _darkScheme: '#a9762a' } },
        amber9: { value: { _lightScheme: '#ffc53d', _darkScheme: '#ffc53d' } },
        amber10: { value: { _lightScheme: '#ffba1a', _darkScheme: '#ffcb47' } },
        amber11: { value: { _lightScheme: '#915930', _darkScheme: '#ffcc4d' } },
        amber12: { value: { _lightScheme: '#4f3422', _darkScheme: '#ffe7b3' } },
        crimson1: {
          value: { _lightScheme: '#fffcfd', _darkScheme: '#1d1418' }
        },
        crimson2: {
          value: { _lightScheme: '#fff7fb', _darkScheme: '#29151d' }
        },
        crimson3: {
          value: { _lightScheme: '#feeff6', _darkScheme: '#391826' }
        },
        crimson4: {
          value: { _lightScheme: '#fce5f0', _darkScheme: '#441a2b' }
        },
        crimson5: {
          value: { _lightScheme: '#f9d8e7', _darkScheme: '#511c31' }
        },
        crimson6: {
          value: { _lightScheme: '#f4c6db', _darkScheme: '#641e3a' }
        },
        crimson7: {
          value: { _lightScheme: '#edadc8', _darkScheme: '#881f49' }
        },
        crimson8: {
          value: { _lightScheme: '#e58fb1', _darkScheme: '#cf1761' }
        },
        crimson9: {
          value: { _lightScheme: '#e93d82', _darkScheme: '#e93d82' }
        },
        crimson10: {
          value: { _lightScheme: '#dc3175', _darkScheme: '#f46396' }
        },
        crimson11: {
          value: { _lightScheme: '#cb1d63', _darkScheme: '#ff85ab' }
        },
        crimson12: {
          value: { _lightScheme: '#621639', _darkScheme: '#fdd3e8' }
        },
        jade1: { value: { _lightScheme: '#fbfefd', _darkScheme: '#081911' } },
        jade2: { value: { _lightScheme: '#effdf6', _darkScheme: '#0b1f16' } },
        jade3: { value: { _lightScheme: '#e4faef', _darkScheme: '#0f291e' } },
        jade4: { value: { _lightScheme: '#d7f4e6', _darkScheme: '#123124' } },
        jade5: { value: { _lightScheme: '#c6ecdb', _darkScheme: '#143a2b' } },
        jade6: { value: { _lightScheme: '#b0e0cc', _darkScheme: '#184635' } },
        jade7: { value: { _lightScheme: '#8fcfb9', _darkScheme: '#1e5e48' } },
        jade8: { value: { _lightScheme: '#56ba9f', _darkScheme: '#238b6f' } },
        jade9: { value: { _lightScheme: '#29a383', _darkScheme: '#29a383' } },
        jade10: { value: { _lightScheme: '#259678', _darkScheme: '#25ba92' } },
        jade11: { value: { _lightScheme: '#1a7a5e', _darkScheme: '#1fd8a4' } },
        jade12: { value: { _lightScheme: '#1d3b31', _darkScheme: '#adf0d4' } },
        mint1: { value: { _lightScheme: '#f9fefd', _darkScheme: '#081917' } },
        mint2: { value: { _lightScheme: '#effefa', _darkScheme: '#0a1f1d' } },
        mint3: { value: { _lightScheme: '#ddfbf3', _darkScheme: '#0d2927' } },
        mint4: { value: { _lightScheme: '#ccf7ec', _darkScheme: '#0e322e' } },
        mint5: { value: { _lightScheme: '#bbeee2', _darkScheme: '#103b36' } },
        mint6: { value: { _lightScheme: '#a6e1d3', _darkScheme: '#134842' } },
        mint7: { value: { _lightScheme: '#87d0bf', _darkScheme: '#186057' } },
        mint8: { value: { _lightScheme: '#51bda7', _darkScheme: '#248f7d' } },
        mint9: { value: { _lightScheme: '#86ead4', _darkScheme: '#86ead4' } },
        mint10: { value: { _lightScheme: '#7fe1cc', _darkScheme: '#95f3d9' } },
        mint11: { value: { _lightScheme: '#27756a', _darkScheme: '#49dfbe' } },
        mint12: { value: { _lightScheme: '#16433c', _darkScheme: '#c4f5e1' } },
        indigo1: { value: { _lightScheme: '#fdfdfe', _darkScheme: '#131620' } },
        indigo2: { value: { _lightScheme: '#f8faff', _darkScheme: '#15192d' } },
        indigo3: { value: { _lightScheme: '#f0f4ff', _darkScheme: '#1a2242' } },
        indigo4: { value: { _lightScheme: '#e6edfe', _darkScheme: '#1e284f' } },
        indigo5: { value: { _lightScheme: '#d9e2fc', _darkScheme: '#202d5c' } },
        indigo6: { value: { _lightScheme: '#c6d4f9', _darkScheme: '#24366e' } },
        indigo7: { value: { _lightScheme: '#aec0f5', _darkScheme: '#2c438f' } },
        indigo8: { value: { _lightScheme: '#8da4ef', _darkScheme: '#3b5dce' } },
        indigo9: { value: { _lightScheme: '#3e63dd', _darkScheme: '#3e63dd' } },
        indigo10: {
          value: { _lightScheme: '#3a5ccc', _darkScheme: '#5c73e7' }
        },
        indigo11: {
          value: { _lightScheme: '#3451b2', _darkScheme: '#99a2ff' }
        },
        indigo12: { value: { _lightScheme: '#1f2d5c', _darkScheme: '#dddffe' } }
      },

      shadows: {
        focus: {
          value: '0 0 0 1px {colors.baseBg}, 0 0 0 3px {colors.blue9}'
        }
      }
    }
  },
  conditions: {
    lightScheme: '[data-color-scheme=light] &',
    darkScheme: '[data-color-scheme=dark] &'
  }
});
