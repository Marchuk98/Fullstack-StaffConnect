import {Layout} from "../../components/layout";
import {Card, Form, Row, Space, Typography} from "antd";
import {CustomInput} from "../../components/custom-input";
import {CustomPasswordInput} from "../../components/custom-password-input";
import {CustomButton} from "../../components/custom-button";
import {Link, useNavigate} from "react-router-dom";
import {Paths} from "../../paths";
import {useSelector} from "react-redux";
import {selectUser} from "../../features/auth/authSlice";
import {useEffect, useState} from "react";
import {useRegisterMutation} from "../../app/services/auth";
import {User} from "@prisma/client";
import {isErrorWithMessage} from "../../utils/is-error-with-message";
import {ErrorMessage} from "../../components/error-message";


type RegisterData = Omit<User, "id"> & { confirmPassword: string };

export const Register = () => {
    const navigate = useNavigate();
    const user = useSelector(selectUser);
    const [error, setError] = useState("");
    const [registerUser] = useRegisterMutation();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);

    const register = async (data: RegisterData) => {
        try {
            await registerUser(data).unwrap();

            navigate("/");
        } catch (err) {
            const maybeError = isErrorWithMessage(err);

            if (maybeError) {
                setError(err.data.message);
            } else {
                setError("Неизвестная ошибка");
            }
        }
    };

    return (
        <Layout>
            <Row align={'middle'} justify={'center'}>
                <Card title={'Log in'} style={{width: "30rem", background: "#3c3b3b"}}>
                    <Form onFinish={register}>
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
                        <ErrorMessage message={error}/>
                    </Space>
                </Card>
            </Row>
        </Layout>
    );
};

