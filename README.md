# Biddify Proudct Node.js | Rob Rutjes | Fontys ICT | Semester 3

![workflow](https://github.com/Biddify/biddify-product-node.js/actions/workflows/docker.yml/badge.svg)
![workflow](https://github.com/Biddify/biddify-product-node.js/actions/workflows/integration-unit-test.yml/badge.svg)
![workflow](https://github.com/Biddify/biddify-product-node.js/actions/workflows/sonar-cloud.yml/badge.svg)
[![GitHub issues](https://img.shields.io/github/issues/Biddify/biddify-product-node.js?logo=GitHub)](https://github.com/Biddify/biddify-product-node.js/issues)

[Product Node.js](https://github.com/Biddify/biddify-product-node.js) API ([http://localhost:3002](https://localhost:3002))

| **Route** | **Action** | **Method** | **Body** |
| --- | --- | --- | --- |
| api/products/ | Find all | Get | |
| api/products/:id | Find one | Get | |
| api/products/ | Create  | Post | `{title : string, description : string}` |
| api/products/:id | Update | Put | `{title : string, description : string}` |