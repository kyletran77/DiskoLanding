import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Box, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"privacy-policytos"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
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
			<Link transition="opacity 200ms ease" quarkly-title="Link" href="/" position="relative">
				<Image src="https://uploads.quarkly.io/64234a00aed6310020be6362/images/Frame%207.png?v=2023-04-02T18:46:27.087Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
				<Override slot="undefined" md-align-items="center" />
			</Components.BurgerMenu>
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
					Privacy Policy/
					<br />
					Terms of Service
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
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				order="0"
				display="block"
			/>
			<Box
				display="block"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="100%"
				justify-content="center"
			>
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
					Privacy Policy
				</Text>
				<Text margin="0px 0px 40px 0px">
					At Disko, we recognize that privacy is important. This Privacy Policy explains how we collect, use, and share information when you use our website, mobile application, or other online services (collectively, the "Services").
				</Text>
				<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" list-style-type="disc" as="ul">
					<Text margin="0px 0px 40px 0px">
						Information we collect
When you use our Services, we may collect the following types of information:
						<br />
						<br />
						Personal information: We may collect personal information that you provide to us, such as your name, email address, or phone number.
						<br />
						<br />
						Usage information: We may collect information about your use of our Services, such as the pages or content you view, the features you use, and the actions you take.
						<br />
						<br />
						Device information: We may collect information about the device you use to access our Services, such as the device type, operating system, and mobile network information.
						<br />
						<br />
						Location information: We may collect information about your location when you use our mobile application, with your consent.
					</Text>
					<Text margin="0px 0px 40px 0px">
						How we use information
We may use the information we collect for the following purposes:
						<br />
						<br />
						<br />
						<br />
						To provide and improve our Services: We use your information to provide and improve our Services, to understand how users interact with our Services, and to personalize your experience.
						<br />
						<br />
						To communicate with you: We may use your information to send you marketing communications or to respond to your inquiries.
						<br />
						<br />
						For research and analytics: We may use your information for research and analytics purposes, to better understand how our Services are used and to develop new products and services.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Sharing of information
We may share your information with the following third parties:
						<br />
						<br />
						<br />
						<br />
						Service providers: We may share your information with third-party service providers who help us to provide our Services.
						<br />
						<br />
						Legal and regulatory authorities: We may share your information with law enforcement or regulatory authorities as required by law or to protect our legal rights.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Security
						<br />
						{"\n"}
						<br />
						We take reasonable measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet, or method of electronic storage, is 100% secure. Therefore, we cannot guarantee the absolute security of your information.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Your choices{"\n"}
						<br />
						<br />
						You may opt-out of receiving marketing communications from us by following the instructions in those communications. If you have questions about the information we have collected about you, or if you would like to request that we delete your information, please contact us at [insert contact information].
					</Text>
					<Text margin="0px 0px 40px 0px">
						Changes to this policy{"\n"}
						<br />
						<br />
						We may update this Privacy Policy from time to time. If we make material changes to this policy, we will notify you by posting a notice on our website or by other means.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Contact us
						<br />
						{"\n"}If you have any questions or concerns about our Privacy Policy, please contact us at [insert contact information].
					</Text>
				</List>
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
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				order="0"
				display="block"
			/>
			<Box
				display="block"
				flex-direction="column"
				align-items="flex-start"
				order="1"
				width="100%"
				justify-content="center"
			>
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
					Terms of Service
				</Text>
				<Text margin="0px 0px 40px 0px">
					Welcome to [website/application name], operated by [company name]. Please read these Terms of Service carefully before using our services.
					<br />
					<br />
					By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, then do not use our services.
				</Text>
				<List margin="0px 0px 0px 0px" padding="0px 0px 0px 20px" list-style-type="disc" as="ul">
					<Text margin="0px 0px 40px 0px">
						User Conduct
						<br />
						<br />
						You are solely responsible for your conduct while using our services. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. You also agree not to interfere with any other user's use of our services.
						<br />
					</Text>
					<Text margin="0px 0px 40px 0px">
						Intellectual Property
						<br />
						<br />
						All content on our website or application, including text, graphics, logos, images, and software, is the property of [company name] or its licensors and is protected by copyright and other intellectual property laws. You may not use or reproduce any content without our prior written consent.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Disclaimer of Warranties
						<br />
						<br />
						Our services are provided "as is" and without warranty of any kind. We make no warranty that our services will be uninterrupted or error-free, nor do we make any warranty as to the accuracy or reliability of any information obtained through our services.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Limitation of Liability
						<br />
						<br />
						In no event shall [company name] be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our services.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Indemnification
						<br />
						<br />
						You agree to indemnify and hold [company name] harmless from any claim or demand, including reasonable attorneys' fees, made by any third-party due to or arising out of your use of our services, your violation of these Terms of Service, or your violation of any rights of another.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Termination
						<br />
						<br />
						We may terminate your access to our services at any time, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account.
					</Text>
					<Text margin="0px 0px 40px 0px">
						Governing Law
						<br />
						<br />
						These Terms of Service shall be governed by and construed in accordance with the laws of [state/country], without giving effect to any principles of conflicts of law.
						<br />
					</Text>
					<Text margin="0px 0px 40px 0px">
						Modifications to Terms of Service
						<br />
						<br />
						We reserve the right to modify these Terms of Service at any time without prior notice. Your continued use of our services after any modification constitutes your acceptance of the new terms.
						<br />
						<br />
					</Text>
					<Text margin="0px 0px 40px 0px">
						Entire Agreement
						<br />
						<br />
						These Terms of Service constitute the entire agreement between you and [company name] and govern your use of our services. They supersede any prior agreements between you and [company name].
						<br />
						<br />
						<br />
						If you have any questions about these Terms of Service, please contact us at [contact information].
					</Text>
				</List>
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