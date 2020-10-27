import React from 'react';
import './search.css';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints'

    class Search extends React.Component{
        handleChange = e => {
            this.form.validateFields(e.target);
          }

        searchSubmit = e =>{
            e.preventDefault();
            this.form.validateFields();

            if (!this.form.isValid()) {
              console.log('form is invalid: do not submit');
            } else {
              console.log('form is valid: submit');
            }
        }
        render(){
            return (
                <FormWithConstraints ref={form => this.form = form} onSubmit={this.searchSubmit} noValidate>
                    <div className='search-cont'>
                        <div className="form-group">
                            <span><i className="fas icons fa-search"></i></span><input name="searchFacility" type='text' placeholder='Search for closest facility' className='search-input form-control' required onChange={this.handleChange}/>
                            <FieldFeedbacks for="searchFacility">
                            <span style={{color: "red"}}><FieldFeedback when={value => !/^[a-zA-Z]+$/.test(value)} warning> Only letters </FieldFeedback>
                            <FieldFeedback when = "valueMissing"/></span>
                            </FieldFeedbacks>
                        </div>
                        <div className="form-group">
                            <span><i className="fas icons fa-map-marker-alt"></i></span><input type='text' name="searchLocation" placeholder='Set location' className='search-input form-control' required onChange={this.handleChange}/>
                            <FieldFeedbacks for="searchLocation">
                            <span style={{color: "red"}}>
                            <FieldFeedback when = "valueMissing"/></span>
                            </FieldFeedbacks>
                        </div>
                        <div className="form-group">
                            <select className='search-select form-control'>
                                <option>Specialty</option>
                                <option>Dentists</option>
                                <option>Gynecologists</option>
                                <option>Optamologists</option>
                                <option>Pediatritians</option>
                                <option>Cardiologists</option>
                            </select>
                        </div>
        
                        <input type='button' value='search' className='search-btn'/>
                    </div>
                </FormWithConstraints>
            );
        }
    }



export default Search;