const service = require('../services/hotels');

const getHotels = async (req, res) => {
  try {
    const data = await service.getHotels();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500)
  }
}

module.exports = {
  getHotels
}