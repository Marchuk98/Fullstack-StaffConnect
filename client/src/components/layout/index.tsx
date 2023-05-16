import React from "react";
import { Layout as AntLayout } from 'antd';
import styles from './index.module.css'
import {Header} from "../header";

type LayoutPropsType = {
    children:React.ReactNode
}

export const Layout:React.FC<LayoutPropsType> = ({children}) => {
    return (
        <div className={styles.main}>
            <Header/>
            <AntLayout.Content style={{height: '100%'}}>
            {children}
            </AntLayout.Content>
        </div>
    );
};

