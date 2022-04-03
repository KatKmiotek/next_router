function handler (req, res) {
    const { slug } = req.query
    res.json({ slug })
}

export default handler;
// http://localhost:3000/api/dynamic/one-two