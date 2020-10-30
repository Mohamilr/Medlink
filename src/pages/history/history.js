import React from 'react';
import Nav from '../../components/nav';
import Footer from '../../components/footer/footer';
import './history.css';

const History = () => {

  let storedSearch = JSON.parse(localStorage.getItem('search-data'));
  return (
    <>

      <Nav history="active"/>

      <section className="history-hero">
        <h3>Your Search History</h3>
      </section>

      <section className="recent-search">

        <h3>Recent Search</h3>

        {storedSearch ? storedSearch.map((data) => (
          <div key={data.searchKey} className="history-bar">
            <p>
              <span>
                <i className="far icons fa-hospital"></i>
              </span>
              {data.searchKey}
            </p>

            <p>
              <span>
                <i className="fas icons fa-map-marker-alt"></i>
              </span>
              {data.locationText}
            </p>

          </div>
        ))
      :
      (
        <p className='no-history'>No search history</p>
      )}
      </section>
      <Footer />
    </>
  )
}

export default History;
