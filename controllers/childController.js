const Child = require("../model/child");

const createNewChild = async (req, res) => {
  try {
    const { fullName ,gender /*,role*/, age, dateOfBirth, adress, siblings, disabilities,  allergies, illnesses, languageSpokenAtHome , hobies, other, emergencieFullName,  emergenciePhoneNumber, emergencieRelationToTheChild } =
      req.body;
    if (
      !fullName ||
      !gender ||

      //!role ||
      !age ||
      !dateOfBirth || !adress || !siblings || !disabilities || !allergies || !illnesses || !languageSpokenAtHome || !hobies || !other || !emergencieFullName || !emergenciePhoneNumber || !emergencieRelationToTheChild
    ) {
      return res.status(400).json({ msg: "Missing required fields" });
    }
    const newChildData = {
      fullName,
      gender,
      //role ,
      age,
      dateOfBirth, 
      adress,
      siblings ,
      disabilities,
      allergies,
      illnesses ,
      languageSpokenAtHome,
      hobies,
      other,
      emergencieFullName,
      emergenciePhoneNumber,
      emergencieRelationToTheChild,
    };
    const newChild = await Child.create(newChildData);
    return res
      .status(200)
      .json({ msg: "child cresated successfully!", data: newChild });
  } catch (err) {
    console.log(err);
  }
};

const updateChild = async (req, res) => {
  try {
    const id = req.params.id;
    const child = await Child.findById(id);
    const childData = {};
    if (!child) {
      return res.status(400).json({ message: `child ID ${id} not found` });
    }
    if (req.body.fullName) childData.fullName = req.body.fullName||child.fullName
    if (req.body.gender) childData.gender = req.body.gender||child.gender
    if (req.body.age) childData.age = child.age||child.age
    if (req.body.dateOfBirth) childData.dateOfBirth = req.body.dateOfBirth||child.dateOfBirth
    if (req.body.adress) childData.adress = req.body.adress||child.adress
    if (req.body.siblings) childData.siblings = req.body.siblings||child.siblings
    if (req.body.disabilities) childData.disabilities = req.body.disabilities||child.disabilities
    if (req.body.allergies) childData.allergies = req.body.allergies||child.allergies
    if (req.body.illnesses) childData.illnesses = req.body.illnesses||child.illnesses
    if (req.body.languageSpokenAtHome) childData.languageSpokenAtHome = req.body.languageSpokenAtHome||child.languageSpokenAtHome
    if (req.body.other) childData.other = req.body.other||child.other
    if (req.body.emergencieFullName) childData.emergencieFullName = req.body.emergencieFullName||child.emergencieFullName
    if (req.body.emergenciePhoneNumber) childData.emergenciePhoneNumber = req.body.emergenciePhoneNumber||child.emergenciePhoneNumber
    if (req.body.emergencieRelationToTheChild) childData.emergencieRelationToTheChild = req.body.emergencieRelationToTheChild||child.emergencieRelationToTheChild


    const updatedChild = await Child.findByIdAndUpdate(
      id,
      childData
    );

    if (!updatedChild) {
      return res.status(400).json({ msg: "No updated Child!" });
    }
    return res
      .status(201)
      .json({ msg: "Child updated!", data: childData });
  } catch (err) {
    console.log(err);
  }
};

const deleteChild = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedChild = await Child.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ msg: "Child deleted!", data: deletedChild });
  } catch (err) {
    console.log(err);
  }
};

const getChild = async (req, res) => {
  try {
    const { id } = req.params;
    const child = await Child.findById(id);
    if (!child) {
      return res.status(404).json({ msg: "this child doesn't exist" });
    }
    return res.status(200).json({ msg: "child found!", data: child });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createNewChild,
  updateChild,
  deleteChild,
  getChild,
};
