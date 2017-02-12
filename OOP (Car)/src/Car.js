function Car (name, model, type) {//defined my Car class here
	this.name = ((name == null) ? 'General' : name);       //assigned the parameter name to the variable this.name, in the case where a name isn't defined i made sure "General" was assigned to this.name variable
	this.model = ((model == null) ? 'GM' : model);//assigned the parameter model to the variable this.model or assign "GM" to it if no argument is passed.
	this.type = type;//assigned the parameter type to the variable this.type
	this.numOfDoors = ((name == 'Porshe' || name == 'Koenigsegg') ? 2 : 4);//i want to make sure Porsche and Koenigsegg cars are treated differently, because they have 2 doors.
	this.numOfWheels = ((type == 'trailer') ? 8 : 4);//i want to make sure trailers are treated differently because they have 8 wheels.
	this.isSaloon = ((name == 'MAN') ? false:  true);//i want to make sure MAN trucks are treated differently, because they are not saloon cars.
	this.speed = '0 km/h';//i want to make sure the initial spped of a car is 0, because a car is not driven by default
	this.drive = function (speed) {//this is a function call to drive a car
		this.speed = (type == 'trailer') ? (speed * 11) + ' km/h' : Math.ceil(speed * 28.003) + ' km/h';
	return this;
	}
}


