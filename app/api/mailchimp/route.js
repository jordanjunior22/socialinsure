export async function POST(Request){
    // Get the Mailchimp API key and server prefix from environment variables
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;
  
    const data = await Request.json();
    const { email, last_name, first_name } = data;
    //console.log(email);
    //console.log(last_name);
    //console.log(first_name);
  
    const client = require("@mailchimp/mailchimp_marketing");
    client.setConfig({
      apiKey: apiKey,
      server: serverPrefix,
    });
  
    const run = async () => {
      try {
        const response = await client.lists.addListMember("3700b1361d", {
          email_address: email,
          status: "subscribed",
          merge_fields: { 
            FNAME: first_name,
            LNAME: last_name,
        },
        });
        //console.log(response);
        return true; // Indicate successful API call
      } catch (error) {
        console.error(error);
        return false; // Indicate failed API call
      }
    };
    const apiCallSuccess = await run();
      if (apiCallSuccess) {
      return Response.json({ message: "Email subscribed successfully" });
    } else if(!apiCallSuccess){
        return Response.json({ message: "Already Subscribed" });
    } 
    else {
        return Response.json({ message: "An error occurred while subscribing the email" });
    }
  }