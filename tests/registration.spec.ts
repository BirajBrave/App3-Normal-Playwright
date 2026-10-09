import{test, expect} from '@playwright/test';
test("User Registration Sucessifully", async({page})=>{
    await page.goto("https://qaplayground.com/");

    await page.getByRole("link", {name: "Log in / Sign up"}).click();

    await expect(page).toHaveURL("https://qaplayground.com/auth/sign-in");

    await expect(page.getByText("Welcome back")).toBeVisible();

    await page.locator('[data-testid="sign-up-link"]').click();

    await expect(page).toHaveURL("https://qaplayground.com/auth/sign-up");

    await expect(page.getByText("Create your account")).toBeVisible();

    const fullName = page.getByPlaceholder("Jane Smith");
    const email = page.getByPlaceholder("you@example.com");
    const password = page.getByPlaceholder("At least 8 characters");

    await fullName.fill("Mona Rout");
    await email.fill("bravebiraj@yahoo.com");
    await password.fill("mona1234");

    await page.getByRole("button", {name: "Create account"}).click();

    await expect(page).toHaveURL("https://qaplayground.com/auth/sign-up");
    await expect(page.getByText("Check your email")).toBeVisible();
    await expect(page.getByText("We sent a verification link to bravebiraj@yahoo.com. Click it to activate your account — the link expires in 24 hours.")).toBeVisible();
    

})