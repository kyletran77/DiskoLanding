import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize";

const EmbedHTML = ({
	buttonText,
	buttonLink,
	...props
}) => {
	const customHtml = `
    <form action="${buttonLink}" target="_blank">
      <button style="background-color: #A873E8; color: white; padding: 15px 30px; border-radius: 20px; border: none; font-size: 18px;">${buttonText}</button>
    </form>
  `;
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, [customHtml]);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});