module.exports = (controller) => async (req, res, next) => {
  try {
    const fullData = { req, res };
    const object = await controller(fullData);
    return res.status(200).json({ ...object });
  } catch (error) {
    return next(error);
  }
};
