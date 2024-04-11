import Button from "../../components/Button";

function User() {
    
  return (
    <main class="main bg-dark">
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <Button
            className="edit-button"
            title="Edit Name"
        />
      </div>
      <h2 class="sr-only">Accounts</h2>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Checking (x8349)</h3>
          <p class="account-amount">$2,082.79</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <Button
            className="transaction-button"
            title="View transactions"
          />
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Savings (x6712)</h3>
          <p class="account-amount">$10,928.42</p>
          <p class="account-amount-description">Available Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <Button
              className="transaction-button"
              title="View transactions"
          />
        </div>
      </section>
      <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
          <p class="account-amount">$184.30</p>
          <p class="account-amount-description">Current Balance</p>
        </div>
        <div class="account-content-wrapper cta">
          <Button
              className="transaction-button"
              title="View transactions"
          />
        </div>
      </section>
    </main>
  );
}

export default User;
