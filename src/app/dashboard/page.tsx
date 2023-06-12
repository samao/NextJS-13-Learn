/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-29 11:21:31
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-05-29 17:25:49
 */
// import { Suspense } from "react";
import PostFeed from './components/post-feed';
import Weather from './components/weather';

const Dashboard = () => (
    <section>
        {/* <Suspense fallback={<p>loading feed...</p>}> */}
        <PostFeed />
        {/* </Suspense> */}
        {/* <Suspense fallback={<p>loading weather...</p>}> */}
        <Weather />
        {/* </Suspense> */}
    </section>
);

export default Dashboard;
