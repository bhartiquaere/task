import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const DealsData = ({ className, ...props }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [heading, setHeading] = useState(props.heading);
  const handleHeadingChange = (event) => {
    setHeading(event.target.value);
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleGridViewClick = () => {
  };
  const toggleFullscreen = (elem) => {
    elem = elem || document.documentElement;
    if (!document.fullscreenElement) {
      elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };
  const handleListViewClick = () => {
    toggleFullscreen();
  };
  return (
    <>
      <div className={`page-header mb-3`}>
        <div className={`row align-items-center`}>
          <div className="col-md-4">
            <h3 className="page-title">{heading}</h3>
          </div>
          <div className="col-md-8 float-end ms-auto">
            <div className="d-flex title-head">
              <div className="view-icons">
                <button onClick={handleGridViewClick} className={`grid-view btn btn-link`}>
                  <i className="las la-redo-alt"></i>
                </button>
                <button onClick={handleListViewClick} className={`list-view btn btn-link`} id="collapse-header">
                  <i className="las la-expand-arrows-alt"></i>
                </button>
              </div>
              
              <div className="form-sort">
                <button
                 onClick={toggleModal} className="list-view btn btn-link">
                  <i className="las la-file-export"></i>Export
                  </button>
              </div>
              <div className={`modal custom-modal fade modal-padding ${showModal ? 'show' : ''}`} id="export" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header header-border justify-content-between p-0">
                      <h5 className="modal-title">Export</h5>
                      <button type="button" className="btn-close position-static" onClick={toggleModal} aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>

                    <div className="modal-body p-0">
                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="input-block mb-3">
                              <h5 className="mb-3">Export</h5>
                              <div className="status-radio-btns d-flex">
                                <div className="people-status-radio">
                                  <input type="radio" className="status-radio" id="pdf" name="export-type" defaultChecked />
                                  <label htmlFor="pdf">Person</label>
                                </div>
                                <div className="people-status-radio">
                                  <input type="radio" className="status-radio" id="excel" name="export-type" />
                                  <label htmlFor="excel">Organization</label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <h4 className="mb-3">Filters</h4>
                            <div className="input-block mb-3">
                              <label className="col-form-label">Fields <span className="text-danger">*</span></label>
                              <select className="select">
                                <option>All Fields</option>
                                <option>contact</option>
                                <option>Company</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">From Date <span className="text-danger">*</span></label>
                              <div className="cal-icon">
                                <input className="form-control floating datetimepicker" type="text" />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-block mb-3">
                              <label className="col-form-label">To Date <span className="text-danger">*</span></label>
                              <div className="cal-icon">
                                <input className="form-control floating datetimepicker" type="text" />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12 text-end form-wizard-button">
                            <button className="button btn-lights reset-btn" type="reset" onClick={toggleModal}>Reset</button>
                            <button className="btn btn-primary" type="submit">Export Now</button>
                          </div>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>

              <div className="daterange-picker d-flex">
                <div className="form-sort">
                  <i className="las la-calendar"></i>
                  <DatePicker
                    className="form-control  date-range bookingrange"
                    dateFormat="dd/MM/yyyy"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                  />
                </div>
                <div className="form-sort d-flex">
                  <i className="las la-cubes"></i>
                  <select className="select" onChange={handleHeadingChange}>
                    <option>Deals Dashboard</option>
                    <option>Leads Dashboard</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  )
}

export default DealsData;