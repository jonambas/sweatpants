import { Text, useColorScheme } from '../../packages/react/src';

directory('useColorScheme', () => {
  add('Returns OS preference', () => {
    const [prefers] = useColorScheme();
    return <Text>{prefers}</Text>;
  });
});
