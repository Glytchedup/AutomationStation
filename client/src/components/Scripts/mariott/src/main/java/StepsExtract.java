
import com.codeborne.selenide.Selenide;
import com.codeborne.selenide.WebDriverRunner;
import org.openqa.selenium.Dimension;
import org.sikuli.script.FindFailed;
import org.testng.annotations.*;

public class StepsExtract extends StepsHelper{
    
    @Test
    public static void extractFile() throws FindFailed, Exception {
        WebDriverRunner.getWebDriver().manage().window().setSize(new Dimension(1280, 1024));
        
        Selenide.open(MariottScripts.base_url + "/oys/ym/oy/OysController/signIn");

        logIn(MariottScripts.login, MariottScripts.pass);

        setAccessLevel(MariottScripts.ex_level);

        continueWithUPDATEstatus();

        Selenide.open(MariottScripts.base_url + "/oys/ym/oy/OysController/projections/transientProjection");
        
        Helper.s.wait("activate_java.png", 900).click();
        Helper.s.wait("allow_now.png", 900).find("allow_now_2.png").click();
        
        Helper.s.wait("table.png", 900);

        Helper.s.find("Extract.png").find("Extract_2.png").click();

        Helper.s.wait("save_dialog.png", 900);

        Helper.copy();

        String file_name = Helper.getDataFromClipboard();

        System.out.println("\n\nfile name " + file_name+ "\n");
        
        Helper.paste(MariottScripts.path_to_save + "\\" + file_name);
        
        Helper.pressEnter();
        
        Helper.s.wait("export_finish.png", 900).find("export_finish_ok.png").click();
        
        Selenide.close();
        
        Helper.killBrowser();
    }
}