const AppError = require('../utils/AppError');

module.exports = (req, res, next) => {
  const { change } = req.body;
  if (typeof change !== 'number' || !Number.isInteger(change) || change === 0) {
    return next(new AppError('"change" must be a non-zero integer (positive to restock, negative for sale)', 400));
  }
  next();
};
