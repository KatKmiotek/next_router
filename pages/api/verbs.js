import nextConnect from 'next-connect'

const handler = nextConnect({
    onNoMatch: (req, res) => res.status(404).json({message: 'not found :( '})
})
.get((req, res) => res.status(200).json({message: 'GET!!!!'}))
.post((req, res) => res.status(200).json({message: 'POSTed!!!!'}))
.put((req, res) => res.status(200).json({message: 'PUT!!!!'}))
.patch((req, res) => res.status(200).json({message: 'PATCH!!!!'}))
.delete((req, res) => res.status(200).json({message: 'DELETEd!!!!'}))

function oldHandler(req, res){
    const { method } = req;
    if(method == 'GET'){
        res.status(200).json({message: 'GET!!!!'})
    }
    if(method === 'POST'){
        res.status(200).json({message: 'POSTed'})
    }
    if(method === 'PATCH'){
        res.status(200).json({message: 'PATCHed'})
    }
    if(method === 'PUT'){
        res.status(200).json({message: 'PUT'})
    }
    if(method === 'DELETE'){
        res.status(200).json({message: 'DELETE'})
    }
    res.status(404).json({message: 'not found :( '})
}
export default handler;