const db = require('./db');

module.exports = async (req, res) => {
    const { query, params } = req.body; // Expecting { query: 'SELECT ...', params: [...] }
    try {
        const results = await db(query, params);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: 'Database query failed' });
    }
};
