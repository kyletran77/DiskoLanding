import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "18px --fontFamily-sans"
    },
    "index": {
        "font": "18px --fontFamily-sans"
    },
    "about": {
        "font": "18px --fontFamily-sans"
    },
    "team": {
        "font": "18px --fontFamily-sans"
    },
    "privacy-policytos": {
        "font": "18px --fontFamily-sans"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
