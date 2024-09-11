import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type InputProps = {
    containerWidth?: string;
    label?: string;
    labelTextColor?: string;
    name: string;
    autoFocus?: boolean;
    disabled?: boolean;
    border?: string;
    type: string;
    placeholder?: string;
    pl?: string;
    width?: string;
    height?: string;
    shadow?: string;
    validation?: any;
    register?: any;
    validate?: any;
    icon?: React.ReactNode;
    error?: any;
    my?: string;
    inputBg?: string;
    min?: number;
    borderColor?: string;
    inputRadius?: string;
};

const InputComponent: React.FC<InputProps> = (props) => {
    const [visible, setVisible] = useState(false);

    const displayPassword = (): void => {
        setVisible(!visible);
    };

    const getErrorClass = (): string => {
        return props.error &&
            props.error[props.name] &&
            props.error[props.name].message
            ? "text-color-red border-color-red"
            : `${
                  props.borderColor ? props.borderColor : "border-color-white-1"
              } text-color-secondary-2`;
    };

    const getPasswordIcon = (): React.ReactNode => {
        return props.type === "password" ? (
            !visible ? (
                <FaEye
                    className="absolute w-[2.2rem] h-[2.2rem] top-[1.7rem] right-[1.5rem] text-[#B8B8B8] cursor-pointer"
                    onClick={displayPassword}
                />
            ) : (
                <FaEyeSlash
                    className="absolute w-[2.2rem] h-[2.2rem] top-[1.7rem] right-[1.5rem] text-[#B8B8B8] cursor-pointer"
                    onClick={displayPassword}
                />
            )
        ) : null;
    };

    const getErrorText = (): React.ReactNode => {
        return props.error &&
            props.error[props.name] &&
            props.error[props.name].message ? (
            <small
                className={`text-color-red ${
                    props.name === "columnName" ? "" : "mt-[0.5rem]"
                }`}
            >
                {props.error[props.name].message}
            </small>
        ) : null;
    };

    return (
        <div
            className={`flex flex-col ${props.my ? props.my : "mb-[2rem]"} ${
                props.containerWidth ? props.containerWidth : ""
            } `}
        >
            {props.label && (
                <label
                    htmlFor={props.name}
                    className={`capitalize  mb-[.5rem] ${
                        props.labelTextColor
                            ? props.labelTextColor
                            : "text-color-secondary-2"
                    }`}
                >
                    {props.label}
                </label>
            )}
            <div className="flex relative w-full">
                <input
                    autoFocus={props.autoFocus}
                    disabled={props.disabled}
                    type={
                        props.type === "password"
                            ? visible
                                ? "text"
                                : "password"
                            : props.type
                    }
                    placeholder={props.placeholder}
                    {...props.register(props.name, props.validation)}
                    className={`${
                        props.border ? props.border : "border"
                    } py-[1.5rem] relative ${props.inputBg} ${
                        props.pl ? props.pl : "pl-[2rem]"
                    } pr-[2rem] ${props.width ? props.width : "w-full"} ${
                        props.height && props.height
                    } ${props.shadow && props.shadow} ${
                        props.inputRadius ? props.inputRadius : "rounded-lg"
                    }  outline-none ring-0 focus:outline-none focus:ring-0 focus:border-color-purple-1 ${getErrorClass()} md:w-full`}
                />
                {props.icon}
                {getPasswordIcon()}
            </div>
            {getErrorText()}
        </div>
    );
};

export default InputComponent;
