const service = require('../services/airlines');

const getAirlines = async (req, res) => {
  try {
    const data = await service.getAirlines(req.body);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getAirlines
}