# Welcome to sweatpants 🙂

#### What is this

Sweatpants is a themable and lightweight React component library as a thin layer on top of [styled-system](https://styled-system.com/) and [styled-components](https://styled-components.com/).

This library is built to speed up your workflow by giving you a few components to work with.

##### The components, **so far**

- **Theme** - The styled-components theme provider
- **Box** - A primitive component with access to your theme
- **Stack** - A layout component which vertically stacks its children
- **Inline** - A layout component which inline-wraps its children
- **ScreenReaderOnly** - A component that visually hides its contents

---

#### How to use

###### First install what you need with npm

```bash
# This theme provider is required to use any of the components
npm i @sweatpants/theme --save

# And install what you need
npm i @sweatpants/box @sweatpants/stack --save
```

###### Wrap your code with the theme

```js
import Theme from '@sweatpants/theme';

<Theme>
  <YourCode />
</Theme>;
```

###### Creating your theme

Themeing is optional, and the components will work out of the box with non-themed values. However, Sweatpants includes `styled-system` and `styled-components` with a default theme which you can extend:

```js
radii: {
  default: '0px'
},
colors: {
  background: '#fff',
  foreground: '#000',
  accent: '#1273e6'
},
fonts: {
  sans: "'Calibre', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif",
  mono: "'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace"
},
fontSizes: {
  default: '16px'
}
```

To extend this theme, pass a `theme` object as a prop to the `<Theme>` component. For more information on theming see:

- [styled-components theming documentation](https://styled-components.com/docs/advanced)
- [styled-system table reference](https://styled-system.com/table)

```js
<Theme
  theme={{
    theme={{
      space: {
        big: "4rem",
        medium: "1rem",
        small: "0.5rem"
      },
      {
        colors: {
          blue: '#0000ff',
          red: '#ff0000'
        },
      }
  }}
/>
```

###### Using your theme

Your theme is now accessible with the `Box` component:

```js
<Box margin="medium" color="blue" />
```

#### Component API

_coming soon_

---

##### About

Created by [jonambas](https://jonambas.com) 😊 because I hated setting this up in every side-project.
