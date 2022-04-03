function handler(req, res){
 res.status(200).json({ message: 'OK' })
}
const withAuth = (handlerFn) => (req, res) => {
    if(!req.headers.authentication){
        res.status(401).json({message: 'Authentication is missing'})
    }
    return handlerFn(req,res)
}
export default withAuth(handler);