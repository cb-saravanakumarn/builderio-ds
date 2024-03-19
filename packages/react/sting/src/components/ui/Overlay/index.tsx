import * as React from 'react';
import * as Portal from '@radix-ui/react-portal';
import { Primitive } from '@radix-ui/react-primitive';

const Overlay = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, forwardedRef) => (
  <Portal.Root>
    <Primitive.div
      {...props}
      ref={forwardedRef}
      className=" overlay-main "
      //   style={{
      //     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black with 50% opacity
      //     position: 'fixed',
      //     inset: 0,
      //   }}
    />
  </Portal.Root>
));

export { Overlay };
