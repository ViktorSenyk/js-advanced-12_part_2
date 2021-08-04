const orderTour = (req, res) => {
  res.status(200).json('The order has been received. Our manager contact you soon.')
}

module.exports = {
  orderTour
}