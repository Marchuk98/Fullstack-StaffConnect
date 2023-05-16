import React from 'react';
import {Form,Input} from 'antd'


type CustomInputPropsType = {
    name:string
    placeholder:string
    type?:string
}

export const CustomInput:React.FC<CustomInputPropsType> = ({
                                                               name,
                                                               placeholder,
                                                               type = 'text'
}) => {
    return (
        <Form.Item
            name={name}
            shouldUpdate={true}
            rules={[{required:true,message:"Required field"}]}>
            <Input
                placeholder={placeholder}
                type={type}
                size={'large'}
            />
        </Form.Item>
    );
};

