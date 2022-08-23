import DialogModel from "../models/Dialog.js";

class DialogController {
  async index(req, res) {
    const authorId = req.params.id;
    const result = await DialogModel.find({ author: authorId }).exec();
    res.json(result);
  }

  async create(req, res) {
    const postData = {
      author: req.body.author,
      partner: req.body.partner
    };
    const dialog = new DialogModel(postData);
    try {
      const savedDialog = await (await dialog.save()).populate('user');
      res.json(savedDialog);
    } catch (err) {
      res.json(err);
    }

  }

  async show(req, res) {
    const dialogId = req.params.id;

    try {
      const dialog = await DialogModel.findById(dialogId).populate(['author', 'partner']);
      if (dialog === null) {
        throw new Error; // TODO обработка ошибок
      }
      res.json(dialog);
    } catch (err) {
      res.json(err);
    }
  }

  async delete(req, res) {
    try {
      const result = await DialogModel.deleteOne({ _id: req.params.id });
      res.json(result);
    } catch (err) {
      console.log({err})
      res.json(err);
    }
  }
}

export default DialogController;