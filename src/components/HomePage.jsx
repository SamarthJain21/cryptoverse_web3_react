import React from 'react'
import { Link } from 'react-router-dom'
import millify from 'millify'
import {Typography,Row,Col,Statistic} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import {Cryptocurrencies,News} from '../components'


function HomePage() {
  const {data,isFetching}=useGetCryptosQuery(10);
  const gloablStats = data?.data?.stats
  if(isFetching) return "Loading...."

  return (
    <div>
      <Typography.Title level={2} className="heading" >
         Global Crypto Stats
         <Row>
           <Col span={12}><Statistic title="Total CryptoCurrencies" value={gloablStats.total}/></Col>
             {/* there are total 24 in antd, therefore half the space */}

           <Col span={12}><Statistic title="Total Exchanges" value={millify(gloablStats.totalExchanges)}/></Col>
           <Col span={12}><Statistic title="Total Market Cap" value={millify(gloablStats.totalMarketCap)}/></Col>
           <Col span={12}><Statistic title="Total 24h Volume" value={millify(gloablStats.total24hVolume)}/></Col>
           <Col span={12}><Statistic title="Total Markets" value={millify(gloablStats.totalMarkets)}/></Col>
         </Row>
         <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
            <Typography.Title level={3} className='show-more'>< Link to="/cryptocurrencies">Show more</Link></Typography.Title>
         </div>
         <Cryptocurrencies simplified/>

         <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Lates Crypto News</Typography.Title>
            <Typography.Title level={3} className='show-more'> <Link to="/news">Show more</Link></Typography.Title>
         </div>
         <News simplified/>

      </Typography.Title>
    </div>
  )
}

export default HomePage