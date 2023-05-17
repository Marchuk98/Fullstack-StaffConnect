import {Alert} from "antd";
import React from "react";

type ErrorMessagePropsType = {
    message?:string;
}

export const ErrorMessage:React.FC<ErrorMessagePropsType> = ({message}) => {
        if(!message){
            return null
        }
        return <Alert message={message} type={'error'}/>
}