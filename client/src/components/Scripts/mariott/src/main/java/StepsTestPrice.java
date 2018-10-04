
import com.codeborne.selenide.Selenide;
import static com.codeborne.selenide.Selenide.$;
import java.io.IOException;
import org.sikuli.script.FindFailed;
import org.testng.annotations.*;

public class StepsTestPrice extends StepsHelper{
    
    @Test
    public static void test1() throws FindFailed, IOException {
        Selenide.open(MariottScripts.base_url 
                + "/oystotalyield/pricingclient/tyPricingClientContainerContent/displayTYPricingClientContainer" );
        
        logIn(MariottScripts.login, MariottScripts.pass);
        
        goToTestPrice();
        
        setLengthOfStay("2");
        
        $("#dijit_form_Form_1 button").click();
        
        setPropertyCode(MariottScripts.property_code);
        
        $("#dijit_form_Form_2 button").hover().click();
        
        selectDaysInCalendar(new int[]{0, 2, 5, 7, 9});
        
        setRooms("20");
        
        getRecommendation();
        
        compareQuotes();
        
        exportFileAndWait();
        
        //renameFile();
    }
}