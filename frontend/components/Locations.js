import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Locations = () => {
  const [locationData, updateLocationData] = useState([])

  useEffect(() => {
    axios.get('/api/locations')
      .then(axiosResp => {
        updateLocationData(axiosResp.data)
      })
  }, [])
  return <section className="section">
    <div className="container">
      <div className="columns is-multiline is-mobile">
        {locationData.map((location, index) => {
          return <div key={index} className="column is-one-third-desktop is-half-tablet is-half-mobile">
            <Link to={`/locations/${location._id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{location.name}</p>
                      <p className="subtitle is-6">{'Category: ' + location.category}</p>
                      <p className="subtitle is-6">{'Address: ' + location.address}</p>
                      <p className="subtitle is-6">{'Postcode: ' + location.postcode}</p>
                      <p className="subtitle is-6">{'Timings: ' + location.timings}</p>
                      <p className="subtitle is-6">{'Event starts: ' + location.startDate}</p>
                      <p className="subtitle is-6">{'Event ends: ' + location.endDate}</p>
                      <p className="subtitle is-6">{'Website: ' + location.website}</p>
                      <p className="subtitle is-6">{'Email: ' + location.email}</p>
                      <p className="subtitle is-6">{'Phone: ' + location.phone}</p>
                      <p className="subtitle is-6">{'About: ' + location.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={location.image} alt={location.name} />
                  </figure>
                </div>
              </div>
            </Link>
          </div>
        })}
      </div>
    </div>
  </section>
}

export default Locations 