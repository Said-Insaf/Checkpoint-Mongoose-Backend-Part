const addcontact = async (req, res) => {
  // 1 ere étape ba3d m3mlna 8 eme etape ta3 middleware f server.js : njib contenu req.body eli 7atineh f postmen , selon modele eli 7dhrneh bch n3mlou contact jdid eli 7dhrneh f req.body , Puis save f Base des données)
  // const newcontact= new Contact ( contact hwa l model eli 3mlnelou require bch yjibli contenu ta3 schema w samineh const Contact donc 3aytlou hne f const newcontact)
  // name, c équivaut de (name : name,) name de schema w name de req.body b écriture es6 ça resume en name,

  try {
    const { name, email, phone } = req.body;
    // Pour afficher erreur : name et email obligatoire, are required
    if (!name || !email) {
      res.status(400).send({ msg: "name and email are required!!!" });
      return;
    }
    //email is unique : Contact.findOne({email}) => contact hki hya l models, car liste de schema mawjouda f model biensur alors lzm yfrkssli f base des données (car  models yrepresenti l collections t3na eli f Base des données, pour accéser au base de données tjrs par models )
    const contact = await Contact.findOne({ email });
    if (contact) {
      res.statuts(400).send({ msg: "contact already exist" });
      return;
    }
    const newContact = new Contact({
      name,
      email,
      phone,
    });

    // bch nsajll f base des données n3ml save ( save lel new contact eli sna3neha bl modele contact eli 3mlnelou require w jbneh lel const newContact = new Contact)
    newContact.save();
    res.status(200).send({ msg: "contact added succesfully...", newContact });
  } catch (error) {
    res.status(400).send({ msg: "can not add contact!!!", error });
  }
}
const getallcontact = async (req, res) => {
  try {
    const listContacts = await Contact.find();
    return res
      .status(200)
      .send({ msg: "This is all of list contact...", listContacts });
  } catch (error) {
    res.status(400).send({ msg: "can not get all contact!!!", error });
  }
}
const getcontact =  async (req, res) => {
  try {
   
    const contactToGet = await Contact.findOne({ _id : req.params.id })
    console.log(contactToGet)
    res.status(200).send({ msg: 'I get the contact ...', contactToGet })
  } catch (error) {
    res.status(400).send({ msg: 'I cant get the contact with this id !!', error })
  }
}
const deletecontact = async (req, res) => {
  const { _id } = req.params;
  try {
    const contactToDelete = await Contact.findOneAndDelete({ _id });
    res.status(200).send({ msg: "contact deleted...", contactToDelete });
    if (!contactToDelete) {
      res.status(200).send({ msg: "contact already exist..." });
      return;
    }
  } catch (error) {
    res.status(400).send({ msg: "can not deleted with this id!!!", error });
  }
}

const updatecontact =async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Contact.updateOne({ _id }, { $set: { ...req.body } });
    console.log(result)
    if (!result.nModified) {res.status(200).send({msg : 'contact already updated...'})
    return
  } 
  res.status(200).send({ msg: "contact Updated..." })
  } catch (error) {
    res.status(400).send({ msg: "can not Update with this id!!!", error });
  }
}



module.exports = controllers = {
  addcontact,
  getallcontact,
  getcontact,
  deletecontact,
  updatecontact
}




