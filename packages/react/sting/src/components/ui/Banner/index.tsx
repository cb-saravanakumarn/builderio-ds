import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Primitive } from '@radix-ui/react-primitive';
import { Card } from "../Card";
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
    <Primitive.div
      className={`s-banner ${cn(
        bannerVariants({ variant, size, theme }),
        className
      )}`}
      {...props}
    >
      <Primitive.div className="s-banner-content">
        {/* Use the 'title' prop here */}
        <h2 className="s-banner-title">
          {title || "Unlock a lifetime of subscriber growth and retention"}
        </h2>
        {/* Use the 'paragraph' prop here */}
        <p className="s-banner-paragraph">
          {paragraph ||
            "Thousands of subscription businesses worldwide rely on Chargebee's unique Revenue Growth Management platform to accelerate growth, drive customer success, and manage their businesses in 227 countries and territories."}
        </p>

        <Primitive.div className="s-banner-buttons">{children}</Primitive.div>
      </Primitive.div>
      <Primitive.div className="s-banner-image">
        {/* Use the 'imgSrc' prop for the image source */}
        <img
          src={
            imgSrc ||
            "https://cbx.vercel.app/static/media/illustration.4f609f62543c3f4d01c2.png"
          }
          alt="Banner Image"
        />
      </Primitive.div>
    </Primitive.div>
  );
};

Banner.displayName = "Banner";



type BannerContainerProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;


const BannerContainer:React.FC<BannerContainerProps> = ({ children }) => {
  return <Primitive.div>
    <Card>
    <Primitive.div className="flex justify-between">
      {children}
      </Primitive.div>
      </Card>
    </Primitive.div>;
};


type BannerContentProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BannerContent:React.FC<BannerContentProps> = ({ children }) => {
  return <Primitive.div className="p-4 xl:p-6 space-y-4 w-full">{children}</Primitive.div>;
};

interface BannerImageProps {
  children?: React.ReactNode;
  backgroundImage: string;
  className?: string;
}

const BannerImage: React.FC<BannerImageProps> = ({
  children,
  backgroundImage,
  className,
}) => {
  return (
    <Primitive.div
      className={`hidden lg:block bg-white w-72 2xl:w-96 rounded-r-md bg-no-repeat bg-cover ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "bottom center",
        backgroundSize: "280%",
      }}
    >
      {children}
    </Primitive.div>
  );
};


type BannerElementsProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BannerElement:React.FC<BannerElementsProps> = ({ children }) => {
  return <Primitive.div className="flex flex-wrap gap-2">{children}</Primitive.div>;
};

type BannerHeaderProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BannerHeader:React.FC<BannerHeaderProps> = ({ children }) => {
  return <Primitive.div>{children}</Primitive.div>;
};

// type BannerSubheaderProps = {
//   children: React.ReactNode;
// } & React.HTMLAttributes<HTMLDivElement>;

const BannerSubheader:React.FC<BannerHeaderProps> = ({ children }) => {
  return <Primitive.div className="s-flex s-justify-between">{children}</Primitive.div>;
};

const BannerSubText:React.FC<BannerHeaderProps> = ({ children }) => {
  return <Primitive.div>{children}</Primitive.div>;
};

type BannerTitleProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const BannerTitle:React.FC<BannerTitleProps> = ({ children }) => {
  return <Primitive.div>{children}</Primitive.div>;
};


export { Banner, bannerVariants, BannerContainer, BannerContent, BannerImage, BannerElement, BannerHeader, BannerSubheader, BannerSubText, BannerTitle };