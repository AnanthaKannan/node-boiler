module.exports.httpResponse = async(req, res, next) => {
  const data = await res.data;
  if(data){
    return res.status(res.statusCode).json(data)
  }
  return res.sendStatus(res.statusCode)
}