const Employee = require("../model/employees");
const Stat = require("../model/stat");

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
      const finalRate = await Employee.findByIdAndUpdate(employeeId, employee , { new: true });
      return res.status(200).json({ msg: "rating set", data: finalRate });

    }
  } catch (err) {
    console.log(err);
  }
}

const setStat = async (req, res) => {
  try {

    const stat = await  Stat.findOne({});
    stat.visitor  += 1;
    stat.loggedVisitorAndMore = stat.visitor - stat.loggedVisitor;
    const finalStat = await Stat.findByIdAndUpdate(stat._id, stat, { new: true } );
    return res.status(200).json({ msg: "Statics are set", data: finalStat });
  } catch (err){
    console.log(err)
  }

}


const updateStat = async (req, res) => {
  try {
    const stat = await  Stat.findOne({});
    const currentMonth = new Date().getMonth() + 1;
    console.log(currentMonth);
    const monthlyStat = { visitor: stat.visitor, loggedVisitor: stat.loggedVisitor, loggedVisitorAndMore: stat.loggedVisitorAndMore,currentMonth };
    const newMonthlyStat = await Stat.create(monthlyStat);

    stat.visitor = 0;
    stat.loggedVisitor = 0;
    stat.loggedVisitorAndMore = 0;
    const finalStat = await Stat.findByIdAndUpdate(stat._id, stat, { new: true });
    return res.status(200).json({ msg: "Statics are set", data: newMonthlyStat, finalStat });
  } catch (err){
    console.log(err)
  }
}




module.exports = {setRate,setStat,updateStat};
