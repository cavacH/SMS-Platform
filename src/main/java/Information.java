public class Information {
    String ToCountry;
    String ToState;
    String SmsMessageSid;
    String NumMedia;
    String ToCity;
    String FromZip;
    String SmsSid;
    String FromState;
    String SmsStatus;
    String FromCity;
    String Body;
    String FromCountry;
    String To;
    String ToZip;
    String NumSegments;
    String MessageSid;
    String AccountSid;
    String From;
    String ApiVersion;

    public String toString(){
        return "Info{" +
                "\n phoneNumber=" + From +
                "\n message=" + Body +
                '}';
    }
}
