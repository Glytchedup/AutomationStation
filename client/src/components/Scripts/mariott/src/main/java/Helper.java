import com.codeborne.selenide.Configuration;
import com.codeborne.selenide.WebDriverRunner;
import java.awt.Toolkit;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.DataFlavor;
import java.awt.datatransfer.StringSelection;
import java.awt.datatransfer.UnsupportedFlavorException;
import java.awt.event.KeyEvent;
import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.sikuli.basics.Debug;
import org.sikuli.script.ImagePath;
import org.sikuli.script.Screen;
import org.testng.TestListenerAdapter;
import org.testng.TestNG;

public class Helper {
    
    public static void setConf() {
        Configuration.reportsFolder = "target/report";
        Configuration.savePageSource = false;
        Configuration.timeout = 30000;
        Configuration.pollingInterval = 250;
        Configuration.screenshots = false;
        
        Debug.setDebugLevel(2);
        ImagePath.setBundlePath("src/main/resources/Images");
        ImagePath.add("MariottScripts/Images");
    }    
    
    static Screen s = new Screen();
    
    public static void setFFBrowser() {
        System.setProperty("webdriver.firefox.bin", MariottScripts.ff_bin);
        
        FirefoxProfile myProfile = new FirefoxProfile();
        myProfile.setPreference("browser.download.dir", MariottScripts.path_save_tp);  
        myProfile.setPreference("browser.download.folderList", 2);
        myProfile.setPreference("browser.download.useDownloadDir", true);         
        myProfile.setPreference("browser.helperApps.neverAsk.saveToDisk", 
                "application/excel;application/vnd.ms-excel;application/x-excel;application/x-msexcel"); 
        
        myProfile.setPreference("browser.startup.homepage",  "about:blank");
        myProfile.setPreference("startup.homepage_welcome_url", "about:blank");
        myProfile.setPreference("startup.homepage_override_url", "about:blank");
        myProfile.setPreference("startup.homepage_welcome_url.additional", "about:blank");        
        myProfile.setPreference("browser.startup.homepage_override.mstone", "ignore");
        
        DesiredCapabilities capabilities = new DesiredCapabilities(DesiredCapabilities.firefox());
        capabilities.setCapability(FirefoxDriver.PROFILE, myProfile);
        capabilities.setCapability("marionette", false);     
        
        WebDriverRunner.setWebDriver(new FirefoxDriver(capabilities));
        WebDriverRunner.getWebDriver().manage().window().setSize(new Dimension(1280, 1024));
    }
    
    public static void wait_(long time) {
        try {
            Thread.sleep(time);
        } catch (InterruptedException ex) {
        }
    }    
    
    public static void runTestInClass(Class[] name) {
        TestListenerAdapter tla = new TestListenerAdapter();
        TestNG testng = new TestNG();
        testng.setOutputDirectory(System.getProperty("java.io.tmpdir") + "\\report");
        testng.setTestClasses(name);
        testng.addListener(tla);
        testng.run();
    }   
    
    public static void getConf(String path){
        Properties property = new Properties();
        
        try{
            property.load(new FileInputStream(path));
        } catch(IOException e) {}
        
 
        MariottScripts.base_url = property.getProperty("url");
        MariottScripts.ac_levels = property.getProperty("level");

        MariottScripts.login = property.getProperty("login");
        MariottScripts.pass = property.getProperty("pass");
        
        MariottScripts.ff_bin = property.getProperty("ff_bin");
        
        MariottScripts.path_to_save = property.getProperty("path_to_save");
        MariottScripts.ex_levels = property.getProperty("ex_level");
        
        MariottScripts.acс_levels = property.getProperty("calendar2_level");
        
        MariottScripts.property_codes = property.getProperty("letter_codes");
        MariottScripts.path_save_tp = property.getProperty("path_to_save_test_price");
    }    
    
    public static void addToClipboard(String text) {
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Clipboard clipboard = toolkit.getSystemClipboard();
        StringSelection strSel = new StringSelection(text);
        clipboard.setContents(strSel, null);
    }
    
    public static String getDataFromClipboard() {
        Clipboard clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
        String cl = "";
        try {
            cl = (String) clipboard.getData(DataFlavor.stringFlavor);
        } catch (UnsupportedFlavorException | IOException ee) { }

        return cl;
    }

    public static void paste(String text) {
        addToClipboard(text);
        
        s.keyDown(KeyEvent.VK_CONTROL);
        s.keyDown(KeyEvent.VK_V);
        wait_(250L);
        s.keyUp(KeyEvent.VK_V);
        s.keyUp(KeyEvent.VK_CONTROL);
        wait_(250L);
    }   
    
    public static void copy() {
        s.keyDown(KeyEvent.VK_CONTROL);
        s.keyDown(KeyEvent.VK_C);
        wait_(250L);
        s.keyUp(KeyEvent.VK_C);
        s.keyUp(KeyEvent.VK_CONTROL);
        wait_(250L);
    }   
    
    public static void pressEnter() {
        s.keyDown(KeyEvent.VK_ENTER);
        wait_(250L);
        s.keyUp(KeyEvent.VK_ENTER);
    }

    public static String getDateAndTime() {
        return getDateAndTime("MM.dd.yyyy H:mm");
    }

    public static String getDateAndTime(String format) {
        return getDateAndTime(format, Locale.getDefault());
    }    

    public static String getDateAndTime(String format, Locale locale) {
        Calendar cal = GregorianCalendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat(format, locale);
        return sdf.format(cal.getTime());
    }    
    
    public static String getDate(String format, int value, int amount) {
        return getDate(format, value, amount, Locale.getDefault());
    }    
    
    public static String getDate(String format, int value, int amount, Locale loc) {
        Calendar cal = GregorianCalendar.getInstance();
        cal.add(value, amount);
        SimpleDateFormat sdf = new SimpleDateFormat(format, loc);
        return sdf.format(cal.getTime());
    }    
    
    public static void killBrowser() throws Exception {
        try {
            Runtime.getRuntime().exec(new String[]{"cmd", "/c", "taskkill /f /fi \"imagename eq firefox.exe\" /fi \"username eq %USERNAME%\""});
            Runtime.getRuntime().exec(new String[]{"cmd", "/c", "taskkill /f /fi \"imagename eq WerFault*\" /fi \"username eq %USERNAME%\""});
        } catch (IOException ex) {
            throw new Exception("Can't kill process [firefox]");
        }
    }    
    
}