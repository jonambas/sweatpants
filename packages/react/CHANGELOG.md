# @sweatpants/react

## 0.10.4

### Patch Changes

- 3a3baff: Wrap Tooltip.Content with forwardRef so it works with Tooltip.Portal

## 0.10.3

### Patch Changes

- 1ce6b41: Fix DateField trigger polymorphism, fix Toast border colors

## 0.10.2

### Patch Changes

- d27894f: Fix DateField label alignment within a trigger

## 0.10.1

### Patch Changes

- 9c127e4: Fix forwardRef warning, align Popover and Tooltip APIs
- e087840: Add Tooltip animations

## 0.10.0

### Minor Changes

- a3756ec: Add Tooltip component

## 0.9.0

### Minor Changes

- 72ed757: Add Popover component. Fix Drawer and Dailog `defaultOpen` state. Adjust `md` box shadow.

### Patch Changes

- e1a6a13: DateField now closes the popover when a day is selected

## 0.8.3

### Patch Changes

- 782e415: Add DateField DatePicker props pass through, adjust Toast contrast

## 0.8.2

### Patch Changes

- bc01c11: Slightly brighten colors.gray2

## 0.8.1

### Patch Changes

- f4fb30f: Fix selected Tab font color

## 0.8.0

### Minor Changes

- 8ed4e19: - Remove Drawer borders
  - Update background color semantic tokens

## 0.7.28

### Patch Changes

- 1853104: - `Toast` does not render close button if `onClose` is not provided
  - Fixes `Toast`` background color
  - Adds `Card` `asChild` prop
  - Upgrades Panda to latest

## 0.7.27

### Patch Changes

- 6d5cf7c: Add Button iconOnly prop, and gap between button children

## 0.7.26

### Patch Changes

- 89b7341: Fix selected Button styles
- 650e59f: Refactor conditions to use base, \_light, and \_dark, to avoid flash of no theme

## 0.7.25

### Patch Changes

- 69cf9e4: Fix Tab tabIndex

## 0.7.24

### Patch Changes

- 05081df: Add Tabs keyboard interactions

## 0.7.23

### Patch Changes

- 96f1b0e: Fix incorrect field background colors

## 0.7.22

### Patch Changes

- 22ee5d2: Add calendar icon to DateField
- 6fd1eae: Darken Drawer overlay
- 258957a: Increase Tab gap, fix TextField lineheight, add background color to input components

## 0.7.21

### Patch Changes

- 0387be1: - Add white and black tokens
  - Add box shadow tokens
  - Adjust radius tokens
  - Makes small visual adjustments to various components

## 0.7.20

### Patch Changes

- 0be195d: update border radius tokens

## 0.7.19

### Patch Changes

- 02ab2d2: Fix DateField z-index when rendered inside a Drawer

## 0.7.18

### Patch Changes

- 59e9b5e: Add use client directive to DateField

## 0.7.17

### Patch Changes

- 427a3ff: Add DatePicker and DateField

## 0.7.16

### Patch Changes

- e39dc7c: Fix color scheme context handler caching

## 0.7.15

### Patch Changes

- 21c5ffb: Fix 'use client' context error

## 0.7.14

### Patch Changes

- ff5117d: add use client directive to ColorSchemeProvider

## 0.7.13

### Patch Changes

- 57121ab: Add controlled scheme state to ColorSchemeProvider, and adjust elevated Card borders in dark mode

## 0.7.12

### Patch Changes

- 4c2ad7b: Replace controlScheme with defaultScheme, add onSchemeChange

## 0.7.11

### Patch Changes

- d29ffaf: Add ColorSchemeProvider, adjust dark mode colors

## 0.7.10

### Patch Changes

- e537edb: Add contentBg token, adjust baseBg token

## 0.7.9

### Patch Changes

- c706d78: Fix Select trigger sm font-size

## 0.7.8

### Patch Changes

- e9118dd: Drawer opens to the side by default if ref is undefined

## 0.7.7

### Patch Changes

- da27422: Fix Select content zindex, adjust sm Button font size

## 0.7.6

### Patch Changes

- ae19f47: Increase drawer z-index

## 0.7.5

### Patch Changes

- a6fe882: Align Select styles with Button styles

## 0.7.4

### Patch Changes

- 0c8dd01: Fix missing dependency

## 0.7.3

### Patch Changes

- c52823d: Adjust Button styles, animate Drawer exit
- 43f8b83: Update dependencies

## 0.7.2

### Patch Changes

- 46162fa: Fix TextField first render transition

## 0.7.1

### Patch Changes

- 9555bf4: Fix Select overlay zindex within drawers

## 0.7.0

### Minor Changes

- 1b5d0ed: Add additional color scales, fix some components

## 0.6.0

### Minor Changes

- 8d27c65: Various styling updates and bug fixes
- af2e2d2: Add Toast component
- af2e2d2: Add icons
- 143d935: Add Drawer component, breakpoints, supporting keyframes

## 0.5.2

### Patch Changes

- 0d7030b: Fix incorrect module path

## 0.5.1

### Patch Changes

- 36967d9: Preserve modules for use client directives

## 0.5.0

### Minor Changes

- e8b5690: Support dark mode

## 0.4.1

### Patch Changes

- 4d071d1: Add option to manually set scheme preference

## 0.4.0

### Minor Changes

- beac85d: Add hideChevron option on Select
- 6a6b7b2: Add useColorScheme hook, add bare Select kind

### Patch Changes

- 60db132: Fix Button text wrapping

## 0.3.7

### Patch Changes

- 5b2b285: Fix negative token bug, update styles

## 0.3.6

### Patch Changes

- a3f9082: Fix cjs export
- a0115e2: Add Card.Divider component
- ea3e425: Pin dependencies and clean up package.json

## 0.3.5

### Patch Changes

- Label component now renders a label instead of a span when hidden

## 0.3.4

### Patch Changes

- 8e60c30: Fix selected Button hover state

## 0.3.3

### Patch Changes

- bf3dd02: panda theme is exported by default

## 0.3.2

### Patch Changes

- 03acce4: Fix CSS class name hashing

## 0.3.1

### Patch Changes

- Fix internal styles/css resolution

## 0.3.0

### Minor Changes

- Add Select and Label components

## 0.2.0

### Minor Changes

- 5abca6e: Add ScreenReaderOnly, TextField, Stack components"

## 0.1.0

### Minor Changes

- 4e4d16b: initial release
