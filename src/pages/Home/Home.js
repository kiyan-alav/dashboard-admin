import React from "react";
import { infos, chartData } from "../../datas";
import Chart from "../../components/Chart/Chart";
import UsersTable from "../../components/UsersTable/UsersTable";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="section-center">
        <section className="dashboardInfos">
          {infos.map((info) => (
            <article className="dashboardInfoItem" key={info.id}>
              <h3 className="dashInfoTitle">{info.title}</h3>
              {info.element}
            </article>
          ))}
        </section>

        <section className="aboutDashContainer">
          <section className="aboutDashboard">
            <article className="aboutDashboardInfos">
              <h3 className="aboutsScondaryTitle">Build by developers</h3>
              <h2 className="aboutMainTitle">Soft UI Dashboard</h2>
              <p className="aboutContent">
                From colors, cards, typography to complex elements, you will
                find the full documentation
              </p>
            </article>
            <article className="aboutImgContainer">
              <img src="./images/rocket.jpg" alt="" className="aboutImg" />
            </article>
          </section>
          <section className="workWithDash">
            <article className="workWithDashContainer">
              <h2 className="workWithDashTitle">Work with the rockets</h2>
              <p className="workWithDashContent">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
            </article>
          </section>
        </section>

        <section className="chartAndUser">
          <Chart
            title="Sign Up Count:"
            data={chartData}
            xAxisDataKey="weekDay"
            areaDataKey="Sign Up Count"
          />
          <UsersTable />
        </section>
      </div>
    </>
  );
}
