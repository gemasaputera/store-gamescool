import React from 'react';
import Category from './Category';
import RowTable from './RowTable';

const OverviewContent = () => (
  <main className="main-wrapper">
    <div className="ps-lg-0">
      <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
      <div className="top-up-categories mb-30">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Top Up Categories
        </p>
        <div className="main-content">
          <div className="row">
            <Category icon="desktop" title="Total Spent" value="Rp 18.000.500">
              Game <br /> Desktop
            </Category>
            <Category icon="mobile" title="Total Spent" value="Rp 8.455.500">
              Game <br /> Mobile
            </Category>
            <Category icon="other" title="Total Spent" value="Rp 5.000.000">
              Other <br /> Categories
            </Category>
          </div>
        </div>
      </div>
      <div className="latest-transaction">
        <p className="text-lg fw-medium color-palette-1 mb-14">
          Latest Transactions
        </p>
        <div className="main-content main-content-table overflow-auto">
          <table className="table table-borderless">
            <thead>
              <tr className="color-palette-1">
                <th className="text-start" scope="col">
                  Game
                </th>
                <th scope="col">Item</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <RowTable
                image="overview-1"
                item={200}
                price={200000}
                status="Pending"
                category="Desktop"
                title="Mobile Legends: The New Battle 2021"
              />

              <RowTable
                image="overview-2"
                item={550}
                price={740000}
                status="Success"
                category="Desktop"
                title="Call of Duty:Modern"
              />

              <RowTable
                image="overview-3"
                item={100}
                price={120000}
                status="Failed"
                category="Mobile"
                title="Clash of Clans"
              />

              <RowTable
                image="overview-4"
                item={225}
                price={200000}
                status="Failed"
                category="Mobile"
                title="The Royal Game"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
);

export default OverviewContent;
