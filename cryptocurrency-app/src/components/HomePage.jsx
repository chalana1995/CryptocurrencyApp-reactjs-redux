import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";

const { Title } = Typography;

function HomePage() {
  const { data, isFetching } = useGetCryptosQuery(12);
  const gloabalStats = data?.data?.stats;

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={gloabalStats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(gloabalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(gloabalStats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h volume"
            value={millify(gloabalStats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(gloabalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show more</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show more</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default HomePage;
