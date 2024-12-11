"use client";

import { Icon } from "@iconify/react";
import Chart from "chart.js/auto";
// import {
//   Chart as ChartJS,
//   BarElement,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
import { useEffect, useRef } from "react";

// ChartJS.register(
//   BarElement,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   Title,
//   Tooltip,
//   Legend
// );
export default function Test() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const mixedChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            type: "bar",
            label: "Bar Dataset",
            data: [30, 60, 45, 69, 49, 61, 42, 44, 78, 52, 63, 67],
            backgroundColor: "rgb(255, 109, 46)",
          },
          {
            type: "line",
            label: "Line Dataset",
            data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
            borderColor: "rgb(33, 196, 93)",
            borderWidth: 2,
          },
        ],
      },

      options: {
        interaction: {
          mode: "nearest", // Mode d'interaction ('index', 'nearest', etc.)
          axis: "x", // 'x', 'y', ou 'xy'
        },
        responsive: true,
        plugins: {
          legend: { position: "bottom", boxWidth: 20 },
          title: { display: false, text: "Mixed Chart Exam" },
        },
        scales: {
          x: {
            ticks: {
              color: "rgb(70, 70, 70)",
              font: {
                size: 12,
              },
            },
            grid: {
              display: false, // Désactive les lignes de grille
            },
          },
          y: {
            beginAtZero: true, // Commencer l'échelle à zéro
            ticks: {
              color: "rgb(50, 50, 50)", // Couleur des étiquettes
              font: {
                size: 12, // Taille de la police
              },
            },
            grid: {
              color: "rgba(100, 100, 200, 0.3)", // Couleur des lignes de grille
              lineWidth: 0.2, // Épaisseur des lignes
            },
          },
        },
      },
    });

    return () => {
      mixedChart.destroy(); // Détruire le graphique lors du démontage du composant
    };
  }, []);

  return (
    <div>
      {/* <!-- Start Container Fluid --> */}
      <div className="px-10 space-y-10 lg:px-20 bg-[#f7f9fa]">
        {/* <!-- Start here.... --> */}
        <div className="row">
          <div className="col-xxl-5">
            <div className="row">
              <div className="col-12">
                <div className="bg-[#ffe3d6] text-[14px] text-[#7a2b31] p-3 rounded-xl mb-3">
                  We regret to inform you that our server is currently
                  experiencing technical difficulties.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="solar:cart-5-bold-duotone"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">Total Orders</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            13, 647
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-green-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 2.3%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Week
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="cil:badge"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">New Leads</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            9, 526{" "}
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-green-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 8.1%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Month
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="mingcute:backpack-line"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">Deals</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            976{" "}
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-red-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 0.3%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Month
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
                <div className="bg-white rounded-lg ">
                  <div className="rounded-lg overflow-hidden">
                    <div className="card-body">
                      <div className="flex p-6 justify-between items-center">
                        <div className="col-6">
                          <div className="p-3 bg-[#ffded1] rounded-xl">
                            <Icon
                              icon="hugeicons:dollar-circle"
                              className="avatar-title text-4xl text-[#ff6d2e]"
                            />
                          </div>
                        </div>
                        {/* <!-- end col --> */}
                        <div className="flex flex-col text-end">
                          <p className="text-gray-600 mb-0">Booked Revenue</p>
                          <h3 className="text-[#313b5e] text-2xl mt-1 mb-0">
                            $123.6k{" "}
                          </h3>
                        </div>
                        {/* <!-- end col --> */}
                      </div>
                      {/* <!-- end row--> */}
                    </div>
                    {/* <!-- end card body --> */}
                    <div className="card-footer px-6 py-2 bg-[#e1e3e6]">
                      <div className="flex items-center justify-between">
                        <div className="space-x-2">
                          <span className="text-green-600">
                            <i className="bx bxs-up-arrow fs-12"></i> 10.6%
                          </span>
                          <span className="text-gray-600 text-xs">
                            Last Month
                          </span>
                        </div>
                        <a
                          href="#!"
                          className="text-gray-600 text-xs font-semibold "
                        >
                          View More
                        </a>
                      </div>
                    </div>
                    {/* <!-- end card body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
              </div>

              {/* <!-- end col --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end col --> */}
          

          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
        <div className="bg-white p-10 rounded-xl">
          <h1 className="text-black mb-5">Performance</h1>
            <canvas ref={chartRef} />
          </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Conversions</h5>
                <div id="conversions" className="apex-charts mb-2 mt-n2"></div>
                <div className="row text-center">
                  <div className="col-6">
                    <p className="text-muted mb-2">This Week</p>
                    <h3 className="text-dark mb-3">23.5k</h3>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6">
                    <p className="text-muted mb-2">Last Week</p>
                    <h3 className="text-dark mb-3">41.05k</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-light shadow-none w-100"
                  >
                    View Details
                  </button>
                </div>
                {/* <!-- end row --> */}
              </div>
            </div>
          </div>
          {/* <!-- end left chart card --> */}

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Sessions by Country</h5>
                <div id="world-map-markers"></div>
                <div className="row text-center">
                  <div className="col-6">
                    <p className="text-muted mb-2">This Week</p>
                    <h3 className="text-dark mb-3">23.5k</h3>
                  </div>
                  {/* <!-- end col --> */}
                  <div className="col-6">
                    <p className="text-muted mb-2">Last Week</p>
                    <h3 className="text-dark mb-3">41.05k</h3>
                  </div>
                  {/* <!-- end col --> */}
                </div>
                {/* <!-- end row --> */}
              </div>
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col --> */}

          <div className="col-lg-4">
            <div className="card card-height-100">
              <div className="card-header d-flex align-items-center justify-content-between gap-2">
                <h4 className="card-title flex-grow-1">Top Pages</h4>

                <a href="#" className="btn btn-sm btn-soft-primary">
                  View All
                </a>
              </div>
              <div className="table-responsive">
                <table className="table table-hover table-nowrap table-centered m-0">
                  <thead className="bg-light bg-opacity-50">
                    <tr>
                      <th className="text-muted ps-3">Page Path</th>
                      <th className="text-muted">Page Views</th>
                      <th className="text-muted">Exit Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/ecommerce.html
                        </a>
                      </td>
                      <td>465</td>
                      <td>
                        <span className="badge badge-soft-success">4.4%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/dashboard.html
                        </a>
                      </td>
                      <td>426</td>
                      <td>
                        <span className="badge badge-soft-danger">20.4%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/chat.html
                        </a>
                      </td>
                      <td>254</td>
                      <td>
                        <span className="badge badge-soft-warning">12.25%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/auth-login.html
                        </a>
                      </td>
                      <td>3369</td>
                      <td>
                        <span className="badge badge-soft-success">5.2%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/email.html
                        </a>
                      </td>
                      <td>985</td>
                      <td>
                        <span className="badge badge-soft-danger">64.2%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/social.html
                        </a>
                      </td>
                      <td>653</td>
                      <td>
                        <span className="badge badge-soft-success">2.4%</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="#" className="text-muted">
                          larkon/blog.html
                        </a>
                      </td>
                      <td>478</td>
                      <td>
                        <span className="badge badge-soft-danger">1.4%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- end col --> */}

          <div className="col-xl-4 d-none">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title">Recent Transactions</h4>
                <div>
                  <a href="#!" className="btn btn-sm btn-primary">
                    <i className="bx bx-plus me-1"></i>Add
                  </a>
                </div>
              </div>
              {/* <!-- end card-header--> */}
              <div className="card-body p-0">
                <div className="px-3" data-simplebar>
                  <table className="table table-hover mb-0 table-centered">
                    <tbody>
                      <tr>
                        <td>24 April, 2024</td>
                        <td>$120.55</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Commisions</td>
                      </tr>
                      <tr>
                        <td>24 April, 2024</td>
                        <td>$9.68</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Affiliates</td>
                      </tr>
                      <tr>
                        <td>20 April, 2024</td>
                        <td>$105.22</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Grocery</td>
                      </tr>
                      <tr>
                        <td>18 April, 2024</td>
                        <td>$80.59</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Refunds</td>
                      </tr>
                      <tr>
                        <td>18 April, 2024</td>
                        <td>$750.95</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Bill Payments</td>
                      </tr>
                      <tr>
                        <td>17 April, 2024</td>
                        <td>$455.62</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Electricity</td>
                      </tr>
                      <tr>
                        <td>17 April, 2024</td>
                        <td>$102.77</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Interest</td>
                      </tr>
                      <tr>
                        <td>16 April, 2024</td>
                        <td>$79.49</td>
                        <td>
                          <span className="badge bg-success">Cr</span>
                        </td>
                        <td>Refunds</td>
                      </tr>
                      <tr>
                        <td>05 April, 2024</td>
                        <td>$980.00</td>
                        <td>
                          <span className="badge bg-danger">Dr</span>
                        </td>
                        <td>Shopping</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- end card body --> */}
            </div>
            {/* <!-- end card--> */}
          </div>
          {/* <!-- end col--> */}
        </div>
        {/* <!-- end row --> */}

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="card-title">Recent Orders</h4>

                  <a href="#!" className="btn btn-sm btn-soft-primary">
                    <i className="bx bx-plus me-1"></i>Create Order
                  </a>
                </div>
              </div>
              {/* <!-- end card body --> */}
              <div className="table-responsive table-centered">
                <table className="table mb-0">
                  <thead className="bg-light bg-opacity-50">
                    <tr>
                      <th className="ps-3">Order ID.</th>
                      <th>Date</th>
                      <th>Product</th>
                      <th>Customer Name</th>
                      <th>Email ID</th>
                      <th>Phone No.</th>
                      <th>Address</th>
                      <th>Payment Type</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  {/* <!-- end thead--> */}
                  <tbody>
                    <tr>
                      <td className="ps-3">
                        <a href="order-detail.html">#RB5625</a>
                      </td>
                      <td>29 April 2024</td>
                      <td>
                        <img
                          src="assets/images/products/product-1(1).png"
                          alt="product-1(1)"
                          className="img-fluid avatar-sm"
                        />
                      </td>
                      <td>
                        <a href="#!">Anna M. Hines</a>
                      </td>
                      <td>anna.hines@mail.com</td>
                      <td>(+1)-555-1564-261</td>
                      <td>Burr Ridge/Illinois</td>
                      <td>Credit Card</td>
                      <td>
                        <i className="bx bxs-circle text-success me-1"></i>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="order-detail.html">#RB9652</a>
                      </td>
                      <td>25 April 2024</td>
                      <td>
                        <img
                          src="assets/images/products/product-4.png"
                          alt="product-4"
                          className="img-fluid avatar-sm"
                        />
                      </td>
                      <td>
                        <a href="#!">Judith H. Fritsche</a>
                      </td>
                      <td>judith.fritsche.com</td>
                      <td>(+57)-305-5579-759</td>
                      <td>SULLIVAN/Kentucky</td>
                      <td>Credit Card</td>
                      <td>
                        <i className="bx bxs-circle text-success me-1"></i>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="order-detail.html">#RB5984</a>
                      </td>
                      <td>25 April 2024</td>
                      <td>
                        <img
                          src="assets/images/products/product-5.png"
                          alt="product-5"
                          className="img-fluid avatar-sm"
                        />
                      </td>
                      <td>
                        <a href="#!">Peter T. Smith</a>
                      </td>
                      <td>peter.smith@mail.com</td>
                      <td>(+33)-655-5187-93</td>
                      <td>Yreka/California</td>
                      <td>Pay Pal</td>
                      <td>
                        <i className="bx bxs-circle text-success me-1"></i>
                        Completed
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="order-detail.html">#RB3625</a>
                      </td>
                      <td>21 April 2024</td>
                      <td>
                        <img
                          src="assets/images/products/product-6.png"
                          alt="product-6"
                          className="img-fluid avatar-sm"
                        />
                      </td>
                      <td>
                        <a href="#!">Emmanuel J. Delcid</a>
                      </td>
                      <td>emmanuel.delicid@mail.com</td>
                      <td>(+30)-693-5553-637</td>
                      <td>Atlanta/Georgia</td>
                      <td>Pay Pal</td>
                      <td>
                        <i className="bx bxs-circle text-primary me-1"></i>
                        Processing
                      </td>
                    </tr>
                    <tr>
                      <td className="ps-3">
                        <a href="order-detail.html">#RB8652</a>
                      </td>
                      <td>18 April 2024</td>
                      <td>
                        <img
                          src="assets/images/products/product-1(2).png"
                          alt="product-1(2)"
                          className="img-fluid avatar-sm"
                        />
                      </td>
                      <td>
                        <a href="#!">William J. Cook</a>
                      </td>
                      <td>william.cook@mail.com</td>
                      <td>(+91)-855-5446-150</td>
                      <td>Rosenberg/Texas</td>
                      <td>Credit Card</td>
                      <td>
                        <i className="bx bxs-circle text-primary me-1"></i>
                        Processing
                      </td>
                    </tr>
                  </tbody>
                  {/* <!-- end tbody --> */}
                </table>
                {/* <!-- end table --> */}
              </div>
              {/* <!-- table responsive --> */}

              <div className="card-footer border-top">
                <div className="row g-3">
                  <div className="col-sm">
                    <div className="text-muted">
                      Showing
                      <span className="fw-semibold">5</span>
                      of
                      <span className="fw-semibold">90,521</span>
                      orders
                    </div>
                  </div>

                  <div className="col-sm-auto">
                    <ul className="pagination m-0">
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <i className="bx bx-left-arrow-alt"></i>
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <i className="bx bx-right-arrow-alt"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end card --> */}
          </div>
          {/* <!-- end col --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- End Container Fluid --> */}
    </div>
  );
}
