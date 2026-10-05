# VWO Application - Login & Authentication Module Master Test Plan

---

## 1. Test Plan ID and Title

- **Test Plan ID**: `TP-VWO-AUTH-2026-V1.0`
- **Document Title**: Master Test Plan for VWO (Visual Website Optimizer) SaaS Application - Login & Authentication Subsystem
- **Application URL**: `https://app.vwo.com/#/login`
- **Version**: `1.0.0`
- **Status**: `Approved / Ready for Test Execution`
- **Author**: Senior QA Lead / Test Automation Architect
- **Target Platform**: VWO SaaS Platform (Web / Cloud)

---

## 2. Objective and References

### 2.1 Objective
The purpose of this Test Plan is to provide a structured quality assurance roadmap and verification strategy for the **VWO (Visual Website Optimizer) Authentication and Access Control Subsystem** accessible at `https://app.vwo.com/#/login`. 

This plan ensures:
- Robust verification of valid user logins, authentication tokens, and workspace redirection.
- Comprehensive negative and boundary testing (invalid credentials, format errors, rate-limiting, and error messaging).
- Verification of auxiliary authentication pathways (Single Sign-On / SSO, Remember Me, Forgot Password, and Free Trial registration links).
- Implementation readiness for automated end-to-end regression suites using **Playwright (TypeScript)**.

### 2.2 References & Input Documents
- **VWO-SRS-AUTH-2026**: VWO Authentication Subsystem Specification
- **VWO-UI-MOCK-104**: VWO Web Client UX / Design System Guidelines
- **OWASP-ASVS-4.0**: OWASP Application Security Verification Standard (Authentication & Session Management)
- **IEEE 829-2008**: Standard for Software and System Test Documentation

---

## 3. In Scope and Out of Scope

### 3.1 In Scope
- **Positive Authentication Journeys**:
  - Valid business email and password submission.
  - Multi-tenant workspace redirection upon successful handshake.
  - "Remember Me" credential persistence.
- **Negative & Boundary Scenarios**:
  - Invalid / mismatched password with valid email.
  - Non-existent / unregistered email addresses.
  - Blank and whitespace-only field submissions.
  - Malformed email address formats (e.g. `user@`, `user@domain`, `@domain.com`).
  - Special character and maximum length input bounds.
- **Auxiliary Auth Workflows**:
  - "Log in using SSO" navigation and identity provider initiation.
  - "Forgot password?" recovery email initiation.
  - "Start a free trial" hyperlink routing to registration onboarding.
- **Cross-Browser & Device Rendering**:
  - Chromium (Google Chrome / MS Edge), Firefox, and WebKit (Safari).
  - Standard desktop (1920x1080, 1366x768) and responsive viewport layouts.
- **Automated Regression**:
  - Playwright Test Runner (TypeScript) with Page Object Model (POM).

### 3.2 Out of Scope
- Internal backend algorithm verification of A/B testing campaign experiments.
- Third-party Identity Provider (IdP) internal server logs (Okta, Azure AD, PingIdentity).
- High-volume DDoS simulation and infrastructure penetration testing.
- Non-web mobile native app testing (focus is solely on the web client interface).

---

## 4. Requirements and Planned Coverage

### 4.1 Requirement Traceability & Coverage Matrix

| Local Req ID | Requirement Description | Planned Test Level | Scenario Type | Test Approach | Target Automation Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **REQ-VWO-01** | Registered user can sign in using valid business email and password, redirecting to the VWO dashboard (`/#/dashboard`). | System / E2E | Positive Functional | Automated (Playwright) + Manual | Automated |
| **REQ-VWO-02** | System renders inline / toast notification `"Your email, password, IP address or location did not match"` when invalid credentials are provided. | UI / Component | Negative Functional | Automated (Playwright) + Manual | Automated |
| **REQ-VWO-03** | Submitting with empty email or empty password displays HTML5/DOM field-level validation cues without making an unnecessary backend network call. | UI / Client | Validation / Boundary | Automated (Playwright) | Automated |
| **REQ-VWO-04** | Invalid email format (missing `@` or domain) triggers immediate client-side validation error. | UI / Client | Boundary / Format | Automated (Playwright) | Automated |
| **REQ-VWO-05** | Selecting "Remember Me" checkbox persists email address in browser storage for subsequent sessions. | System / State | Functional State | Manual + Automated | Automated |
| **REQ-VWO-06** | Clicking "Log in using SSO" navigates to the Single Sign-On organizational domain input view. | Functional Flow | Navigation / SSO | Automated (Playwright) | Automated |
| **REQ-VWO-07** | Clicking "Forgot password?" redirects user to `/#/forgot-password` flow. | Functional Flow | Navigation / Recovery | Automated (Playwright) | Automated |
| **REQ-VWO-08** | Clicking "Start a free trial" redirects to the onboarding / registration landing page. | Functional Flow | Lead Conversion | Automated (Playwright) | Automated |
| **REQ-VWO-09** | Rate limiting / CAPTCHA challenge triggers after successive failed attempts to safeguard against brute-force attacks. | Security | Security / Policy | Manual / Scripted | Manual |

---

## 5. Test Approach, Levels, and Types

```
  ┌─────────────────────────────────────────────────────────────┐
  │                 End-to-End User Journeys                    │
  │     (Login -> Dashboard Redirection -> Workspace Switch)     │
  ├─────────────────────────────────────────────────────────────┤
  │             System & Negative Functional Testing            │
  │     (Invalid Logins, Error Notifications, SSO Handshake)    │
  ├─────────────────────────────────────────────────────────────┤
  │              UI Component & Locator Validation              │
  │   (Field Validations, XPath/CSS Locators, Accessibility)    │
  └─────────────────────────────────────────────────────────────┘
```

### 5.1 Test Levels
1. **Component / UI Level**: Validation of email input (`#login-username`), password input (`#login-password`), remember checkbox (`#checkbox-remember`), and submit CTA (`#js-login-btn`).
2. **System / Functional Level**: Complete authentication workflows, error banner appearances, session storage creation, and token acquisition.
3. **Integration / E2E Level**: Seamless transition from unauthenticated state (`/#/login`) to the authenticated VWO App dashboard (`/#/dashboard`).

### 5.2 Test Types & Strategies
- **Automated Regression Suite**: Playwright TypeScript test runner with isolated browser contexts, auto-waiting, and trace recording.
- **Cross-Browser Testing**: Execution across Chromium, Firefox, and WebKit engines using Playwright matrix configurations.
- **Visual & Form Validation**: Visual regression and form validation state checks on modern viewports.

---

## 6. Environment, Tools, Access, and Test Data

### 6.1 Environments & Target Endpoints

| Environment | Endpoint URL | Purpose |
| :--- | :--- | :--- |
| **QA / Staging** | `https://stage-app.vwo.com/#/login` (or test sandbox) | Active development, automation execution, regression |
| **Production / Reference** | `https://app.vwo.com/#/login` | Production smoke testing, sanity verification |

### 6.2 Tooling Stack

| Category | Tool / Framework | Version |
| :--- | :--- | :--- |
| **Test Automation** | Playwright (`@playwright/test`) | `^1.48.0` |
| **Language & Runtime** | TypeScript / Node.js | TypeScript 5.x / Node 20 LTS |
| **Assertion Library** | Playwright built-in expect (`expect(locator)...`) | Built-in |
| **Reporting** | Playwright HTML Reporter / Allure Report | Latest |
| **CI/CD** | GitHub Actions / GitLab CI | Linux & Windows runners |

### 6.3 Test Data Strategy

> [!IMPORTANT]
> Test credentials must be supplied via environment variables (`VWO_TEST_USERNAME`, `VWO_TEST_PASSWORD`) or GitHub Actions Secrets. No plain-text passwords should reside in code files.

- **Standard VWO Test User**: `qa.automation.user@vwo-sample.com` (Verified active account).
- **Admin VWO User**: `admin.user@vwo-sample.com` (Multi-workspace administrator).
- **Invalid Test Matrix**:
  - Mismatched password: `CorrectEmail@domain.com` + `WrongPassword!@#`
  - Unregistered email: `nonexistent_user_2026@vwo-test.com` + `ValidPass123`
  - Format anomalies: `plainaddress`, `#@%^%#$@#$@#.com`, `@missingusername.com`
  - SQLi / XSS probes: `' OR '1'='1`, `<script>alert(1)</script>` (Ensuring strict escaping).

---

## 7. Entry and Exit Criteria

### 7.1 Entry Criteria
- Target test environment (`app.vwo.com` or staging mirror) is accessible and returning HTTP 200.
- Playwright automation framework and node dependencies are installed and passing health checks.
- Test user accounts are provisioned with active subscriptions/trials.
- Test Plan is reviewed and approved by stakeholders.

### 7.2 Exit Criteria
- **100% of P0/P1 test scenarios executed** with a minimum **98% overall pass rate**.
- **0 Blocker or Critical defects** in open status.
- All high-severity defects resolved or formally waived by Product Management.
- Playwright automated regression run completes with full test artifacts (HTML report, traces, screenshots on failure).
- Formal Test Summary Report compiled and approved by QA Lead.

---

## 8. Roles, Responsibilities, Estimates, and Schedule

### 8.1 Roles and Responsibilities

| Role | Name / Team | Core Responsibility |
| :--- | :--- | :--- |
| **QA Lead** | Senior QA Lead | Overall test strategy, planning, risk mitigation, sign-off |
| **Automation Engineer** | QA Automation Team | Playwright POM development, test script authoring, CI pipeline maintenance |
| **Fullstack Engineer** | VWO Auth Dev Team | Bug triage, defect resolution, DOM stability support |
| **Product Manager** | VWO Platform PM | Requirement sign-off, priority escalation, release authorization |

### 8.2 Execution Schedule & Milestones

```
Week 1: [Day 1-2: Plan Approval] ──> [Day 3-5: Playwright POM & Test Script Creation]
Week 2: [Day 6-8: Test Execution & Bug Logging] ──> [Day 9-10: Regression & Final Sign-Off]
```

---

## 9. Defect Management and Reporting

### 9.1 Severity Classification & SLA

| Severity | Description | Target Resolution SLA |
| :--- | :--- | :--- |
| **P0 - Blocker** | Login service completely down; users unable to access accounts; authentication crash. | < 4 Hours |
| **P1 - Critical** | Specific user roles cannot log in; SSO failure; Remember Me crashes session. | < 24 Hours |
| **P2 - Major** | Incorrect error text rendered; responsive UI overlap on specific viewport. | Within Sprint |
| **P3 - Minor** | Minor cosmetic styling or alignment variance on non-critical buttons. | Backlog |

### 9.2 Defect Workflow
`Detected in Run` -> `Logged in Jira with Playwright Trace & Video` -> `Dev Assigned` -> `Fix Deployed` -> `Automated Retest` -> `Closed`

---

## 10. Risks, Dependencies, Assumptions, and Open Questions

### 10.1 Risks & Mitigation Plan

| Risk | Probability | Impact | Mitigation Strategy |
| :--- | :--- | :--- | :--- |
| **Bot Detection / CAPTCHA triggers on CI runs** | Medium | High | Whitelist CI runner IP ranges or use internal test account bypass headers. |
| **Dynamic DOM attribute updates in single-page app** | Medium | Medium | Use resilient data-qa / role locators and auto-waiting assertions in Playwright. |
| **External IdP SSO downtime during test runs** | Low | High | Mock SSO provider callbacks in staging for isolated automated tests. |

### 10.2 Assumptions & Open Questions
- **Assumption 1**: The VWO Single Page Application (SPA) relies on client-side routing (`/#/login`, `/#/dashboard`).
- **Assumption 2**: Password field enforces TLS encryption on payload transmission.
- **Open Question**: Will SSO redirection require multi-factor authenticator (MFA) tokens during automated nightly regression runs?
  - *Proposed Working Resolution*: Dedicate specific non-MFA automated test users for nightly CI runs.

---

## 11. Suspension and Resumption Criteria

### 11.1 Suspension Criteria
- Login endpoint unavailable (HTTP 502/503/504) for > 1 hour.
- Test accounts locked out in bulk due to security rule misconfiguration.
- Fatal regression in core build blocking all form submissions.

### 11.2 Resumption Criteria
- Environment restored with stable response times (< 2 seconds).
- Test accounts unlocked and credentials re-verified.
- Successful smoke run of `REQ-VWO-01` on new build.

---

## 12. Test Deliverables and Approval

### 12.1 Test Deliverables
1. **Master Test Plan**: `VWO_Login_Master_Test_Plan.md` (This document)
2. **Playwright Automation Suite**: Page Objects (`VwoLoginPage.ts`), Test Specs (`vwo-login.spec.ts`), Config (`playwright.config.ts`)
3. **Playwright HTML Test Report & Traces**: Stored in CI execution artifacts
4. **Final QA Test Sign-Off Report**: Executive summary and release recommendation

### 12.2 Sign-off and Approvals

| Stakeholder Role | Name | Status | Date |
| :--- | :--- | :--- | :--- |
| **Senior QA Lead** | QA Architecture Lead | Approved | 2026-10-04 |
| **Engineering Manager** | Dev Team Lead | Pending Review | - |
| **Product Director** | VWO Product Lead | Pending Review | - |
