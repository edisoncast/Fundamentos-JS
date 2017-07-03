const movie= "Harry potter y las reliquias de la muerte"

const pg_movie=12

const nameEdison="edison"

const ageEdison=22

const nameJhon="Jhon"

const ageJhon=11

let canWatchMovie = (name, age, isWithAdult=false) => {
	if (age >= pg_movie){
		console.log (`${name} puede ingresar a ver la pelicula ${movie}`)
	}
	else if (isWithAdult) {
        console.log (`${name} no tiene la edad, pero está acompañado por un adulto, motivo por el cual puede ingresar a ver la pelicula ${movie}`)
	}
	else {
		console.log(`${name} no puede ingresar a ver la pelicula ${movie} pues tiene ${age} años`)
	}
}


canWatchMovie(nameEdison,ageEdison)
canWatchMovie(nameJhon,ageJhon)
canWatchMovie(nameJhon,ageJhon, true)