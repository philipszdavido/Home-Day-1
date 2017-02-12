(function(){
  'use strict';


  describe("Car Class: Create a car, make it drive", function() {

    it("The phone should be a type of `object`, and an instance of the `Phone` class", function() {
      var tecno = new Phone('Tecno');
      expect(typeof tecno).toEqual(typeof {});
      expect(tecno instanceof Phone).toBeTruthy();
    });

    it("The phone should be called 'General' if no name is passed as a parameter", function() {
      var gm = new Phone();
      expect(gm.name).toEqual('General');
      expect(gm.model).toBe('GM');
    });

    it("The phone name and model should be a property of the phone", function() {
      var samsung  = new Phone('Samsung', 'J5');
      expect(samsung.name).toBe('Samsung');
      expect(samsung.model).toBe('J5');
    });

    it("The phone should not be a double sim phone except its a Infinix or Tecno", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 5c', "iOS");
      expect(iPhone.doubleSim).not.toBe(true);

      var tecno = new Phone('Tecno', 'R7');
      expect(tecno.doubleSim).toBe(true);
      expect(tecno.isCharging).toBe(false)
      tecno.charge();
      expect(tecno.isCharging).toBeTruthy();
      expect((function(){return new Phone('Infinix', 'Hot S');}()).doubleSim).not.toBe(false);
    });

    it("The phone should be powered off by default until powered on", function() {
      var iPhone  = new Phone('iPhone', 'iPhone 5c', "iOS");
      expect(iPhone.isPowerOn).toBe(false);
      expect(iPhone.isAndroid).not.toBeTruthy();
      expect(iPhone.isIphone).toBeTruthy();
      iPhone.powerOn();
      expect(iPhone.isPowerOn).toBeTruthy();
      iPhone.powerOff();
      expect(iPhone.isPowerOn).not.toBeTruthy();
    });

    it("The Phone should charge when plugged in with the function 'charge'", function() {
      var lumia = new Phone("Nokia","Lumia 520");
      expect(lumia.isCharging).not.toBeTruthy();
      lumia.charge();
      expect(lumia.isCharging).toBe(true);
    });

  });
})();