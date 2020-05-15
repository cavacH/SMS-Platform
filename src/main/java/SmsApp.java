

import com.twilio.twiml.MessagingResponse;
import com.twilio.twiml.messaging.Body;
import com.twilio.twiml.messaging.Message;

import edu.stanford.nlp.util.Pair;



import java.io.FileNotFoundException;
import java.util.List;

import static spark.Spark.*;
public class SmsApp {
    public static void main(String[] args) throws FileNotFoundException {
        Config.init("/Users/hongyu/Downloads/Twilio/src/main/java/settings.conf");
        TermExtractor extractor = new TermExtractor();
        get("/", (req, res) -> "hello world");

        post("/sms", (req, res) -> {

            res.type("application/xml");
            //convert information
            String result = req.body();
            Information information = test.convert(result,Information.class);
            //System.out.println(information.Body);
            List<Pair<String, String>> out = extractor.query(information.Body);
            String reply = "";
            for(Pair<String, String> x : out) {
                //System.out.println(x);
                reply += x.second;
            }
            System.out.println(reply);
               String[] test = reply.split("\\.");
            System.out.println(test.length);
            System.out.println(test[0]);
                //reply = "hello world";
            Body body = new Body
                    .Builder(test[0])
                    .build();
            Message sms = new Message
                    .Builder()
                    .body(body)
                    .build();
            MessagingResponse twiml = new MessagingResponse
                    .Builder()
                    .message(sms)
                    .build();
            return twiml.toXml();

        });


    }
}
