package com.learning.cukes;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriver;
import org.openqa.selenium.phantomjs.PhantomJSDriverService;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.gargoylesoftware.htmlunit.BrowserVersion;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.EdgeDriverManager;
import io.github.bonigarcia.wdm.InternetExplorerDriverManager;
import net.anthavio.phanbedder.Phanbedder;

public class BasePage {

	protected WebDriver driver;

	public BasePage(WebDriver driver) {
		this.driver = driver;
	}

	public BasePage openBrowser(String browserType) {
		try {
			if (browserType.equalsIgnoreCase("firefox")) {
				driver = new FirefoxDriver();
			} else if (browserType.equalsIgnoreCase("Chrome")) {
				ChromeDriverManager.getInstance().setup();
				driver = new ChromeDriver();
			} else if (browserType.equalsIgnoreCase("phantomjs")) {
				File phantomjs = Phanbedder.unpack();
				DesiredCapabilities caps = new DesiredCapabilities();
				caps.setCapability(PhantomJSDriverService.PHANTOMJS_EXECUTABLE_PATH_PROPERTY,
						phantomjs.getAbsolutePath());
				driver = new PhantomJSDriver(caps);
			} else if (browserType.equalsIgnoreCase("Edge")) {
				System.setProperty("webdriver.edge.driver",
						"C:\\Program Files (x86)\\Microsoft Web Driver\\MicrosoftWebDriver.exe");
				driver = new EdgeDriver();
			} else if (browserType.equalsIgnoreCase("IE")) {
				InternetExplorerDriverManager.getInstance().setup();
				driver = new InternetExplorerDriver();
			}
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		} catch (Throwable e) {
			System.out.println(e.getMessage());
		}
		return new BasePage(driver);
	}

	public void closeBrowser() throws IOException {
		try {
			driver.quit();
		} catch (Throwable e) {
			System.out.println(e.getMessage());
		}
	}
}
