
import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import static com.codeborne.selenide.Selenide.$;
import org.openqa.selenium.By;
import org.sikuli.script.FindFailed;
import org.testng.annotations.*;

public class StepsCalendarv2 extends StepsHelper{
    
    @Test
    public static void test1() throws FindFailed {
        Selenide.open(MariottScripts.base_url + "/oys/ym/oy/OysController/signIn" );
        
        logIn(MariottScripts.login, MariottScripts.pass);
        
        setAccessLevel(MariottScripts.acс_level);

        continueWithUPDATEstatus();
        
        $(By.linkText("ADVisor")).click();
        
        $("#dijit__TemplatedMixin_4 > div.label")
                .waitUntil(Condition.appear, 30000L).click();   

        int day=7;
        
        setDateInCalendar(+day);
        
        continueOptimizationPublish();
    }
}