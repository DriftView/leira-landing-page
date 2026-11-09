import { LegalPage, Section, PRIVACY_EMAIL } from "@/components/legal";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="9 November 2026"
      intro={
        <>
          Leira Health (&quot;Leira&quot;, &quot;we&quot;, &quot;us&quot;) makes a heart-health companion app. This
          policy explains what information we collect, how we use it, who we share it with, and the choices you have.
          Health information is sensitive, so we collect only what the app needs and never sell it.
        </>
      }
    >
        <Section title="Information we collect">
          <ul>
            <li>
              <strong>Account details:</strong> name, email address, phone number, date of birth, password (stored only
              as a hash) and your profile and onboarding answers.
            </li>
            <li>
              <strong>Health information you provide or connect:</strong> blood pressure, heart rate, heart score, ECG,
              sleep, activity, symptoms, medications, medical records you upload, and emergency assessments.
            </li>
            <li>
              <strong>Wearable and health-platform data:</strong> if you choose to connect Apple Health, Health Connect,
              Fitbit or Google Health, we read the data types you approve. You can disconnect at any time.
            </li>
            <li>
              <strong>Chat and voice:</strong> messages you send to the Leira AI assistant and voice notes you record,
              along with the transcripts.
            </li>
            <li>
              <strong>People you add:</strong> emergency contacts, family members and care-team members you invite,
              including their name and phone number or email.
            </li>
            <li>
              <strong>Device and usage data:</strong> device type, operating system, app version, push notification
              token, IP address, and sign-in and session records used to keep your account secure.
            </li>
          </ul>
        </Section>

        <Section title="How we use it">
          <ul>
            <li>To provide the app: show your readings, heart score, summaries, tips and reminders.</li>
            <li>To power Leira AI chat and personalised wellness guidance.</li>
            <li>To send alerts, such as to your emergency contacts or care team when you ask us to.</li>
            <li>To send verification codes, notifications and service emails.</li>
            <li>To secure accounts, prevent abuse, fix bugs and improve the product.</li>
            <li>To handle support requests and meet legal obligations.</li>
          </ul>
          <p>
            Leira provides wellness guidance only. It is not a medical device and does not replace professional medical
            advice, diagnosis or treatment. In an emergency, call your local emergency number.
          </p>
        </Section>

        <Section title="Who we share it with">
          <p>We do not sell your personal information. We share it only as follows:</p>
          <ul>
            <li>
              <strong>People you choose:</strong> family, emergency contacts and clinicians you connect with can see the
              information you allow them to see. You control these links and can remove them.
            </li>
            <li>
              <strong>Service providers</strong> that process data for us under confidentiality obligations: cloud
              hosting and database providers; Anthropic (AI chat responses); Groq (voice-note transcription); Twilio
              (SMS); an email delivery provider; Expo (push notifications); Cloudinary (file and image storage); and the
              wearable providers you connect (Apple, Google, Fitbit).
            </li>
            <li>
              <strong>Legal and safety:</strong> where required by law, or to protect someone&apos;s life or safety.
            </li>
            <li>
              <strong>Business transfers:</strong> if Leira is involved in a merger or acquisition, your information may
              transfer subject to this policy.
            </li>
          </ul>
        </Section>

        <Section title="Retention and your choices">
          <ul>
            <li>
              <strong>Access and export:</strong> you can request a copy of your data from within the app.
            </li>
            <li>
              <strong>Delete your account:</strong> request deletion in the app. Your account is permanently deleted
              after a 30-day grace period, during which signing in again cancels it. After that your personal data is
              erased from our systems, except what we must keep by law. See{" "}
              <a href="/delete-account">how to delete your account</a> and{" "}
              <a href="/data-deletion">how to delete specific data</a>.
            </li>
            <li>
              <strong>Permissions:</strong> you can revoke health, contacts, notification, microphone and biometric
              permissions in your device settings, and disconnect wearables in the app.
            </li>
            <li>
              <strong>Correction:</strong> you can edit your profile and health entries in the app.
            </li>
          </ul>
          <p>
            Depending on where you live (for example the EEA, UK or California) you may have additional rights to
            access, correct, delete, restrict or object to processing, and to withdraw consent. Contact us at{" "}
            <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> to exercise them.
          </p>
        </Section>

        <Section title="Security">
          <p>
            We use encryption in transit, hashed passwords, encrypted storage of wearable access tokens, optional
            two-factor authentication, and per-device session controls. No system is perfectly secure, so please use a
            strong, unique password.
          </p>
        </Section>

        <Section title="Children">
          <p>
            Leira is not intended for children under 13 (or the minimum age in your country). We do not knowingly
            collect their information. If you believe a child has given us data, contact us and we will delete it.
          </p>
        </Section>

        <Section title="International transfers">
          <p>
            Our providers may process data in countries other than your own. Where required, we rely on appropriate
            safeguards for those transfers.
          </p>
        </Section>

        <Section title="Changes to this policy">
          <p>
            We may update this policy. We will change the date above and, for significant changes, notify you in the app
            or by email.
          </p>
        </Section>

        <Section title="Contact us">
          <p>
            Questions or requests: <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a>
          </p>
        </Section>
    </LegalPage>
  );
}
