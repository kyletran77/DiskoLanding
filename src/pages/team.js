import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"team"} />
		<Helmet>
			<title>
				Team | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Team | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 100px 0px 100px"
				width="100%"
			/>
			<Image src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Group%20109.png?v=2023-03-29T05:43:33.518Z" width="120px" z-index="3" />
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
				<Override
					slot="menu"
					md-top={0}
					md-width="100%"
					justify-content="center"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					lg-transform="translateY(0px) translateX(0px)"
					md-height="100%"
					padding="0px 0 0px 0"
					align-items="center"
				>
					<Override
						slot="item"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-hover-opacity="1"
						md-active-opacity="1"
						md-color="--dark"
						font="--base"
						text-transform="initial"
						md-font="16px/24px sans-serif"
						text-decoration-line="initial"
						color="--dark"
						transition="opacity .15s ease 0s"
						letter-spacing="0.5px"
						md-opacity=".5"
						md-transition="opacity .15s ease 0s"
						opacity=".5"
						hover-opacity="1"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
					<Override slot="link-about">
						How it Works
					</Override>
					<Override slot="link-team">
						Team
					</Override>
					<Override slot="link-contact">
						Ambassadors
					</Override>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
				/>
				<Override
					slot="menu-open"
					md-justify-content="center"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
				/>
			</Components.BurgerMenu>
			<Link transition="opacity 200ms ease" quarkly-title="Link" href="/" position="relative" />
		</Section>
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" background="#ffffff radial-gradient(circle at center,#EBDBFF 0%,#ffffff 47.6%)" />
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				margin="px 0px 32px 0px"
				width="100%"
				padding="64px 0px 64px 0px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="normal 900 72px/1.2 --fontFamily-googleOutfit"
					color="--dark"
					sm-text-align="center"
					text-align="center"
				>
					Our Team
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					The people changing the event marketing and management industry, one small step at a time{" "}
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				width="100%"
			>
				<Box position="relative" display="flex" flex-direction="column" width="50% content-box">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/IMG_0259.jpg?v=2023-04-01T05:55:10.515Z"
							border-radius="16px"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
							width="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Kyle Tran
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							DEV & BIZ
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Get your money up, not your funny up
						</Text>
					</Box>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Nathan%20prof%20pic.jpeg?v=2023-04-01T05:45:02.515Z"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Nathan Ampudia
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							DESIGNER & BIZ
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							I do more than just coloring in my business classes
						</Text>
					</Box>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/johnny_headshot.jpg?v=2023-04-01T05:52:41.459Z"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Johnny Dinh
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							Full-Stack Dev
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Stop changing the Figma
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				margin="32px 0px 32px 0px"
				width="100%"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					sm-text-align="center"
					text-align="center"
				>
					Advisors
				</Text>
				<Text
					margin="16px 0px 0px 0px"
					font="--lead"
					display="block"
					width="50%"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
				>
					Professionals giving Disko a hand
				</Text>
			</Box>
			<Box
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				md-grid-template-columns="1fr"
				width="100%"
			>
				<Box position="relative" display="flex" flex-direction="column" width="50% content-box">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Trinh_headshot.jpeg?v=2023-04-01T06:07:05.704Z"
							border-radius="16px"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
							width="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Trinh Tran
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							Director at Broadcom
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							Where are your KPIs?
						</Text>
					</Box>
				</Box>
				<Box position="relative" display="flex" flex-direction="column">
					<Box
						width="100%"
						height="auto"
						overflow-x="hidden"
						overflow-y="hidden"
						position="relative"
						padding="100% 0px 0px 0px"
						border-radius="16px"
					>
						<Image
							src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/nikeshLMAO.jpeg?v=2023-04-01T06:09:19.401Z"
							border-radius="16px"
							width="100%"
							object-fit="cover"
							position="absolute"
							top={0}
							left={0}
							bottom={0}
							right={0}
							max-height="100%"
						/>
						<Box
							position="absolute"
							width="100%"
							height="auto"
							background="linear-gradient(180deg, #0029FF 0%, rgba(255, 0, 229, 0.24) 100%)"
							opacity=".3"
							bottom="0px"
							top="0px"
							right="0px"
							left="0px"
							border-radius="16px"
						/>
					</Box>
					<Box padding="0px 20px 0px 20px" margin="0px 0px 16px 0px">
						<Text
							margin="24px 0px 0px 0px"
							font="--headline3"
							display="block"
							text-align="center"
							color="--darkL1"
						>
							Nikesh Raj Poudel
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="normal 500 14px/1.2 --fontFamily-sans"
							display="block"
							text-align="center"
							color="--grey"
							letter-spacing="2.8px"
						>
							Consulting Director at 180 Degrees
						</Text>
						<Text
							margin="16px 0px 0px 0px"
							font="--base"
							display="block"
							text-align="center"
							color="--darkL2"
						>
							I do CS classes for fun
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
			md-background="#A873E8"
			background="#A873E8"
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
			/>
			<Section color="--dark" padding="64px 0 64px 0" md-background="rgba(247, 251, 255, 0)" md-padding="0 0 64px 0">
				<Text
					margin="0px 0px 0px 0px"
					md-font="30px --fontFamily-googleOutfit"
					md-text-align="center"
					md-color="#ffffff"
					color="#ffffff"
					font="45px --fontFamily-googleOutfit"
				>
					Express yourself, especially when you are marketing
				</Text>
			</Section>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
			md-background="#A873E8"
			background="#A873E8"
		>
			<Override
				slot="SectionContent"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Box
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
				display="grid"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Link
						white-space="nowrap"
						font="--base"
						opacity="0.6"
						text-align="left"
						margin="1px 0px 0px 10px"
						href="https://quarkly.io/"
						color="--light"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
						md-border-color="#ffffff"
						md-color="#ffffff"
						border-color="#ffffff"
					>
						Disko 2023
					</Link>
				</Box>
				<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end">
					<Override slot="link" background="none" border-radius="50%" />
					<Override slot="icon" color="--dark" />
				</SocialMedia>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});