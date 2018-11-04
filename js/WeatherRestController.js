var ConvertRestControllerModule = (function () {

  var convert = function (callback,currency1,currency2,value) {
    axios.get('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+currency1+'&to_currency='+currency2+'&apikey=Q1QZFVJQ21K7C6XM')
            .then(function(info){
                callback.onSuccess(info.data);
            })
            .catch(function(error){
                            //callback.onFailed(error);
                            console.log(error);
                        });
  };



  return {
    convert: convert
  };



})();

var ListRestControllerModule = (function () {

  var getList = function (callback2) {
    axios.get('https://openexchangerates.org/api/latest.json?app_id=8632e438a03545118b7dce43ff29bd97')
            .then(function(info){
              console.log("BIEEEEN");
                callback2.onSuccess(info.data.rates);
            })
            .catch(function(error){
                            callback2.onFailed(error);
                            console.log(error);
                        });
  };



  return {
    getList: getList
  };



})();

