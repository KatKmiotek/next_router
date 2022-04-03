function handler(req, res){
  res.json({
    greet: 'hello there'
  })
}

export default handler;
// http://localhost:3000/api/greeting/deep