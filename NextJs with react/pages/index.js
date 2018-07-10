import Link from 'next/link';
import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = ({ bpi }) => {
    console.log('----------a-props',);
    
    return (
        <Layout>
            <div>
                <h1>Welcome to Bitzprise</h1>
                <Prices bpi={ bpi } />
            </div>
        </Layout>
    );
}

Index.getInitialProps  = async () => {
    const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await res.json();
    return {
        bpi: data.bpi
    }
}   
export default Index;