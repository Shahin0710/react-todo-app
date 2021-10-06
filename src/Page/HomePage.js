import React from 'react';
import Layout from 'material-ui-layout/lib/components/Layout';
import TableData from '../components/TableData';
import PersistentDrawerLeft from '../components/Drawer';

function HomePage() {
    return (
         <Layout>
            <PersistentDrawerLeft />
            <TableData />
        </Layout>
    )
}

export default HomePage
