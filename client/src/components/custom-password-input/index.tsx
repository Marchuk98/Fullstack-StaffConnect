import {Form, Input} from 'antd'
import {NamePath} from 'antd/es/form/interface'
import React from "react";

type CustomPasswordInputPropsType = {
    name: string
    placeholder: string
    dependencies?: NamePath[]
}

export const CustomPasswordInput: React.FC<CustomPasswordInputPropsType> = ({
                                                                                name,
                                                                                placeholder,
                                                                                dependencies
                                                                            }) => {
    return (
      <Form.Item
        name={name}
        dependencies={dependencies}
        hasFeedback
        rules={[{
            required:true,
            message:"Required field"
        },
            ({getFieldValue})=> ({
            validator(_,value){
                if(!value){
                    return Promise.resolve()
                }
                if(name === 'confirmPassword'){
                    if(!value || getFieldValue(('password')) === value){
                        return Promise.resolve()
                    }
                    return Promise.reject(new Error('Passwords must match'))
                }else{
                    if(value.length < 6){
                        return Promise.reject(new Error('The password must be longer than 6 characters'))
                    }
                        return Promise.reject()
                }
            }
        })]}>
          <Input.Password placeholder={placeholder} size={'large'}/>
      </Form.Item>
    );
};

