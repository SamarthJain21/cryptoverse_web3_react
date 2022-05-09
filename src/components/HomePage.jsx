import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import millify from 'millify'
import {Typography,Row,Col,Statistic} from 'antd'
// import {Link} from 'react-router-dom'



function HomePage() {
  return (
    <div>
      <Typography.Title level={2} className="heading" >
         Global Crypto Stats
         <Row>
           <Col span={12}><Statistic title="Total CryptoCurrencies" value="5"/></Col>
             {/* there are total 24 in antd, therefore half the space */}

           <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
           <Col span={12}><Statistic title="Total Market Cap" value="5"/></Col>
           <Col span={12}><Statistic title="Total 24h Volume" value="5"/></Col>
           <Col span={12}><Statistic title="Total Markets" value="5"/></Col>
         </Row>
      </Typography.Title>
    </div>
  )
}

export default HomePage