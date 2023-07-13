DBService.getBreweries()
.then(birrerie => render(breweries))

function render(breweries){

    for(brewery of breweries){
        console.log(brewery.name)
    }

}