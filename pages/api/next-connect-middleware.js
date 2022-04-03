import nextConnect from 'next-connect'

const withAuth = (req, res, next) => {
if(!req.headers.authentication){
    res.status(401).json({message: 'error'})
}
return next()
}

const handler = nextConnect()
.use(withAuth)
.get((req, res) => res.status(200).json({message: 'GET!!!!'}))

export default handler;