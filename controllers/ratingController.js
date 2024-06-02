const Employee = require("../model/employees");

const setRate = async (req, res) => {
  try {
    const employeeId = req.params.id;

    const {rating} = req.body;
    console.log(rating);

    const employee = await Employee.findById(employeeId);
    console.log(employee);

    if(employee.rating==0){
      employee.rating = parseInt(rating);
      console.log(employee);
      const finalRate = await Employee.findByIdAndUpdate(employeeId, employee);
      return res.status(200).json({ msg: "rating set", data: finalRate });
    } else {
      const updatedRate = Math.floor((employee.rating + rating )/2);
      employee.rating = updatedRate; 
      console.log(employee);
      const finalRate = await Employee.findByIdAndUpdate(employeeId, employee);
      return res.status(200).json({ msg: "rating set", data: finalRate });

    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {setRate};
