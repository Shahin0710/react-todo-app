import React from 'react';
import Layout from 'material-ui-layout/lib/components/Layout';
import PersistentDrawerLeft from '../components/Drawer';
import PageComponent from '../components/PageComponent';

export default function TeamPage() {
    return (
        <Layout>
            <PersistentDrawerLeft/>
            <PageComponent pageTitle={"This is from Team Page"}/>
        </Layout>
    )
}
