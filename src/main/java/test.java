import com.google.gson.Gson;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.LinkedHashMap;
import java.util.Map;

public class test {
    private static final Gson GSON = new Gson();

    public static <T> T convert(String urlencoded, Class<T> type){
        try {
            Map<String, Object> map = asMap(urlencoded);
            String json = GSON.toJson(map);
            return GSON.fromJson(json, type);
        }catch (Exception e){
            e.printStackTrace();
            return null;
        }
    }

    private static Map<String, Object> asMap(String urlencoded) throws UnsupportedEncodingException{
        return asMap(urlencoded, "UTF-8");
    }

    private static Map<String, Object> asMap(String urlencoded, String encoding) throws UnsupportedEncodingException {
        Map<String, Object> map = new LinkedHashMap<>();

        for (String KeyValue : urlencoded.trim().split("&")){
            String[] tokens = KeyValue.trim().split("=");
          //  System.out.println(tokens);
            String key = tokens[0];
            String value = tokens.length == 1 ? null : URLDecoder.decode(tokens[1], encoding);

            String[] keys = key.split("\\.");
            Map<String, Object> pointer = map;

            for(int i = 0; i < keys.length - 1; i ++){
                String currentKey = keys[i];
                Map<String, Object> nested = (Map<String, Object>) pointer.get(keys[i]);

                if (nested == null){
                    nested = new LinkedHashMap<>();
                }

                pointer.put(currentKey,nested);
                pointer = nested;
            }
            pointer.put(keys[keys.length - 1], value);
        }
       // System.out.println(map);
        return map;
    }
}
