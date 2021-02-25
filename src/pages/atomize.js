import React from "react";
import theme from "theme";
import { Theme, Link, Hr, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"atomize"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		{" "}
		<Components.Pseudo />
		<Hr />
		<Section>
			<Override
				slot="SectionContent"
				height="550px"
				align-items="center"
				justify-content="center"
				flex-direction="row"
			/>
			<Components.Animation
				width="320px"
				height="320px"
				overflow-x="hidden"
				overflow-y="hidden"
				display="flex"
				align-items="center"
				justify-content="center"
				iteration="once"
				animation="Jello"
				duration="2s"
				test={false}
				trigger="Click"
				md-background="--color-lightD2"
			>
				<Text text-align="center" font="900 50px --fontFamily-serifTimes">
					Click
				</Text>
			</Components.Animation>
			<Components.Animation
				width="320px"
				height="320px"
				overflow-x="hidden"
				overflow-y="hidden"
				display="flex"
				align-items="center"
				justify-content="center"
				iteration="once"
				animation="Jello"
				duration="2s"
				test={false}
				trigger="Hover"
				md-background="--color-lightD2"
			>
				<Text text-align="center" font="900 50px --fontFamily-serifTimes">
					Hover
				</Text>
			</Components.Animation>
			<Components.Animation
				width="320px"
				height="320px"
				overflow-x="hidden"
				overflow-y="hidden"
				display="flex"
				align-items="center"
				justify-content="center"
				iteration="once"
				animation="Jello"
				duration="2s"
				test={false}
				trigger="Onload"
				md-background="--color-lightD2"
			>
				<Text text-align="center" font="900 50px --fontFamily-serifTimes">
					Onload
				</Text>
			</Components.Animation>
			<Components.Animation
				width="320px"
				height="320px"
				overflow-x="hidden"
				overflow-y="hidden"
				display="flex"
				align-items="center"
				justify-content="center"
				iteration="once"
				animation="Jello"
				duration="2s"
				test={false}
				trigger="Appearance from above"
				md-background="--color-lightD2"
			>
				<Text text-align="center" font="900 50px --fontFamily-serifTimes">
					Above
				</Text>
			</Components.Animation>
			<Components.Animation
				width="320px"
				height="320px"
				overflow-x="hidden"
				overflow-y="hidden"
				display="flex"
				align-items="center"
				justify-content="center"
				iteration="once"
				animation="Jello"
				duration="2s"
				test={false}
				trigger="Appearance from below"
				md-background="--color-lightD2"
			>
				<Text text-align="center" font="900 50px --fontFamily-serifTimes">
					Below
				</Text>
			</Components.Animation>
		</Section>
		<Hr height="160px" />
		<Components.Pseudo />
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