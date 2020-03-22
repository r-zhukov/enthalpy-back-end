const Contact = require('../models/Contact.model');
const Enterprise = require('../models/Enterprise.model');

async function createContact(req, res, next) {
    const body = req.body;
    body.enterprise = req.params.id;
    try {
        const contactModel = new Contact(body);
        const createContact = await contactModel.save();
        await Enterprise.updateOne({_id: req.params.id}, {$push: {contacts: createContact._id}});
        res.send(createContact)
    } catch (e) {
        next(e)
    }

}

async function updateContact(req, res, next) {
    const body = req.body;
    const contactId = req.params.id;
    try {
        const updateContact = await Contact.updateOne({_id: contactId}, body, {runValidations: true});
        res.send(updateContact);
    } catch (e) {
        next(e);
    }
}

async function getAllEnterpriseContact(req, res, next) {
    const enterpriseId = req.params.id;
    try {
        const enterprise = await Enterprise.findOne({_id: enterpriseId}).populate('contacts');
        if (enterprise) {
            const contacts = enterprise.contacts;
            res.send(contacts);
        }
        res.status(404).send('Not found')

    } catch (e) {
        next(e);
    }
}

async function getContactById(req, res, next) {
    const  contactId = req.params.id;
    try {
        const contact = await Contact.findOne({_id: contactId});
        if(contact) {
            res.send(contact);
        }
        res.status(404).send('Contact nor found')
    } catch (e) {
        next(e);
    }

}

module.exports = {
    createContact,
    updateContact,
    getAllEnterpriseContact,
    getContactById,

};