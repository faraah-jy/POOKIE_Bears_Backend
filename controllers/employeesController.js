const Employee = require("../model/employees");

// const data = {
//     employees: require('../model/employees.json'),
//     setEmployees: function (data) { this.employees = data }
// }

//const getAllEmployees = (req, res) => {
// const getAllEmployees = Employee
//}

const createNewEmployee = async (req, res) => {
  try {
    const { fullName, experience, role, exceptionsDealtWith, description } =
      req.body;
    if (
      !fullName ||
      !experience ||
      !role ||
      !exceptionsDealtWith ||
      !description
    ) {
      return res.status(400).json({ msg: "Missing required fields" });
    }
    const newEmployeeData = {
      fullName,
      experience,
      role,
      exceptionsDealtWith,
      description,
    };
    const newEmployee = await Employee.create(newEmployeeData);
    return res
      .status(200)
      .json({ msg: "user cresated successfully!", data: newEmployee });
  } catch (err) {
    console.log(err);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await Employee.findById(id);
    const employeeData = {};
    if (!employee) {
      return res.status(400).json({ message: `Employee ID ${id} not found` });
    }
    if (req.body.fullName) employeeData.fullName = req.body.fullName||employee.fullName
    if (req.body.experience) employeeData.experience = req.body.experience||employee.experience
    if (req.body.role) employeeData.role = employee.role
    if (req.body.exceptionsDealtWith)
      employeeData.exceptionsDealtWith = req.body.excptionsDealtWith||employee.exceptionsDealtWith
    if (req.body.description) employeeData.description = req.body.description||employee.description


    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      employeeData
    );

    if (!updatedEmployee) {
      return res.status(400).json({ msg: "No updated employee!" });
    }
    return res
      .status(201)
      .json({ msg: "employee updated!", data: employeeData });
  } catch (err) {
    console.log(err);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ msg: "employee deleted!", data: deletedEmployee });
  } catch (err) {
    console.log(err);
  }
};

const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ msg: "this employee doesn't exist" });
    }
    return res.status(200).json({ msg: "user found!", data: employee });
    //res.json(employee);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  //getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
