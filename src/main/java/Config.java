import java.util.HashMap;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Config {
    public static HashMap<String, String> configs;
    public static void init(String configFilePath) throws FileNotFoundException {
        configs = new HashMap<String, String>();
        Scanner sc = new Scanner(new File(configFilePath));
        while(sc.hasNextLine()) {
            String[] conf = sc.nextLine().split(":");
            if(conf.length != 2) continue;
            configs.put(conf[0].trim(), conf[1].trim());
        }
    }
    public static String get(String key) {
        return configs.get(key);
    }
}