import * as React from "react";

const Loading = (props) => (
    <div className="w-screen h-screen flex justify-center items-center">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: "auto",
                background: "#fff",
                display: "block",
                shapeRendering: "auto",
            }}
            width={100}
            height={100}
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            {...props}
        >
            <path fill="#e15b64" d="M6.667 6.667h40v40h-40z">
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;1"
                    values="1.1500000000000001;1"
                    begin="-0.3s"
                />
            </path>
            <path fill="#f47e60" d="M53.333 6.667h40v40h-40z">
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;1"
                    values="1.1500000000000001;1"
                    begin="-0.2s"
                />
            </path>
            <path fill="#f8b26a" d="M6.667 53.333h40v40h-40z">
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;1"
                    values="1.1500000000000001;1"
                    begin="0s"
                />
            </path>
            <path fill="#abbd81" d="M53.333 53.333h40v40h-40z">
                <animateTransform
                    attributeName="transform"
                    type="scale"
                    repeatCount="indefinite"
                    dur="1s"
                    keyTimes="0;1"
                    values="1.1500000000000001;1"
                    begin="-0.1s"
                />
            </path>
        </svg>
    </div>
)

export default Loading;
