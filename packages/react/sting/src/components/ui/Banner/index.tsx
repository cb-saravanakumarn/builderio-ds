import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
// todo make these changes to all cva components and make a seperate file for types
const ButtonSize = {
  small: "s-banner-small",
  regular: "s-banner-regular", // Add a missing regular size variant
  large: "s-banner-large",
};

const theme = {
  Default: "s-banner-theme-default",
  Deep: "s-banner-theme-deep",
  "Ice and Sand": "s-banner-dark",
  // Add a new theme option
  customtheme: "s-banner-theme-iceandsand",
};

const variant = {
  Hero: "s-banner-hero",
  Communication: "s-banner-comm",
};

const bannerVariants = cva("s-banner", {
  // Remove unwanted stuff and add missing stuff here
  variants: {
    variant: variant,
    size: ButtonSize,
    theme: theme,
  },
  compoundVariants: [{ variant: "Hero", size: "regular", theme: "Default" }],
  defaultVariants: {
    variant: "Hero",
    theme: "Default",
    size: "regular",
  },
});

export interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  children?: React.ReactNode;
  size?: keyof typeof ButtonSize;
  theme?: keyof typeof theme;
  variants?: keyof typeof variant;
  // Add a new title prop
  title?: string;
  // Add a new paragraph prop
  paragraph?: string;
  // Add a new prop for the image source
  imgSrc?: string;
  // className: string
}

const Banner = ({
  className,
  variant,
  children,
  size,
  theme,
  title,
  paragraph,
  imgSrc,
  ...props
}: BannerProps) => {
  return (
    <div
      className={`s-banner ${cn(
        bannerVariants({ variant, size, theme }),
        className
      )}`}
      {...props}
    >
      <div className="s-banner-content">
        {/* Use the 'title' prop here */}
        <h2 className="s-banner-title">
          {title || "Unlock a lifetime of subscriber growth and retention"}
        </h2>
        {/* Use the 'paragraph' prop here */}
        <p className="s-banner-paragraph">
          {paragraph ||
            "Thousands of subscription businesses worldwide rely on Chargebee's unique Revenue Growth Management platform to accelerate growth, drive customer success, and manage their businesses in 227 countries and territories."}
        </p>

        <div className="s-banner-buttons">{children}</div>
      </div>
      <div className="s-banner-image">
        {/* Use the 'imgSrc' prop for the image source */}
        <img
          src={
            imgSrc ||
            "https://cbx.vercel.app/static/media/illustration.4f609f62543c3f4d01c2.png"
          }
          alt="Banner Image"
        />
      </div>
    </div>
  );
};

Banner.displayName = "Banner";

export { Banner, bannerVariants };
