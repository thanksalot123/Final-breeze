console.log('so this is client side javascript')
const aqi = document.querySelector('#aqi1')
const city = document.querySelector('#city1')
const status = document.querySelector('#status')
const lox = document.querySelector('#lock')
const box = document.querySelector('#bock')
const hox = document.querySelector('#hock')
const des = document.querySelector('#description')
const points = document.querySelector('#points')



function geoFindMe() {

   

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch('/pollution?lattitude='+latitude+'&longitude='+longitude).then((response)=>{
        response.json().then((data)=>{
        
        if(data.error){
            status.textContent = 'Error'
            aqi.textContent = 'sorry'
            city.textContent = 'occured'
        }else{
            if(data.aqius>0 && data.aqius<=50){
                status.textContent = 'SAFE'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#2ecc71,#16a085)"
                box.style.background = "linear-gradient(#2ecc71,#16a085)"
                hox.style.background = "linear-gradient(#2ecc71,#16a085)"
                des.textContent = "  DESCRIPTION"
                points.textContent = "you are safe and there is no harm to you due to your locality air quality"
                
            }else if(data.aqius>50 && data.aqius<=100){
                status.textContent = 'Moderate'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#f9ca24,#f6e58d)"
                box.style.background = "linear-gradient(#f9ca24,#f6e58d)"
                hox.style.background = "linear-gradient(#f9ca24,#f6e58d)"
                des.textContent = "  DESCRIPTION"
                points.textContent = "is acceptable; however, pollution in this range may pose a moderate health concern for a very small number of individuals. People who are unusually sensitive to ozone or particle pollution may experience respiratory symptoms"

            }else if(data.aqius>100 && data.aqius<=150){
                status.textContent = 'Not safe'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#f1c40f,#f39c12)"
                box.style.background = "linear-gradient(#f1c40f,#f39c12)"
                hox.style.background = "linear-gradient(#f1c40f,#f39c12)"
                des.textContent = "  DESCRIPTION"
                points.textContent = "if aqi is between 101 and 150, members of sensitive groups may experience health effects, but the general public is unlikely to be affected.Ozone: People with lung disease, children, older adults, and people who are active outdoors are considered sensitive and therefore at greater risk. Particle pollution: People with heart or lung disease, older adults,1 and children are considered sensitive and therefore at greater risk."

            }else if(data.aqius>150 && data.aqius<=200){
                status.textContent = 'UN-HEALTHY!!'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#c0392b,#e74c3c)"
                box.style.background = "linear-gradient(#c0392b,#e74c3c)"
                hox.style.background = "linear-gradient(#c0392b,#e74c3c)"
                des.textContent = "  DESCRIPTION"
                points.textContent = "Everyone may begin to experience health effects when AQI values are between 151 and 200. Members of sensitive groups may experience more serious health effects."

            }else if(data.aqius>200 && data.aqius<=300){
                status.textContent = 'DANGEROUS!!'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#8e44ad,#9b59b6)"
                box.style.background = "linear-gradient(#8e44ad,#9b59b6)"
                hox.style.background = "linear-gradient(#8e44ad,#9b59b6)"
                des.textContent = "  DESCRIPTION"
                points.textContent = "Very Unhealthy. AQI values between 201 and 300 trigger a health alert, meaning everyone may experience more serious health effects"

            }else if(data.aqius>300 && data.aqius<=500){
                status.textContent = 'HAZARDOUS'
                aqi.textContent = data.aqius
                city.textContent = data.city
                lox.style.background = "linear-gradient(#6F1E51,#833471)"
                box.style.background = "linear-gradient(#6F1E51,#833471)"
                hox.style.background = "linear-gradient(#6F1E51,#833471)"
                des.textContent = "  DESCRIPTION:"
                points.textContent = "AQI values over 300 trigger health warnings of emergency conditions. The entire population is even more likely to be affected by serious health effects."
 

            }

        }
    })
})

           
    }

    function error() {
            
        }

        if (!navigator.geolocation) {
            status.textContent = 'Error'
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }

}

    document.querySelector('.navigation').addEventListener('click', geoFindMe);

    



