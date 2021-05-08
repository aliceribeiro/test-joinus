import { Fragment } from "react";

import SearchNavBar from "../components/SearchNavBar/SearchNavBar";
import "../styles/pages/pizza-list.css";

function PizzaList() {
  return (
    <Fragment>
      <SearchNavBar />
      <section className="container">
        <div className="row row-cols-1 row-cols-md-4">
          <div className="col mb-4">
            <div className="card card-content">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card card-content">
              <img src="https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272_960_720.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card card-content">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div className="card card-content">
              <img src="" alt="" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default PizzaList;