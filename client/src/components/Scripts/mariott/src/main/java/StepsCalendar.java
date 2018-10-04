
import com.codeborne.selenide.Selenide;
import org.sikuli.script.FindFailed;
import org.testng.annotations.*;

public class StepsCalendar extends StepsHelper{
    
    @Test
    public static void test1() throws FindFailed {
        Selenide.open(MariottScripts.base_url + "/oys/ym/oy/OysController/signIn" );
        
        logIn(MariottScripts.login, MariottScripts.pass);
        
        setAccessLevel(MariottScripts.ac_level);

        continueWithUPDATEstatus();
        
        goToInventoryOptimization();

        int day=7;
        
        setDateInCalendar(+day);
        
        //setDateRangeStart(Helper.getDate("dd MMM yyyy", Calendar.DATE, +6));
        
        //setDateRangeEnd(Helper.getDate("dd MMM yyyy", Calendar.DATE, +19));
        
        continueOptimizationPublish();
    }
}