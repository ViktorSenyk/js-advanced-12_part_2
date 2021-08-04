const service = require('../services/country');

const getCountries = async (req, res) => {
  try {
    const data = await service.getCountries();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = {
  getCountries
}