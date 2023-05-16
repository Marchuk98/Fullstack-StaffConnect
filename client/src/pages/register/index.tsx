import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {CustomPasswordInput} from "../../components/custom-password-input";
import {CustomButton} from "../../components/custom-button";
import {Link} from "react-router-dom";
import {Paths} from "../../paths";

export const Register = () => {
    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Log in'} style={{width: "30rem", background: "#3c3b3b"}}>
                    <Form onFinish={() => {
                    }}>
                        <CustomInput name={'name'} placeholder={'Enter name'}/>
                        <CustomInput name={'email'} placeholder={'Enter email'}/>
                        <CustomPasswordInput name={"password"} placeholder={"Enter password"}/>
                        <CustomPasswordInput name={"confirmPassword"} placeholder={"Confirm password"}/>
                        <CustomButton type={'primary'} htmlType={'submit'}>Register</CustomButton>
                    </Form>
                    <Space direction={'vertical'} size={'large'}>
                        <Typography.Text>
                            Already registered ? <Link to={Paths.login}>Enter</Link>
                        </Typography.Text>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

