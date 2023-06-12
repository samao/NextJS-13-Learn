/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 17:02:27
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-30 17:04:51
 */
export default function Layout({ children, modal }: Record<'modal' | 'children', React.ReactNode>) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}
