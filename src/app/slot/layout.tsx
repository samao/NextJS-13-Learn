/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-30 12:20:26
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-30 12:37:58
 */

const DashboardLayout = ({ children, authModal }: { children: React.ReactNode; authModal: React.ReactNode }) => {
    return (
        <section id='dash-qie'>
            {children}
            {authModal}
        </section>
    );
};

export default DashboardLayout;
