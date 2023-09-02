import { useColorScheme } from '../../packages/react/src';

directory('useColorScheme', () => {
  add('Returns OS preference', () => {
    const prefers = useColorScheme();
    return <div>{prefers}</div>;
  });

  add('Sets data attribute', () => {
    const prefers = useColorScheme({ setHtmlAttribute: true });
    return <div>{prefers}</div>;
  });
});
