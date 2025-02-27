/// <reference types="react" />
declare const DynamicComponent: import("react").MemoExoticComponent<({ node, topPage, base, ...rest }: {
    [v: string]: unknown;
    node: Array<any>;
}) => import("react/jsx-runtime").JSX.Element>;
export default DynamicComponent;
