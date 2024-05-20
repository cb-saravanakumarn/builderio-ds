import React, { useContext } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DrawerContextProps = {
  placement: "top" | "right" | "bottom" | "left";
  width: "narrow" | "regular" | "wide";
  height: "short" | "regular";
  show: "show" | "hide";
};
const DrawerContext = React.createContext<DrawerContextProps | undefined>(
  undefined
);

export const useDrawer = () => useContext(DrawerContext);

const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};

const DrawerContextProvider: React.FC<{
  children: React.ReactNode;
  value: DrawerContextProps;
}> = ({ children, ...props }) => {
  return <DrawerContext.Provider {...props}>{children}</DrawerContext.Provider>;
};

export const drawerVariants = cva("s-drawer-container", {
  variants: {
    placement: {
      top: "s-top",
      right: "s-right",
      bottom: "s-bottom",
      left: "s-left",
    },
    width: {
      narrow: "s-narrow",
      regular: "s-regular",
      wide: "s-wide",
    },
    height: {
      short: "s-short",
      regular: "s-regular",
    },
    show: {
      show: "s-drawer-show",
      hide: "",
    },
  },
  defaultVariants: {
    placement: "top",
    width: "narrow",
    height: "short",
    show: "show",
  },
});

export interface DrawerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof drawerVariants> {
  children?: React.ReactNode;
  onClose?(): void;
  title?: string;
  hasCloseIcon: boolean;
}

type DrawerRootProps = {
  children: React.ReactNode;
} & DrawerContextProps;

const DrawerComponent = React.forwardRef<HTMLDivElement, DrawerRootProps>(
  ({ children, placement, width, height, show, ...props }: DrawerRootProps) => {
    return (
      <DrawerContextProvider value={{ placement, width, height, show }}>
        <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
      </DrawerContextProvider>
    );
  }
);

DrawerComponent.displayName = "Drawer";

export const Drawer = DrawerComponent;

type DrawerTriggerProps = {
  children: React.ReactNode;
};

export const DrawerTrigger = ({ children, ...props }: DrawerTriggerProps) => {
  return (
    <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>
  );
};

type DrawerOverlaysProps = {
  children?: React.ReactNode;
};

export const DrawerOverlays = ({ children, ...props }: DrawerOverlaysProps) => {
  return (
    <DialogPrimitive.Overlay
      {...props}
      className="s-fixed s-inset-0 s-bg-gray-500 s-bg-opacity-50"
    />
  );
};

type DrawerContentProps = {
  children: React.ReactNode;
};

export const DrawerContent = ({
  children,

  ...props
}: DrawerContentProps) => {
  const { placement, width, height, show } = useDrawerContext();

  return (
    <DialogPrimitive.Content
      {...props}
      className={cn(
        drawerVariants({ placement, width, height, show }),
        "data-[state=open]:s-animate-contentShow s-fixed s-w-[50%] s-bg-white s-z-50 s-top-0 s-h-[100vh] focus:s-outline-none"
      )}
    >
      {children}
    </DialogPrimitive.Content>
  );
};
