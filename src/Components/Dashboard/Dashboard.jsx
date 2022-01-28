import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashhome from "./Main/Dashhome";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Fundwallet from "./Fundwallet/FundWallet";
import Investments from "./Investment/Investment";
import Loans from "./Loans/Loans";
import Withdrawal from "./Withdrawal/Withdrawal";
import Bankinfo from "./Bank info/Bankinfo";
import Wallet from "./Wallet/Wallet";
import Transactions from "./Transactions/Transactions";

const Dashboard = () => {
  return (
    <div>
      <DashMain>
        <Switch>
          <Route exact path="/dashboard/home">
            <Dashhome />
          </Route>
          <Route exact path="/dashboard/fund-wallet">
            <Fundwallet />
          </Route>
          <Route exact path="/dashboard/investments">
            <Investments />
          </Route>
          <Route exact path="/dashboard/loans">
            <Loans />
          </Route>
          <Route exact path="/dashboard/transactions">
            <Transactions />
          </Route>
          <Route exact path="/dashboard/wallet">
            <Wallet />
          </Route>
          <Route exact path="/dashboard/bank-info">
            <Bankinfo />
          </Route>
          <Route exact path="/dashboard/withdrawal">
            <Withdrawal />
          </Route>
        </Switch>
      </DashMain>
    </div>
  );
};

export default Dashboard;

const DashMain = styled.div`
  margin-left: 18vw;
  padding: 2em 1em;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
  }
`;
