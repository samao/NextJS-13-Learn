/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-29 15:17:41
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-30 17:29:03
 */
import { Metadata } from 'next';
// import Auth from "./auth";

export const metadata: Metadata = {
    title: 'Parallel',
    description: '企鹅看板',
    keywords: ['饿了', '直播']
};

const ParallelLayout = ({ children, team, analytics }: Record<'children' | 'team' | 'analytics', React.ReactNode>) => {
    return (
        <section id='Parallel-qie'>
            {children}
            <div>
                {/* <Auth team={team} analytics={analytics} /> */}
                {team}
                {analytics}
            </div>
        </section>
    );
};

export default ParallelLayout;
