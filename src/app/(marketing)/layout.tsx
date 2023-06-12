import { Metadata } from 'next';
export const metadata: Metadata = {
    title: '市场',
    description: '企鹅商城',
    keywords: ['饿了', '直播']
};

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
    return <section id='qie-marketing'>{children}</section>;
};

export default MarketingLayout;
