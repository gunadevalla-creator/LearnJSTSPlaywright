package com.salesforce.tests;

import com.salesforce.base.BaseTest;
import com.salesforce.pages.LoginPage;
import org.testng.Assert;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {

    @Test(priority = 1, description = "Verify error message appears when submitting invalid credentials")
    public void testInvalidLoginErrorMessage() {
        try {
            LoginPage loginPage = new LoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageLoaded(), "Login page was not loaded successfully");

            loginPage.login("invalid_user@testdomain.com", "InvalidPassword999#");

            Assert.assertTrue(loginPage.isErrorMessageDisplayed(), "Error message was not displayed for invalid login");
            String actualError = loginPage.getErrorMessage();
            Assert.assertTrue(actualError.contains("Please check your username and password") || actualError.contains("check your username"), "Error message text does not match expected pattern");
        } catch (Exception e) {
            Assert.fail("Invalid login test encountered an unexpected exception: " + e.getMessage(), e);
        }
    }
}
