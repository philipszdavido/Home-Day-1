'use strict'

function Phone(name,model,os) {         //defined my Phone class here
   this.name = name || "General";      //assigned the parameter name to the variable this.name, in the case where a name isn't defined i made sure "General" was assigned to this.name variable
   this.model = model || "GM"; //assigned the parameter model to the variable this.model or assign "GM" to it if no argument is passed.
   this.os = os || "Java/Symbian/Microsoft"; //assigned tne argument passed in place of the parameter os to this.os and assigned "Java/Symbian/Microsoft" if no argument is passed.

   if (this.name  === 'Tecno' || this.name === "Infinix") {    //i want to make sure Tecno and Infinix phones are treated differently, because they have some properties that are peculiar
        this.CPU = "MTK Processor";      //Tecno or infinix CPU are usually MTK (MediaTek processors)
        this.isAndroid = true;         // a class variable used to store a boolean to describe if a phone is an android phone or not.
        this.doubleSim = true;         //a class variable to store a boolean to know if the phone uses double sim
        this.isIphone = false;         // a class variable used to store a boolean to describe if a phone is an iphone or not.
        this.isCharging = false;      // a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
        this.isPowerOn=false;
        this.isPowerOff=true;
   }
   
   else {         //if the name of the phone isn't Tecno or Infinix, it should implement the following lines of code
      if (this.os === "iOS") {
         this.CPU = "Apple Chipset";      // assign the string "Apple Chipset" to the variable this.CPU
           this.isAndroid = false;         // a class variable used to store a boolean to describe if a phone is an android phone or not.
           this.isIphone = true;         // a class variable used to store a boolean to describe if a phone is an iphone or not.
           this.doubleSim = false;         //a class variable to store a boolean to know if the phone uses double sim
           this.isCharging = false;      // a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
           this.isPowerOn=false;
           this.isPowerOff=true;

      }
      else if (this.os === "Android") {
         this.CPU = "SnapDragon Processor";      // assign the string "SnapDragon Processor" to the variable this.CPU
           this.isAndroid = true;         // a class variable used to store a boolean to describe if a phone is an android phone or not.
           this.doubleSim = false;         //a class variable to store a boolean to know if the phone uses double sim
           this.isIphone = false;         // a class variable used to store a boolean to describe if a phone is an iphone or not.
           this.isCharging = false;      // a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
           this.isPowerOn=false;
           this.isPowerOff=true;

      }
      else {      //if the os of the phone is neither android nor ios , or the os is undefined, it should implement the following lines of code
         this.CPU = "Microsoft Processor/Java CPU";      // assign the string "Micrsoft Processor/Java CPU" to the variable this.CPU
         this.isAndroid = false;         // a class variable used to store a boolean to describe if a phone is an android phone or not.
           this.isIphone = false;         // a class variable used to store a boolean to describe if a phone is an iphone or not.
           this.doubleSim = false;         //a class variable to store a boolean to know if the phone uses double sim
           this.isCharging = false;      // a class variable used to store a boolean to know if the phone is charging or not, a phone is usually not charging by default.
           this.isPowerOn=false;
           this.isPowerOff=true;

      }
   }
}
Phone.prototype.charge = function() {      // this is a function call to charge the phone
 //if(this.name='Tecno' || this.name='Infinix')
 this.isCharging = true;      // we change the .isCharging variable to indicate that the phone is charging
  }
Phone.prototype.stopCharge = function() {   //this is a function call to stop charging the phone
 this.isCharging = false;   // we change the .isCharging variable to indicate that the phone has stopped charging
  }
Phone.prototype.powerOn = function() {      //this is a function to power on the phone, it changes the boolean value of this.isPowerOn to show that the phone is on.
 this.isPowerOn = true;      //boolean value of this.isPowerOn is set to true to indicate that the phone is powered on.
  }
Phone.prototype.powerOff = function() {   //this is a function to power off the phone, it changes the boolean value of this.isPowerOff to show that the phone is off.
  this.isPowerOn = false;      //boolean value of this.isPowerOn is set to true to indicate that the phone is powered off.
  }

/*
	Object - the object here is `Phone`
	OOP concepts implemented are:
	Inheritance - 	Since I've defined a `Phone` object, if you say 
					function Phon(name, model,os) {}
					Phon.prototype = new Phone();
					var phon = new Phon();
					phon.charge();
					this will run because `Phon` has inherited the `charge` property
      				from the `Phone` class
	Encapsulation - The object - `Phone` is structured to be self-contained,
					everything the object needs is available internally.
					The internal state of the object is not directly accessible
					externally except through the abstraction layer
	Polymorphism -	Different objects can respond to the same name in different ways,
					with the response specific to the object
					In the instance of inheritance above
					Phon.prototype = new Phone();
					var phon = new Phon();
					phon.charge();
					`Phon` inherits a `charge` method from `Phone` but we may want to alter
					the `charge` functionality for `Phon`. We can overload the `charge` method 
					with a new Phon charge method
	Abstraction - 	the user does not need to know how the methods are defined
					he only needs to call them and use them
*/
