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
		<GlobalQuarklyPageStyles pageUrl={"about"} />
		<Helmet>
			<title>
				About | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"About | Website Example"} />
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
		<Section
			padding="140px 0 140px 0"
			background="#ffffff radial-gradient(circle at center,#EBDBFF 0%,#ffffff 47.6%)"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
			sm-background="#fff radial-gradient(circle at center,#A873E8 0%,#fffff 100%)"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-background="rgba(0, 0, 0, 0) radial-gradient(circle at center,#A873E8 0%,#ffffff 45.7%) 0% 0% /auto repeat scroll padding-box" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				margin="0px 50px 0px -50px"
				padding="0px 0 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="normal 500 73px/1.2 --fontFamily-googleOutfit"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 500 45px/1.2 --fontFamily-googleOutfit"
				>
					How does Disko work?
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center" />
			</Box>
		</Section>
		<Section
			padding="0px 0 0px 0"
			background="#ffffff url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
			transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 1s"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" order="0" />
			<Box
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="50%"
				justify-content="center"
			>
				<Text
					lg-text-align="center"
					quarkly-title="Title"
					text-transform="uppercase"
					opacity="0.6"
					lg-margin="0px 0px 6px 0px"
					font="--base"
					margin="0px 0px 10px 0px"
					letter-spacing="1px"
					color="--dark"
				>
					SHaring
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-googleOutfit"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
					text-align="left"
				>
					One-Link
				</Text>
				<Text
					opacity="0.6"
					sm-text-align="left"
					lg-text-align="left"
					lg-margin="0px 0px 18px 0px"
					sm-font="--base"
					font="normal 400 20px/1.5 --fontFamily-sans"
					margin="0px 0px 20px 0px"
					color="--darkL2"
				>
					Share all of your organizations events through a single link. Add your Disko profile to your LinkTree to have potential and current members know your upcoming events.
				</Text>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				padding="px 0px % 0px"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				width="50%"
				border-radius="30px"
				order="0"
				display="flex"
				xl-overflow-x="hidden"
				xl-overflow-y="hidden"
				xl-justify-content="center"
				md-padding="px 0px 100px 0px"
				md-margin="0px 0px px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Create%20Profile.png?v=2023-04-01T06:31:19.369Z"
					display="block"
					align-items="flex-start"
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					md-margin="0px 0px px 0px"
					md-padding="0px 0px 0px 0px"
				/>
			</Box>
		</Section>
		<Section
			padding="0px 0 0px 0"
			background="#ffffff url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
			transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 1s"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" order="0" />
			<Box
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="50%"
				justify-content="center"
			>
				<Text
					lg-text-align="center"
					quarkly-title="Title"
					text-transform="uppercase"
					opacity="0.6"
					lg-margin="0px 0px 6px 0px"
					font="--base"
					margin="0px 0px 10px 0px"
					letter-spacing="1px"
					color="--dark"
				>
					SHaring
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-googleOutfit"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
					text-align="left"
				>
					One-Link
				</Text>
				<Text
					opacity="0.6"
					sm-text-align="left"
					lg-text-align="left"
					lg-margin="0px 0px 18px 0px"
					sm-font="--base"
					font="normal 400 20px/1.5 --fontFamily-sans"
					margin="0px 0px 20px 0px"
					color="--darkL2"
				>
					Share all of your organizations events through a single link. Add your Disko profile to your LinkTree to have potential and current members know your upcoming events.
				</Text>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				padding="px 0px % 0px"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				width="50%"
				border-radius="30px"
				order="0"
				display="flex"
				xl-overflow-x="hidden"
				xl-overflow-y="hidden"
				xl-justify-content="center"
				md-padding="px 0px 100px 0px"
				md-margin="0px 0px px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Create%20Event.png?v=2023-04-01T06:33:53.234Z"
					display="block"
					align-items="flex-start"
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					md-margin="0px 0px px 0px"
					md-padding="0px 0px 0px 0px"
				/>
			</Box>
		</Section>
		<Section
			padding="0px 0 0px 0"
			background="#ffffff url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
			transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 1s"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" order="0" />
			<Box
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="50%"
				justify-content="center"
			>
				<Text
					lg-text-align="center"
					quarkly-title="Title"
					text-transform="uppercase"
					opacity="0.6"
					lg-margin="0px 0px 6px 0px"
					font="--base"
					margin="0px 0px 10px 0px"
					letter-spacing="1px"
					color="--dark"
				>
					SHaring
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-googleOutfit"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
					text-align="left"
				>
					One-Link
				</Text>
				<Text
					opacity="0.6"
					sm-text-align="left"
					lg-text-align="left"
					lg-margin="0px 0px 18px 0px"
					sm-font="--base"
					font="normal 400 20px/1.5 --fontFamily-sans"
					margin="0px 0px 20px 0px"
					color="--darkL2"
				>
					Share all of your organizations events through a single link. Add your Disko profile to your LinkTree to have potential and current members know your upcoming events.
				</Text>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				padding="px 0px % 0px"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				width="50%"
				border-radius="30px"
				order="0"
				display="flex"
				xl-overflow-x="hidden"
				xl-overflow-y="hidden"
				xl-justify-content="center"
				md-padding="px 0px 100px 0px"
				md-margin="0px 0px px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Share%20View%20Event.png?v=2023-04-01T06:34:15.397Z"
					display="block"
					align-items="flex-start"
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					md-margin="0px 0px px 0px"
					md-padding="0px 0px 0px 0px"
				/>
			</Box>
		</Section>
		<Section
			padding="0px 0 0px 0"
			background="#ffffff url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
			transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 1s"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" order="0" />
			<Box
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="50%"
				justify-content="center"
			>
				<Text
					lg-text-align="center"
					quarkly-title="Title"
					text-transform="uppercase"
					opacity="0.6"
					lg-margin="0px 0px 6px 0px"
					font="--base"
					margin="0px 0px 10px 0px"
					letter-spacing="1px"
					color="--dark"
				>
					SHaring
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-googleOutfit"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
					text-align="left"
				>
					One-Link
				</Text>
				<Text
					opacity="0.6"
					sm-text-align="left"
					lg-text-align="left"
					lg-margin="0px 0px 18px 0px"
					sm-font="--base"
					font="normal 400 20px/1.5 --fontFamily-sans"
					margin="0px 0px 20px 0px"
					color="--darkL2"
				>
					Share all of your organizations events through a single link. Add your Disko profile to your LinkTree to have potential and current members know your upcoming events.
				</Text>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				padding="px 0px % 0px"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				width="50%"
				border-radius="30px"
				order="0"
				display="flex"
				xl-overflow-x="hidden"
				xl-overflow-y="hidden"
				xl-justify-content="center"
				md-padding="px 0px 100px 0px"
				md-margin="0px 0px px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Share%20Profile.png?v=2023-04-01T06:34:08.560Z"
					display="block"
					align-items="flex-start"
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					md-margin="0px 0px px 0px"
					md-padding="0px 0px 0px 0px"
				/>
			</Box>
		</Section>
		<Section
			padding="0px 0 0px 0"
			background="#ffffff url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
			transition="all --transitionDuration-normal --transitionTimingFunction-easeInOut 1s"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" order="0" />
			<Box
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="50%"
				justify-content="center"
			>
				<Text
					lg-text-align="center"
					quarkly-title="Title"
					text-transform="uppercase"
					opacity="0.6"
					lg-margin="0px 0px 6px 0px"
					font="--base"
					margin="0px 0px 10px 0px"
					letter-spacing="1px"
					color="--dark"
				>
					SHaring
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-googleOutfit"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
					text-align="left"
				>
					One-Link
				</Text>
				<Text
					opacity="0.6"
					sm-text-align="left"
					lg-text-align="left"
					lg-margin="0px 0px 18px 0px"
					sm-font="--base"
					font="normal 400 20px/1.5 --fontFamily-sans"
					margin="0px 0px 20px 0px"
					color="--darkL2"
				>
					Share all of your organizations events through a single link. Add your Disko profile to your LinkTree to have potential and current members know your upcoming events.
				</Text>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				padding="px 0px % 0px"
				transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				width="50%"
				border-radius="30px"
				order="0"
				display="flex"
				xl-overflow-x="hidden"
				xl-overflow-y="hidden"
				xl-justify-content="center"
				md-padding="px 0px 100px 0px"
				md-margin="0px 0px px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Discovery.png?v=2023-04-01T06:34:01.799Z"
					display="block"
					align-items="flex-start"
					margin="0px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					md-margin="0px 0px px 0px"
					md-padding="0px 0px 0px 0px"
				/>
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