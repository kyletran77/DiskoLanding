import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Em, Span, Box, Strong, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
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
						Organizations
					</Override>
					<Override slot="link-team">
						Team
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
			background="#fee5fe url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
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
					font="normal 500 73px/1.2 --fontFamily-sans"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					The all-in-one event marketing platform{" "}
				</Text>
				<Text margin="0px 0px 0px 0px" color="#586D8E" font="normal 400 30px/1.5 --fontFamily-sans" lg-text-align="center">
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Em
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Marketing aint easy.
						</Em>
					</Span>
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center" />
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-text-align="center"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.12)"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						background="--color-indigo"
						text-decoration-line="initial"
						font="--lead"
						border-radius="30px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
					>
						Get Started
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				border-radius="70px"
				margin="0px 0px 0px 0px"
			>
				<Image src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Wavy_Bus-15_Single-10.jpg?v=2023-03-29T06:05:25.150Z" display="block" padding="0px 0px 0px px" margin="0px 0px 0px 0px" />
			</Box>
		</Section>
		<Section background="--color-light">
			<Text margin="0px 0px 0px 0px" color="--darkL2" font="--headline3" lg-text-align="center">
				<Em
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Disko ={" "}
						</Strong>
						One-Link + Event Landing Page + Discovery + Advanced Analytics{" "}
					</Span>
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						+{" "}
					</Span>
					more to come
				</Em>
			</Text>
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
					font="normal 500 45px/1.2 --fontFamily-sans"
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
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-text-align="center"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.12)"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						background="--color-indigo"
						text-decoration-line="initial"
						font="--lead"
						border-radius="30px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
					>
						Create a Link
					</Link>
				</Box>
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
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/[Mockup]%20iPhone%2013.png?v=2023-03-29T06:15:20.399Z"
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
			padding="100px 0 100px 0"
			background="#fbffd6 url() 0% 0% /auto repeat scroll padding-box"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
			border-color="#b6b6b6"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" order="0" />
			<Box
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				order="-1"
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
					Data
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-sans"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
					xl-text-align="left"
					sm-text-align="left"
				>
					Advanced Analytics
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
					xl-text-align="left"
				>
					Study your data to see how you can improve your  events and organization's visibility. Learn from your past events to market your organization more efficiently!
				</Text>
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-text-align="center"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.12)"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						background="--color-indigo"
						text-decoration-line="initial"
						font="--lead"
						border-radius="30px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
					>
						View Your Data
					</Link>
				</Box>
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
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Macbook%20Pro%202021%2016_.png?v=2023-03-29T06:27:06.066Z"
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
					marketing
				</Text>
				<Text
					font="normal 500 45px/1.2 --fontFamily-sans"
					margin="0px 0px 28px 0px"
					color="--dark"
					lg-text-align="center"
					lg-margin="0px 0px 18px 0px"
					sm-font="--headline3"
					md-font="--headline3"
				>
					Discovery
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
					Use our engaging feed to share your events to individuals who are eager network. Have a dedicated feed to improve visibility for your events and organizations.
				</Text>
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-text-align="center"
					border-radius="30px"
					border-color="rgba(255, 255, 255, 0.12)"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--light"
						background="--color-indigo"
						text-decoration-line="initial"
						font="--lead"
						border-radius="30px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
					>
						Join an Event
					</Link>
				</Box>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				padding="px 0px % 0px"
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
					src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/[Mockup]%20iPhone%2014.png?v=2023-03-29T16:47:16.104Z"
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
		>
			<Override
				slot="SectionContent"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
			/>
			<Section background="--color-light" color="--dark" padding="64px 0 64px 0">
				<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
					<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
						<Box>
							<Text
								font="--base"
								color="--grey"
								letter-spacing="1px"
								text-transform="uppercase"
								margin="0"
							>
								Contact
							</Text>
							<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
								Email us, we would love to hear form you
							</Text>
						</Box>
					</Box>
					<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
						<Box>
							<Formspree endpoint="xeqpgrlv">
								<Box
									gap="16px"
									display="grid"
									flex-direction="row"
									flex-wrap="wrap"
									grid-template-columns="repeat(2, 1fr)"
									grid-gap="16px"
								>
									<Box sm-width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Name
										</Text>
										<Input width="100%" name="name" type="text" />
									</Box>
									<Box sm-width="100%" display="flex" flex-direction="column">
										<Text font="--base" margin="0 0 4px 0">
											Email
										</Text>
										<Input width="100%" type="email" name="email" />
									</Box>
									<Box display="flex" flex-direction="column" grid-column="1 / span 2">
										<Text font="--base" margin="0 0 4px 0">
											Message
										</Text>
										<Input as="textarea" rows="4" width="100%" name="message" />
									</Box>
									<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
										<Button>
											Send
										</Button>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Section>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
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
						color="--dark"
						text-decoration-line="initial"
						hover-text-decoration-line="underline"
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
		<Section />
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