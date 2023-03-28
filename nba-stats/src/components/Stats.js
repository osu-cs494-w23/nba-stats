import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api-nba-v1.p.rapidapi.com/players/statistics',
  params: {id: '236', season: '2020'},
  headers: {
    'X-RapidAPI-Key': '2e770eaefemsha7a77870366cf99p10d069jsn676fc184a637',
    'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function stats(){
  <div className="">
    console.log(response.data)
    </div>
}
export default stats;