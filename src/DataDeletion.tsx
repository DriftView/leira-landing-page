import { LegalPage, Section, PRIVACY_EMAIL } from "@/components/legal";

export default function DataDeletion() {
  return (
    <LegalPage
      title="Delete your Leira data"
      updated="9 November 2026"
      intro="You can ask us to delete some or all of the data Leira holds about you, with or without closing your account."
    >
      <Section title="Delete some of your data">
        <p>
          Many items can be removed directly in the app: medical records, medications, chat history, emergency contacts
          and family or care-team links. You can also disconnect Apple Health, Health Connect, Fitbit or Google Health
          from the app, which stops further syncing, and revoke permissions in your device settings.
        </p>
      </Section>

      <Section title="Ask us to delete data">
        <p>
          For anything you can&apos;t remove in the app, such as past readings or a specific category of data, email{" "}
          <a href={`mailto:${PRIVACY_EMAIL}?subject=Leira%20data%20deletion%20request`}>{PRIVACY_EMAIL}</a> from your
          registered address. Tell us which data to delete (for example &quot;all heart readings before 2026&quot;). We
          may ask you to confirm your identity, and we will reply within 30 days.
        </p>
      </Section>

      <Section title="Delete everything">
        <p>
          To delete your whole account and all its data, follow the steps on{" "}
          <a href="/delete-account">Delete your account</a>. Deletion takes effect after a 30-day grace period.
        </p>
      </Section>

      <Section title="What we may keep">
        <p>
          We may retain limited information where the law requires it, such as security and audit records, until the
          legal retention period ends. See our <a href="/privacy-policy">Privacy Policy</a> for details.
        </p>
      </Section>
    </LegalPage>
  );
}
