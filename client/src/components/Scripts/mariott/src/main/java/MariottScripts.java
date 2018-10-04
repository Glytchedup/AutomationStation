
import com.codeborne.selenide.Selenide;
import java.io.IOException;

public class MariottScripts extends StepsHelper {
    
    public static String base_url = "";
    public static String ac_levels = "";
    public static String ac_level = "";
    public static String acс_levels = "";
    public static String acс_level = "";
    public static String ex_levels = "";
    public static String ex_level = "";
    public static String login = "";
    public static String pass = "";
    public static String ff_bin = "";
    public static String path_to_save = "";
    
    public static String property_codes = "";
    public static String property_code = "";
    public static String path_save_tp = "";

    static {
        System.out.println(System.getProperty("java.io.tmpdir") + "\\report");
        getConf("config.txt");
        setConf();
        setFFBrowser();
    }
    
    public static void main(String args[]) throws IOException, Exception {
        //String[] args1 = {"testprice"};
        
        switch (args[0]) {
            case "calendar":
                for (String ll : ac_levels.split(",")) {
                    ac_level = ll;
                    runTestInClass(new Class[]{StepsCalendar.class});
                }
                break;
                
            case "extract":
                for (String ll : ex_levels.split(",")) {
                    ex_level = ll;
                    runTestInClass(new Class[]{StepsExtract.class});
                }
                
                break;
                
            case "calendar2":
                for (String ll : acс_levels.split(",")) {
                    acс_level = ll;
                    runTestInClass(new Class[]{StepsCalendarv2.class});
                }
                break;
                
            case "testprice":
                for (String ll : property_codes.split(",")) {
                    property_code = ll;
                    runTestInClass(new Class[]{StepsTestPrice.class});
                }                
                break;                
        }
       
        Selenide.close();
        //Helper.killBrowser();
    }  
}