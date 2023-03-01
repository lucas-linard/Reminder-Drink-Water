import styled from "styled-components";
import light from "./light";

declare module 'styled-components' {
    type ThemType = typeof light;
    export interface DefaultTheme extends ThemType {}
}