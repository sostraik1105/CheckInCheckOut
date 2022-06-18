const { Register } = require("../models/registrations.model");

const getAllRegisters = async (req, res) => {
  try {
    const data = await Register.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getRegister = async (req, res) => {
  try {
    const { employee } = req.params;

    const data = await Register.findOne({
      where: { employee },
    });

    if (!data) {
      return res.status(404).json({ msg: "employee not found" });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const checkIn = async (req, res) => {
  try {
    const { employee } = req.body;

    const data = await Register.create({
      employee,
      entranceTime: Date(),
    });

    data.exitTime = undefined;

    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const checkOut = async (req, res) => {
  try {
    const { employee } = req.params;

    const data = await Register.findOne({
      where: {
        employee,
        exitTime: null,
        status: "working",
      },
    });

    if (!data) {
      return res.status(404).json({ msg: "employee not found" });
    }

    await data.update({ exitTime: Date(), status: "out" });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

const cancelled = async (req, res) => {
  try {
    const { employee } = req.params;

    const data = await Register.findOne({
      where: {
        employee,
        exitTime: null,
        status: "working",
      },
    });

    if (!data) {
      return res.status(404).json({ msg: "employee not found" });
    }

    await data.update({ status: "cancelled" });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllRegisters,
  checkIn,
  checkOut,
  cancelled,
  getRegister,
};
