//Car rotation
AFRAME.registerComponent("car-rotation-reader", {
    schema: {
      speedOfCarRoation: { type: "number", default: 0 },
      moveX: { type: "number", default: 1 }    
    },
    tick: function () {
      var pos = this.el.getAttribute("position");

      window.addEventListener("click", (e) => {   

        this.data.moveX = this.data.moveX + 0.01;
  
        pos.x = this.data.moveX;
      });

    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });

      var car_Rotation = this.el.getAttribute("rotation");
  
      car_Rotation.y += this.data.speedOfCarRoation;
  
      this.el.setAttribute("rotation", {
        x: car_Rotation.x,
        y: car_Rotation.y,
        z: car_Rotation.z
      });
    }
  });