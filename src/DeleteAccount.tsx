import { LegalPage, Section, PRIVACY_EMAIL } from "@/components/legal";

export default function DeleteAccount() {
  return (
    <LegalPage
      title="Delete your Leira account"
      updated="9 November 2026"
      intro="You can delete your Leira account and the personal data in it at any time. This page explains how, and what happens to your data."
    >
      <Section title="Delete it in the app">
        <ol>
          <li>Open the Leira app and sign in.</li>
          <li>Go to the Profile tab and find the Privacy section.</li>
          <li>Tap Delete account.</li>
          <li>Enter your password. If you use two-factor authentication, also enter the 6-digit code we email you.</li>
          <li>Confirm. You are signed out on every device.</li>
        </ol>
      </Section>

      <Section title="Can&apos;t use the app?">
        <p>
          If you no longer have the app or cannot sign in, email us from the address registered to your account at{" "}
          <a href={`mailto:${PRIVACY_EMAIL}?subject=Delete%20my%20Leira%20account`}>{PRIVACY_EMAIL}</a> with the
          subject &quot;Delete my Leira account&quot;. We may ask you to confirm your identity before we act, and we
          will reply within 30 days.
        </p>
      </Section>

      <Section title="What happens next">
        <ul>
          <li>
            <strong>30-day grace period:</strong> your account is scheduled for deletion. If you change your mind, sign
            in again before the date and the deletion is cancelled.
          </li>
          <li>
            <strong>Permanent deletion:</strong> after 30 days your account and personal data are erased. This cannot be
            undone.
          </li>
        </ul>
      </Section>

      <Section title="What is deleted">
        <ul>
          <li>Your profile, sign-in credentials and settings</li>
          <li>Health readings, heart scores, ECG and sleep data, and data synced from wearables</li>
          <li>Medications, medical records and files you uploaded, and voice notes</li>
          <li>Chat conversations with Leira AI</li>
          <li>Emergency contacts, family and care-team links, and support tickets</li>
          <li>Push notification tokens and device sessions</li>
        </ul>
        <p>
          We may keep limited information where the law requires it, for example security and audit records, until the
          legal retention period ends. Backups are overwritten on their normal rotation.
        </p>
      </Section>

      <Section title="Before you delete">
        <p>
          You can download a copy of your data first with Export my data in the same Privacy section. To delete only
          some of your data and keep your account, see <a href="/data-deletion">Delete your data</a>.
        </p>
      </Section>
    </LegalPage>
  );
}
