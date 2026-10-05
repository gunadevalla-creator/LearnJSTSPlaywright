package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.annotations.Test;

import java.time.Duration;

public class ValidLoginTest extends BaseTest {

    @Test(priority = 1, description = "Verify successful submission with valid credentials and remember me option")
    public void testValidLoginSubmission() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageLoaded(), "Login page failed to load properly");

            loginPage.loginWithRememberMe("standard_enterprise_user@salesforce.com", "SecurePassword123!");

            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
            boolean redirectedOrChallenged = wait.until(d -> !d.getCurrentUrl().equals(baseUrl) || d.getTitle().contains("Salesforce") || d.getCurrentUrl().contains("lightning") || d.getCurrentUrl().contains("setup"));
            Assert.assertTrue(redirectedOrChallenged, "Login navigation failed after submitting credentials");
        } catch (Exception e) {
            Assert.fail("Valid login test encountered an unexpected exception: " + e.getMessage(), e);
        }
    }
}
