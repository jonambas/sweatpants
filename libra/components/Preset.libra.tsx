import preset from '../../packages/panda-preset/src';
import { Text } from '../../packages/react/src';
import { css } from '@styles/css';

const style = `
td,th {
  padding-right: 1rem;
  text-align: left;
  vertical-align: top;
}

th { 
  text-align: left;
}
`;

directory('Panda Preset', () => {
  add('Tokens', () => {
    const theme = (preset.theme ?? {}) as Record<string, any>;
    const tokens = Object.keys(theme?.tokens);
    const semantic = Object.keys(theme?.semanticTokens);

    return (
      <div>
        <style>{style}</style>
        {semantic.map((category) => {
          return (
            <div key={category}>
              <Text
                looksLike="h3"
                className={css({
                  mb: '6',
                  textTransform: 'capitalize'
                })}
              >
                {category}
              </Text>
              <table
                className={css({
                  mb: '8'
                })}
              >
                <thead>
                  <tr>
                    <th>
                      <Text looksLike="strong">Token</Text>
                    </th>
                    <th>
                      <Text looksLike="strong">Light Value</Text>
                    </th>
                    <th>
                      <Text looksLike="strong">Dark Value</Text>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(theme?.semanticTokens[category]).map((key) => {
                    const v =
                      theme?.semanticTokens[category][key]?.value?._lightScheme;
                    const dv =
                      theme?.semanticTokens[category][key]?.value?._darkScheme;
                    return (
                      <tr key={`${category}-${key}`}>
                        <td>
                          <Text>{key}</Text>
                        </td>
                        <td>
                          <Text>
                            {v || theme?.semanticTokens[category][key]?.value}
                          </Text>
                          {category === 'colors' ? (
                            <span
                              style={{
                                display: 'inline-flex',
                                background: v,
                                width: '4.5rem',
                                height: '1.3rem',
                                borderRadius: '2px',
                                border: '1px solid #ddd'
                              }}
                            />
                          ) : null}
                        </td>
                        <td>
                          <Text>{dv}</Text>
                          {category === 'colors' ? (
                            <span
                              style={{
                                display: 'inline-flex',
                                background: dv,
                                width: '4.5rem',
                                height: '1.3rem',
                                borderRadius: '2px',
                                border: '1px solid #ddd'
                              }}
                            />
                          ) : null}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}

        {tokens.map((category) => {
          return (
            <div key={category}>
              <Text
                looksLike="h3"
                className={css({
                  mb: '6',
                  textTransform: 'capitalize'
                })}
              >
                {category}
              </Text>
              <table
                className={css({
                  mb: '8'
                })}
              >
                <thead>
                  <tr>
                    <th>
                      <Text looksLike="strong">Token</Text>
                    </th>
                    <th>
                      <Text looksLike="strong">Value</Text>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(theme?.tokens[category]).map((key) => {
                    return (
                      <tr key={`${category}-${key}`}>
                        <td>
                          <Text>{key}</Text>
                        </td>
                        <td>
                          <Text>{theme?.tokens[category][key]?.value}</Text>
                        </td>
                        {category === 'colors' ? (
                          <td>
                            <div
                              style={{
                                background: theme?.tokens[category][key]?.value,
                                width: '4.5rem',
                                height: '1.3rem',
                                borderRadius: '2px',
                                border: '1px solid #ddd'
                              }}
                            />
                          </td>
                        ) : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  });
});
