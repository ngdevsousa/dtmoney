import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "AWS infra",
          type: "deposit",
          category: "DevOps",
          amount: 5000,
          createdAt: new Date("2021-01-01 09:20:00")
        },
        {
          id: 2,
          title: "Rent",
          type: "withdraw",
          category: "home",
          amount: 2000,
          createdAt: new Date("2021-01-01 09:20:00")
        }
      ]
    });
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      return schema.create("transaction", JSON.parse(request.requestBody));
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
