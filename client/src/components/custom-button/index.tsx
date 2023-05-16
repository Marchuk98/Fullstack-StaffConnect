import {Button, Form} from 'antd'
import React, {ReactNode} from "react";

type CustomButtonPropsType = {
    children:ReactNode
    htmlType?:"button" | "submit" | "reset" | undefined
    onClick?:() => void
    type?:"link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined
    danger?: boolean
    loading?:boolean
    shape?:"default" | "circle" | "round" | undefined
    icon?:React.ReactNode
}

export const CustomButton:React.FC<CustomButtonPropsType> = ({
                                                                 children,
                                                                 htmlType= 'button',
                                                                 onClick,
                                                                 type,
                                                                 danger,
                                                                 loading,
                                                                 shape,
                                                                 icon,

}) => {
    return (
      <Form.Item>
          <Button
              htmlType={htmlType}
              type={type}
              danger={danger}
              loading={loading}
              shape={shape}
              icon={icon}
              onClick={onClick}>
              {children}</Button>
      </Form.Item>
    );
};

