const router = require("express").Router();
const People = require("../model/people.model");

/* This is a route handler for the /people/new route. It is used to peopled a new people. */
router.post("/people/new", async (req, res) => {
  const { fullName, nameWithInitials, gender, email, designation, joinDate, salary, personalNotes, preferredName, dateOfBirth, mobileNumber, employeeType, experience } =
    req.body;

  if (!fullName || !nameWithInitials || !gender || !email || !designation || !joinDate || !salary || !personalNotes || !preferredName || !dateOfBirth || !mobileNumber || !employeeType || !experience) {
    res.status(422).json("Please enter all data");
    return 0;
  }else if (mobileNumber.length > 11) {
    res.status(420).json("mobile number should be  10 numbers")
    return 0;
  }else if (personalNotes.length > 101) {
    res.status(420).json("Personal notes should be  maximum 100 characters")
    return 0;
  }else {
    try {
      const peopledpeople = new People({
        fullName: req.body.fullName,
        nameWithInitials: req.body.nameWithInitials,
        gender: req.body.gender,
        email: req.body.email,
        designation: req.body.designation,
        joinDate: req.body.joinDate,
        salary: req.body.salary,
        personalNotes: req.body.personalNotes,
        preferredName: req.body.preferredName,
        dateOfBirth: req.body.dateOfBirth,
        mobileNumber: req.body.mobileNumber,
        employeeType: req.body.employeeType,
        experience: req.body.experience,
      });

      await peopledpeople.save();
      res.status(201).json(peopledpeople);
    } catch (error) {
      res.status(422).json(error);
    }
//   }
  }
});

// get people data by each client

router.get("/people/view", async (req, res) => {
  try {
    const getpeopledata = await People
      .find();

    res.status(201).json({ getpeopledata });
    console.log(getpeopledata)
  } catch (error) {
    return res.status(422).json(error);
  }
});

// get individual people data

router.get("/people/view/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const peopleindividual = await People
      .findById({ _id: id });
    res.status(201).json(peopleindividual);
    console.log(peopleindividual)
  } catch (error) {
    res.status(422).json(error);
  }
});

// update status data (Paused or Resumed)

router.put("/people/update/:id", async (req, res) => {
  const { fullName, nameWithInitials, gender, email, designation, joinDate, salary, personalNotes, preferredName, dateOfBirth, mobileNumber, employeeType, experience } =
    req.body;

    if (!fullName || !nameWithInitials || !gender || !email || !designation || !joinDate || !salary || !personalNotes || !preferredName || !dateOfBirth || !mobileNumber || !employeeType || !experience) {
      res.status(422).json("Please enter all data");
      return 0;
    }else if (mobileNumber.length > 11) {
      res.status(420).json("mobile number should be  10 numbers")
      return 0;
    }else if (personalNotes.length > 101) {
      res.status(420).json("Personal notes should be  maximum 100 characters")
      return 0;
    }
    try {

      const { id } = req.params;
  
      const updatepeople = await People.findByIdAndUpdate(id, req.body);
  
      res.status(201).json(updatepeople);
    } catch (error) {
      res.status(422).json(error);
    }
  });

// delete existing people
router.delete("/people/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletepeople = await People.findByIdAndDelete({ _id: id });
    res.status(201).json(deletepeople);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;