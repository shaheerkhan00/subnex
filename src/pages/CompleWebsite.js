import React from 'react'
import Layout from '../common/Layout'
import Banner from '../components/Banner/Banner'
import ChooseOpts from '../components/ChooseOpts/ChooseOpts'
import VendorMarketing from '../components/VendorMarketing'
import ConnectVendors from '../components/ConnectVendors'
import Footer from '../components/Footer'
import VendorsLoginComponent from '../components/VendorsLogin'
import SlidingTabs from '../components/SlidingTabs'
import PlaceBid from '../components/PlaceBid'

function CompleWebsite() {
  return (
    <Layout>
        <Banner/>
        <ChooseOpts/>
        <VendorMarketing/>
        <ConnectVendors/>
        <PlaceBid/>
        <SlidingTabs />
        <VendorsLoginComponent/>
    </Layout>
  )
}

export default CompleWebsite