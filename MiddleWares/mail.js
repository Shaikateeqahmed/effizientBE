const nodemailer = require("nodemailer");
const OpenAI = require('openai');
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

async function main(promt) {
    
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Say Applicate ${promt.Full_Name} having age ${promt.Age} with the Email ID ${promt.Email}} is filled the form. the Details are 
    1. highest level of Education :- ${promt.Education}
    2. Institute where you completed your highest level of education :- ${promt.Institute},
    3. What did you study :- ${promt.Study},
    4. What institute did you get admitted to in Canada :- ${promt.Admition},
    5. What is your program of study in Canada :- ${promt.Program},
    6. Which country are you applying from :- ${promt.Country},
    7. What are your future goals :- ${promt.Goals},
    8. English Scores - Listening :- ${promt.Elistening},
    9. English Scores - Reading :- ${promt.Ereading},
    10. English Scores - Speaking :- ${promt.Espeaking},
    11. English Scores - Writing ;- ${promt.Ewriting},
    12. How much tuition fee did you pay:- ${promt.Fee},
    13. How much did you pay towards GIC :- ${promt.GIC} ` }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}


let mailfun = async(req,res,next)=>{
    const {Email} = req.body;

    const transporter = nodemailer.createTransport({
        service : "gmail",
        auth : {
            user: process.env.email,
            pass: process.env.password
        },
        tls : {
            rejectUnauthorized : false
        }
    });
  transporter.sendMail({
    to: `${Email}`,
    subject: "Detials Mail",
    text :     `${await main(req.body)}`

  }).then(() => {
    console.log("mail sent successfully");
    next()
  }).catch((err) => {
    console.log(err);
    console.log("err in sending mail");
    res.json({ "Error": err });
  })

}





module.exports = {mailfun};