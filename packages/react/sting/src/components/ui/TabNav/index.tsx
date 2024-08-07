import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React, {  forwardRef } from 'react';
import {ComponentPropsWithout, RemovedProps} from '@/helpers/component-props'
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const TabNavVariant = cva("s-tab-nav", {
  variants: {
    variant: {
      default: "s-tab-nav-item",
     
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Extend TabNavContainerProps with props from NavigationMenu.Root
interface TabNavContainerProps extends ComponentPropsWithout<typeof NavigationMenu.Root, RemovedProps> {
  children: React.ReactNode;
}

type TabNavRootElement = React.ElementRef<typeof NavigationMenu.Root>;

const TabNavRoot:React.FC<TabNavContainerProps> = forwardRef<TabNavRootElement, TabNavContainerProps>(({children, ...props}, ref)=>{
  return (
    <NavigationMenu.Root ref={ref} {...props}>
     <NavigationMenu.List className=' s-m-0 s-p-0'
      >
        {children}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
})

TabNavRoot.displayName = 'TabNav.Root';

type TabNavLinkElement = React.ElementRef<typeof NavigationMenu.Link>;
interface TabNavLinkProps
  extends ComponentPropsWithout<typeof NavigationMenu.Link, 'omSelect'>, VariantProps<typeof TabNavVariant>
  {
    active?: boolean
  }

  const TabNavLink = React.forwardRef<TabNavLinkElement, TabNavLinkProps>((props, forwardedRef) => {
    const { asChild, children, className, active = false, variant='default', ...linkProps } = props;
    console.log(active, "Active")


    const classes = cn(
      TabNavVariant({ variant }),
      { "s-active": active },
    );
    return (
      <NavigationMenu.Item  className={classes}>
        <NavigationMenu.Link  {...linkProps} ref={forwardedRef} onSelect={undefined}
        asChild={asChild} active={active} >
        {children}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    )
  })


TabNavRoot.displayName = 'TabNav';
  TabNavLink.displayName = 'TabNavItem';

  interface TabNavComponent extends React.ForwardRefExoticComponent<TabNavContainerProps> {
    Item : typeof TabNavLink
  }

  const TabNav = TabNavRoot as TabNavComponent
  TabNav.Item = TabNavLink

  // export { TabNavRoot as Root, TabNavLink as Link };

  export { TabNavRoot, TabNavLink, TabNav }
