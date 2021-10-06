import React from 'react';
import Layout from 'material-ui-layout/lib/components/Layout';
import PersistentDrawerLeft from '../components/Drawer';
import PageComponent from '../components/PageComponent';

function ContactPage() {
    return (
        <Layout>
            <PersistentDrawerLeft/>
            <PageComponent pageTitle={"This is from Contact Page"}/>
        </Layout>
    )
}

export default ContactPage