import Contact from "../models/contacts.js";
import { ctrlWrapper } from "../decorators/index.js";
import { HttpError } from "../helpers/index.js";

const getContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(400, `Contact with id ${id} not found`);
  }
  res.json(result);
};

const postContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json({ message: "contact deleted" });
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with id ${id} not found`);
  }
  res.json(result);
};

export default {
  getById: ctrlWrapper(getById),
  getContacts: ctrlWrapper(getContacts),
  deleteContact: ctrlWrapper(deleteContact),
  updateById: ctrlWrapper(updateById),
  postContact: ctrlWrapper(postContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};
