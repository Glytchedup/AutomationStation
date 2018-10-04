
import com.codeborne.selenide.Condition;
import com.codeborne.selenide.Selenide;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.$$;
import com.codeborne.selenide.SelenideElement;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.Calendar;
import org.openqa.selenium.By;


public class StepsHelper extends Helper {
    
    public static void setDateRangeEnd(String date_e) {
        System.out.println("setDateRangeEnd " + date_e); 
        $(".dijit.dijitReset.dijitInline.end-date.dijitDropDownButton").click();
        Helper.wait_(500L);
        
        clickOnDateInPopup(date_e);
    }

    public static void setDateRangeStart(String date_s) {
        System.out.println("setDateRangeStart " + date_s);
        $(".dijit.dijitReset.dijitInline.start-date.dijitDropDownButton").click();
        Helper.wait_(500L);
        
        clickOnDateInPopup(date_s);
    }

    public static void clickOnDateInPopup(String date_e) {
        for(SelenideElement dr1:$$(".dijitPopup.miosPopup.mios div.item")){
            if (dr1.text().contains(date_e)) {
                dr1.click();
                Helper.wait_(500L);
                break;
            }
        }
    }    

    public static void setDateInCalendar(int days) {
        $(".target-date-container .dijitReset.dijitInline.dijitArrowButtonInner").click();
        Helper.wait_(500L);
        
        String datet = Helper.getDate("MM/dd/yyyy", Calendar.DATE, days);
        System.out.println("\nSet " + datet);
        
        int num_c = getAllCalendars()-1;
        
        Selenide.executeJavaScript("dijit.byId('dijit_Calendar_"+num_c+"').set('value', new Date('"+datet+"'));");
        Helper.wait_(1000L);
    }

    public static void goToInventoryOptimization() {
        $(By.linkText("Home")).click();
        $(".PAGEHEAD").waitUntil(Condition.appear, 30000L);
        $(By.xpath("//a[contains(text(),'Recommendations')]")).click();
        $(By.xpath("//a[contains(text(),'Inventory Optimization')]")).click();
    }

    public static void continueWithUPDATEstatus() {
        if ($(".BGWhiteStyle a>b").isDisplayed()) {
            $(".BGWhiteStyle a>b").click();
            Helper.wait_(1000L);
            try{
                Selenide.switchTo().alert().accept();
            }catch(Exception e){}
            Helper.wait_(10000L);
        }
    }

    public static void setAccessLevel(String level) {
        $("#propertyCodeText").waitUntil(Condition.appear, 30000L);
        Helper.wait_(500L);
        $("#propertyCodeText").click();
        Helper.wait_(250L);
        $("#propertyCodeText").val(level);
        Helper.wait_(500L);
        $("#updatePrivilegeCheckBox").click();
        $("b>a").click();
        Helper.wait_(2000L);
    }    
    
    public static void logIn(String login, String password) {
        if ($("input[name='username']").isDisplayed()){
            $("input[name='username']").val(login);
            $("input[name='password']").val(password);
            $(".btn.btn-block").click();
        }
    }   
    
    public static int getAllCalendars(){
        int num = $$(".dijitCalendarContainer.dijitCalendar").size();
        return num;
    }    
    
    public static void continueOptimizationPublish(){
        $(By.xpath("//span[contains(text(),'Mini-Hotel Check')]")).click();

        $(By.xpath("//div[@class='mini-hotel-check']//span[contains(text(),'Continue Optimization')]"))
                .waitUntil(Condition.appear, 30000L).click();

        $(By.xpath("//span[contains(text(),'Update')]")).
                waitUntil(Condition.appear, 30000L).click();

        $(By.xpath("//span[contains(text(),'Publish')]")).
                waitUntil(Condition.appear, 30000L).click();

        $(".update-container.success.publish-complete").
                waitUntil(Condition.appear, 30000L);    
    }
    
    public static void goToTestPrice() {
        $(By.xpath("//label[contains(text(),'GPO Above Property')]"))
                .waitUntil(Condition.appear, 20000L).click();
        $("form div.submit a").click();
        $("div[class='box'] div.heading>a").click();
        $("div[class='marriottSubMenuBar'] >a:first-child").hover().click();
    }

    public static void setLengthOfStay(String ld) {
        $("#uniqName_25_0_lengthOfStay")
                .waitUntil(Condition.appear, 20000L).clear();
        $("#uniqName_25_0_lengthOfStay").sendKeys(ld);
    }

    public static void setPropertyCode(String code) {
        $("#dijit__WidgetsInTemplateMixin_1_propertyCode").val(code);
        Helper.wait_(750L);
        $$(".dijitPopup.dijitComboBoxMenuPopup")
                .filter(Condition.visible).first().hover().click();
        Helper.wait_(750L);
    }

    public static void selectDaysInCalendar(int[] days) {
        $("table.month td.available")
                .waitUntil(Condition.appear, 20000L);
        
        int fs = calcFirstSunday();
        
        $$("td.available").get(fs + days[0]).doubleClick();
        $$("td.available").get(fs + days[1]).doubleClick();
        $$("td.available").get(fs + days[2]).doubleClick();
        $$("td.available").get(fs + days[3]).doubleClick();
        $$("td.available").get(fs + days[4]).doubleClick();
        
        Helper.wait_(1000L);
    }

    private static int calcFirstSunday() throws NumberFormatException {
        SelenideElement calendar = $$("table.month").get(0);
        
        int sunday_n = new Integer(calendar
                .$$("td.available:nth-child(1)").get(0).text());
        
        if ($$("td.available:nth-child(1)").size()>2){
            sunday_n = new Integer(calendar
                    .$$("td.available:nth-child(1)").get(1).text());
        }
        
        int nn = 0;
        for (SelenideElement day:$$("td.available")){
            if (day.getText().equals("" + sunday_n)) break;
            nn++;
        }
        
        return nn;
    }

    public static void setRooms(String rv) {
        for(SelenideElement room:$$("input[name='rooms']")){
            room.clear();
            room.sendKeys(rv);
        }
        Helper.wait_(1000L);
    }

    public static void getRecommendation() {
        $("div[data-dojo-attach-point]> button.getRecommendation").click();
        Helper.wait_(4000L);
        
        for(SelenideElement status:$$("td.field-status"))
            status.waitUntil(Condition.text("Completed"), 30000L);
        Helper.wait_(1000L);
    }

    public static void compareQuotes() {
        for(int i=0;i<=2;i++)
            $$("td.column-select input").get(i).setSelected(true);
        Helper.wait_(1000L);
        
        $(By.xpath("//span/span[contains(text(),'Compare Quotes')]")).click();
        Helper.wait_(2000L);
    }

    public static void exportFileAndWait() throws IOException {
        long before = Files.list(new File(MariottScripts.path_save_tp).toPath()).count();
        System.out.println("Before files in folder - " + before);
        
        $(By.xpath("//span/span[contains(text(),'Export')]")).click();
        Helper.wait_(2000L);
        
        while ( Files.list(new File(MariottScripts.path_save_tp).toPath()).count() > (before+1) ) {
            System.out.println("Wait while downloading file " 
                    + Files.list(new File(MariottScripts.path_save_tp).toPath()).count());
            Helper.wait_(1000L);
        }
        
        Helper.wait_(1000L);
    }    

    public static void renameFile() throws IOException {
        Files.move(new File(MariottScripts.path_save_tp + "\\CompareQuotes_FATCH_FATCH_FATCH_XLS_.xls").toPath(),
                new File(MariottScripts.path_save_tp + "\\CompareQuotes_FATCH_FATCH_FATCH_XLS_" + MariottScripts.property_code + ".xls").toPath(), 
                StandardCopyOption.REPLACE_EXISTING);
    }    
}