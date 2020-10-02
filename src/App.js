import React from 'react';

import Title from './components/Title'
import Form from './components/Form'

//const API_KEY="9ba4121fd86958909514af0081bc008c";

import Weather from './components/weather'

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }


    
  render(){

    const API_KEY="9ba4121fd86958909514af0081bc008c";

    const getWeather=async(e)=>{
      
      e.preventDefault()
      const city=e.target.elements.city.value
      const country=e.target.elements.country.value
     const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
     
     const data=await api_call.json()
     if(city && country){
     this.setState({
       temperature: data.main.temp,
       city: data.name,
       country: data.sys.country,
       humidity: data.main.humidity,
       description: data.weather[0].description,
       error: ""
     });}
     else{
       this.setState({
         temperature: undefined,
         city:undefined,
         country: undefined,
         humidity: undefined,
         description: undefined,
         error: "Please Enter Values"
       });
 
     }
    
   }
   
  return (
    <div>
    <div className="wrapper">
    <div className="main">
      <div className="container">
        <div className="row">
          <div className="col-xs-5 title-container">
            <Title />
          </div>
          <div className="col-xs-7 form-container">
          <Form getWeather={getWeather} />
    <Weather
    temperature={this.state.temperature} 
    humidity={this.state.humidity}
    city={this.state.city}
    country={this.state.country}
    description={this.state.description}
    error={this.state.error} />
          </div>
        </div>
      </div>
    </div>
  </div>
    
    
    </div>
  );
}
}
export default App;

// <Title/>
    // <Form getWeather={getWeather} />
    // <Weather
    // temperature={this.state.temperature} 
    // humidity={this.state.humidity}
    // city={this.state.city}
    // country={this.state.country}
    // description={this.state.description}
    // error={this.state.error} />