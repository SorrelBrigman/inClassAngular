app.factory("varFactory", function() {

let bologna;

  return {
    //getter
    getThatVar : ()=>{
      if(bologna) {
        return bologna
      } else {
        return "bologna"
      }
    },
    //setter
    setThatVar: () =>{
      bologna
    }
  }


})
