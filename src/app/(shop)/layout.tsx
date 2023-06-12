import { Metadata } from 'next';
export const metadata: Metadata = {
    title: '商店',
    description: '企鹅商城',
    keywords: ['饿了', '直播']
};

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
    return <section id='qie-shop'>{children}</section>;
};

export default ShopLayout;
