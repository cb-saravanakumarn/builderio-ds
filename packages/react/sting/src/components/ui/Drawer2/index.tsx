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

export const drawerVariants = cva("drawer-container", {
  variants: {
    placement: {
      top: "top",
      right: "right",
      bottom: "bottom",
      left: "left",
    },
    width: {
      narrow: "narrow",
      regular: "regular",
      wide: "wide",
    },
    height: {
      short: "short",
      regular: "regular",
    },
    show: {
      show: "drawer-show",
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
      className="fixed inset-0 bg-gray-500 bg-opacity-50"
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
        "data-[state=open]:animate-contentShow fixed w-[50%] bg-white z-50 top-0 h-[100vh] focus:outline-none"
      )}
    >
      {children}
    </DialogPrimitive.Content>
  );
};
