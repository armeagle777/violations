import { Typography } from 'antd';
import React from 'react';

import { BrowserView } from 'react-device-detect';
// import { accessoriesCategories, accessoryIds } from '../../utils/constants';

const Home = () => {
  const { Text } = Typography;
  return (
    <>
      <BrowserView>
        <p>Home</p>
        {/* <div style={{ width: '100%', display: 'flex' }}>
          <div style={{ width: '50%', paddingRight: 10 }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  height: 90,
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: '100%',
                    background: '#FFC107',
                    borderRadius: '10px 0 100% 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      lineHeight: '100%',
                    }}
                  >
                    ֏
                  </Text>
                </div>
                <div
                  style={{
                    paddingRight: 20,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <Statistic title="Ամսական Եկամուտ" value={meanIncome} formatter={formatter} />
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  height: 90,
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 0,
                }}
              >
                <div
                  style={{
                    background: '#DC3545',
                    width: 80,
                    height: '100%',
                    borderRadius: '10px 0 100% 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      lineHeight: '100%',
                    }}
                  >
                    <GiftOutlined />
                  </Text>
                </div>
                <div
                  style={{
                    paddingRight: 20,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <Statistic title="Պատվեր" value={ordersCount || 0} formatter={formatter} />
                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                height: 400,
                marginTop: 30,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  width={500}
                  height={400}
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area type="monotone" dataKey="Ծախսեր" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="Ինքնարժեք" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="Շահույթ" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  <Line type="monotone" dataKey="Զուտ եկամուտ" stroke="rgb(220, 53, 69)" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div style={{ width: '50%', paddingLeft: 10 }}>
            <div style={{ display: 'flex', gap: 20 }}>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  height: 90,
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: '100%',
                    background: '#0D6EFD',
                    borderRadius: '10px 0 100% 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      lineHeight: '100%',
                    }}
                  >
                    <UsergroupAddOutlined />
                  </Text>
                </div>
                <div
                  style={{
                    paddingRight: 20,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <Statistic title="Հաճախորդ" value={customersCount || 0} formatter={formatter} />
                </div>
              </div>
              <div
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  height: 90,
                  width: '50%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: 0,
                }}
              >
                <div
                  style={{
                    background: '#198754',
                    width: 80,
                    height: '100%',
                    borderRadius: '10px 0 100% 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 40,
                      lineHeight: '100%',
                    }}
                  >
                    <GiftOutlined />
                  </Text>
                </div>
                <div
                  style={{
                    paddingRight: 20,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <Statistic
                    title="Մնացորդ"
                    value={availableOrdersSum && orderedOrdersSum ? availableOrdersSum + orderedOrdersSum : 0}
                    formatter={formatter}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                height: 400,
                marginTop: 30,
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={accessoriesChartData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Ծախսեր" fill="#8884d8" />
                  <Bar dataKey="Ինքնարժեք" fill="#82ca9d" />
                  <Bar dataKey="Շահույթ" fill="#ffc658" />
                  <Bar dataKey="Զուտ եկամուտ" fill="rgb(220, 53, 69)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div> */}
      </BrowserView>
    </>
  );
};

export default Home;
