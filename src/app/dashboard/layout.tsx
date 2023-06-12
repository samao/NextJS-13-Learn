import { Metadata } from 'next';
export const metadata: Metadata = {
    title: '看板',
    description: '企鹅看板',
    keywords: ['饿了', '直播']
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return <section id='dash-qie'>{children}</section>;
};

export default DashboardLayout;
