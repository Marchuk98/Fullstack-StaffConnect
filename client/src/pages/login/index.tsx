import React, {useState} from 'react';
import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {CustomPasswordInput} from "../../components/custom-password-input";
import {CustomButton} from "../../components/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";
import {useLoginMutation, UserData} from "../../app/services/auth";
import {isErrorWithMessage} from "../../utils/is-error-with-message";

export const Login = () => {

    const [loginUser,loginUserResult] = useLoginMutation()
    const [error, setError] = useState('')

    const login = async (data:UserData) => {
        try {
            await loginUser(data).unwrap()
        }catch (err){
            const error = isErrorWithMessage(err)
            if(error){
                setError(err.data.message)
            }else {
                setError('Some Error')
            }
        }
    }


    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Log in'} style={{width:"30rem",background:"#3c3b3b"}}>
                    <Form onFinish={()=> {}}>
                        <CustomInput name={'Login'} placeholder={'Enter email'} type={'email'}/>
                        <CustomPasswordInput name={"password"} placeholder={"Enter password"}/>
                        <CustomButton type={'primary'} htmlType={'submit'} >Enter</CustomButton>
                    </Form>
                    <Space direction={'vertical'} size={'large'}>
                        <Typography.Text>
                            No account? <Link to={Paths.register}>Register</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};
