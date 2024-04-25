import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
// todo make these changes to all cva components and make a seperate file for types
const ButtonSize = {
  small: "banner-small",
  regular: "banner-regular", // Add a missing regular size variant
  large: "banner-large",
};

const theme = {
  Default: "banner-theme-default",
  Deep: "banner-theme-deep",
  "Ice and Sand": "banner-dark",
  // Add a new theme option
  customtheme: "banner-theme-iceandsand",
};

const variant = {
  Hero: "banner-hero",
  Communication: "banner-comm",
};

const bannerVariants = cva("banner", {
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
      className={`banner ${cn(
        bannerVariants({ variant, size, theme }),
        className
      )}`}
      {...props}
    >
      <div className="banner-content">
        {/* Use the 'title' prop here */}
        <h2 className="banner-title">
          {title || "Unlock a lifetime of subscriber growth and retention"}
        </h2>
        {/* Use the 'paragraph' prop here */}
        <p className="banner-paragraph">
          {paragraph ||
            "Thousands of subscription businesses worldwide rely on Chargebee's unique Revenue Growth Management platform to accelerate growth, drive customer success, and manage their businesses in 227 countries and territories."}
        </p>

        <div className="banner-buttons">{children}</div>
      </div>
      <div className="banner-image">
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
