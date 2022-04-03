function handler (req, res) {
    const { slugs } = req.query
    res.json({ slugs })
}
export default handler;
// http://localhost:3000/api/catchAll/one/two/three
// {
//     "slugs": [
//     "one",
//     "two",
//     "three"
//     ]
//     }