import { Primitive } from '@radix-ui/react-primitive';
import React from 'react';
import { CardVariants, cardVariants } from './constants';

export interface SCardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		CardVariants {
	children?: React.ReactNode;
}

const SCardRoot = React.forwardRef<HTMLDivElement, SCardProps>(
	(
		{
			depth = 'regular',
			padding = 'regular',
			background = 'white',
			spacey = 'none',
			border = 'none',
			rounded = false,
			children,
			className,
			...props
		},
		ref,
	) => {
		const { base } = cardVariants({
			depth,
			padding,
			rounded,
			background,
			spacey,
			border,
		});

		return (
			<Primitive.div className="card-component">
				<div ref={ref} className={base({ className })} {...props}>
					{children}
				</div>
			</Primitive.div>
		);
	},
);
SCardRoot.displayName = 'SCard';

type SCardHeaderMainPropsBase = {
	children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement> &
	Pick<CardVariants, 'alignItems' | 'headerVariant'>;

type ActionProps =
	| {
			primaryAction?: React.ReactNode;
			secondaryAction?: React.ReactNode;
			tertiaryAction?: React.ReactNode;
			actionElement?: never;
	  }
	| {
			primaryAction?: never;
			secondaryAction?: never;
			tertiaryAction?: never;
			actionElement?: React.ReactNode;
	  };

type TitleProps =
	| {
			title?: string;
			description?: string;
			titleElement?: never;
	  }
	| {
			title?: never;
			description?: never;
			titleElement?: React.ReactNode;
	  };

type SCardHeaderMainProps = SCardHeaderMainPropsBase & ActionProps & TitleProps;

const SCardHeader = ({
	alignItems,
	headerVariant,
	className,
	description,
	titleElement,
	actionElement,
	primaryAction,
	secondaryAction,
	tertiaryAction,
	title,
	...props
}: SCardHeaderMainProps) => {
	if ((primaryAction || secondaryAction || tertiaryAction) && actionElement) {
		throw new Error(
			'You cannot use both Actions Props(Primary, Secondary, Tertiary) and actionElement at the same time.',
		);
	}
	if ((title || description) && titleElement) {
		throw new Error(
			'You cannot use (title, description) Props and titleElement at the same time.',
		);
	}

	const { header } = cardVariants({ alignItems, headerVariant });

	return (
		<div {...props} className={header({ className })}>
			<div className="left">
				{titleElement ? (
					titleElement
				) : (
					<>
						<div className="title">{title}</div>
						<div className="description">{description}</div>
					</>
				)}
			</div>
			<div className="right">
				{actionElement ? (
					actionElement
				) : (
					<>
						{primaryAction && <div className="action">{primaryAction}</div>}
						{secondaryAction && <div className="action">{secondaryAction}</div>}
						{tertiaryAction && <div className="action">{tertiaryAction}</div>}
					</>
				)}
			</div>
		</div>
	);
};

SCardHeader.displayName = 'SCardHeader';

type SCardContentProps = {
	children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const SCardContent = React.forwardRef<HTMLDivElement, SCardContentProps>(
	({ children, className, ...props }, ref) => {
		const { content } = cardVariants({});

		return (
			<div ref={ref} className={content({ className })} {...props}>
				{children}
			</div>
		);
	},
);

SCardContent.displayName = 'SCardContent';

interface SCardComponent
	extends React.ForwardRefExoticComponent<
		SCardProps & React.RefAttributes<HTMLDivElement>
	> {
	Header: typeof SCardHeader;
	Content: typeof SCardContent;
}

const SCard = SCardRoot as SCardComponent;
SCard.Header = SCardHeader;
SCard.Content = SCardContent;

export { SCard };
