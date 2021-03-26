// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr){
    let mapped = moviesArr.map(elem => {
        return elem.director
    })
    return mapped
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr){
    
    let ssMovies = moviesArr.filter(singleMovie=>{
      return singleMovie.director == "Steven Spielberg" && singleMovie.genre.includes("Drama")
    })

  return ssMovies.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr){
    
    let total = moviesArr.reduce((acc, elem) => {
        if (elem.rate) {
           return acc + Number(elem.rate || 0)
        }
        else {
          return acc
        }
      }, 0)
      
     
     let average = total != 0 ? total/moviesArr.length : 0
     
     
     return  Math.round(average*100)/100
   }


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {

  let dramas = moviesArr.filter(elem=>{
    return elem.genre.includes("Drama")
  })
  let total = dramas.reduce((acc, elem) => {
    if (elem.rate) {
       return acc + Number(elem.rate || 0)
    }
    else {
      return acc
    }
  }, 0)
  
 
 let average = total != 0 ? total/dramas.length : 0
 
 
 return  Math.round(average*100)/100

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {

    let clonedArray =  JSON.parse(JSON.stringify(moviesArr))
    clonedArray.sort((a, b) => {
        
        if (a.year > b.year) {
          return 1; 
        } else if (a.year < b.year) {
          return -1;
        } else {
            if (a.title > b.title) {
              return 1; 
            } else if (a.title < b.title) {
              return -1;
            } else {
              return 0;
            }
        }
    })
    return clonedArray
  }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr){
    let clonedArray =  JSON.parse(JSON.stringify(moviesArr))
        clonedArray.sort((a,b)=>{
            if (a.title < b.title) {
                return -1; 
              } else if (a.title > b.title) {
                return 1;
              } else {
                return 0;
            }
          
        })
        let justTitles = clonedArray.map(elem1=>{
          
            return elem1.title
                                                            
        })
        return  justTitles.slice(0,20)
        

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
