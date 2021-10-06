import React from 'react';
import Layout from 'material-ui-layout/lib/components/Layout';
import PersistentDrawerLeft from '../components/Drawer';
import View from '../components/View';

export default function ViewPage() {
    return (
        <Layout>
            <PersistentDrawerLeft/>
            <View/>
        </Layout>
    )
}
