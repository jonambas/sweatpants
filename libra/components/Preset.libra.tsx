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

    return (
      <div>
        <style>{style}</style>
        {Object.keys(theme?.tokens).map((category) => {
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
