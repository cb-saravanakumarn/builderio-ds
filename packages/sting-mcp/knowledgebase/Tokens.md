# Sting Design System Tokens

This document describes the design tokens available in the Sting Design System.

## Colors

### Brand Colors

The brand colors represent the core visual identity of the Sting Design System.

- `brand.dark`: #ff3300
- `brand.logo`: #ff3300
- `brand.deep.dark`: #012a38
- `brand.deep.light`: #e6eaeb
- `brand.lime.dark`: #344303
- `brand.lime.light`: #bff90b
- `brand.blue.dark`: #293031
- `brand.blue.light`: #a2c1c4
- `brand.ivory.dark`: #383732
- `brand.ivory.light`: #e0dbc6

### Neutral Colors

Neutral colors are used for text, backgrounds, lines, and borders.

- `neutral.0`: #FFFFFF
- `neutral.25`: #FBFCFD
- `neutral.50`: #F3F5F8
- `neutral.100`: #E5E8ED
- `neutral.200`: #C9CED6
- `neutral.300`: #A7AEBB
- `neutral.400`: #86909F
- `neutral.500`: #545E6F
- `neutral.600`: #3B4350
- `neutral.700`: #3B4350
- `neutral.800`: #1C222B
- `neutral.900`: #090B0F

### Semantic Colors

#### Primary

- `primary.25`: #f3f9ff
- `primary.50`: #f2f7ff
- `primary.100`: #d7e6fd
- `primary.200`: #abc9f9
- `primary.300`: #7ba8f3
- `primary.400`: #4b84e2
- `primary.500`: #1961d3
- `primary.600`: #084db4
- `primary.700`: #003b92
- `primary.800`: #002a6e
- `primary.900`: #011d50
- `primary.1000`: #000d19

#### Info

- `info.25`: #f4fefe
- `info.50`: #e3fbfc
- `info.100`: #c7edef
- `info.200`: #9dd3d5
- `info.300`: #70b5b9
- `info.400`: #429599
- `info.500`: #10777c
- `info.600`: #066166
- `info.700`: #004c50
- `info.800`: #00383b
- `info.900`: #00282a
- `info.1000`: #0d131c

#### Warning

- `warn.25`: #fffdf6
- `warn.50`: #fef7e1
- `warn.100`: #fdeec1
- `warn.200`: #ffe79c
- `warn.300`: #ffdf7b
- `warn.400`: #ffd95e
- `warn.500`: #fed33e
- `warn.600`: #e8c031
- `warn.700`: #cfaa23
- `warn.800`: #ac8c0e
- `warn.900`: #786100
- `warn.1000`: #4f350c

#### Success

- `success.25`: #fafefa
- `success.50`: #f1faf1
- `success.100`: #d7ebd7
- `success.200`: #a9d5aa
- `success.300`: #75bc78
- `success.400`: #3d9d46
- `success.500`: #008020
- `success.600`: #006818
- `success.700`: #005211
- `success.800`: #003c0a
- `success.900`: #002b05
- `success.1000`: #012d18

#### Danger

- `danger.25`: #fffcfc
- `danger.50`: #fff4f3
- `danger.100`: #fbdcda
- `danger.200`: #f5b5b1
- `danger.300`: #ea8884
- `danger.400`: #d35958
- `danger.500`: #ba2a33
- `danger.600`: #a00d21
- `danger.700`: #810016
- `danger.800`: #61000e
- `danger.900`: #460108
- `danger.1000`: #530009

## Spacing

Spacing tokens are used for margins, paddings, and layout spacing.

- `none`: 0
- `si`: 0.125rem (2px)
- `ti`: 0.25rem (4px)
- `mi`: 0.5rem (8px)
- `xs`: 0.75rem (12px)
- `sm`: 1rem (16px)
- `st`: 1.25rem (20px)
- `md`: 1.5rem (24px)
- `lg`: 2rem (32px)
- `xl`: 2.25rem (36px)
- `xxl`: 2.5rem (40px)
- `3xl`: 3rem (48px)
- `4xl`: 3.5rem (56px)
- `5xl`: 4rem (64px)
- `6xl`: 4.5rem (72px)
- `7xl`: 5rem (80px)

## Border Radius

Border radius tokens are used to round corners of elements.

- `none`: 0
- `sm`: 0.125rem (2px)
- `st`: 0.25rem (4px)
- `md`: 0.375rem (6px)
- `lg`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `circular`: 9999px

## Typography

### Font Weights

- `regular`: 400
- `medium`: 500
- `semibold`: 600

### Font Sizes

#### Headings

- `heading-2xl`: 3rem (48px), line height: 3.5rem, letter spacing: -0.32px
- `heading-xl`: 2rem (32px), line height: 2.5rem, letter spacing: -0.24px
- `heading-lg`: 1.5rem (24px), line height: 2rem, letter spacing: -0.16px
- `heading-md`: 1.25rem (20px), line height: 1.75rem, letter spacing: -0.08px
- `heading-sm`: 1rem (16px), line height: 1.5rem, letter spacing: 0px
- `heading-xs`: 0.875rem (14px), line height: 1.25rem, letter spacing: 0px

#### Body Text

- `body-lead`: 1rem (16px), line height: 1.5rem, letter spacing: 0px
- `body`: 0.875rem (14px), line height: 1.25rem, letter spacing: 0px
- `body-caption`: 0.75rem (12px), line height: 1rem, letter spacing: 0px
- `body-tiny`: 0.625rem (10px), line height: 1rem, letter spacing: 0px

## Usage

These tokens are available through the sting-tokens package and can be used in your projects via Tailwind CSS. The tokens are organized to maintain consistency across the design system and provide a unified visual language.

```jsx
// Example usage in a component
<div className="bg-primary-500 text-neutral-0 p-sm rounded-md">
  <span className="text-heading-md font-medium">Hello World</span>
</div>
```

This creates a button with the primary color, white text, small padding, and medium border radius, using the design tokens defined above.
