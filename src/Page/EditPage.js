import React from 'react';
import EditTodo from '../components/EditTodo';
import Layout from 'material-ui-layout/lib/components/Layout';
import PersistentDrawerLeft from '../components/Drawer';

export default function EditPage() {
    return (
        <Layout>
            <PersistentDrawerLeft/>
            <EditTodo/>
        </Layout>
    )
}