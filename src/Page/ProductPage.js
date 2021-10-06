import React from 'react';
import Layout from 'material-ui-layout/lib/components/Layout';
import PersistentDrawerLeft from '../components/Drawer';
import PageComponent from '../components/PageComponent';

export default function ProductPage() {
    return (
        <Layout>
            <PersistentDrawerLeft/>
            <PageComponent pageTitle={"This is from Product Page"}/>
        </Layout>
    )
}
