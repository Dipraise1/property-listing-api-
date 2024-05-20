const Property = require('./models/property');

// Create a new property
app.post('/properties', async (req, res) => {
    const property = new Property(req.body);
    try {
        await property.save();
        res.status(201).send(property);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Read all properties
app.get('/properties', async (req, res) => {
    try {
        const properties = await Property.find({});
        res.status(200).send(properties);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Read a single property by ID
app.get('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).send();
        }
        res.status(200).send(property);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update a property by ID
app.patch('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!property) {
            return res.status(404).send();
        }
        res.status(200).send(property);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a property by ID
app.delete('/properties/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).send();
        }
        res.status(200).send(property);
    } catch (error) {
        res.status(500).send(error);
    }
});
