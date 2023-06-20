/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2023-05-29 11:21:31
 * @Last Modified by: idzeir
 * @Last Modified time: 2023-06-20 18:04:44
 */
// import { Suspense } from "react";
import PostFeed from './components/post-feed';
import Weather from './components/weather';

const Dashboard = () => (
    <section>
        {/* <Suspense fallback={<p>loading feed...</p>}> */}
        {/* </Suspense> */}
        {/* <Suspense fallback={<p>loading weather...</p>}> */}
        <Weather />
        {/* </Suspense> */}
        {/* @ts-expect-error Server Component */}
        <PostFeed />
    </section>
);

export default Dashboard;
